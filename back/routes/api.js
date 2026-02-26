var exprees = require('express');
var router = exprees.Router();
var areasModel = require('./../models/areasModel');
var profesionalesModel = require('./../models/profesionalesModel');

router.get('/areas', async function (req,res) {
  let areas = await areasModel.getAreas();
  res.json(areas);
});

router.get('/profesionales', async function (req,res) {
  let profesionales = await profesionalesModel.getProfesionales();
  res.json(profesionales);
})

module.exports = router;