// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const express = require('express');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  const server = express();
  server.get('/blog/:id', (req, res) => {
    const queryParams = { id: req.params.id };
    console.log(queryParams);
    return app.render(req, res, '/blog', queryParams);
  })
  server.get('/*', (req, res) => {
    return handle(req, res);
  })
  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
