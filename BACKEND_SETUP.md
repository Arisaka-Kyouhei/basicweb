# Backend Setup Guide

## Overview
This Express.js backend server connects to an external MySQL database and provides RESTful APIs for the dark theme gaming website.

## Prerequisites
- Node.js (v16 or higher)
- MySQL Server (v5.7 or higher)
- npm or yarn

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up MySQL Database**

   Create a new MySQL database:
   ```sql
   CREATE DATABASE game_db;
   ```

   Then run the schema file to create tables:
   ```bash
   mysql -u root -p game_db < server/schema.sql
   ```

3. **Configure Environment Variables**

   Copy the example file and update with your MySQL credentials:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=game_db
   JWT_SECRET=your-secure-secret-key
   PORT=5000
   ```

## Running the Server

**Development Mode (with auto-reload):**
```bash
npm run server:dev
```

**Production Mode:**
```bash
npm run server
```

The server will start on `http://localhost:5000`

## Health Check
```bash
curl http://localhost:5000/health
```

## API Endpoints

### Authentication

**Sign Up**
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Data Endpoints

**Get Events**
```bash
GET /api/events
```

**Get Songs (with pagination)**
```bash
GET /api/songs?page=1&limit=10
```

**Get Game Centers**
```bash
GET /api/gamecenters
```

**Search Songs**
```bash
GET /api/search/songs?q=neon
```

## Database Schema

### users
- `user_id` (INT, PRIMARY KEY)
- `email` (VARCHAR, UNIQUE)
- `password_hash` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### events
- `event_id` (INT, PRIMARY KEY)
- `event_title` (VARCHAR)
- `event_detail` (TEXT)
- `event_start_date` (DATE)
- `event_end_date` (DATE)
- `created_at` (TIMESTAMP)

### songs
- `song_id` (INT, PRIMARY KEY)
- `song_name` (VARCHAR)
- `artist_name` (VARCHAR)
- `pattern_difficulty` (VARCHAR)
- `pattern_lv` (INT)
- `players_best_score` (INT)
- `player_name` (VARCHAR)
- `clear_type` (VARCHAR)
- `song_jacket_url` (VARCHAR)
- `dlc_required_name` (VARCHAR)
- `clear_video_link` (VARCHAR)
- `created_at` (TIMESTAMP)

### game_centers
- `gamecenter_id` (INT, PRIMARY KEY)
- `gamecenter_name` (VARCHAR)
- `gamecenter_locate` (VARCHAR)
- `distance_km` (DECIMAL)
- `created_at` (TIMESTAMP)

## Error Handling

The server includes comprehensive error handling:
- Validation errors (400)
- Unauthorized access (401)
- Duplicate entries (409)
- Server errors (500)

All responses follow this format:
```json
{
  "success": true/false,
  "message": "Status message",
  "data": {}
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- SQL injection prevention via parameterized queries
- CORS support for frontend integration
- Connection pooling for efficient database access

## Troubleshooting

**Connection Failed**
- Verify MySQL is running: `mysql -u root -p`
- Check `.env` file credentials
- Ensure database `game_db` exists

**Port Already in Use**
- Change PORT in `.env` file
- Or kill existing process: `lsof -i :5000`

**Missing Tables**
- Run schema.sql again: `mysql -u root -p game_db < server/schema.sql`

## Frontend Integration

Update your frontend API calls to point to the backend:

```typescript
const API_URL = 'http://localhost:5000/api';

// Example: Login
const response = await fetch(`${API_URL}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

## Notes

- The server uses a connection pool (max 10 connections)
- Requests include automatic logging with timestamps
- JWT tokens expire after 7 days
- Search is case-insensitive with wildcard matching
