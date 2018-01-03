const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const microcache = require('route-cache')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'

const app = express()

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use('/dist', serve('../dist', true))
app.use('/icons', serve('../public/icons', true))
app.use('/manifest.json', serve('../public/manifest.json', true))
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

if (isProd) {
  const template = fs.readFileSync(resolve('../src/index.template.html'), 'utf-8')
  const bundle = require('../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  const prodBundleRenderer = require('./utils').createRenderer(bundle, {template, clientManifest})
  app.get('*', require('./utils').prodRender(prodBundleRenderer))
} else {
  let renderer
  let readyPromise = require('../build/setup-dev-server')(
    app,
    resolve('../src/index.template.html'),
    (bundle, options) => {
      renderer = require('./utils').createRenderer(bundle, options)
    }
  )
  app.get('*', (req, res) => {
    readyPromise.then(() => require('./utils').devRender(req, res, renderer))
  })
}

const port = process.env.PORT || 8080
app.listen(port, () => { console.log(`server started at localhost:${port}`) })
