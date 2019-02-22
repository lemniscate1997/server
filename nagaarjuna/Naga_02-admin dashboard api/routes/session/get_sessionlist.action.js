const pool = require('../../models/index');

const get_sessionlist = (req, res, next) => {                        //function to list all sessions
    
    // query giving the list of sessions based on the pagesize and pageindex provided by user in angular

    pool.query('SELECT s_id,s_name,created_at,s_ending_date as ending_date,s_status,s_templates FROM session ORDER BY s_id LIMIT $1 OFFSET ($2 - 1) * $1', [req.query.pageSize,req.query.pageIndex],
    (error, results) => {
        if (error) {
          throw error
        }
       
        res.status(200).json(results.rows);
        res.end();
    })
}

module.exports = get_sessionlist;
