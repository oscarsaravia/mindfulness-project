//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/mindfulness-final'
app.use(express.static(__dirname + '/dist'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/mindfulness-final/index.html'
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);