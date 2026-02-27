var exprees = require('express');
var router = exprees.Router();
var areasModel = require('./../models/areasModel');
var profesionalesModel = require('./../models/profesionalesModel');
var contactoModel = require('./../models/contactoModel');

router.get('/areas', async function (req,res) {
  let areas = await areasModel.getAreas();
  res.json(areas);
});

router.get('/profesionales', async function (req,res) {
  let profesionales = await profesionalesModel.getProfesionales();
  res.json(profesionales);
});

router.post('/contacto', async function (req,res) {
  console.log("BODY:", req.body);
  try {
    var consulta = {
    nombre : req.body.nombre,
    email : req.body.email,
    telefono : req.body.telefono,
    asunto : req.body.asunto,
    mensaje : req.body.mensaje
    };

    await contactoModel.postContact(consulta);
    res.redirect("https://proyecto-web-estudio-juridico.vercel.app/gracias");
  } catch (error) {
  console.log("POST /api/contacto error:", error);
  return res.status(500).send("Error al enviar la consulta");
}
});


module.exports = router;