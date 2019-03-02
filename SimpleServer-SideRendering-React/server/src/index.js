// const express = require("express");
// const React  = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

import express from 'express';
import 'babel-polyfill';
import React from 'react';

import {
  renderToString
} from 'react-dom/server';
import Home from './client/components/Home';
import store from './store';

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  const content = renderToString( < Home / > );
  const html = `
  <html>
      <head>

      </head>
      <body>
        <div id="reactAppId">
          ${content}
        </div>
        <script src="bundle.js"> </script>
      </body>
    </html>
      `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});