const auth = require('../../middlwear/auth')
const displayProfile = require('./controller/profile')

const router = require('express').Router()


router.get('/user/profile', auth(), displayProfile)

module.exports = router   