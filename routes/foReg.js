const express = require('express');
const router = express.Router();
const FoReg = require('../models/FoReg');
const UserCredential =require('../models/UserCredential');



router.get('/aoDashboard', async (req, res) => {
    if (req.session.user) {
        try {
            let auser = await UserCredential.find();
            console.log(auser)
            if (req.query.email) {
                auser = await UserCredential.find({ email: req.query.email })
            }
            res.render('aoDashboard', { users: auser, currentUser: req.session.user })
            
        } catch (err) {
            res.status(400).send('Unable to find Dashboard')
        }
    } else {
        console.log("Cant find Session")   
    res.redirect('/logIn')    
    }         
})

//specify what to be done when user hits end point

router.get('/foRegData', (req, res) => {
    if (req.session.user) {
    res.render('foReg'//, { title: 'Reg form' }
        );
    } else {
        console.log("Cant find session")
        res.redirect('logIn')
    }
});
 
// router.post('/foRegData', async (req, res) => {
//     if (req.session.user) {
//         try {
//             const foreg = new FoReg(req.body);
        
//             await FoReg.register(foreg, req.body.password, (err) => {
//                 if (err) {
//                     throw err
//                 }
//                 res.redirect('foRegData')
//             })
//         } catch (err) {
//             res.status(400).send('Sorry! Something went wrong.')
//             console.log(err)
//         }
//     } else {
//             console.log("Cant find session")
//             res.redirect('logIn')
//         }
// });

// retrieve data from the database 
router.get('/foList', async (req, res) => {
    if (req.session.user) {
        try {
            let puser = await FoReg.find()
            if (req.query.nin) {
                puser = await FoReg.find({ nin: req.query.nin })
            }
            res.render('foList', { title: 'fo list', users: puser, currentUser:req.session.user})
        } catch (err) {
            res.status(400).send("Unable to find items in the database");
        }
    }else {
        console.log("Can't find session")
        res.redirect('/logIn')
    }
})


    //Gives access to retrieve data in the db
// router.get('/foList', async (req, res) => {
//     if(res.session.user){
//         try {

//             let auser = await FoReg.find()
//             console.log(auser)
//             res.render('foList',{users: auser})
            
//         }catch(err){
//              res.status(400).send('Unable to find items in database')
//         }
//     } else {
//         console.log("Cant find session")
//         req.redirect('logIn')
//     }
  
// })

router.get('/update/:id', async (req, res) => {
    if(req.session.user){
        try {
            const updateUser = await FoReg.findOne({ _id: req.params.id })
            res.render('updatefo', { user: updateUser })
        } catch (err) {
            res.status(400).send("Unable to find item in the database");
        } 
    } else {
        console.log("Cant find session")
        res.redirect('logIn')
    }
  
})

router.post('/update', async (req, res) => { 
    try {
      await FoReg.findOneAndUpdate({ _id:req.params.id }, req.body)
        res.redirect('foList')
    } catch (err) {
        res.status(400).send("Unable to update items in the database");
    }  
})
   

router.get('/foDashboard', async (req, res) => {
        if (req.session.user) {
            try {
    
                let fouser = await UserCredential.find();
                console.log(fouser)
                if (req.query.email) {
                    fouser = await UserCredential.find({ email: req.query.email })
                }
                res.render('foDashboard', { users: fouser, currentUser: req.session.user })
                
            } catch (err) {
                res.status(400).send('Unable to find Dashboard')
            }
        } else {
            console.log("Cant find Session")   
        res.redirect('/logIn')    
        }         
})
    
router.get('/ufDashboard', async (req, res) => {
    if (req.session.user) {
        try {

            let ufuser = await UserCredential.find();
            console.log(ufuser)
            if (req.query.email) {
                ufuser = await UserCredential.find({ email: req.query.email })
            }
            res.render('ufDashboard', { users: ufuser, currentUser: req.session.user })
            
        } catch (err) {
            res.status(400).send('Unable to find Dashboard')
        }
    } else {
        console.log("Cant find Session")   
    res.redirect('/logIn')    
    }         
})

    
    



module.exports = router;