const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const ChocoModel = require('./models/UserAuth')
const productModel = require('./models/Products')

const app = express()
app.use(express.json())
app.use(cors())

//this is mongodb linking (compass)

mongoose.connect("mongodb://localhost:27017/testingChoco")

//this is login

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    ChocoModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password = password) {
                    res.json("Success")
                } else {
                    res.json("Password is incorrect")
                }
            }
            else {
                res.json("User does not exist");
            }
        })
})

// this is for register

app.post('/register', (req, res) => {
    ChocoModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// to add a product

app.post('/addproduct', (req, res) => {

    productModel.create(req.body)
        .then(products => res.json(products))
        .catch(err => res.json(err))
    // const productDetail = req.body;


    // console.log("Product Details >>>>>>>",productDetail);
})

// get the data from the database


app.get('/getproduct', (req, res) => {
    productModel.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.listen(3001, () => {
    console.log("Server is running at 3001")
})