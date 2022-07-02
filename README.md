# Webdriverio Test Automation - Volvo
 
This project is implemented for Web Application automation using Webdriverio. Written in Javascript and used Visual Studio Code as an IDE.

Technologies/Tools used in building Automation
=================================================
	•	Visual studio code - IDE
	•	Webdriver.IO - Test automation framework
	•	Node - Javascript Runtime Environment
	•	Javascript - Programming language
	•	Page Object Design pattern - Test approach
	•	Allure Report - test results


Please follow below steps to run locally

Install Visual Studio code
==========================
Download and install VS code as an IDE for programming 

Install node
============
Commands to check if node and npm are installed:

node -v

npm -v

download and install for windows: [node](https://nodejs.org/en/)

Command to install node: brew install node [This will install node in mac]

Command to check node installation path: where node or which node

Install webdriver.IO using NPM
=========================
Install Webdriver.IO. clink this link to [get started](https://webdriver.io/docs/gettingstarted)

npm init wdio . 

Execution
=========
(from vs code terminal go to-> project directory), then enter command: **npm init** 

this will install node_modules in project root directory

--> To run all spec files, run below command from project terminal

npx wdio run ./wdio.conf.js

or

npm run test

If you like to run specific test files you can add a --spec parameter:

npx wdio run ./wdio.conf.js --spec <sepcfile>.js

note: for parallel execution, uncomment the browser capabilties for other browsers in wdio.config.js 

Reports
=======
install allure reports by using:  npm install @wdio/allure-reporter --save-dev

please check this link for more details [Allure reports](https://webdriver.io/docs/allure-reporter)

After execution please check allure results folder. Install the Allure command-line tool, and process the results directory using :

allure generate [allure_output_dir] && allure open

**To run tests via Docker :**

**Dockerfile from the root directory will create an docker image on any name specified, run that docker image for execution**

Command to create docker image : **docker build -t <ImageName> .**
Command to execute docker image: **docker run -it <ImageName>**
