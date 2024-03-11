'use strict'
import express from 'express'
import connectDb from './db/connectDb.js'
import movieModel, { updateById } from './models/Movies.js'

const app = express()
const port = process.env.PORT || 8000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'

connectDb(DATABASE_URL)
movieModel
updateById("65ef206a85d9dff177266922")
app.listen(port,() =>console.log(`port ${port}`))
