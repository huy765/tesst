-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: webthaotran
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCustomer` int NOT NULL,
  `idMGG` int DEFAULT NULL,
  `stateCard` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (4,3,5,1),(5,3,5,2),(6,3,5,1),(7,4,5,1),(8,4,5,1);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameCategory` (`nameCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'????? ??i???n t???','1','????? ??i???n t???'),(2,'????? gia d???ng','2','????? gia d???ng'),(4,'????? ??i???n l???nh','5','1'),(5,'????? ??i???n l???nh11','4','1'),(6,'????? ??i???n l???nh10','5','1'),(7,'????? ??i???n l???nh4','5','1');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `sex` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(200) NOT NULL,
  `statusLock` int NOT NULL,
  `dateOfBirth` date NOT NULL,
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (2,'?????ng Th??? H???i Nh???t','N???','hainhaAtdmin@gmail.com','9876543210','T??y S??n Ki???n X????ng Th??i B??nh','hainhat','$argon2i$v=19$m=4096,t=3,p=1$/ziRabvXKFdFgt0jHF3IGg$yoiLgiAVt2jM0wj0FcXEA9YdlcMInpIBmesUoK79a6E',0,'1999-02-27',1,'2022-04-26 16:04:46'),(3,'huy','Nam','huyy1@gmail.com','0868313255','T??y S??n Ki???n X????ng Th??i B??nh','huy','$argon2i$v=19$m=4096,t=3,p=1$BlTRDWAP/QCIZrydgSWU4g$SPFvmRbU+kRmvi8Z8JHC0qJ6Zqxx9mtcZvIGaOOUFVE',0,'1999-03-23',1,'2022-04-30 23:54:44'),(4,'qhuy','Nam','huy11@gmail.com','08683123255','T??y S??n Ki???n X????ng Th??i B??nh','quochuy','$argon2i$v=19$m=4096,t=3,p=1$tD45uz9azMocSox0OLlBpQ$I6K6nCu3/rtgB1z2C+Evhva6TMvWwmLde+tWNFs6Khs',0,'1999-03-23',1,'2022-04-30 23:56:48');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `ImageFeedback` varchar(200) NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ImageFeedback` (`ImageFeedback`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameOrigin` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameOrigin` (`nameOrigin`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origin`
--

LOCK TABLES `origin` WRITE;
/*!40000 ALTER TABLE `origin` DISABLE KEYS */;
INSERT INTO `origin` VALUES (1,'H???i ph??ng','ki???n an'),(2,'Thanh H??a','h?? trung'),(4,'Vinh','vinh');
/*!40000 ALTER TABLE `origin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameRole` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameRole` (`nameRole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrators','Quy???n cho qu???n tr??? vi??n'),(2,'Customer','Quy???n d??nh cho kh??ch h??ng'),(3,'Employee','Quy???n d??nh cho nh??n vi??n');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameUnit` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameUnit` (`nameUnit`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'c??i','????n v??? t??nh b???ng c??i'),(2,'h???p','????n v??? t??nh b???ng h???p'),(4,'chi???c','????n v??? t??nh b???ng chi???c');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(150) NOT NULL,
  `sex` varchar(50) DEFAULT '',
  `dateOfBirth` date DEFAULT '1980-09-12',
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL DEFAULT (_utf8mb4''),
  `statusLock` int NOT NULL DEFAULT (1),
  `countOrder` int DEFAULT (0),
  `totalMonny` double DEFAULT (0),
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `nameAvata` varchar(150) DEFAULT (_utf8mb4'default.jpg'),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'?????ng th??? h???i nh???t','hainhat','$argon2i$v=19$m=4096,t=3,p=1$/FbnngqHRGKNUvkFyOpTjw$RoZNoyPkGuNvqBQ7bBulTY4pfeNVd0tbNa62cBvA8ak',NULL,NULL,'hainhat@gmail.com','086833ds546','T??y S??n Ki???n X????ng Th??i B??nh',1,0,0,2,'2022-04-30 09:45:11',NULL),(4,'?????ng th??? h???i nh???t','xuanquy1','$argon2i$v=19$m=4096,t=3,p=1$xYRpGl/tsSZH6i4ZCpRGAA$To6xuKEJQRT4c3z55PPlW5uXug7xNQHpBEf5Qg9qcRc',NULL,NULL,'hxuanquy@gmail.com','54654664','T??y S??n Ki???n X????ng Th??i B??nh',1,0,0,2,'2022-04-30 10:09:05',NULL),(5,'L?? Qu???c Huy','admin','$argon2i$v=19$m=4096,t=3,p=1$xYRpGl/tsSZH6i4ZCpRGAA$To6xuKEJQRT4c3z55PPlW5uXug7xNQHpBEf5Qg9qcRc','Nam','1980-09-12','huy@gmail.com','123456789','H???i Ph??ng',0,0,0,2,'2022-04-30 23:21:28','default.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-04 15:49:07
