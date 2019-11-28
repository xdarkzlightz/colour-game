# Colour Game

This is a simple memory game built with react

## How to run

### Use the docker image

`docker run -p 8080:80 xdarkzlightz/colour-game`

### Build and run the dockerfile

`git clone https://github.com/xdarkzlightz/colour-game.git && cd colour-game`

` docker build -t colour-game .``docker run -p 8080:80 xdarkzlightz/colour-game `

`docker run -p colour-game`

### Build and put behind a reverse proxy

`git clone https://github.com/xdarkzlightz/colour-game.git && cd colour-game`

`npm install`

`npm run build`

Put the build behind a reverse proxy like nginx

## Screenshots

![Main Menu](https://i.ibb.co/DbSSP8G/colour-game-1.png)

![Game](https://i.ibb.co/R9pX8sf/colour-game-2.png)
