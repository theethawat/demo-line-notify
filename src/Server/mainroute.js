import Express from 'express'

import axios from 'axios'
import qs from 'qs'
const app = Express.Router()
app.get('/hello', (req, res) => {
  res.send('World')
})

app.get('/notify', (req, res) => {
  console.log(req.query)
  const code = req.query.code

  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://localhost:7000/api/notify',
    client_id: 'YOURID',
    client_secret: 'YOURSECRET',
  }

  const axiosConfig = {
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://notify-bot.line.me/oauth/token',
    data: qs.stringify(data),
  }

  axios(axiosConfig).then((res) => {
    console.log(res)
    const accessToken = res.data.access_token
    console.log(accessToken)
  })
})

app.get('/notifysend/:token', (req, res) => {
  const token = req.params.token
  const notifyData = {
    message: 'ทดสอบการ Notify',
  }

  const axiosConfigNotify = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ` + token,
    },
    url: 'https://notify-api.line.me/api/notify',
    data: qs.stringify(notifyData),
  }

  axios(axiosConfigNotify).then((axiosRes) => {
    console.log(axiosRes.data)
    res.send(axiosRes)
    // console.log(res.status)
  })
})

export default app
