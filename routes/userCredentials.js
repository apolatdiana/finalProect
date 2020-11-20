const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserCredential = mongoose.model('UserCredential');

router.get('/admin', (req, res) => {
    res.render('adminForm');   
})

router.post("/admin", async (req, res) => {
    try {
      const items = new UserCredential(req.body);
      console.log(items);
      await UserCredential.register(items, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/logIn");
      });
    } catch (err) {
      res.status(400).send("Sorry! Something went wrong.");
      console.log(err);
    }
  });
  


module.exports = router;