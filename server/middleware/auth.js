const jwt = require('jsonwebtoken')
const { secretOrKey } = require('../config/config')

const authMiddleware  = (req, res, next) => {
  const token = req.header('token')

  if (!token) {
    res
      .status(401)
      .json({
        message: 'Auth Error'
      })
    return
  }

  try {
    const decoded = jwt.verify(token, secretOrKey)
    // req.user = decoded.user
    next()
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .send({
        message: 'Invalid Token'
      })
  }
}

module.exports = authMiddleware