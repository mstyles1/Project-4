# Thasher's Skater of the Year Quiz 

This website allows users to test their knowledge of the Thrasher Skateboard Magazine's Yearly Award for Skater of the Year. 

## Features

Users must first sign up or log in with a username and password.

![signup.png](/images/signup.png)

![login.png](/images/login.png)

In the quiz, users are prompted with a year and they must respond with the corresponding winner of Skater of the Year.

![quiz.png](/images/qiuz.png)

Users can add ther own skaters to the quiz.

# The Skater of the Year (SOTY) Database Holds the Data for Each Skater along with the site's users.

![mysql-dboverview.png](/images/mysql-dboverview.png)

![mysql-answers.png](/images/mysql-answers.png)

![mysql-questions.png](/images/mysql-questions.png)

## Technologies Used
- Node.js
- Express.js
- React
- React Router
- MySql
- API
- Axios
- Bootstrap
- CORS


# Wireframes

![wireframe-quiz.png](/images/wireframe.png)

![wireframe-login.png](/images/wireframe.png)

![wireframe-signup.png](/images/wireframe.png)

# Soty Database

- CREATE TABLE `answers` (
  `answer_id` int DEFAULT NULL,
  `question_id` int NOT NULL,
  `answer_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# Future Improvements
 - Full Functionality
 - CSS for styling navbar and forms
 - More Biography infor in Mysq Tables 

