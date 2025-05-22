const express = require('express')
const UserRepo = require('../repos/user-repo')

const router = express.Router()

router.get('/users', async (req, res) => {
  // Run a query to get all users
  const users = await UserRepo.find()

  // Send the result back to the person
  // who made this request.
  res.json(users)
})

router.get('/users/:id', async (req, res) => {
  const { id } = req.params

  const user = await UserRepo.findById(id)

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(user)
})

router.post('/users', async (req, res) => {
  const { username, bio } = req.body

  const user = await UserRepo.insert(username, bio)

  res.json(user)
})

router.put('/users/:id', async (req, res) => {})

router.delete('/users/:id', async (req, res) => {})

module.exports = router
