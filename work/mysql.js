const mysql = require('mysql')
let pool = null
let flag = false

init()

function init () {
  const { ALL_IN_ONE_TDSQL_ADDRESS, ALL_IN_ONE_TDSQL_USERNAME, ALL_IN_ONE_TDSQL_PASSWORD } = process.env
  if (ALL_IN_ONE_TDSQL_ADDRESS != null && ALL_IN_ONE_TDSQL_USERNAME != null && ALL_IN_ONE_TDSQL_PASSWORD != null) {
    pool = mysql.createPool({
      connectionLimit: 100,
      host: ALL_IN_ONE_TDSQL_ADDRESS.split(':')[0],
      user: ALL_IN_ONE_TDSQL_USERNAME,
      password: ALL_IN_ONE_TDSQL_PASSWORD,
      port: ALL_IN_ONE_TDSQL_ADDRESS.split(':')[1],
      database: 'online'
    })
    flag = true
  }
}

function query (sql, param = '') {
  if (!flag) return -1
  return new Promise((resolve, reject) => {
    const res = {}
    pool.getConnection(function (err, connection) {
      if (err) {
        res.err = err
        console.log(err)
        resolve(res)
      } else {
        connection.query(sql, param, (err, result) => {
          if (err) res.err = err
          else res.data = result
          connection.release()
          resolve(res)
        })
      }
    })
  })
}

function savelog () {
  if (!flag) return -1
  return {
    stream: {
      write: function (log) {
        const param = log.split(' ')
        if (param[1].indexOf('/static/') !== 0) {
          param[2] = parseInt(param[2])
          param[3] = parseFloat(param[3])
          query('INSERT INTO app_express(method, url, status, response_time, ip) values(?,?,?,?,?)', param.splice(0, param.length - 1))
        }
      }
    }
  }
}

module.exports = {
  query,
  savelog
}
