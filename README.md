# VelvetLens - Vintage Film Camera Photo Booth

![VelvetLens Logo](https://img.shields.io/badge/VelvetLens-Photo%20Booth-gold)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-6.0-blue)](https://dotnet.microsoft.com/en-us/apps/aspnet)

VelvetLens is a fun, interactive web-based vintage film camera photo booth application built with ASP.NET Core and JavaScript. This project simulates the experience of using a retro film camera with realistic filters, zoom controls, and film development effects.


## ✨ Features

- **Vintage Camera Experience** - Authentic retro camera interface with stylish design
- **10+ Film Filters** - Various filters including Sepia, Grayscale, Vintage, Noir, and more
- **Interactive Controls** - Realistic dial-based zoom control and focus button
- **Film Reel** - Photos appear in a realistic film strip with accurate film perforations
- **Photo Review System** - Review captured photos before adding them to your reel
- **Film Development Process** - Simulated film development animation
- **Downloadable Results** - Download your film reel as a high-quality image
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Technologies Used

- **ASP.NET Core MVC** - Backend framework
- **JavaScript** - Frontend interaction and camera functionality
- **HTML5 & CSS3** - Structure and styling
- **Web APIs** - Camera access via `getUserMedia()`
- **Bootstrap** - Responsive layout components
- **Font Awesome** - Icons and visual elements

## 📋 Prerequisites

- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0) or newer
- Modern web browser with camera access (Chrome, Firefox, Edge, Safari)
- Webcam or front-facing camera

## 🔧 Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JayaVardhan2039/Velvet_Lens.git
   cd VelvetLens
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

4. Run the application:
   ```bash
   dotnet run
   ```

5. Open your browser and navigate to:
   ```
   https://localhost:5001
   ```
   Note: The port may vary depending on your configuration.

## 📷 How to Use

1. **Allow Camera Access** - When prompted, allow the application to access your camera
2. **Select a Filter** - Use the vertical filter control on the right or up/down arrows to choose a filter effect
3. **Adjust Zoom** - Rotate the zoom dial on the left to adjust the zoom level
4. **Focus Camera** - Click the focus button to activate camera focus effect
5. **Capture Photo** - Press the capture button to take a photo
6. **Review & Proceed** - Review your photo and either retry or proceed
7. **Complete Your Reel** - Take up to 3 photos to complete your film reel
8. **Download Your Film** - Download your completed film reel as an image

## 🎮 Controls

- **Zoom Dial** - Click and drag up/down to adjust zoom level
- **Focus Button** - Click to activate focus effect
- **Filter Controls** - Click arrows or use keyboard up/down arrows to navigate filters
- **Capture Button** - Click to take a photo
- **Scroll to Top** - Button appears when scrolling down to quickly return to top

## 🎨 Available Filters

- **None** - No filter applied
- **Sepia** - Classic sepia tone effect
- **Grayscale** - Black and white effect
- **Vintage** - Old film look with warm tones
- **Invert** - Inverted color effect
- **Warm** - Enhanced warm tones
- **Cool** - Enhanced cool tones
- **Dramatic** - High contrast look
- **Soft** - Softened dreamy effect
- **Pastel** - Gentle pastel colors
- **Noir** - Dark, high-contrast black and white

## 🔍 Project Structure

```
VelvetLens/
├── Controllers/          # MVC Controllers
│   └── HomeController.cs
├── Views/                # MVC Views
│   ├── Home/
│   │   └── Index.cshtml  # Main photo booth view
│   └── Shared/           # Shared layout files
├── wwwroot/              # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── img/              # Images
├── Program.cs            # Application entry point
└── README.md             # This file
```

## 📱 Responsive Design

VelvetLens is built with responsive design principles, ensuring a good user experience on:
- Desktop computers
- Tablets
- Mobile phones

The interface automatically adjusts based on the screen size to maintain usability.

## ⚠️ Browser Compatibility

VelvetLens works best on modern browsers that support:
- WebRTC/getUserMedia API
- CSS filters
- Flexible box layout
- Grid layout

Tested on:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com/) for the icons
- [Bootstrap](https://getbootstrap.com/) for the UI components

## 👨‍💻 Author

Jaya Vardhan - [GitHub Profile](https://github.com/JayaVardhan2039)

---

Made with ❤️ and a lot of vintage inspiration. Enjoy your retro photo booth experience!
