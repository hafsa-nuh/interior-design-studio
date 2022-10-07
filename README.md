## Interior Design Studio


## Author

Hafsa Nuh

## PROJECT DESCRIPTION
This Website is based on an interior design studio , for home, offices, hotels . The user can smoothly scroll throughtout the pages, can easly veiw the projects per category . The User can send message to Us.

## SETUP
to access  this project on your local files, you can clone it using this steps

```bash
  Open the Terminal

Clone the repository:git@github.com:hafsa-nuh/interior-design-studio.git

Change Directory: cd interior-design-studio

npm install
if u get an error when running npm start ,then run
nvm install --lts
open browser by running npm start
```

## Technologies used
*  JSX
*  Tailwindcss
*  Styled components
*  db.json

## db.json
to create a localhost start with { } then " " inside the strings write your object name then : [ ]
```bash
npm i json-server
json-server --watch db.json
```

## Features

* project navbar
* swiper
* form for message

# How to deploy apps for free
Deploying single react applications using Heroku and Vercel

## Single React App on Heroku
1) Create a Heroku account.
2) Create your app.
3) Download Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4) Run these codes.

```bash
heroku login
```
```bash
git init
```
```bash
heroku git:remote -a <app-name>
```
```bash
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```
```bash
git add .
```
```bash
git commit -am "my first commit"
```
```bash
git push heroku main
```

## Single React App on Vercel
1) Create a Vercel account.
2) Linking GitHub
3) Continue with GitHub
4) Choose the repo to deploy
5) Diploy

## LIVE SITE
View [LIVE](https://interior-design-studio.vercel.app/):

## LICENSE

This project is under the [MIT](License) license.