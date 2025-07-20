document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoElement');
    const canvas = document.getElementById('canvasElement');
    const captureBtn = document.getElementById('captureBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const photoReel = document.getElementById('photoReel');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'none';
    let capturedPhotos = [];
    const maxPhotos = 3;
    
    // Initialize webcam
    async function initCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    width: 640, 
                    height: 480 
                } 
            });
            video.srcObject = stream;
            
            // Enable capture button once camera is ready
            video.addEventListener('loadedmetadata', () => {
                captureBtn.disabled = false;
            });
        } catch (err) {
            console.error('Error accessing camera:', err);
            photoReel.innerHTML = '<div class="alert alert-danger">Camera access denied or not available. Please allow camera permissions and refresh the page.</div>';
            captureBtn.disabled = true;
        }
    }
    
    // Apply real-time CSS filters to video
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter to video element
            currentFilter = this.dataset.filter;
            video.className = `img-fluid rounded filter-${currentFilter}`;
        });
    });
    
    // Capture photo from video stream
    captureBtn.addEventListener('click', function() {
        if (!video.srcObject) return;
        
        const context = canvas.getContext('2d');
        
        // Apply the same filter to canvas context
        switch(currentFilter) {
            case 'sepia':
                context.filter = 'sepia(100%)';
                break;
            case 'grayscale':
                context.filter = 'grayscale(100%)';
                break;
            case 'vintage':
                context.filter = 'sepia(50%) contrast(1.2) brightness(1.1) saturate(1.3)';
                break;
            default:
                context.filter = 'none';
        }
        
        // Draw current video frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert to image data
        const imageDataUrl = canvas.toDataURL('image/png');
        
        // Create photo object
        const photo = {
            dataUrl: imageDataUrl,
            timestamp: new Date().toLocaleString(),
            filter: currentFilter
        };
        
        // Add to beginning of photo array (newest first)
        capturedPhotos.unshift(photo);
        
        // Keep only last 3 photos
        if (capturedPhotos.length > maxPhotos) {
            capturedPhotos = capturedPhotos.slice(0, maxPhotos);
        }
        
        updatePhotoReel();
        
        // Visual feedback for capture
        video.style.border = '3px solid #28a745';
        setTimeout(() => {
            video.style.border = '';
        }, 200);
    });
    
    // Update photo reel display
    function updatePhotoReel() {
        if (capturedPhotos.length === 0) {
            photoReel.innerHTML = `
                <div class="text-muted text-center py-5">
                    <i class="fas fa-images fa-3x mb-3"></i>
                    <p>No photos captured yet</p>
                    <small>Click "Capture Photo" to start building your reel</small>
                </div>`;
            downloadBtn.disabled = true;
            return;
        }
        
        // Display photos vertically (newest at top)
        photoReel.innerHTML = capturedPhotos.map((photo, index) => `
            <div class="photo-reel-item">
                <img src="${photo.dataUrl}" alt="Captured photo ${index + 1}" loading="lazy">
                <div class="photo-timestamp">
                    ${photo.timestamp}
                    ${photo.filter !== 'none' ? ` • ${photo.filter}` : ''}
                </div>
            </div>
        `).join('');
        
        downloadBtn.disabled = false;
    }
    
    // Download photo reel as single PNG
    downloadBtn.addEventListener('click', function() {
        if (capturedPhotos.length === 0) return;
        
        const reelCanvas = document.createElement('canvas');
        const reelContext = reelCanvas.getContext('2d');
        const photoWidth = 640;
        const photoHeight = 480;
        const spacing = 20;
        const padding = 10;
        
        // Calculate canvas dimensions
        reelCanvas.width = photoWidth + (padding * 2);
        reelCanvas.height = (photoHeight + spacing) * capturedPhotos.length - spacing + (padding * 2);
        
        // Fill background with white
        reelContext.fillStyle = '#ffffff';
        reelContext.fillRect(0, 0, reelCanvas.width, reelCanvas.height);
        
        // Add border
        reelContext.strokeStyle = '#dee2e6';
        reelContext.lineWidth = 2;
        reelContext.strokeRect(1, 1, reelCanvas.width - 2, reelCanvas.height - 2);
        
        let loadedImages = 0;
        
        // Draw each photo
        capturedPhotos.forEach((photo, index) => {
            const img = new Image();
            img.onload = function() {
                const y = padding + (index * (photoHeight + spacing));
                reelContext.drawImage(img, padding, y, photoWidth, photoHeight);
                
                // Add photo border
                reelContext.strokeStyle = '#6c757d';
                reelContext.lineWidth = 1;
                reelContext.strokeRect(padding, y, photoWidth, photoHeight);
                
                // Add timestamp text
                reelContext.fillStyle = '#495057';
                reelContext.font = '14px Arial, sans-serif';
                reelContext.fillText(
                    `${photo.timestamp} ${photo.filter !== 'none' ? '• ' + photo.filter : ''}`,
                    padding + 5,
                    y + photoHeight + 15
                );
                
                loadedImages++;
                
                // Trigger download when all images are loaded
                if (loadedImages === capturedPhotos.length) {
                    const link = document.createElement('a');
                    link.download = `velvetlens-reel-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.png`;
                    link.href = reelCanvas.toDataURL('image/png');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            };
            img.src = photo.dataUrl;
        });
    });
    
    // Initialize camera when page loads
    initCamera();
    
    // Handle page visibility changes (pause/resume camera)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Page is hidden, could pause camera to save resources
            console.log('Page hidden - camera still active');
        } else {
            // Page is visible again
            console.log('Page visible - camera active');
        }
    });
    
    // Clean up camera stream when page unloads
    window.addEventListener('beforeunload', function() {
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
    });
});
