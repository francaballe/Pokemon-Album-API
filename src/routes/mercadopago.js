require("dotenv").config();
const { MELI_TEST_ACCESS_TOKEN } = process.env;
const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
//const sendMail = require("../controllers/mail/sendMail.js");

mercadopago.configure({
  access_token: MELI_TEST_ACCESS_TOKEN,
});

router.post("/", async (req, res) => {
  const { email, name, cart } = req.body;
  console.log("email, name, cart:",email, name, cart)

  const totalPurchase = [];
  for (let i = 0; i < cart.length; i++) {
    totalPurchase.push({
      title: "poke_sobre",//cart[i].name,
      unit_price: cart[i].price,
      quantity: cart[i].quantity,
    });
  }
  console.log("totalPurchase:",totalPurchase)

  let preference = {
    payer: {
      name: "francisquito",
      email: "francaballe@gmail.com",
    },
    items: totalPurchase, // por cada producto un item
    back_urls: {
      "success": "http://localhost:3000",
      "failure": "http://localhost:3000",
      //"pending": console.log("pending")
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      //onSuccessHandler(response.body.init_point);
      res.send(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
