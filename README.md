// ---------- README ---------- //

NOTE: if you have node.js installed, skip to step 3.

* Download and install node.js https://nodejs.org/en/download/
* Run node.js command prompt
* Next run "npm install" to collect all gulp dependencies

* DEVELOPMENT/PRODUCTION *
To compile html/styles/js run "gulp" for development watch, or "gulp build" to make finishing touches to your web app.
To clean dev files run "gulp clean".

* IMAGEMIN *
To compress images, run "gulp imgmin" command. Compressed images can be found in "root/assets/images/dist".
To clean all images run "gulp imgClean".

* ICONFONT *
Iconfont: to generate new icons and create font, run "gulp iconfont" command. In order to show icons, all you need to do is add html class "font-fontName".
Iconfont: to clean all icons run "gulp iconClean" and delete "_iconfont.scss" path from "style.scss" to avoid error for including non existing file.

* package.json *
NOTE: if package.json is empty or not updating, run "npm init" command.

* Node modules remove *
Removing node_modules folder from the project in Windows is almost impossible, but you can use SHIFT + DELETE in Total Commander.

We would recommend using rimraf plugin. Type "npm install rimraf -g". Navigate to the project folder, type "rimraf node_modules" to remove node_modules.

* Node.js update *
* Uninstall previous version and close all open terminals
* Install new version
* Open terminal and type "npm cache clean"
* Then run "npm install"
NOTE: If you get error message in compiling project with installed node modules, please remove node_modules folder and install dependencies again. Reason is that dependencies are connected to old Node.js instance.
