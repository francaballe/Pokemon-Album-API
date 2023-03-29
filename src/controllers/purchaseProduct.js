require("dotenv").config();
const { MELI_TEST_ACCESS_TOKEN } = process.env;
const { CROSS_ACCESS_TOKEN } = process.env;
const mercadopago = require("mercadopago");


const purchaseProduct = async function (data) {

  const { email, name, token, cart } = data


  if (token!==CROSS_ACCESS_TOKEN){
    throw new Error("Error: token validation did not pass.")
  }

  mercadopago.configure({
    access_token: MELI_TEST_ACCESS_TOKEN,
  });
  
    const totalPurchase = [];
    for (let i = 0; i < cart.length; i++) {
      totalPurchase.push({
        title: cart[i].name,
        unit_price: cart[i].price,
        quantity: cart[i].quantity,
        currency_id: "USD"
      });
    }
    //console.log("totalPurchase:",totalPurchase)
    
  
    let preference = {
      payer: {
        name: name,
        email: email,
      },
      items: totalPurchase, // por cada producto un item
      auto_return: 'approved',
      back_urls: {
        "success": "http://localhost:3000/pokemons",
        "failure": "http://localhost:3000/pokemons",
        //"pending": console.log("pending")
      },
    };
  
    try{
      const finalPurchase = await mercadopago.preferences.create(preference)
          .then(function (response) {
            //onSuccessHandler(response.body.init_point);
            //res.send(response.body.init_point);                        
            return response.body.init_point
          })
          .catch(function (error) {
            console.log(error);
          });

      return finalPurchase

    }catch(unError){
      throw new Error(unError.message)
    }





    
                   
      
  }
    
module.exports = purchaseProduct;
