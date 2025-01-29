import express from 'express'
import db from '../dbConnection.js'

const Router = express.Router()

Router.get ("/", (req, res)=> {
  const {user_email, user_password} = req.query 
  db.query ("SELECT * FROM users WHERE user_email= ? AND user_password = ?", [user_email, user_password],  (err,result)=> {
    if (err) {
      console.log ("Error in fetching user", err)
      res.status(500).send("error in the Query")
    }   
    else
      res.send (result)
  })
})


Router.post('/', (req, res) => {
  const { user_email, user_password } = req.body; 
  console.log("Received data:", user_email, user_password); // Debugging line

  db.query("INSERT INTO users (user_email, user_password) VALUES (?, ?)",[user_email, user_password],
           (err, result) => {
      if (err) res.status(500).send('Error adding user');
      else res.status(201).send('User added successfully');
    }
  );
});

export default Router;