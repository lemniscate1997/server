const pool = require('../../models/index');

const get_total_sessions = (req, res, next) => {                        //function to list all sessions
    
    // query giving the list of sessions based on the pagesize and pageindex provided by user in angular

    pool.query('SELECT COUNT(s_id) as total FROM session',
    (error, results) => {
        if (error) {
          throw error
        }
       
        res.status(200).json(results.rows);
        res.end();
    })
}

module.exports = get_total_sessions;