@echo off
echo ========================================
echo EERSOFT Website Status Check
echo ========================================
echo.

echo Checking Git status...
git status

echo.
echo ========================================
echo Repository Information
echo ========================================
echo.
echo Remote URL:
git remote get-url origin

echo.
echo Current branch:
git branch --show-current

echo.
echo Latest commits:
git log --oneline -3

echo.
echo ========================================
echo GitHub Pages Information
echo ========================================
echo.
echo Your website should be available at:
echo https://eersoft.github.io/es/
echo.
echo Note: It may take a few minutes for GitHub Pages to deploy.
echo Check the Actions tab in your GitHub repository for deployment status.
echo.
pause
