import mysql from 'mysql2/promise';

let pool;

export const initializePool = async (config) => {
  pool = mysql.createPool({
    host: config.host || process.env.DB_HOST || 'localhost',
    user: config.user || process.env.DB_USER || 'root',
    password: config.password || process.env.DB_PASSWORD || '',
    database: config.database || process.env.DB_NAME || 'game_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    console.log('Database connection established successfully');
    return pool;
  } catch (error) {
    console.error('Failed to connect to database:', error.message);
    throw error;
  }
};

export const getPool = () => {
  if (!pool) {
    throw new Error('Database pool not initialized');
  }
  return pool;
};

export const query = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, values);
    return results;
  } finally {
    connection.release();
  }
};

export const closePool = async () => {
  if (pool) {
    await pool.end();
  }
};
