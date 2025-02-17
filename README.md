# Thasher's Skater of the Year Quiz 

This website allows users to test their knowledge of the Thrasher Skateboard Magazine's Yearly Award for Skater of the Year. 

## Features

Users must first sign up or log in with a username and password.

![signup.png](/images/signup.png)

![login.png](/images/login.png)

In the quiz, users are prompted with a year and they must respond with the corresponding winner of Skater of the Year. They click to reveal the answer and verify their knowledge.

![quiz.png](/images/qiuz.png)

Users can add or remove a new Skater of the Year.

![add-delete.png](/images/add-delete.png)

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

![wireframe-login.png](/images/wireframe-login.png)

![wireframe-quiz.png](/images/wireframe-quiz.png)

![wireframe-signup.png](/images/wireframe-signup.png)

# Skater of the Year (SOTY) Database

- CREATE TABLE `answers` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `answer_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`answer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

- CREATE TABLE `questions` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `question_year` int NOT NULL,
  PRIMARY KEY (`question_id`),
  UNIQUE KEY `unique_year` (`question_year`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

- CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

- INSERT INTO answers (question_id, answer_name) VALUES
(1990, 'Tony Hawk'),
(1991, 'Danny Way'),
(1992, 'John Cardiel'),
(1993, 'Salman Agah'),
(1994, 'Mike Carroll'),
(1995, 'Chris Senn'),
(1996, 'Eric Koston'),
(1997, 'Bob Burnquist'),
(1998, 'Andrew Reynolds'),
(1999, 'Brian Anderson'),
(2000, 'Geoff Rowley'),
(2001, 'Arto Saari'),
(2002, 'Tony Trujillo'),
(2003, 'Mark Appleyard'),
(2004, 'Danny Way'),
(2005, 'Chris Cole'),
(2006, 'Daewon Song'),
(2007, 'Marc Johnson'),
(2008, 'Silas Baxter-Neal'),
(2009, 'Chris Cole'),
(2010, 'Leo Romero'),
(2011, 'Grant Taylor'),
(2012, 'David Gonzalez');

# Future Improvements
 - Social media and forum components like user bios, comment boards, and favorites tabs. 
 - More columns for bios inluding more stats for each skater to create more interactivity.
 - CSS for styling navbar and forms

