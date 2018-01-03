
const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')

module.exports = {

  createRenderer: function (bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
      cache: LRU({ // Component caching
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      runInNewContext: false
    }))
  },

  render: function (req, res, renderer, isProd) {
    const s = Date.now()
    const serverInfo =
    `express/${require('express/package.json').version} ` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Server', serverInfo)

    const handleError = err => {
      if (err.url) {
        res.redirect(err.url)
      } else if (err.code === 404) {
        res.status(404).send('404 | Page Not Found')
      } else {
        // Render Error Page or Redirect
        res.status(500).send('500 | Internal Server Error')
        console.error(`error during render : ${req.url}`)
        console.error(err.stack)
      }
    }

    const context = {
      title: 'Vue Blank SSR', // Default title
      url: req.url
    }

    renderer.renderToString(context, (err, html) => {
      if (err) { return handleError(err) }
      if (!isProd) console.log(`whole request: ${Date.now() - s}ms`)
      res.send(html)
    })
  },

  prodRender: function (renderer) {
    return (req, res) => {
      this.render(req, res, renderer, true)
    }
  },

  devRender: function (req, res, renderer) {
    this.render(req, res, renderer, false)
  }
}
