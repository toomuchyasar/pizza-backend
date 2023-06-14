const express = require("express")
const server = require("./api/server.js")
const port = 9000;

server.listen(port , () => {
    console.log(`listening at localhost:${port}`)

})

