-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 20 avr. 2023 à 23:02
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `doctorapp`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id_admin` varchar(25) NOT NULL,
  `nom_admin` varchar(50) NOT NULL,
  `prenom_admin` varchar(50) NOT NULL,
  `email_admin` varchar(50) NOT NULL,
  `password_admin` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id_admin`, `nom_admin`, `prenom_admin`, `email_admin`, `password_admin`) VALUES
('A8778', 'Haitam', 'Benzinane', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `files`
--

CREATE TABLE `files` (
  `file_id` varchar(20) NOT NULL,
  `email_prsn` varchar(50) NOT NULL,
  `file_path` varchar(50) NOT NULL,
  `date_upload` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `files`
--

INSERT INTO `files` (`file_id`, `email_prsn`, `file_path`, `date_upload`) VALUES
('F1354', 'K@m.com', 'CIN_Recto_H_J.jpg', '2023-04-15 18:59:52'),
('F1666', 'Y@gmail.com', 'CIN_Verso_Y_Y.jpg', '2023-04-15 18:26:12'),
('F1841', 'Y@gmail.com', 'CIN_Recto_Y_Y.jpg', '2023-04-15 18:26:00'),
('F1909', 'H@g.co', 'CIN_Recto_Yy_O.jpg', '2023-04-15 18:41:24'),
('F1962', 'Y@gmail.com', 'CIN_Verso_Yy_Yy.jpg', '2023-04-15 18:13:43'),
('F2056', 'M@gmail.com', 'CIN_Recto_Aziz_Motmir.jpg', '2023-04-15 19:10:15'),
('F2058', 'G@ll.com', 'CIN_Verso_L_L.jpg', '2023-04-15 19:09:28'),
('F2258', 'Benzinane@gmail.com', 'CIN_Verso_Y_H.jpg', '2023-04-15 19:25:28'),
('F2623', '', 'CIN_Verso_Yy_Yy.jpg', '2023-04-15 17:54:37'),
('F2903', 'O@gmail.co', 'CIN_Verso_Jdj_Hh.jpg', '2023-04-15 18:37:39'),
('F3026', 'Y@gmail.com', 'CIN_Verso_M_M.jpg', '2023-04-16 18:12:36'),
('F3339', 'Y@gmail.com', 'CIN_Recto_Yy_Yy.jpg', '2023-04-15 18:13:21'),
('F4109', 'Haitam@k.com', 'Diplome_Haitam_Benziana .jpg', '2023-04-15 19:51:49'),
('F4494', 'W@gmail.com', 'CIN_Verso_Hh_Hh.jpg', '2023-04-15 18:22:02'),
('F4828', 'G@ll.com', 'CIN_Recto_L_L.jpg', '2023-04-15 19:07:23'),
('F4976', 'W@gmail.com', 'CIN_Verso_Hh_Hh.jpg', '2023-04-15 18:16:13'),
('F5447', 'Y@gmail.com', 'CIN_Verso_Yy_Yy.jpg', '2023-04-15 18:14:02'),
('F5780', '', 'CIN_Recto_Issam_Isam2.jpg', '2023-04-13 20:11:57'),
('F5802', 'K@gg.com', 'CIN_Recto_Kfkf_Kggk.jpg', '2023-04-15 19:39:08'),
('F5818', 'W@gmail.com', 'CIN_Verso_Hh_Hh.jpg', '2023-04-15 18:20:29'),
('F5854', 'E@gmail.com', 'CIN_Recto_Haitam_Benz.jpg', '2023-04-15 18:33:22'),
('F6005', 'H@g.co', 'CIN_Verso_Yy_O.jpg', '2023-04-15 18:42:03'),
('F6158', 'Haitam@k.com', 'CIN_Recto_Haitam_Benziana .jpg', '2023-04-15 19:51:01'),
('F6255', 'E@gmail.com', 'CIN_Verso_Haitam_Benz.jpg', '2023-04-15 18:33:35'),
('F7227', 'K@m.com', 'CIN_Verso_H_J.jpg', '2023-04-15 19:00:05'),
('F7817', 'Y@gmail.com', 'CIN_Recto_M_M.jpg', '2023-04-16 18:12:10'),
('F7972', 'M@gmail.com', 'CIN_Verso_Aziz_Motmir.jpg', '2023-04-15 19:11:32'),
('F8212', 'Haitam@k.com', 'CIN_Verso_Haitam_Benziana .jpg', '2023-04-15 19:51:32'),
('F8214', '', 'CIN_Recto_Yy_Yy.jpg', '2023-04-15 17:55:38'),
('F8219', 'K@m.com', 'CIN_Verso_H_J.jpg', '2023-04-15 18:50:45'),
('F8465', 'Y@gmail.com', 'CIN_Recto_Yy_Yy.jpg', '2023-04-15 18:14:00'),
('F8573', 'K@gg.com', 'CIN_Verso_Kfkf_Kggk.jpg', '2023-04-15 19:39:28'),
('F8602', 'Benzinane@gmail.com', 'CIN_Recto_Y_H.jpg', '2023-04-15 19:25:24'),
('F9079', 'K@gg.com', 'Diplome_Kfkf_Kggk.jpg', '2023-04-15 19:39:42');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id_notif` varchar(30) NOT NULL,
  `id_patient` varchar(30) NOT NULL,
  `id_nurse` varchar(30) NOT NULL,
  `content_notif` varchar(200) NOT NULL,
  `date_notif` varchar(30) NOT NULL,
  `titre_notif` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `nurse`
--

CREATE TABLE `nurse` (
  `id_nurse` varchar(30) NOT NULL,
  `nom_nurse` varchar(50) NOT NULL,
  `prenom_nurse` varchar(50) NOT NULL,
  `email_nurse` varchar(50) NOT NULL,
  `password_nurse` varchar(20) NOT NULL,
  `Grade_nurse` varchar(20) NOT NULL,
  `Address_nurse` varchar(90) NOT NULL,
  `date_nurse` varchar(25) NOT NULL,
  `telephone_nurse` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `nurse`
--

INSERT INTO `nurse` (`id_nurse`, `nom_nurse`, `prenom_nurse`, `email_nurse`, `password_nurse`, `Grade_nurse`, `Address_nurse`, `date_nurse`, `telephone_nurse`) VALUES
('N6625', 'Aziz', 'Moutmir', 'a', 'a', 'Auxiliaire', 'al wifaq 1 casablanca', '2023-04-11', 676258772);

-- --------------------------------------------------------

--
-- Structure de la table `nurse_pending`
--

CREATE TABLE `nurse_pending` (
  `id_nurse` varchar(30) NOT NULL,
  `nom_nurse` varchar(50) NOT NULL,
  `prenom_nurse` varchar(50) NOT NULL,
  `email_nurse` varchar(50) NOT NULL,
  `password_nurse` varchar(20) NOT NULL,
  `Grade_nurse` varchar(20) NOT NULL,
  `Address_nurse` varchar(90) NOT NULL,
  `date_nurse` varchar(25) NOT NULL,
  `telephone_nurse` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `nurse_pending`
--

INSERT INTO `nurse_pending` (`id_nurse`, `nom_nurse`, `prenom_nurse`, `email_nurse`, `password_nurse`, `Grade_nurse`, `Address_nurse`, `date_nurse`, `telephone_nurse`) VALUES
('Mc9999', 'Haitam', 'Benziana', 'Haitam@k.com', 'l', 'Votre Grade', 'Kk', '2023-04-15', 656565),
('N1891', 'Yuu', 'Y', 'G@gmail.com', 'll', 'Auxiliaire', 'Jj', '2023-04-13', 868665656),
('N7891', 'Issam', 'Ahua', 'Issam@gmail.com', 'u', 'Polyvalent', 'Hhxhxh', '2023-04-13', 2);

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

CREATE TABLE `patient` (
  `id_patient` varchar(30) NOT NULL,
  `nom_patient` varchar(50) NOT NULL,
  `prenom_patient` varchar(50) NOT NULL,
  `email_patient` varchar(50) NOT NULL,
  `password_patient` varchar(50) NOT NULL,
  `telephone_patient` int(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `adresse_patient` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `patient`
--

INSERT INTO `patient` (`id_patient`, `nom_patient`, `prenom_patient`, `email_patient`, `password_patient`, `telephone_patient`, `date`, `adresse_patient`) VALUES
('M67', 'M', 'M', 'Y@gmail.com', 'p', 99066, '0866', 'Tuy'),
('MC7473', 'Y', 'H', 'Benzinane@gmail.com', 'h', 6764656, '3583', 'Kffkkf'),
('P3317', 'Test', 'Test2', 'Test@gmail.com', 'test@2023', 668552233, '12/05/1990', 'Eee'),
('P4893', 'Haitam', 'Benz', 'E@gmail.com', 'e', 446464365, '65626565', 'You '),
('P4899', 'Haitam', 'Benzinane', 'H@g.com', 'h', 76766, '33535353', 'Hdhd'),
('P5131', 'H', 'J', 'K@m.com', 'i', 0, '', ''),
('P5286', 'L', 'L', 'G@ll.com', 'm', 0, '', ''),
('P5395', 'Aziz', 'Motmir', 'M@gmail.com', 'o', 743443, '33/53/', 'Casablanca'),
('P7087', 'Uu', 'Y', 'H@gmail.com', 'h', 0, '', '');

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

CREATE TABLE `ticket` (
  `tckt_id` varchar(20) NOT NULL,
  `tckt_Service` varchar(50) NOT NULL,
  `tckt_montant` varchar(50) NOT NULL,
  `tckt_NbPatients` int(50) NOT NULL,
  `tckt_time` varchar(50) NOT NULL,
  `tckt_grade` varchar(50) NOT NULL,
  `tckt_status` varchar(50) NOT NULL,
  `id_nurse` varchar(50) NOT NULL,
  `id_patient` varchar(50) NOT NULL,
  `tckt_date` varchar(50) NOT NULL,
  `tckt_cmnt` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ticket`
--

INSERT INTO `ticket` (`tckt_id`, `tckt_Service`, `tckt_montant`, `tckt_NbPatients`, `tckt_time`, `tckt_grade`, `tckt_status`, `id_nurse`, `id_patient`, `tckt_date`, `tckt_cmnt`) VALUES
('T1366', 'Les handicapés', '200', 1, '1', 'Spécialisé', 'Active', 'N6647', 'P7979', '2023-04-11 11:35:04', ''),
('T2122', 'Les handicapés', '400', 2, '3', 'Aide soignant', 'Refusé', 'N9993', 'P7979', '2023-04-11 11:50:22', 'I have created a command, mr abdo'),
('T3445', 'Les handicapés', '2', 25, '2', 'Spécialisé', 'pending', 'N8533', 'P7979', '2023-04-10 02:40:22', ''),
('T4488', 'Gériatrie', '200', 1, '2', 'Croissant rouge', 'Active', 'N7500', 'P2445', '2023-04-11 13:03:34', 'Saluut '),
('T5619', 'Gériatrie', '300', 1, '1', 'Auxiliaire', 'Active', 'N6625', 'P3317', '2023-04-11 15:21:10', 'Rrr'),
('T6794', 'Les handicapés', '200', 2, '2', 'Auxiliaire', 'Active', 'N8403', 'P7213', '2023-04-09 19:44:48', 'Hospitalist ');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`),
  ADD UNIQUE KEY `email_admin` (`email_admin`);

--
-- Index pour la table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`file_id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id_notif`);

--
-- Index pour la table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`id_nurse`),
  ADD UNIQUE KEY `email_nurse` (`email_nurse`);

--
-- Index pour la table `nurse_pending`
--
ALTER TABLE `nurse_pending`
  ADD PRIMARY KEY (`id_nurse`),
  ADD UNIQUE KEY `email_nurse` (`email_nurse`);

--
-- Index pour la table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id_patient`),
  ADD UNIQUE KEY `email_patient` (`email_patient`);

--
-- Index pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`tckt_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
