@echo off
echo ==========================================
echo Git Push with Auto-Retry
echo ==========================================
echo.

set retry_count=0
set max_retries=5

:retry
echo Attempt %retry_count% of %max_retries%...
git push

if %errorlevel% == 0 (
    echo.
    echo ==========================================
    echo Push successful!
    echo ==========================================
    pause
    exit /b 0
)

set /a retry_count+=1

if %retry_count% lss %max_retries% (
    echo Push failed. Retrying in 10 seconds...
    timeout /t 10 /nobreak >nul
    goto retry
)

echo.
echo ==========================================
echo Max retries reached. Push failed.
echo Please try again later or use:
echo   npx vercel --prod
echo ==========================================
pause
exit /b 1
