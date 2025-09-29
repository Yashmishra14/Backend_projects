# Node.js Basic Application

A simple Node.js application demonstrating basic Express.js concepts and routing.

## Features

- **Basic Express.js Setup**: Simple Express.js application structure
- **Route Handling**: Basic GET and POST route handling
- **Middleware**: Body-parser middleware for form data
- **Development Tools**: Nodemon for development

## Tech Stack

- **Backend**: Node.js, Express.js
- **Middleware**: Body-parser
- **Development**: Nodemon

## Project Structure

```
Nodejs-As-6/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── Hello.txt              # Sample text file
└── script.js              # Additional JavaScript file
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
   # or
   npm run hello
   ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`

## Usage

### Available Scripts

- `npm start` - Start the application with nodemon (development mode)
- `npm run hello` - Start the application with node (production mode)
- `npm test` - Run tests (currently not implemented)

### Basic Functionality

The application provides a basic Express.js setup with:
- Simple route handling
- Body-parser middleware
- Basic server configuration

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Package Configuration (`package.json`)
```json
{
  "name": "nodejs-as-6",
  "version": "1.0.0",
  "description": "This is default discription",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "hello": "node app.js"
  },
  "author": "Mr Bipin Singh",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2"
  }
}
```

## Development

### Adding New Routes
1. Add new route handlers in `app.js`
2. Use appropriate HTTP methods (GET, POST, PUT, DELETE)
3. Implement route logic and responses

### Adding Middleware
1. Install required middleware packages
2. Configure middleware in `app.js`
3. Use middleware before route definitions

### Development vs Production
- **Development**: Use `npm start` with nodemon for auto-restart
- **Production**: Use `npm run hello` with node for production deployment

## Learning Objectives

This project demonstrates:
- Basic Express.js setup
- Route handling
- Middleware usage
- Package.json configuration
- Development vs production scripts
- Basic Node.js application structure

## File Descriptions

### `app.js`
Main application file containing:
- Express.js setup
- Middleware configuration
- Route definitions
- Server startup

### `Hello.txt`
Sample text file for demonstration purposes.

### `script.js`
Additional JavaScript file (purpose depends on implementation).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
