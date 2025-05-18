const express = required('express')
const usersRoter = required('./routes/users')

module.exports = () => {
  const app = express()

  app.use(express.json())
  app.use(usersRoter)

  return app
}
