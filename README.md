How to run the app locally? 
To run this app locally firstly ensure that your machine is prepared with dependencies, tools and a platform to run it.

- Download the code zip file through the GitHub Repository (Frontend https://github.com/deepanshuj12/Pastebin-Frontend
  & Backend https://github.com/deepanshuj12/Pastebin-backend ).
- Download all the dependencies required for the smooth operation of the code by running npm i in terminal.
- Once the node modules have been acquired, run both the code files on a code editing platform simultaneously by
  npm run start (frontend) and nodemon (backend).
- View the page running on http://localhost:3000 in your browser.


Persistance Layer Used?
The app has been built upon MERN tech Stack, Hence the persistence layer is managed by MongoDB and Node.JS, Express.JS . 
A persistence layer or Data Access Layer helps to map metadata out easily ensuring smooth functioning of retrieval,
creation, updation of data into the database. 

- MongoDB: This is the main database to store app data. It stores data in JSON format that aligns with Mern Stack's patterns 
 and removes the need for Object-Relational Mapping (ORM) layers common in traditional relational databases.
- Express.js and Node.js: These technologies form the serverside or middle tier of the application. The backend code, written in JavaScript, 
defines routes and controllers that handle HTTP requests from the client (React app) and perform CRUD (Create, Read, Update, Delete)
operations on the MongoDB database.


Any Important design decisions?
The application has been kept very fundamental to its usage and hence easy to navigate. The frontend is very stripped down to 
focus on the main functionalities like health check, paste link retrieval to ensure a fast paced application. 
