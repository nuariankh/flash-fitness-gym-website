const express = require('express'); //Call express
const app = express(); //Define app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const apiRouter = require('./routes/api');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000 // 1 hr
    }
}));

//API ROUTES
// =====================================================
const router = express.Router(); //get instance of express router
app.get('/', (req, res) => {
    res.json({ message: 'hooray! Welcome to our api' });
})

//Register routes
app.use('/', apiRouter);

//START SERVER
app.listen(port);
console.log('Listening at port', port);