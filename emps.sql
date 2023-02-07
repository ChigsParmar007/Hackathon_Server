-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2022 at 11:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emps`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `cityid` int(11) NOT NULL,
  `cityname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cityid`, `cityname`) VALUES
(1, 'Surat'),
(2, 'Ahmedabad'),
(3, 'Vadodara'),
(4, 'Rajkot'),
(5, 'Bhavnagar');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` int(11) NOT NULL,
  `Designation_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `Designation_name`) VALUES
(1, 'Office Assistant'),
(2, 'Deputy section Officer'),
(3, 'Under Secretary'),
(4, 'Deputy secretary Officer'),
(5, 'Joint Secretary');

-- --------------------------------------------------------

--
-- Table structure for table `empeducation`
--

CREATE TABLE `empeducation` (
  `id` int(11) NOT NULL,
  `empid` int(11) NOT NULL,
  `10th_precentage` float NOT NULL,
  `10th_pass` int(4) NOT NULL,
  `12th_percentage` float NOT NULL,
  `12th_pass` int(11) NOT NULL,
  `graduation` varchar(4) NOT NULL,
  `graduation_percantage` float NOT NULL,
  `graduation_date` int(4) NOT NULL,
  `hindi` varchar(3) NOT NULL,
  `english` varchar(3) NOT NULL,
  `ccc` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empeducation`
--

INSERT INTO `empeducation` (`id`, `empid`, `10th_precentage`, `10th_pass`, `12th_percentage`, `12th_pass`, `graduation`, `graduation_percantage`, `graduation_date`, `hindi`, `english`, `ccc`) VALUES
(1, 13, 92, 2009, 89, 2011, 'MCA', 96, 2014, 'Hin', 'Eng', 'CCC');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `empid` int(11) NOT NULL,
  `empname` varchar(20) NOT NULL,
  `mid` int(11) NOT NULL,
  `oid` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `addressline_1` varchar(30) NOT NULL,
  `addressline_2` varchar(30) NOT NULL,
  `city` varchar(20) NOT NULL,
  `postal_code` int(6) NOT NULL,
  `date_of_joining` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`empid`, `empname`, `mid`, `oid`, `gender`, `email`, `phone`, `addressline_1`, `addressline_2`, `city`, `postal_code`, `date_of_joining`) VALUES
(13, 'Ravi', 11, 11, 'Male', 'ravi@gmail.com', '75859698696', 'ahmedabad', 'ahmedabad', 'ahmedabad', 468596, '2016-08-16'),
(14, 'Keval', 11, 10, 'Male', 'keval@gmail.com', '7895965854', 'BOtad', 'BOtad', 'BOtad', 637410, '2019-05-09');

-- --------------------------------------------------------

--
-- Table structure for table `emppromotion`
--

CREATE TABLE `emppromotion` (
  `promotionid` int(11) NOT NULL,
  `empid` int(11) NOT NULL,
  `exam_date` date NOT NULL,
  `Designation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emppromotion`
--

INSERT INTO `emppromotion` (`promotionid`, `empid`, `exam_date`, `Designation`) VALUES
(1, 13, '2022-10-08', 3),
(2, 14, '2022-10-08', 2);

-- --------------------------------------------------------

--
-- Table structure for table `ministry`
--

CREATE TABLE `ministry` (
  `mid` int(11) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `minister` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `oyear` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ministry`
--

INSERT INTO `ministry` (`mid`, `mname`, `minister`, `email`, `contact`, `username`, `password`, `oyear`) VALUES
(11, 'Human Resource', 'chirag parmar', 'chiragparmar@gmail.com', '9081725253', 'chirag', 'chirag123', 1954),
(12, 'Education', 'Harsh Viradiya', 'harshviradiya@gmail.com', '7083625250', 'harsh', 'harsh123', 1960),
(13, 'Water', 'Krishna Viradiya', 'krishnaviradiya@gmail.com', '9012536360', 'krishna', 'krishna123', 2017),
(14, 'Electricity', 'Kenil Bhikadiya', 'kenilbhikadiya@gmail.com', '8071425253', 'kenil', 'kenil123', 2021);

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `oid` int(11) NOT NULL,
  `oname` varchar(255) NOT NULL,
  `mid` int(11) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `office`
--

INSERT INTO `office` (`oid`, `oname`, `mid`, `city`) VALUES
(10, 'HRD', 11, '1'),
(11, 'Ward-1', 11, '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`cityid`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `empeducation`
--
ALTER TABLE `empeducation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_edu_employee` (`empid`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`empid`),
  ADD KEY `fk_emp_ministry` (`mid`),
  ADD KEY `fk_emp_office` (`oid`);

--
-- Indexes for table `emppromotion`
--
ALTER TABLE `emppromotion`
  ADD PRIMARY KEY (`promotionid`),
  ADD KEY `fk_emp_promotion` (`empid`),
  ADD KEY `fk_pro_desi` (`Designation`);

--
-- Indexes for table `ministry`
--
ALTER TABLE `ministry`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `fk_off_mins` (`mid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `cityid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `empeducation`
--
ALTER TABLE `empeducation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `empid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `emppromotion`
--
ALTER TABLE `emppromotion`
  MODIFY `promotionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ministry`
--
ALTER TABLE `ministry`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `office`
--
ALTER TABLE `office`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `empeducation`
--
ALTER TABLE `empeducation`
  ADD CONSTRAINT `fk_edu_employee` FOREIGN KEY (`empid`) REFERENCES `employee` (`empid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_emp_ministry` FOREIGN KEY (`mid`) REFERENCES `ministry` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_emp_office` FOREIGN KEY (`oid`) REFERENCES `office` (`oid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `emppromotion`
--
ALTER TABLE `emppromotion`
  ADD CONSTRAINT `fk_emp_promotion` FOREIGN KEY (`empid`) REFERENCES `employee` (`empid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pro_desi` FOREIGN KEY (`Designation`) REFERENCES `designations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `office`
--
ALTER TABLE `office`
  ADD CONSTRAINT `fk_off_mins` FOREIGN KEY (`mid`) REFERENCES `ministry` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
