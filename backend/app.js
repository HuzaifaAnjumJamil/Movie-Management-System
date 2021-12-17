const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.ghduk.mongodb.net/Project O?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello from backed app.js')
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})