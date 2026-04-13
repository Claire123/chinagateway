@echo off
echo ==========================================
echo ChinaGateway GitHub Setup
echo ==========================================
echo.

REM Initialize git
git init

REM Add all files
git add .

REM Initial commit
git commit -m "Initial commit: ChinaGateway website with PWA support"

REM Instructions
echo.
echo ==========================================
echo Next Steps:
echo ==========================================
echo.
echo 1. Create a new repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Copy the repository URL (e.g., https://github.com/yourusername/chinagateway.git)
echo.
echo 3. Run these commands:
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. Go to Vercel:
echo    https://vercel.com/new
echo.
echo 5. Import your GitHub repository
echo    Vercel will automatically deploy your site!
echo.
echo ==========================================
pause
