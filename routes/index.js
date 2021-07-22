const express = require('express')
const mysql = require('../work/mysql')
const router = express.Router()

router.get('/', async function (req, res, next) {
  const r = await mysql.query('SELECT  COUNT(*) id FROM  app_express')
  if (r !== -1) {
    res.render('index', {
      time: r.data[0].id + 1
    })
  } else {
    res.json({
      env: process.env
    })
  }
})

router.get('/test', async function (req, res, next) {
  const { params, query, url, method, headers } = req
  res.json({
    env: process.env,
    req: { params, query, url, method, headers }
  })
})

router.post('/get', async function (req, res, next) {
  const r = await mysql.query('SELECT  COUNT(*) id FROM  app_express')
  if (r !== -1) {
    res.json({
      number: r.data[0].id + 1
    })
  } else {
    res.json({
      env: process.env
    })
  }
})

module.exports = router
