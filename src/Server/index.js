import Express from 'express'
import config from '../config.json'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import MainRoute from './mainroute'
import path from 'path'

const app = Express()

// Using Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
mongoose.connect(config.dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', (err) => {
  console.log('Connect to MongoDB have some error :( ')
  console.error(err)
})
db.on('open', () => {
  console.log('Connect to Mongodb Success')
})

// Frontend Routing
const wwwPath = path.join(__dirname, 'www')
app.use('/', Express.static(wwwPath))

// Main Routing (it will behind the API)
app.use('/api', MainRoute)

app.listen(config.port, () => {
  console.log('Start TDC App')
  console.log('Backend App Running at Port', config.port)
  console.log('-----------')
})

// 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=' +
// clientID +
// '&redirect_uri=' +
// redirectURL +
// '&scope=notify&state=test'
