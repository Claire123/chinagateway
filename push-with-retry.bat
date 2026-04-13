@echo off
setlocal enabledelayedexpansion

echo Pushing to GitHub with retry...
set count=0
set max=10

:retry
set /a count+=1
echo Attempt %count% of %max%...

git push
if %errorlevel% == 0 (
    echo Success!
    exit /b 0
)

if %count% == %max% (
    echo Failed after %max% attempts
    exit /b 1
)

echo Failed, waiting 10 seconds before retry...
timeout /t 10 /nobreak >nul
goto retry
