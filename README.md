# School Management API

A Node.js and Express-based API for managing school data and finding schools near a specific location using the Haversine formula.

## Features
- **Add School**: Add a new school with name, address, latitude, and longitude.
- **List Schools**: Retrieve a list of all schools sorted by their proximity to a user-provided coordinate.
- **Validation**: Strict input validation using `express-validator`.
- **MVC Architecture**: Organized structure with Models, Controllers, and Routes.

## Prerequisites
- Node.js installed.
- MySQL server running.

## Setup Instructions

### 1. Database Setup
Create a database named `school_management` and run the script in `src/config/schema.sql` to create the `schools` table.

```sql
CREATE DATABASE school_management;
USE school_management;
-- Run the contents of src/config/schema.sql
```

### 2. Environment Variables
Create a `.env` file in the `server` directory by copying `.env.example` and updating it with your MySQL credentials:

```bash
cp .env.example .env
```

Or manually create `.env` with:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
```


### 3. Installation
```bash
cd server
npm install
```

### 4. Running the Server
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Documentation & Testing

A comprehensive **Postman Collection** has been created to facilitate testing and documentation for stakeholders.

### Postman Collection Features:
- **Comprehensive Coverage**: Includes requests for both `Add School` and `List Schools` APIs.
- **Example Requests**: Each request comes with pre-configured sample data and headers.
- **Documented Responses**: Includes saved examples of expected responses (Success/Error) for clear reference.
- **Easy Sharing**: The collection file is included in the root directory for stakeholders to import and test immediately.

### How to Test:
1. Import `school_management_api.postman_collection.json` into Postman.
2. Use the **Add School** request to populate the database.
3. Use the **List Schools** request (with `latitude` and `longitude` params) to verify the proximity sorting.


## Project Structure
- `src/config/`: Database connection and schema.
- `src/controllers/`: Business logic and distance calculation.
- `src/models/`: Database operations.
- `src/routes/`: API endpoint definitions.
- `src/index.js`: Main entry point.
