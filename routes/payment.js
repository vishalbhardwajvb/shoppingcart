const express=require("express");
const Router=express.Router();

const Controllers=require("../controllers/payment");
const Authcontrollers=require("../controllers/auth");

Router.get("/payment/gettoken/:userId",Controllers.getToken);
Router.post("/payment/braintree/:userId",Controllers.processPayment)

module.exports=Router;