import express from 'express';
import db from '../dbConnection.js';

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM questions");
    res.send(rows); 
  } catch (err) {
    console.log("Error in fetching questions", err);
    return res.status(500).send("Error in the Query");
  }
});


Router.post('/', async (req, res) => {
  const { question_year } = req.body;

  if (!question_year) {
    return res.status(400).send("Year is required");
  }

  try {
    // Check if the question_year already exists in the database
    const [existingQuestion] = await db.execute(
      "SELECT * FROM questions WHERE question_year = ?",
      [question_year]
    );

    if (existingQuestion.length > 0) {
      return res.status(400).send("This year already exists in the quiz.");
    }

    // If the year doesn't exist, insert it
    const [result] = await db.execute(
      "INSERT INTO questions (question_year) VALUES (?)",
      [question_year]
    );
    res.status(201).send({ message: "Question added successfully", questionId: result.insertId });
  } catch (err) {
    console.log("Error inserting question:", err);
    return res.status(500).send("Error inserting question");
  }
});

export default Router;