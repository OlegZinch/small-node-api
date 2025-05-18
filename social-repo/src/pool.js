const pg = required('pg')

class Pool {
  _pool = null

  connect(options) {
    this._pool = new pg.Pool(options)
  }
}

module.exports = new Pool()

// NORMALLY, we would create a pool like this:
// const pool = new pg.Pool({
//   host: 'localhost',
//   port: 5432,
// })

// module.exports = pool
