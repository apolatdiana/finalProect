const express = require('express');
const router = express.Router();
const passport = require('passport');
const roles=require('./roles')
//specify what to be done when user hits end point
router.get('/logIn', (req, res) => {
    res.render('logIn1', { title: 'login form' });
});

//process the username and password that are submitted in the login page
router.post('/logIn', passport.authenticate('local', {failureRedirect: '/logIn'}), (req,res) =>{
    req.session.user = req.user;
    console.log(req.body);
    const userRole = req.user.role
    
    if(userRole == 'admin')
        {
         res.redirect('/aoDashboard');
        }
    else if(userRole == 'farmer1')
        {
         res.redirect('/foDashboard');
        }
    else if(userRole == 'ufarmer')
        {
         res.redirect('/ufDashboard');
        }
})


module.exports = router;