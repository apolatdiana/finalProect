const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ufarmer = require('../models/Ufarmer');
const UserCredential =require('../models/UserCredential');

//specify what to be done when user hits end point

// router.get('/ufDashboard', async (req, res) => {
//     if (req.session.user) {
//         try {
//             let auser = await Ufarmer.find();
//             console.log(auser)
//             if (req.query.gender) {
//                 auser = await Ufarmer.find({ gender: req.query.gender })
//             }
//             res.render('ufDashboard', { users: auser, currentUser: req.session.user })
            
//         } catch (err) {
//             res.status(400).send('Unable to find Dashboard')
//         }
//     } else {
//         console.log("Cant find Session")   
//     res.redirect('/logIn')    
//     }         
// })

// router.get('/ufDashboard', async (req, res) => {
//     if (req.session.user) {
//         try {

//             let ufuser = await UserCredential.find();
//             console.log(ufuser)
//             if (req.query.email) {
//                 ufuser = await UserCredential.find({ email: req.query.email })
//             }
//             res.render('ufDashboard', { users: ufuser, currentUser: req.session.user })
            
//         } catch (err) {
//             res.status(400).send('Unable to find Dashboard')
//         }
//     } else {
//         console.log("Cant find Session")   
//     res.redirect('/logIn')    
//     }         
// })



module.exports = router;