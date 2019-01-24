<div align="center">
  <br />
  <p>
    <a href="https://github.com/PassTheWessel/lumah"><img src="media/logo.png" alt="lumah" /></a>
  </p>
  <br />
  <p>
    <a href="#"><img src="https://packagephobia.now.sh/badge?p=lumah" alt="Install Size" /></a>
    <a href="https://travis-ci.org/PassTheWessel/lumah"><img src="https://travis-ci.org/PassTheWessel/lumah.svg?branch=master" alt="Travis build" /></a>
    <a href="https://discord.gg/SV7DAE9"><img src="https://discordapp.com/api/guilds/107131083958538240/embed.png" alt="Discord" /></a>
    <a href="https://www.npmjs.com/package/lumah"><img src="https://img.shields.io/npm/v/lumah.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/lumah"><img src="https://img.shields.io/npm/dt/lumah.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.patreon.com/wessel"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/lumah/"><img src="https://nodei.co/npm/lumah.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

> A simple and lightweight testing framework for Node.js

> [GitHub](https://www.github.com/PassTheWessel/lumah) **|** [NPM](https://www.npmjs.com/package/lumah)

## Installing
```sh
$ yarn add lumah # Install w/ Yarn (the superior package manager)
$ npm i lumah # Install w/ NPM
```

## Usage
```js
const l = require( 'lumah' ); // Define lumah

l.register( 'Hello', ( res ) => res( true, 'Danceboye' ) ); // Register a test with the name "Hello" and succeed with the message "Danceboye"
l.register( 'This is so sad', ( res ) => res( false, 'Sadcat' ) ); // Fail with the message "sadcat"
l.register( 'Late ;_;', ( res ) => setTimeout( () => res( true, 'I\'ve came!' ), 500 ) ); // Succeed after 500ms 
l.register( 'memes', ( res ) => {
  if ( process.env.MEMES ) res( true, 'You are a true memester' ) // Success if process.env has the value "MEMES"
  res( false, 'Well, that\'s a shame :(' ) // Fail otherwise
});

l.start(); // Run all tests
```
