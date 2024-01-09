require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

app.get('/',(req,res) => {
	res.send('Hello sameer')
})

app.get('/admin',(req,res) => {
	res.send('sameer')
})

app.get('/login',(req,res) => {
	res.send('<h1>Login</h1>')
})

app.listen(process.env.PORT,() => {
	console.log(`Express backend server listening on port ${port}`)
})