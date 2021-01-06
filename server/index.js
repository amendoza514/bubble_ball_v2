import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// ^ newest version of node can use this syntax instead of const express = require('express')
// ^ for reference I needed to go into package.json and add the following line: "type": "module",

import postScores from './routes/scores.js'

const app = express();

app.use('/scores', postScores);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoDB cluster added here

const CONNECTION_URL = 'mongodb+srv://alexjmendoza514:alexjmendoza514@cluster0.u9pok.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
// object in mongoose.connect just elimintates warnings in the console for later on

mongoose.set('useFindAndModify', false);