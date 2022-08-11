#!/bin/bash
# declare the name of modules here
yourfilenames=`ls ./*.png`
for i in "$yourfilenames"
do
	# strip the extension
	filename=$(basename "$i" .png)
	# add space in between the words
	filename=$(echo "$filename" | sed 's/_/ /g')
	bash cookiecutter https://github.com/shahraizali/cb-screen-module-sample project_name=$filename --no-input
done