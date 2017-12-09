# Daterbase

**You can find the deployed version of our application here: http://database-final.herokuapp.com/ .**

Daterbase is a dating app that focuses on just that -- dating. In order to use the
app, users must enter schedule availability. You will only be showed potential
matches who have availability when you do. When you match with someone, you are
given a time and location for the date. Afterwards, both people are asked to
rate the date.  

## How to run the app locally
Make sure you have MongoDB installed.
You can find the download here https://docs.mongodb.com/getting-started/shell/installation/

Make sure you have Node 9+ installed
You can find it here https://nodejs.org/en/download/

Make sure you have npm installed
You can find it here http://blog.npmjs.org/post/85484771375/how-to-install-npm

Now...

`git clone` this repository and `cd` into the cloned folder

To get the database running type `sudo mongod`

To get the application's dependencies installed run `npm install` 

Once the install is successful run `npm start` to start the front end server at localhost:4200

in a separate terminal window get the server running with `nodemon server.js` which will serve at localhost:3100


## Dev Notes
To build for development use `ng build env=dev`

To build for production  use `ng build env=dev`
