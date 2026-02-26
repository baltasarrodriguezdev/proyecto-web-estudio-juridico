var pool = require('./bd');

async function getProfesionales() {
  var query = `
    select 
      p.id_profesional,
      p.nombre,
      p.descripcion,
      p.img_url,
      a.nombre as nombre_area
    from profesionales p
    join areas a on a.id_area = p.id_area
  `;
  var rows = await pool.query(query);
  return rows;
}

module.exports = { getProfesionales };