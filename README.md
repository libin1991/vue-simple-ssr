<img align="right" width="120" height="120" src="https://github.com/kemalcany/vue-ssr-starter/blob/master/public/github/SmallGray1.svg" alt="Vue Simple SSR Starter"/>

# Vue Simple SSR Starter (with Firebase)

[![Build Status](https://travis-ci.org/kemalcany/vue-simple-ssr.svg?branch=master)](https://travis-ci.org/kemalcany/vue-simple-ssr)
[![Coverage Status](https://coveralls.io/repos/github/kemalcany/vue-simple-ssr/badge.svg?branch=master)](https://coveralls.io/github/kemalcany/vue-simple-ssr?branch=master)

<p align="center">
  <img src="https://github.com/kemalcany/vue-ssr-starter/blob/master/public/github/LightHouseReport-07.01.2018.jpg?raw=true" alt="Vue Smp SSR LH Scores"/>
</p>

## Features

Based on [Vue Hacker News 2.0](https://github.com/vuejs/vue-hackernews-2.0) with few extra features such as:
- Firebase SSR integration and deployment scripts
- Unit tests with Jest and `vue-test-utils`
- Workbox service worker library
- Refactoring and upkeep to achieve 100% Lighthouse performance (version 2.7.0)
- ESLint integrated in development
- **DEMO :** To see a working demo please visit [https://vuessrtest.com](https://vuessrtest.com)

## Setup

``` bash
Requires Node.js 7+
___________________

# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production (--report flag to open bundle analyzer)
npm run build

# deploy to Firebase (* see notes)
npm run deploy

# serve in production mode (local)
npm start

# perform unit tests with jest
npm test
```

## Notes

- Run `npm run build` before `npm run deploy` to prepare chunks for FBS /public directory
- `npm run deploy` command takes long time due to firebase-cli performance. [Fix](https://github.com/firebase/firebase-tools/pull/578) coming soon.

## Thanks

- Initial copy was made from [Vue Hacker News 2.0](https://github.com/vuejs/vue-hackernews-2.0)
- Test setup has been borrowed from [vue/webpack template](https://github.com/vuejs-templates/webpack)

## Contribute

- This repo is under construction

