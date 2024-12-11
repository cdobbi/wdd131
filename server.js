const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "project" directory
app.use(express.static(path.join(__dirname, 'project')));

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const dataString = `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}\n`;

  // Append the data to a text file
  fs.appendFile('responses.txt', dataString, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Form data saved successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});