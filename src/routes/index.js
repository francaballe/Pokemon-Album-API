const { Router } = require('express');
const pokemonsRouter = require("../routes/pokemons.js");
const typesRouter = require("../routes/types.js");
const usersRouter = require("../routes/users.js");
const mercadoPagoRouter = require("../routes/mercadopago.js");

const router = Router();

// Configurar los routers
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);
router.use('/users', usersRouter);
router.use('/mercadopago', mercadoPagoRouter)

module.exports = router;