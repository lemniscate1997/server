const models = require('../../models/index');
const validator = require('../../utils/validation');
const schema = require('../../utils/schemas').session_id_schema;

const delete_session = (request, response, next) => {

    validator(request.params, schema, function (err, value) {
        if (err) {
            return next(err);
        }
        else {

            const session_id = request.params.session_id;

            if (session_id !== undefined) {
                const values = { s_status: 3 };
                const selector = {
                    where: { s_id: session_id }
                };

                let error = new Error();

                models.sessionModel.findOne({
                    where: { s_id: session_id }
                })

                    .then(result => {
                        if (result == null) {
                            error.code = 'SIDNOTFOUND';
                            next(error);
                        }

                        return result;

                    })
                    .then(result => {
                        return models.stmModel.count({
                            where: { stm_session_id: result.s_id }
                        })
                    })
                    .then(r => {

                        if (r != 0) {
                            error.code = 'SIDINSTM';
                            throw error;
                        }

                        return r;
                    })

                    .then(() => {

                        return models.sessionModel.update(values, selector)
                            .then(response.status(200).json({ message: "deletion successful" }));

                    })

                    .catch(error => {

                        next(error)
                    })
            }
        }
    })

}

module.exports = delete_session;

