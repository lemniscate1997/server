let jwt = require('jsonwebtoken');
const config = require('./config');

let checkToken = (request, response, next) => {
    let token = request.header('authorization');
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.secret, (error, decoded) => {
            if (error) {
                error.code = 'JWTFALSE';
                next(error);
            } else {
                request.decoded = decoded;
                next();
            }
        });
    } else {
        let error = new Error();
        error.code = "TOKENFALSE";
        next()
    }
};

module.exports = {
    checkToken: checkToken
};