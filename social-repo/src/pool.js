const pg = require('pg')

class Pool {
  _pool = null

  connect(options) {
    this._pool = new pg.Pool(options)
    return this._pool.query('SELECT 1 + 1;')
  }

  close() {
    return this._pool.end()
  }

  query(sql, params) {
    return this._pool.query(sql, params)
  }
}

module.exports = new Pool()

// NORMALLY, we would create a pool like this:
// const pool = new pg.Pool({
//   host: 'localhost',
//   port: 5432,
// })

// module.exports = pool
