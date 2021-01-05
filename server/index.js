import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// ^ newest version of node can use this syntax instead of const express = require('express')
// ^ for reference I needed to go into package.json and add the following line: "type": "module",

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoDB cluster

