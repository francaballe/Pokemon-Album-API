const { Router } = require('express');
const pokemonsRouter = require("../routes/pokemons.js");
const typesRouter = require("../routes/types.js");


const router = Router();

// Configurar los routers
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;