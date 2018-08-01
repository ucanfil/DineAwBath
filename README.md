# Eat'nDrink Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This application built with React, using Google Maps API and foursquare API to find cafes in the city of Bath, UK.

## Getting Started

To get started developing right away, clone the repo from [here](https://github.com/ucanfil/Eat-nDrink) to your system and style and add functionalities as you wish. Inside of your folder:

* Install all project dependencies with `npm install`
* Start the development server with `npm start` on `localhost:3000`
* To test out service worker functionality you should run the app in production build, in order to achieve this in your preferred command line tool, run:
  - `npm run build`
*  Builds the app for production to the build folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.\
  The build is minified and the filenames include the hashes.\
  By default, it also includes a service worker so that your app loads from local cache on future visits.
* You can see a production build of this app on [here](https://github.com/ucanfil/dineobath)

## Folder Structure

After creation, your project should look like this:

```
Eat-nDrink/
  README.md
  node_modules/
  package.json
  package-lock.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    icons/
    components/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    registerServiceWorker.js
```

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency and some other sets of dependencies you can see below. Make sure you install all project dependencies with `npm install` first.

  * *Dependencies This Project Uses* \
  [react-hamburger-menu](https://github.com/cameronbourke/react-hamburger-menu) `npm install --save react-hamburger-menu`\
  [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) `npm install --save escape-string-regexp`\
  [sort-by](https://github.com/kvnneff/sort-by) `npm install --save sort-by`\
  [google-maps-react](https://github.com/fullstackreact/google-maps-react) `npm install --save google-maps-react`\
  [react-focus-lock](https://github.com/theKashey/react-focus-lock) `npm install --save react-focus-lock`

## Features

* Application uses accessibility standards.
* Application uses service workers to cache visited pages, and serve them even under bad connection/offline mode.
* All application is responsive and usable across desktop, tablet, phone browsers.
* The main page shows a set of cafes, using the Text input field you can filter the set of markers on the map and cafe names on the sidebar.
* Clicking a location on the sidebar and also on markers displays a unique information about that place in a modal window.
* Using hamburger-menu icon you can hide/show sidebar.

## Built With

* React
* Google Maps API
* Foursquare Places API

## Authors

  - Burak Tilek - [Ucanfil](https://github.com/ucanfil)

## Acknowledgements

* react-hamburger-menu component [from](https://github.com/cameronbourke/react-hamburger-menu)
* react-focus-lock component [from](https://github.com/theKashey/react-focus-lock)
* Portal example seen from [Kent C. Dodds](https://codesandbox.io/s/00254q4n6p)