-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2016 at 07:18 PM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guestbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `addvisitor`
--

CREATE TABLE `addvisitor` (
  `Visitor_id` int(100) NOT NULL,
  `VisitorFirstName` varchar(45) NOT NULL,
  `VisitorLastName` varchar(45) NOT NULL,
  `VisitorEmail` varchar(45) NOT NULL,
  `VisitorInTime` time NOT NULL,
  `VisitorOutTime` time NOT NULL DEFAULT '00:00:00',
  `Id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addvisitor`
--

INSERT INTO `addvisitor` (`Visitor_id`, `VisitorFirstName`, `VisitorLastName`, `VisitorEmail`, `VisitorInTime`, `VisitorOutTime`, `Id`) VALUES
(2, 'Piyush', 'Zalani', 'shanky.q3@gmail.com', '00:00:00', '00:00:00', 0),
(3, 'Saurabh', 'Mahajan', 'saurabh.mahajan@tudip.nl', '04:30:00', '15:30:00', 0),
(4, 'Amol', 'Deole', 'amol.deole@tudip.nl', '04:30:00', '15:30:00', 0),
(8, '', '', '', '00:00:00', '00:00:00', 0),
(9, '', '', '', '00:00:00', '00:00:00', 0),
(10, 'khbkj', '', '', '00:00:00', '00:00:00', 1),
(11, 'Piyu', '', '', '00:00:00', '00:00:00', 1),
(12, 'Piyush', '', '', '00:00:00', '00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `receptionist_register`
--

CREATE TABLE `receptionist_register` (
  `Id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receptionist_register`
--

INSERT INTO `receptionist_register` (`Id`, `user_name`, `email`, `password`) VALUES
(1, 'Piyush', 'piyush.zalani@tudip.nl', 'piyush123'),
(5, 'Rohit', 'rohit@gmail.com', 'rohit123'),
(6, 'Saurabh', 'saurabh.mahajan@tudip.com', 'saurabh123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addvisitor`
--
ALTER TABLE `addvisitor`
  ADD PRIMARY KEY (`Visitor_id`);

--
-- Indexes for table `receptionist_register`
--
ALTER TABLE `receptionist_register`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addvisitor`
--
ALTER TABLE `addvisitor`
  MODIFY `Visitor_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `receptionist_register`
--
ALTER TABLE `receptionist_register`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
