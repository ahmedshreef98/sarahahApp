const dataNMethod = ['body', 'params', 'query']

const validation = (schema) => {
    return (req, res, next) => {
        //console.log(schema.body);
        const validationErrArr = []
        dataNMethod.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false }) //validate req_ body with schema_sturcture
                // console.log(validationResult)
                if (validationResult.error) {
                    validationErrArr.push(validationResult.error.details)
                }

            }
        })
        if (validationErrArr.length > 0) {

            res.json({ message: "Validation Error !@", err: validationErrArr })

        } else {
            next()
        }

    }
}

module.exports = validation