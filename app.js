// app.js

// 1. Import the Express module
const express = require('express');
require('dotenv').config();


// 2. Create an Express application instance
const app = express();

// 3. Define the port your server will listen on
// const port = 3000; // You can choose any available port, common ones are 3000, 8080, 5000

// Allow override via CLI: node app.js --port=3000
const argv = require('minimist')(process.argv.slice(2));
const port = argv.port || process.env.PORT || 3000;

// 4. Define your routes (how your application responds to different URL paths)

// Route for the root URL ("/")
app.get('/', (req, res) => {
  // When someone visits '/', send back the text 'Hello from Express!'
  res.send(`Hello from port ${port}`);
});

// Another route for "/about"
app.get('/about', (req, res) => {
  // When someone visits '/about', send back some information
  res.send('This is a simple Node.js application built with Express.js!');
});


app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});


//pm2 start app.js --name app-4000 -- --port 3000
//pm2 start app.js --name app-3000 -- --port 3000