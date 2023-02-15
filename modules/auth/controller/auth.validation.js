const Joi = require('joi')


// Schema Of Vlaidation 
const signupValidator = {
    body: Joi.object().required().keys({
        name: Joi.string().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)).required().messages({
            'string.empty': "Please Fill Your Name",
            'any.required': "Please U Name is Required",
            'string.pattern.base': "Please Add only String values"
        }),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required(),
        cPassword: Joi.string().valid(Joi.ref('password')).required()


    }),
    params: Joi.object().required().keys({
        id: Joi.boolean()//.required()
    })
}

const signinValidator = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required()
    })
}


module.exports = {
    signupValidator,
    signinValidator
}