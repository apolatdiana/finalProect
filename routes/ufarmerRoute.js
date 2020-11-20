const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer'); 
const Ufarmer = require('../models/Ufarmer');
const UploadProduct = require('../models/UploadProduct');


//specify what to be done when user hits end point

router.get('/ufarmData', (req, res) => {
    res.render('ufarmerReg', { title: 'Ufarmer form' });
});

router.post('/ufarmData', async(req,res)=>{
    try{
        const ufarmer = new Ufarmer(req.body);
    
        await Ufarmer.register(ufarmer, req.body.password, (err) => {
            if (err)
            {
                throw err
            }
            res.redirect('/ufarmData')
        })
    }catch(err){
        res.status(400).send('Sorry! Data posting failed')
        console.log(err)
    }
});

// retrieve data from the database 
router.get('/ufarmerList', async (req, res) => {
    if (req.session.user) {
        try {
            let puser = await Ufarmer.find()
            if (req.query.nin) {
                puser = await Ufarmer.find({ nin: req.query.nin })
            }
            res.render('ufarmerList', { title: 'Farmer list', users: puser, currentUser:req.session.user})
        } catch (err) {
            res.status(400).send("Unable to find items in the database");
        }
    }else {
        console.log("Can't find session")
        res.redirect('/logInfarmer')
    }
})

 //Gives access to retrieve data in the db
//  router.get('/ufarmerList', async (req, res) => {
//     if(res.session.user){
//         try {

//             let auser = await FoReg.find()
//             console.log(auser)
//             res.render('ufarmerList',{users: auser})
            
//         }catch(err){
//              res.status(400).send('Unable to find items in database')
//         }
//     } else {
//         console.log("Cant find session")
//         req.redirect('logIn')
//     }
  
// })

router.get('/updatefarmer/:id', async (req, res) => {
    if(res.session.user){
        try {
            const updateFarmer = await Ufarmer.findOne({ _id: req.params.id })
            res.render('updateFarmer', { user: updateFarmer })
        } catch (err) {
            res.status(400).send("Unable to find item in the database");
        } 
    } else {
        console.log("Cant find session")
        req.redirect('logIn')
    }
  
})

router.post('/updateFarmer', async (req, res) => { 
    try {
      await Ufarmer.findOneAndUpdate({ _id:req.params.id }, req.body)
        res.redirect('ufarmerList')
    } catch (err) {
        res.status(400).send("Unable to update items in the database");
    }  
})


// Uploading images
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, './public/uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
const upload = multer({ storage: storage }).single('photo');

router.get('/productData', (req, res) => {
    res.render('uploadProduct', { title: 'Upload form' })
});


// Uploading the image 
router.post('/productData', upload,async (req, res) => { 
    try {
        const product = new UploadProduct(req.body);
        product.image = req.file.filename
        await product.save(() => {
            console.log(req.body)
            res.redirect('/productData')
        })
    } catch (err) {
        res.status(400).send('Sorry! something went wrong')
        console.log(err)
    }

}); 

// // Retriving the image
// router.get('/', (req, res) => { 
//     imgModel.find({}, (err, items) => { 
//         if (err) { 
//             console.log(err); 
//         } 
//         else { 
//             res.render('app', { items: items }); 
//         } 
//     }); 
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

  
module.exports = router;