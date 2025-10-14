@echo off
echo ========================================
echo EERSOFT Website GitHub Pages Deploy
echo ========================================
echo.

echo Adding all files to Git...
git add .

echo.
echo Committing changes...
git commit -m "Update website content - %date% %time%"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Deployment completed!
echo ========================================
echo.
echo Your website will be available at:
echo https://[username].github.io/[repository-name]
echo.
echo Note: It may take a few minutes for changes to appear.
echo.
pause
