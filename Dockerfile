# ---- Build Stage ----
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore dependencies
COPY VelvetLens.csproj ./
RUN dotnet restore

# Copy the entire project and publish it
COPY . ./
RUN dotnet publish -c Release -o /app

# ---- Runtime Stage ----
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy published files from build stage
COPY --from=build /app ./

# Expose the port
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

# Start the app
ENTRYPOINT ["dotnet", "VelvetLens.dll"]
