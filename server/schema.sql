-- Users Table
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  event_id INT AUTO_INCREMENT PRIMARY KEY,
  event_title VARCHAR(255) NOT NULL,
  event_detail TEXT,
  event_start_date DATE NOT NULL,
  event_end_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_dates (event_start_date, event_end_date)
);

-- Songs Table
CREATE TABLE IF NOT EXISTS songs (
  song_id INT AUTO_INCREMENT PRIMARY KEY,
  song_name VARCHAR(255) NOT NULL,
  artist_name VARCHAR(255),
  pattern_difficulty VARCHAR(50),
  pattern_lv INT,
  players_best_score INT,
  player_name VARCHAR(255),
  clear_type VARCHAR(50),
  song_jacket_url VARCHAR(500),
  dlc_required_name VARCHAR(255),
  clear_video_link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_song_name (song_name),
  INDEX idx_artist_name (artist_name)
);

-- Game Centers Table
CREATE TABLE IF NOT EXISTS game_centers (
  gamecenter_id INT AUTO_INCREMENT PRIMARY KEY,
  gamecenter_name VARCHAR(255) NOT NULL,
  gamecenter_locate VARCHAR(500) NOT NULL,
  distance_km DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_distance (distance_km)
);

-- Insert Sample Data
INSERT INTO users (email, password_hash) VALUES
  ('user@example.com', '$2a$10$example_hash_1'),
  ('admin@example.com', '$2a$10$example_hash_2');

INSERT INTO events (event_title, event_detail, event_start_date, event_end_date) VALUES
  ('New Year Challenge', 'Celebrate the new year with special challenges', '2024-01-01', '2024-01-31'),
  ('Spring Festival', 'Experience spring-themed events', '2024-03-01', '2024-03-31'),
  ('Summer Carnival', 'Summer arcade carnival with prizes', '2024-06-01', '2024-08-31'),
  ('Halloween Spooktacular', 'Scary themed arcade games', '2024-10-01', '2024-10-31');

INSERT INTO songs (song_name, artist_name, pattern_difficulty, pattern_lv, players_best_score, player_name, clear_type, dlc_required_name) VALUES
  ('Neon Dreams', 'Synthwave Masters', 'Hard', 8, 999999, 'ProPlayer1', 'FC', 'Premium DLC Pack'),
  ('Electric Pulse', 'Beat Architects', 'Medium', 6, 998888, 'GameMaster2', 'Clear', 'Standard DLC Pack'),
  ('Digital Horizon', 'Cyber Sounds', 'Hard', 7, 997777, 'EliteGamer', 'FC', 'Premium DLC Pack'),
  ('Rainbow Road', 'Neon Velocity', 'Easy', 4, 996666, 'Casual Player', 'Clear', 'Free Pack'),
  ('Quantum Leap', 'Future Beats', 'Extreme', 10, 1000000, 'Legend', 'PFC', 'Ultimate DLC Pack');

INSERT INTO game_centers (gamecenter_name, gamecenter_locate, distance_km) VALUES
  ('Arcade Paradise', 'Seoul, Gangnam District, Street 123', 0.5),
  ('Game Zone Tokyo', 'Seoul, Hongdae Area, Street 456', 1.2),
  ('Cyber Arcade', 'Seoul, Itaewon District, Street 789', 2.8),
  ('Retro Gaming Hub', 'Seoul, Sinchon Area, Street 321', 3.5),
  ('Future Arcade', 'Seoul, Myeongdong District, Street 654', 4.1);
