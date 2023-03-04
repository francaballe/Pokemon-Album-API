const { Router } = require('express');
const router = Router();
const getPokemons = require("../controllers/getPokemons");
const randomizePokemonStars = require("../controllers/randomizePokemonStars")
const getPokemonById = require("../controllers/getPokemonById.js");
//const getPokemonByName = require("../controllers/getPokemonByName.js");
//const createPokemon = require("../controllers/createPokemon.js");


router.get("/randomize", async function (req,res){
    try {
        await randomizePokemonStars();
        res.send("Pokemon Stars has been randomized successfully")
    }catch(unError){
        res.status(400).send(unError.message);
    }   
})

router.get("/", async function (req,res){
    const { name } = req.query;
    //console.log("el name funciona y es:",name)
    if (name){
        /* try{
            const respuesta = await getPokemonByName(name);
            console.log(respuesta)
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }  */ 
    }
    else{
        try {
            const respuesta = await getPokemons();
            //console.log("estoy parado en la ruta get de pokemons:",respuesta)
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }   
    }
    
});     


router.get("/:idPokemon", async function (req,res){
    //console.log(req.params)
    const { idPokemon } = req.params;
    try {
        const respuesta = await getPokemonById(idPokemon);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
});

module.exports = router;