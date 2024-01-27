:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
::exit /b

git init
git add .
git commit -m "change backgroundColor commit"
git branch -M main
git remote add origin https://github.com/RonenZeyan/webLAB2.git
git push -u origin main