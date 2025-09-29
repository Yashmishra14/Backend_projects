# Daily Expense Tracker

A comprehensive expense tracking application with premium features, payment integration, and advanced user management.

## Features

- **User Authentication**: Secure user registration and login
- **Expense Management**: Add, edit, delete, and categorize expenses
- **Premium Features**: Advanced analytics and reporting
- **Payment Integration**: Razorpay payment gateway for premium subscriptions
- **File Downloads**: Export expense data in various formats
- **Password Recovery**: Secure password reset functionality
- **Email Notifications**: Sendinblue API integration for email services
- **Security**: Helmet for security headers, bcrypt for password hashing
- **Logging**: Morgan for request logging

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: bcrypt for password hashing
- **Payment**: Razorpay integration
- **Email**: Sendinblue API
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Compression**: Gzip compression

## Project Structure

```
DailyExpenseTracker/
├── app.js                    # Main application file
├── database.js               # Database configuration
├── Controller/               # Route controllers
│   ├── expense.js           # Expense management
│   ├── password.js          # Password recovery
│   ├── premium.js           # Premium features
│   ├── purchase.js          # Payment processing
│   ├── signUp.js            # User registration
│   └── user.js              # User management
├── Middleware/              # Custom middleware
│   ├── email.js             # Email validation
│   └── expense.js           # Expense validation
├── Models/                  # Database models
│   ├── Expense.js           # Expense model
│   ├── FileDownload.js      # File download tracking
│   ├── ForgotPasswordRequest.js # Password reset requests
│   ├── Order.js             # Payment orders
│   ├── SumExpense.js        # Expense summaries
│   └── User.js              # User model
├── Routes/                  # Route definitions
│   ├── expense.js           # Expense routes
│   ├── password.js          # Password routes
│   ├── premium.js           # Premium routes
│   ├── purchase.js          # Purchase routes
│   ├── signUp.js            # Signup routes
│   └── user.js              # User routes
├── Templates/               # Frontend templates
│   ├── Expense/             # Expense management UI
│   ├── ForgetPassword/      # Password reset UI
│   ├── Login/               # Login UI
│   └── SignUp/              # Registration UI
└── Utils/                   # Utility functions
    └── MailService.js       # Email service
```

## Installation

1. **Prerequisites**:
   - Node.js (v14 or higher)
   - MySQL database
   - npm or yarn

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file with the following variables:
   ```
   APP_PORT=3000
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   SENDINBLUE_API_KEY=your_sendinblue_api_key
   ```

4. **Database Setup**:
   - Create a MySQL database
   - Update database configuration in `database.js`
   - The application will automatically create tables on first run

## Usage

1. **Start the Application**:
   ```bash
   npm start
   ```

2. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`
   - Register a new account or login with existing credentials

## API Endpoints

### User Management
- `POST /User/signup` - User registration
- `POST /User/login` - User login
- `GET /User/getUser` - Get user details

### Expense Management
- `POST /Expense/addExpense` - Add new expense
- `GET /Expense/getExpenses` - Get user expenses
- `POST /Expense/deleteExpense/:id` - Delete expense
- `POST /Expense/editExpense/:id` - Edit expense

### Premium Features
- `GET /Premium/showLeaderBoard` - Show leaderboard
- `GET /Premium/download` - Download expense data
- `GET /Premium/getAllExpenses` - Get all expenses for premium users

### Payment Processing
- `POST /Purchase/purchasePremium` - Purchase premium subscription
- `POST /Purchase/updateTransactionStatus` - Update payment status

### Password Recovery
- `POST /Password/forgotpassword` - Request password reset
- `POST /Password/resetpassword/:id` - Reset password

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (String)
- `email` (String, Unique)
- `password` (String, Hashed)
- `isPremium` (Boolean)

### Expenses Table
- `id` (Primary Key)
- `amount` (Decimal)
- `description` (String)
- `category` (String)
- `userId` (Foreign Key)

### Orders Table
- `id` (Primary Key)
- `orderId` (String)
- `status` (String)
- `userId` (Foreign Key)

### ForgotPasswordRequests Table
- `id` (Primary Key)
- `isActive` (Boolean)
- `userId` (Foreign Key)

### FileDownloads Table
- `id` (Primary Key)
- `url` (String)
- `userId` (Foreign Key)

## Key Features Explained

### 1. User Authentication
- Secure password hashing with bcrypt
- JWT-based authentication
- Password recovery system

### 2. Expense Management
- CRUD operations for expenses
- Category-based organization
- User-specific expense tracking

### 3. Premium Features
- Leaderboard functionality
- Data export capabilities
- Advanced analytics

### 4. Payment Integration
- Razorpay payment gateway
- Premium subscription management
- Transaction status tracking

### 5. Security Features
- Helmet for security headers
- CORS configuration
- Input validation and sanitization

### 6. Email Services
- Sendinblue API integration
- Password reset emails
- Notification system

## Frontend Templates

The application includes HTML templates for:
- User registration and login
- Expense management interface
- Password recovery forms
- Premium features dashboard

## Development

### Adding New Features
1. Create new routes in appropriate route files
2. Add corresponding controllers
3. Update models if database changes are needed
4. Create/update HTML templates

### Database Migrations
The application uses Sequelize's `sync()` method for database synchronization. For production, consider using proper migrations.

## Security Considerations

- Passwords are hashed using bcrypt
- Security headers are set using Helmet
- CORS is properly configured
- Input validation is implemented
- SQL injection protection through Sequelize ORM

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
