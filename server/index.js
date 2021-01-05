import express from 'express';
// express framework for leveraging node
import bodyParser from 'body-parser';
//body parser for post requests
import mongoose from 'mongoose';
//mongoose for creating models to use in conjunction with Mongo
import cors from 'cors';
//handle cross origin requests

// ^ newest version of node can use this syntax instead of const express = require('express')
// ^ for reference I needed to go into package.json and add the following line: "type": "module",

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoDB cluster added here

