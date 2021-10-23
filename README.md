# Final Project: Piano on the Go

## Description
A simple, on-the-go piano you can play from your phone or on a browser. Piano on the Go includes the ability for a user to signup and login. When first accessing the app from the browser, an alert asks the user if the app can have access to the microphone. After confirmation, the user has the ability to record a song on the piano.

## Table of Contents
* [MVPs](#MVPs)
* [Installation](#Installation)
* [Technologies Used](#Technologies-Used)
* [Screenshots](#Screenshots)
* [Repository](#Repository)
* [Creators](#Creators)
* [Possible Add-ons](#Possible-Add-ons)
## MVPs
```md
* Create piano with simple keyboard UI 
* Import SoundFontPlayer and connect to keys on click
* Implement user account creation and login using GraphQL
```

## Installation
After cloning the repository: 
```
`npm i` to install all dependicies 
`npm start` to run the React app in the browser
```

## Technologies Used
* React, Javascript, HTML, CSS, React Bootstrap
* Apollo Server, GraphQL, MongoDB

Notable npm packages used
* mic-recorder-to-mp3
* soundfont-player

## Screenshots
![Homepage](/src/images/piano-screenshot.png)
![Demo](/src/images/Piano on the Go.gif)

## Repository
* GitHub Repo: https://github.com/Kanema2021/Piano-app
* Heroku Deployment: https://piano-on-the-go.herokuapp.com/

## Creators
* Eva Popp - evapopp8@gmail.com, Github: @evapopp
* Mariam Ngoye - Github: @mariamngoye
* Danielle Tran - danielletran89@gmail.com, Github: @danielletran89
* Rachael Wintersteen - rachaelwintersteen@gmail.com, Github: @rwintersteen
* Karen Marting - kamarting11@gmail.com, Github: @Kanema2021
* Ashley Jones - thebleufox8@gmail.com, GitHub: @bleufox

## Possible Add-ons
* Ability to keep recordings stored on a database that associates the saved mp3 files to a specific user
* Changing the sound effects of the piano that a user can manually choose from
