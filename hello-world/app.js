// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Hello from './src/Hello';
import World from './src/World';
var express = require('express')
const awsServerlessExpress = require('aws-serverless-express')



const app = express()
const server = awsServerlessExpress.createServer(app)

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

const template = (content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>my test </title>
  <link href="style.css" rel="stylesheet">
</head>
<body>
  <div class="content">
     <div id="app" class="wrap-inner">
        ${content}
     </div>
  </div>
</body>`

app.use('/', (req, res) => {
    res.send(renderToString(createElement(Hello)))
})

exports.lambdaHandler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context)
}

// exports.lambdaHandler = function(event, context, callback){
//     const html = renderToString(createElement(Hello));

//     response = {
//         'statusCode': 200,
//         'body': JSON.stringify({
//             message: html,
//         })
//     }


//     callback(null,response)
// };
