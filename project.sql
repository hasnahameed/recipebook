-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2025 at 01:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `conta`
--

CREATE TABLE `conta` (
  `id` int(30) NOT NULL,
  `Recipe` varchar(20) NOT NULL,
  `email2` varchar(20) NOT NULL,
  `Ingredients` text NOT NULL,
  `Instructions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conta`
--

INSERT INTO `conta` (`id`, `Recipe`, `email2`, `Ingredients`, `Instructions`) VALUES
(3, 'dinner', 'hasna@gmail.com', 'ssssssssss', 'sssssssssssssssss'),
(4, 'chappathi', 'hatya@gmail.com', 'hddwd du', 'llllllll mmmmmddddddd\r\n\r\nsssssssssssssssssssssssssssssssssssss'),
(5, 'chappathi', 'hatya@gmail.com', 'ssssssssss', 'sssssssssssssssss'),
(6, 'chocolate cake', 'hasna@gmail.com', 'ssssssssss', 'sssssssssssssssss'),
(8, 'chocolate cake', 'hasna@gmail.com', 'ssssssssss', 'sssssssssssssssss'),
(16, 'dinner', 'raslazee9148@gmail.c', 'nnj', 'kkk'),
(24, 'pie', 'hasna@gmail.com', 'kkkkkk', 'llllllllllllllllllllllll'),
(25, 'pie', 'hasna@gmail.com', 'ddddddddddddddd', 'hhhhhhhhhhhh');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username1` varchar(20) NOT NULL,
  `email1` varchar(20) NOT NULL,
  `password1` varchar(20) NOT NULL,
  `password2` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username1`, `email1`, `password1`, `password2`) VALUES
('jjjjjj', 'fh518316@gmail.com', 'kkkk', 'kkkk'),
('hasna', 'hasna@gmail.com', 'hasnaham', 'hasnaham'),
('hhhh', 'hasnahameed654@gmail', 'llll', 'llll'),
('hathee', 'hathee@gmail.com', 'hathee', 'hathee'),
('hathiyaBanu', 'hathi@gmail.com', 'hathi', 'hathi'),
('hathiya', 'hathiya@gmail.com', 'hathiya', 'hathiya'),
('hattta', 'hattta@gmail.com', 'hattta', 'hattta'),
('hatya', 'hatya@gmail.com', 'hatya', 'hatya'),
('kkkk', 'jjj@gmail.com', 'jjjj', 'jjjj'),
('hasna1', 'kk1023@gmail.com', 'lll', 'lll');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conta`
--
ALTER TABLE `conta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`email1`),
  ADD UNIQUE KEY `username1` (`username1`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conta`
--
ALTER TABLE `conta`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
