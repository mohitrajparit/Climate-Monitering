-- Create the database
CREATE DATABASE Sensor_data;

-- Use the newly created database
USE sensor_data;

-- Create the readings table
CREATE TABLE readings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temperature FLOAT NOT NULL,
    co2_level FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    ppm FLOAT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert two rows of random data into the readings table
INSERT INTO readings (temperature, co2_level, humidity, ppm)
VALUES
(26.5, 440.1, 58.2, 780.0),
(25.3, 430.7, 62.5, 810.0);
