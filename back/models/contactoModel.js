var pool = require('./bd');

async function postContact(obj) {
    try {
        var query =` 
        insert into consultas (nombre,email,telefono,asunto,mensaje,estado) 
        values ( ? , ? , ? , ? , ? , ? , ?)`
        var rows = await pool.query(query,[obj.nombre ,obj.email, obj.telefono, obj.asunto, obj.mensaje, 'nuevo']);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { postContact }