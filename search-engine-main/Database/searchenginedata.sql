-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2023 at 04:07 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `searchenginedata`
--
CREATE DATABASE IF NOT EXISTS `searchenginedata` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `searchenginedata`;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `employeeId` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `WorkTitle` varchar(30) NOT NULL,
  `ImageUrl` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employeeId`, `Name`, `WorkTitle`, `ImageUrl`) VALUES
(1, 'Yuval Peretz', 'Full Stack Developer', 'https://picsum.photos/200'),
(2, 'Oz Shalem', '.Net Developer', 'https://picsum.photos/200'),
(3, 'Bart Simpson', 'Java Developer', 'https://picsum.photos/200'),
(4, 'Ofir Doron', 'Full Stack Developer', 'https://picsum.photos/200'),
(5, 'Itay Tamir', 'IT manager', 'https://picsum.photos/200'),
(6, 'Tal Gravinoski', 'QA', 'https://picsum.photos/200');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employeeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employeeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
