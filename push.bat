@echo off

set /p commit="Name the commit: "
echo 
git add .
git commit -m "%commit%"
echo 
echo [92mGIT:[0m Committed to repo [93mENG6_literary_periods_website[0m with commit message "%commit%"
echo 
git push origin master
echo
echo [92mGIT:[0m Pushed changes to branch [96mmaster[0m
echo .
