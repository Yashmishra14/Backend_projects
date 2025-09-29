# Simple Group Chat Application

A basic group chat application with user authentication and messaging functionality.

## Features

- **User Authentication**: Login and registration system
- **Group Messaging**: Send and receive messages in group chat
- **Route Management**: Organized routing structure
- **Basic UI**: Simple HTML interface for chat functionality

## Tech Stack

- **Backend**: Node.js, Express.js
- **Middleware**: Body-parser
- **Development**: Nodemon
- **Frontend**: HTML, JavaScript

## Project Structure

```
Simple Group Chat Application/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── Routes/                # Route definitions
│   ├── index.js          # Main routes
│   ├── login.js          # Authentication routes
│   └── message.txt       # Message storage/logging
└── node_modules/         # Dependencies
```

## Installation

1. **Prerequisites**:
   - Node.js (v14 or higher)
   - npm or yarn

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`

## Usage

### Available Routes

#### Authentication Routes (`/Routes/login.js`)
- `GET /login` - Login page
- `POST /login` - User login
- `GET /register` - Registration page
- `POST /register` - User registration

#### Main Routes (`/Routes/index.js`)
- `GET /` - Home page
- `GET /chat` - Chat interface
- `POST /send-message` - Send message
- `GET /messages` - Get messages

### Chat Functionality

1. **User Registration/Login**:
   - Users can register with username and password
   - Existing users can login to access chat

2. **Group Chat**:
   - All users can see messages from other users
   - Real-time messaging (basic implementation)
   - Message history display

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./Routes/login');
const indexRoutes = require('./Routes/index');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use(loginRoutes);
app.use(indexRoutes);

// Error handling
app.use('/', (req, res) => {
    res.status(404).send('<h1>404 Page not found</h1>');
});

app.listen(3000);
```

### Route Structure

#### Login Routes (`Routes/login.js`)
- User authentication logic
- Registration and login forms
- Session management

#### Index Routes (`Routes/index.js`)
- Main application routes
- Chat functionality
- Message handling

## Database/Storage

The application uses file-based storage:
- `message.txt`: Stores chat messages
- User data is stored in memory (for basic implementation)

## Frontend Interface

The application includes HTML templates for:
- User registration form
- Login form
- Chat interface
- Message display

## Development

### Adding New Features
1. Create new routes in appropriate route files
2. Add corresponding HTML templates
3. Implement client-side JavaScript for interactivity
4. Update the main application file

### Message Storage
- Messages are stored in `message.txt`
- Consider implementing database storage for production
- Add message persistence and retrieval logic

### User Management
- Basic user authentication
- Consider implementing proper session management
- Add password hashing for security

## Security Considerations

For production use, consider implementing:
- Password hashing (bcrypt)
- Session management
- Input validation and sanitization
- CSRF protection
- Rate limiting

## Limitations

This is a basic implementation with:
- No real-time updates (WebSocket)
- File-based storage (not suitable for production)
- Basic authentication (no security features)
- No message persistence across server restarts

## Future Enhancements

- WebSocket integration for real-time messaging
- Database integration for persistent storage
- User profiles and avatars
- Private messaging
- Message encryption
- File sharing capabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
