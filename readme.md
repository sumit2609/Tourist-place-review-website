## deployed website using HEROKU
LINK= https://touristguide-india.herokuapp.com/

## Add mongoose
*Install and configure Mongoose
*Setup campground model
*use campground model inside of our routes

## Show page
*Review the RESTful routes we've seen so far
*Add description to our campground model
*show db.collection.drop()
*Add a show route/template

RESTFUL ROUTES

name      url      verb   desc.
===============================================
INDEX     /dogs     GET    Display a list of all dogs
NEW       /dogs/new GET    Displays form to make a dog
CREATE    /dogs     POST    Add new dog to DB
SHOW      /DOGS/:id GET    shows info about one dog


INDEX      /campgrounds
NEW        /campgrounds/new
CREATE     /campgrounds
SHOW       /campgrounds/:id

//COMMENT
NEW      campgrounds/:id/comments/new    GET
CREATE   campgrounds/:id/comments        POST  

## Refactor Mongoose Code
*Create a models directory
*use module.exports
*Require everything correctly!

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add comments model
* Make our errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Add User Model
* Install all packages needed for auth
* Define User model

## Auth pt. 2 - register
* Configure Passport
* Add register routes
* Add register template

## Auth pt. 3 - Login
* Add login routes
* Add login template

## Auth pt.4 - Logout/Navbar
* Add logout route
* prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly 

## Auth pt.-5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## Refactor the Routes
* Use Express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campgrounds
* Add method-override
* Add Edit route for Campgrounds
* Add link to edit route
* add update route
* fix $set problem

## Deleting Campgrounds
* Add Destroy Route
* Add Delete button

## Authorization Part 1:
* User can only edit his/her campground.
* User can only delete his/her campground.
* Hide/show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!-- /campground/:id/edit
/campground/:id/comments/:comment_id/edit -->

## Deleting Comments
* Add Destroy route
* Add Delete button

<!-- campground Destroy route: /campgrounds/:id
comment Destroy route: /campgrounds/:id/comments/:comment_id -->

## Authorization Part-2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

## Adding in Flash!!!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

## Added background to landing page
* added animations to background






