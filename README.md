# NoteMate
Welcome to Notemake App! This is a simple note-taking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Notemake allows users to create, view, edit, and delete notes conveniently.

*Features*


Create Notes: Users can easily create new notes with a title, content, and optional tags for organization.

View Notes: Users can view all their notes on the dashboard, sorted by the most recent.

Edit Notes: Users can edit the title, content, and tags of their existing notes.

Delete Notes: Users can delete unwanted notes.

Responsive Design: The application is designed to work seamlessly across various devices and screen sizes.

**Installation**

Clone the repository: git clone https://github.com/pranjali22pandey/NoteMate.git

Navigate to the project directory: cd notemake-app

Install dependencies:

Backend: cd backend && npm install

Frontend: cd frontend && npm install

Set up environment variables:
Create a .env file in the backend directory.

*Define the following variables:*

MONGODB_URI: MongoDB connection URI

JWT_SECRET: Secret key for JWT authentication

Run the development server:
Backend: cd backend && npm start
Frontend: cd frontend && npm start

Access the application at http://localhost:3000 in your web browser.

Technologies Used

MongoDB: NoSQL database for storing user information and notes.

Express.js: Web application framework for Node.js, used for building the backend server.

React.js: JavaScript library for building user interfaces, used for the frontend.

Node.js: JavaScript runtime environment for executing server-side code.

JWT (JSON Web Tokens): Used for user authentication and authorization.

Axios: HTTP client for making API requests from the frontend to the backend.


Folder Structure

Copy code




notemake-app/
│
├── backend/                  # Backend server
│   ├── config/               # Configuration files
│   ├── controllers/          # Request handlers
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   └── ...
│
└── frontend/                 # Frontend React app
    ├── public/               # Static files
    ├── src/                  # Source files
    │   ├── components/       # React components
    │   ├── pages/            # Page components
    │   ├── services/         # API service functions
    │   └── ...
    └── ...
Contributing
Contributions are welcome! Feel free to open issues and pull requests to suggest improvements, report bugs, or add new features.

License
This project is licensed under the MIT License. See the LICENSE file for details.
