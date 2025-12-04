import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

router.post(
  '/signup',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters',
      });
    }

    const existingUser = await query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await query('INSERT INTO users (email, password_hash) VALUES (?, ?)', [
      email,
      hashedPassword,
    ]);

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
    });
  })
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    const users = await query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({ userId: user.user_id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        userId: user.user_id,
        email: user.email,
      },
    });
  })
);

export default router;
