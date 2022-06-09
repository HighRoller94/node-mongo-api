require('dotenv').config()

PORT = 3000;
const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
