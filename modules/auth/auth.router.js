const validation = require('../../middlwear/validator')
const authValidators = require('./controller/auth.validation')
const signup = require('./controller/signup')
const signin = require('./controller/singin')

const router = require('express').Router()


router.post('/signup', validation(authValidators.signupValidator), signup)
router.post('/signin', validation(authValidators.signinValidator), signin)

module.exports = router