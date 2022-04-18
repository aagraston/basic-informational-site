#!/usr/bin/node
require('dotenv').config()
const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  
  //getting the filename from the url
  let q = url.parse(req.url, true)
  let fileName = `.${q.pathname}`
  if (fileName === './') {
    filename = './index.html'
  }


})

server.listen(port, () => {
  console.log(`server running at port ${port}`)
})

const homeURL = new URL('/', 'https://basicsite.com/')
