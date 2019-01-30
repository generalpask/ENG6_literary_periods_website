#!/bin/bash
@echo off

GREEN="\033[1;32m"
NOCOLOR="\033[0m"

set /p commit="Name the commit: "
git add .
git commit -m "%commit%"
git push origin master

