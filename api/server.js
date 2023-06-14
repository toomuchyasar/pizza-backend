const express = require("express");
const server = express();
const usersRouter = require('./Users/users-router')

server.get("/",(req, res) => {
    res.status(200).json({message : "ana sayfa"});
});

server.post("/gonder", (req,res) => {
    let data = req.body;
    res.status(200).json({message : `name is ${data.name}`})
})


server.use('/api/users' , usersRouter)




module.exports = server;