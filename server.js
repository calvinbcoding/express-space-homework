// DEPENDENCIES
const express = require('express');
const app = express();
const marsMissions = require('./models/marsMissions.js');
const bodyParser = require('body-parser');
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// app.post('/marsMissions', function(req, res) {
//   console.log('CREATE route accessed');
//   console.log('Data within req.body: ', req.body);
//   products.push(req.body);
//   res.redirect('/missions');
// });

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.get('./marsMissions', (req,res)=>
//   res.send(marsMissions)
// });
// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
// app.get('/marsMissions', (req,res)=>{
//   res.send(marsMissions)
// });

app.get('/marsMissions/', (req,res) => {
  res.render('missions/index.ejs', {
      marsMissions : marsMissions
  })
})
// app.get('index.ejs', (req,res) => {
//   res.send('missions/index.ejs', {
//       marsMissions : marsMissions
//   });
// });
// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/marsMissions/:id', (req,res)=>{
  res.render('/missions/show.ejs', {
      marsMissions : marsMissions[req.params.id]
  })
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
});



  


