# Eat'nDrink Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This application built with React, using Google Maps API and foursquare API to find cafes in the city of Bath, UK.

## Getting Started

To get started developing right away, clone the repo from [here](https://github.com/ucanfil/Eat-nDrink) to your system and style and add functionalities as you wish. Inside of your folder:

* install all project dependencies with `npm install`
* start the development server with `npm start` on `localhost:3000`
* You can see a production build of this app on [here](https://ucanfil.github.io/Eat-nDrink/)

## Folder Structure

After creation, your project should look like this:

```
Eat-nDrink/
  README.md
  node_modules/
  build/
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