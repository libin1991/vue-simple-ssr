<img align="left" width="120" height="120" src="https://github.com/kemalcany/vue-ssr-starter/blob/master/public/github/Github.png?raw=true" alt="Vue Simple SSR Starter"/>

# Vue Simple SSR Starter (with Firebase)

[![Build Status](https://travis-ci.org/kemalcany/vue-simple-ssr.svg?branch=master)](https://travis-ci.org/kemalcany/vue-simple-ssr)

<p align="center">
  <img src="https://github.com/kemalcany/vue-ssr-starter/blob/master/public/github/LightHouseReport-04.01.2018.jpg?raw=true" alt="Vue Smp SSR LH Scores"/>
</p>

## Features

Based on [Vue Hacker News 2.0](https://github.com/vuejs/vue-hackernews-2.0) with few extra features such as:

- Firebase SSR integration and deployment scripts

- Workbox service worker library

- Refactoring and upkeep to achieve 100% Lighthouse performance (version 2.7.0)

- ESLint integrated in development

- **DEMO :** To see a working demo please visit [https://vuessrtest.com](https://vuessrtest.com)

## Build Setup

``` bash
Requires Node.js 7+
___________________

# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# deploy to Firebase (* see notes)
npm run deploy

# serve in production mode (local)
npm start
```

## Notes

- Run `npm run build` before `npm run deploy` to prepare chunks & bundle that are going to be deployed on FBS under /public directory

- Use `npm run build --report` in order to start Webpack bundle analyzer. However, don't use this flag if you are building for serving `npm start` or deployment `npm run deploy` since bundle analyzer plugin will start a server and won't finish the build (for client and server)

- `npm run deploy` command takes long time due to firebase-cli performance. [Fix](https://github.com/firebase/firebase-tools/pull/578) coming soon.

## Thanks

- A lot of work (especially test setup) has been borrowed from [https://github.com/vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)
