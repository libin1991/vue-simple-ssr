// Firebase is expected to always run in production env.
// Therefore conditional dev code blocks are not necessary here

const functions = require('firebase-functions')
const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const microcache = require('route-cache')
const resolve = file => path.resolve(__dirname, file)

const useMicroCache = process.env.MICRO_CACHE !== 'false'
const app = express()

app.use(compression({ threshold: 0 }))
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

const template = fs.readFileSync(resolve('./ssr/index.template.html'), 'utf-8')
const bundle = require('./ssr/vue-ssr-server-bundle.json')
const clientManifest = require('./ssr/vue-ssr-client-manifest.json')
const prodBundleRenderer = require('./utils').createRenderer(bundle, {template, clientManifest})

app.get('*', require('./utils').prodRender(prodBundleRenderer))

exports.api = functions.https.onRequest(app)
