require('dotenv').config({debug: false});
const express  = require('express');
const mongoose  = require('mongoose');
const cors  = require('cors');
const bodyparser  = require('body-parser');
const userRoutes  = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;


if (!PORT) {
    throw new Error('PORT is not defined in .env');
}

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MogoDB Connect"))
.catch(err => {
    console.error("DB connection : ", err.message);
    process.exit(1);
});


/* GLOBAL MIDDLEWARE */
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(__dirname));
app.use(express.json())

// ROUTES
app.use(userRoutes);



if (!process.env.MONGO_URL) {
    throw new Error('MONGO URL is not defined in .env');
}


/* ---------- ERROR HANDLERS ---------- */
app.use((req, res, next) => {
    setImmediate(() => next(new Error('Route not found')));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})