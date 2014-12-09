# Rocky Mountain Ski Genie

Rocky Mountain Ski Genie, shaping the way people ski and ride by recommending the best
    technology to enhance gear for any given condition Mother Nature may conjure up.

-Latest version: 1.0.1

___________________________________________________________________________________________

##Quick Start
###Folder Structure
This repository is broken up into three main sections:

* 'html/ ' This directory is stored in the root of the repository, and contains all html files as well as the css, js, and img directories.
* 'html/css/' This directory contains all the css styling classes used, as well as the YAML framework.
* 'html/js/' This directory contains all of the javascript classes used, all of which use the JQuery framework.
* 'html/img/' This directory contains all of the image files. It is split into three sub directories: icons, mountain images, and utility images.

###Deploying Rocky Mountain Ski Genie
All code that is in production is hosted using DigitalOcean, and is maintained from the cloud. 

However, the follow tasks are provided to run the HTML files using a simple server:
* 'cd html' changes directory from the root of the repository.
* 'python -m SimpleHTTPServer 8000' starts running a simple HTTP server within the html directory'
*  enter 'http://127.0.0.1:8000/example.html' to browser's URL to display HTML page