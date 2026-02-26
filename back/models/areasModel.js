var pool = require('./bd');

async function getAreas() {
    var query = 'select * from areas';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getAreas };