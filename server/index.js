import React from 'react';


//dependencies



const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio

const accountSid = 'ACCOUNT_SID_HERE';
const authToken = 'TOKEN HERE';
const client = (accountSid, authToken);


const app = express();

app.use(cors()); //blocks browser restrictions when using HTTPS requests

//Server Start Page 
app.get('/', (req, res) => {


    res.send('Express Server is Running')

})


//GET Request
app.get('/sent-text', (req, res) => {

const { recipient, textmessage} = req.query

//Send Text
client.messages.create ({
    body: textmessage,
    to: recipient,
    from: 'twillionumber here'


}).then((message) => console.log(message.body));

})

app.listen(4001, () => console.log('Server is running on port 4000'));


