const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const ChocoModel = require('./models/UserAuth')
const productModel = require('./models/Products')
const stripe = require('stripe')('sk_test_51Q3kVEFzzbHUbHQMs5JddpdBuQcI41cg6DaEEr40bn15ChUkWgljBGRNXMzUrwpPJm5TrTW8FCmXBt9c2urcn9Pm00DTtkpwoF')
const orderModel = require('./models/Orders')
const app = express()
app.use(express.json())
app.use(cors())


//this is mongodb linking (compass)

mongoose.connect("mongodb://localhost:27017/testingChoco")

app.get("/", (req, res) => res.status(200).send("Home Page"));



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

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const userDetail = await ChocoModel.findOne({ email: email });

//     if (userDetail) {
//         if (await bcrypt.compare(password, userDetail.password)) {
//             res.send(userDetail);
//         } else {
//             res.send({ error: "invaild Password" });
//         }
//     } else {
//         res.send({ error: "user is not exist" });
//     }
// });



// this is for register

app.post('/register', (req, res) => {
    ChocoModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// API for SIGNUP

// app.post("/register", async (req, res) => {
//     const { email, password, name, phone } = req.body;

//     const encrypt_password = await bcrypt.hash(password, 10);

//     const userDetail = {
//         email: email,
//         password: encrypt_password,
//         phone: phone,
//         name: name,
//     };

//     const user_exist = await ChocoModel.findOne({ email: email });

//     ChocoModel.create(userDetail)
//         .then(result => {
//             res.send({ message: "User Created Successfully" });
//         })
//         .catch(err => {
//             res.status(500).send({ message: err.message });
//         });

//     // if (user_exist) {
//     //     res.send({ message: "The Email is already in use !" });
//     // } else {
//     //     ChocoModel.create(userDetail, (err, result) => {
//     //         if (err) {
//     //             res.status(500).send({ message: err.message });
//     //         } else {
//     //             res.send({ message: "User Created Succesfully" });
//     //         }
//     //     });
//     // }
// });














// get the data from the database


app.get("/products/get", (req, res) => {
    productModel.find()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(500).json({
                error: 'Failed to fetch products',
                message: error.message
            });
        });
});


// api for payments

app.post('/payment/create', async (req, res) => {
    const total = req.body.amount
    console.log("Payment request recived for this this amount total", total);


    const payment = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'inr'
    })

    res.status(201).send({
        clientSecret: payment.client_secret,
    });
});



// to add a product

app.post('/products/add', (req, res) => {

    productModel.create(req.body)
        .then(products => res.json(products))
        .catch(err => res.json(err))
    // const productDetail = req.body;


    // console.log("Product Details >>>>>>>",productDetail);
})


// api to add order details

app.post('/orders/add', (req, res) => {
    const products = req.body.cart;
    const price = req.body.price;
    const email = req.body.email;
    const address = req.body.address;

    const orderDetail = {
        products: products,
        price: price,
        address: address,
        email: email,
    };



    orderModel.create(orderDetail)
        .then((result) => {
            console.log("order added to database >> ", result);
        })
        .catch((err) => {
            console.error("Error adding order to database:", err);
        });
});

app.post("/orders/get", (req, res) => {
    const email = req.body.email;

    orderModel.find({ email }) // Use object destructuring for email filter
        .then((userOrders) => {
            res.send(userOrders);
        })
        .catch((err) => {
            console.error("Error finding orders:", err);
            res.status(500).send({ message: "Error retrieving orders" }); // Handle error with user-friendly message
        });
});




app.listen(3001, () => {
    console.log("Server is running at 3001")
})