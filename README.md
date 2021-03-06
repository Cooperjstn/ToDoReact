#Simple Server

Lightweight scaffolding and build tool to quickly and easily develop a web application.

  - transpiles scss into css
  - transpiles es6 and jsx into es5
  - concatenates all required/imported modules together into one minified file
  - runs a simple express server that is deployable on heroku

##Getting started

  - clone this repo with `git clone git@github.com:TIY-Charleston-Front-End-Engineering/simple-server.git THE-LOCAL-FOLDER-YOU-WANT-TO-CREATE`
  - disconnect from my remote repo and point to your own (see [Publishing](#publishing))
  - `cd` into the local folder
  - `npm install`
  - `npm run go`
  - that's it! visit [http://localhost:3000](http://localhost:3000) to make sure it's working

##Workflow
  - only files in `/public` will be served up to the browser.
  - all `.html` pages are served from the `/views` folder
  - all assets (CSS, JS, and images) are served from the `/public` folder
  - you'll *only* write CSS and JS code in the files in the `/src` folder
  - whenever you save while your local server is running (`npm run go`), your code in the `/src` folder will be read and transpiled into the `/public` folder.
  - view and test your app at localhost:3000

##Publishing

  - disconnect your local repo from this one with `git remote remove origin`
  - `hub create YOUR-APP-NAME` -- this will simultaneously (1) create you a remote repo with the given name and (2) create a local reference connecting the directory you're in to the remote you just created
  - add, commit and push per usual

##Deploying

The easiest thing to do is deploy to heroku. Once you have an account and you've installed the heroku command line tools, simply run:

  - `heroku create YOUR-APP-NAME`
  - `git push heroku master`

Have fun!
# ToDoReact
