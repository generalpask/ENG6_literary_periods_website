@echo on
set /p commit="Name the commit: "
git add .
git commit -m "%commit%"
git push origin master
pause
