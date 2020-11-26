const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserCredential = mongoose.model('UserCredential');
const FoReg = mongoose.model('FoReg');
const Ufarmer = require('../models/Ufarmer');

router.get('/admin', (req, res) => {
    res.render('adminForm');   
})

router.post("/admin", async (req, res) => {
  try {
    const newAdmin = new UserCredential(req.body);
    console.log(newAdmin);
    await UserCredential.register(newAdmin, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/admin");
    });
  } catch (err) {
    res.status(400).send("Sorry! Something went wrong.");
    console.log(err);
  }
});

router.post("/foRegData", async (req, res) => {
    try {
      const items = new UserCredential(req.body);
      const foreg = new FoReg(req.body);
      foreg.save()
      console.log("items from foreg",foreg)
      console.log(items);
      await UserCredential.register(items, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/foRegData");
      });
    } catch (err) {
      res.status(400).send("Sorry! Something went wrong.");
      console.log(err);
    }
});






  


module.exports = router;