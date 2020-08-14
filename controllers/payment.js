var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "qx47qsbq9hbsgc44",
  publicKey: "d7wzj4dr8zwy2zjc",
  privateKey: "f136448e82f89fbef3eba7c858d85643"
});



exports.getToken=(req,res)=>{

    gateway.clientToken.generate({}, function (err, response) {
       if(err)
       {
           return res.status(400).json({
               err:err
           })
       }
       else{
           console.log()
           return res.send(response);
       }

      });

}

exports.check=(req,res)=>{
    return res.send("Hlelo");

}

exports.processPayment=(req,res)=>

{
    if(!req.body)
    {
        return req.send("pleasse wait")
    }
    let nonceFromTheClient=req.body.paymentMethodNonce
    let amountFromTheClient=req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
          if(err)
          {
              return res.status(500).json({})
          }
          else 
          {
              return res.json(result)
          }
      });

}