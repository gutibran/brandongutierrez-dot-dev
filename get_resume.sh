#!/bin/bash

# download resume from github and move it to ./public
# run this on every site build
wget https://github.com/gutibran/resume/raw/main/resume.pdf
mv resume.pdf ./public/brandonGutierrezResume.pdf