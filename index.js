#!/usr/bin/node
require('dotenv').config()
const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.env.PORT || 3000

let page404 = fs.readFileSync('404.html', (err, data) => {
  if (err) throw err
  return data
})

const server = http.createServer((req, res) => {
  
  //getting the filename from the url
  let q = url.parse(req.url, true)
  let fileName = `.${q.pathname}`
  if (fileName === './') {
    fileName = './index.html'
  }

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.write(page404)
      return res.end()
    }

    res.writeHead(200, {'content-type': 'text/html'})
    res.write(data)
    return res.end()
  })


})

server.listen(port, () => {
  console.log(`server running at port ${port}`)
})
