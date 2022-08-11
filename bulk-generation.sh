#!/bin/bash
# declare the name of modules here
array=( "name" "your" "modules" )
for i in "${array[@]}"
do
	bash cookiecutter https://github.com/shahraizali/cb-screen-module-sample project_name=$i --no-input
done