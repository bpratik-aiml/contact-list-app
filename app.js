const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

app = express()

const route = require('./routes/route')

//connect to mongo db

mongoose.connect('mongodb://localhost:27017/contactlist')

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connection to the database')
})

mongoose.connection.on('error', (err)=>{
if(err){
    console.log(`Error while connecting to the database: ${err}`)
}
})

//port
const port = 8080
app.use(cors())
app.use(bodyparser.json())

//static files
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/api', route)

app.get('/', (req, res)=>{
    res.send('Hellllo')
})
app.listen(port, (req, res)=>{
    console.log("Server running at port: "+port)
})