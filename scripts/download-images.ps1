# Image Download Script for ChinaGateway
# Run this script to download community images from free sources

$images = @(
    @{
        Name = "shanghai-guide.jpg"
        Description = "Shanghai The Bund skyline night view"
        Sources = @(
            "https://www.goodfreephotos.com/china/shanghai/night-skyline-with-bright-lights-in-shanghai-china.jpg.php"
            "https://unsplash.com/photos/shanghai-skyline"
        )
    },
    @{
        Name = "medical-tourism.jpg"
        Description = "Modern hospital building or medical facility"
        Sources = @(
            "https://www.pexels.com/search/hospital%20building/"
            "https://unsplash.com/photos/hospital"
        )
    },
    @{
        Name = "chengdu-food.jpg"
        Description = "Sichuan hot pot or Chinese food"
        Sources = @(
            "https://www.pexels.com/search/hot%20pot/"
            "https://unsplash.com/photos/chinese-food"
        )
    },
    @{
        Name = "xian-terracotta.jpg"
        Description = "Terracotta Warriors in Xi'an"
        Sources = @(
            "https://www.pexels.com/search/terracotta%20warriors/"
            "https://unsplash.com/photos/terracotta-army"
        )
    },
    @{
        Name = "guilin-landscape.jpg"
        Description = "Guilin karst mountains and Li River"
        Sources = @(
            "https://www.pexels.com/search/guilin/"
            "https://unsplash.com/photos/guilin"
        )
    }
)

$targetDir = "..\public\images\community"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "ChinaGateway Image Download Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

foreach ($image in $images) {
    Write-Host "Image: $($image.Name)" -ForegroundColor Yellow
    Write-Host "Description: $($image.Description)" -ForegroundColor Gray
    Write-Host "Suggested sources:" -ForegroundColor White
    foreach ($source in $image.Sources) {
        Write-Host "  - $source" -ForegroundColor Blue
    }
    Write-Host ""
    Write-Host "Please manually download and save as: $targetDir\$($image.Name)" -ForegroundColor Red
    Write-Host "Recommended size: 800x600px or 1200x800px" -ForegroundColor Gray
    Write-Host "Format: JPG, Quality: 80%, Max size: 200KB" -ForegroundColor Gray
    Write-Host "----------------------------------------" -ForegroundColor DarkGray
    Write-Host ""
}

Write-Host "After downloading all images, run: npm run build" -ForegroundColor Green
Write-Host ""
