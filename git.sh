#! /bin/bash

git add .
echo What is the commit message ?
read COMMIT_MESSAGE

git commit -m  "${COMMIT_MESSAGE}"

git push -u origin master