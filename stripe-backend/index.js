const cors = require('cors')
const express = require('express')
const stripe = require('stripe')('sk_test_51L3NlJIbWCRjsLJPGPHOIFULxwKsUnIkfdT9QkX6nnvZ088bEO1EQEEfBh3xnuxEUGXIhA4UpGthRwXncnpe6Y6000Gw7nzir1')
const uuid = require("uuid")

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res)=>{
    res.send('Route is working')
})

app.post('/donate', (req,res) => {
    const {donation, token} = req.body;
    console.log('DONATION', donation)
    console.log('DONATION-PRICE', donation.price)
    const idempontencyKey = uuid() //avoid multiple charges in case of network err

    return stripe.customers.create({ //create customer
        email: token.email,
        source: token.id
    }).then(customer => { //customer successfully created leads to
        stripe.charges.create({ //creating a charge
            amount: donation.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `Thank you for your donation of ${donation.name}` 
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result)) //if charge is successful send res
    .catch(err => console.log(err))
})

//listen
app.listen(process.env.PORT || 3001, () => {
	console.log(`Sever is listening`)
})