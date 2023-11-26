﻿--
-- Script was generated by Devart dbForge Studio 2020 for MySQL, Version 9.0.338.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 18/4/2023 11:00:38 PM
-- Server version: 8.0.32
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';

--
-- Set default database
--
USE booking_film_ticket;

--
-- Drop table `ticket`
--
DROP TABLE IF EXISTS ticket;

--
-- Drop table `customer`
--
DROP TABLE IF EXISTS customer;

--
-- Drop table `film`
--
DROP TABLE IF EXISTS film;

--
-- Set default database
--
USE booking_film_ticket;

--
-- Create table `film`
--
CREATE TABLE film (
  Id int NOT NULL,
  FilmName varchar(255) NOT NULL DEFAULT '',
  Author varchar(255) DEFAULT NULL,
  Type varchar(255) DEFAULT NULL,
  Description varchar(255) DEFAULT NULL,
  Time int DEFAULT NULL,
  PublishingYear int DEFAULT NULL,
  PRIMARY KEY (Id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create index `UK_film_Id` on table `film`
--
ALTER TABLE film
ADD UNIQUE INDEX UK_film_Id (Id);

--
-- Create table `customer`
--
CREATE TABLE customer (
  ID int NOT NULL,
  FullName varchar(255) DEFAULT NULL,
  Email varchar(50) DEFAULT NULL,
  PhoneNumber varchar(255) DEFAULT NULL,
  Address varchar(255) DEFAULT NULL,
  PRIMARY KEY (ID)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create table `ticket`
--
CREATE TABLE ticket (
  Id int NOT NULL,
  Code char(36) DEFAULT '',
  SeatNumber int NOT NULL,
  ID_Film int NOT NULL,
  ID_Customer int NOT NULL,
  PRIMARY KEY (Id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_0900_ai_ci;

--
-- Create foreign key
--
ALTER TABLE ticket
ADD CONSTRAINT FK_ticket_Id FOREIGN KEY (ID_Customer)
REFERENCES customer (ID);

--
-- Create foreign key
--
ALTER TABLE ticket
ADD CONSTRAINT FK_ticket_ID_Film FOREIGN KEY (ID_Film)
REFERENCES film (Id);

-- 
-- Dumping data for table film
--
INSERT INTO film VALUES
(1, 'Abraham968', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016),
(2, 'Markus549', 'Đoàn Văn Việt ', ' Tình cảm ', 'Ea sit laudantium illum itaque culpa. Error et enim architecto et ipsa; nostrum iusto beatae aut ut molestias. Exercitationem ullam non.', 177, 2019),
(3, 'Jason4', 'Đoàn Văn Việt ', ' Tình cảm ', 'Consequatur impedit unde. Voluptas nemo mollitia! Dolores est illum? A blanditiis perspiciatis! Doloribus amet vero. Voluptatem doloribus quos. Magni unde!', 136, 2008),
(4, 'Mcnally2', 'Đoàn Văn Việt ', ' Tình cảm ', 'Velit rerum in. Quia eos suscipit. Animi laboriosam natus! Perferendis nihil aut. Sed dolor ut; iste nihil dolor; exercitationem ex et. Cumque non ratione.', 90, 2022),
(5, 'Adolph45', 'Đoàn Văn Việt ', ' Hình sự ', 'Ut sed dignissimos quia quis omnis unde; et est dolor sunt vel dolorum. Quae in molestiae blanditiis molestiae et labore.', 170, 2009),
(6, 'Luther2020', 'Đoàn Văn Việt ', ' Hình sự ', 'Cum laudantium quia. Iste ut et. Minima enim soluta! Qui asperiores omnis. Adipisci dolorum magni! Nostrum iste vel? Est fugit minus; cum unde autem.', NULL, NULL),
(7, 'Ada2005', 'Đoàn Văn Việt ', ' Trinh Thám ', 'Quia voluptatem ducimus eum officia corrupti. Officia nulla vitae vero? Placeat quaerat in. Illo est sed est eaque; non suscipit aliquam.', 136, 2009),
(8, 'Gerardo1992', ' Phùng Quang Vinh', 'Kinh dị ', 'Tempora possimus quam. Non assumenda tenetur? Alias id placeat! Aliquid nihil natus? Eligendi numquam reiciendis. Sit ratione praesentium! Optio aut.', 120, 2016),
(9, 'Carmela778', 'Đoàn Văn Việt ', ' Hành động ', 'Unde ea itaque animi explicabo aut sunt; quis nemo sit. Tempore unde vel. Magni omnis cupiditate. Earum quis et! Labore eius voluptatem.', 118, 2008),
(10, 'Florida343', ' Phùng Quang Vinh', ' Hành động ', 'Obcaecati debitis iure. Voluptatem saepe enim. Deserunt voluptatibus quam; sequi ab id. Rerum molestias ut. Sit qui molestiae; error qui laudantium. Sapiente;', 150, 2013),
(11, 'Abel79', ' Phùng Quang Vinh', ' Hành động ', 'Laborum delectus est nemo. Quibusdam delectus quae qui mollitia eos dignissimos. Magni et est qui voluptatem. Ut deleniti voluptatem. Voluptatum nisi sit.', 90, 2006),
(12, 'Alesia1986', 'Đoàn Văn Việt ', 'Kinh dị ', 'Iste tenetur nisi officiis; error voluptas dolore. Repellendus assumenda voluptatem. Et placeat suscipit similique ratione minus ab.', 101, 2022),
(13, 'Abigail658', ' Phùng Quang Vinh', ' Tình cảm ', 'Labore et possimus. Dolor molestias dolores? Quas porro nihil! Inventore tempore a. Maxime ut eveniet. Ut qui non. Et aliquid inventore.', 178, 2013),
(14, 'Abernathy1968', ' Phùng Quang Vinh', 'Kinh dị ', 'Quia eum praesentium est. Qui quia eos aliquid corrupti aliquid! Nobis sit eaque ipsa adipisci reiciendis. Omnis accusamus totam! Quae explicabo provident.', 127, 2007),
(15, 'Allman22', ' Phùng Quang Vinh', ' Hành động ', 'Quasi laborum laboriosam. Iusto deserunt rerum. Velit perspiciatis pariatur. Omnis eius voluptas. Nobis quam aut. Autem natus eos; voluptatum dolore facere?', 93, 2022),
(16, 'Brandt151', ' Phùng Quang Vinh', ' Hành động ', 'Ad iste ab. Dolorem consequatur at. Aut sunt et. Itaque soluta at. Quia sunt ex! Quaerat qui aspernatur. Aut hic ab...', 168, 2022),
(17, 'Celestine1984', 'Đoàn Văn Việt ', ' Hành động ', 'Aspernatur mollitia quis dolores totam pariatur. Unde error incidunt et quibusdam. Et amet voluptas labore et autem. Enim asperiores quia.', 147, 2009),
(18, 'Andrew2004', ' Phùng Quang Vinh', ' Viễn tưởng', 'Omnis quam cumque atque ad modi. Dolorum in id quia voluptatem impedit. Veritatis error exercitationem adipisci. Est repellendus quia alias reiciendis quis.', 153, 2009),
(19, 'Lewis1950', 'Đoàn Văn Việt ', ' Hành động ', 'Esse molestias omnis; voluptates quia ipsam. Dolores aliquam quo? Quae accusantium odit! Eos praesentium et. Omnis voluptates ad! Unde odit et. Et eum.', 120, 2007),
(20, 'Alphonso1996', 'Đoàn Văn Việt ', ' Hình sự ', 'Autem consequuntur est. Iste assumenda in! Voluptatum accusantium repellendus? Repellat ut qui. Omnis possimus cumque. Sapiente doloribus exercitationem. Et?', NULL, NULL),
(103, 'Đi tìm kho báu', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016),
(104, 'test', 'viet123', 'Hành động', 'không có mô tả', 123, 2023),
(106, 'Abraham968', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016),
(111, 'Abraham968', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016),
(123, 'Abraham968', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016),
(341, 'Abraham968', ' Phùng Quang Vinh', ' Tình cảm ', 'Voluptatibus in iste. Voluptas quibusdam odio; omnis cum architecto. Est natus aut. Voluptatibus corrupti at. Reiciendis non error. Qui sapiente minima.', 136, 2016);

-- 
-- Dumping data for table customer
--
INSERT INTO customer VALUES
(1, 'Letha Bolt', 'Bolt@nowhere.com', '(459) 613-9467', '461 NW Riddle Hill Lane, Concord, NH, 04357'),
(2, 'Vanita Kelleher', 'Morehead@example.com', '(730) 955-6764', '11 Red Lake Hwy, Harrisburg, Pennsylvania, 30254'),
(3, 'Marcos Abraham', 'qpzre411@example.com', '(681) 747-0352', '1753 North Church Pkwy, Boise, Idaho, 95705'),
(4, 'Miyoko Mckinney', 'Bray162@example.com', '(513) 643-0254', '1695 Hidden Deepwood Cir, Superior Bldg, Indianapolis, Indiana, 88231'),
(5, 'Adolph Francisco', 'Sidney_Agnew3@nowhere.com', '(776) 960-1978', '970 Riddle Hill Pkwy, Comcast Building, Albany, New York, 12229'),
(6, 'Oma Lawler', 'xmhz1900@nowhere.com', '(943) 664-5705', '1955 Front Road, Madison, WI, 37006'),
(7, 'Felix Alba', 'Monroe.Rinehart@nowhere.com', '(282) 510-9326', '2844 North Woodfort St, Raleigh, NC, 26635'),
(8, 'Eusebia Noland', 'Gutierrez73@example.com', '(350) 234-6559', '2989 East Pine Tree Road, Topeka, KS, 16758'),
(9, 'Denisha Mcginnis', 'FelipaAbernathy@nowhere.com', '(157) 934-3116', '62 Ashwood Pkwy, 3rd Floor, Madison, Wisconsin, 04370'),
(10, 'Stanford Sullivan', 'Adler@example.com', '(465) 454-8347', '40 Bayview Lane, Topeka, Kansas, 52885'),
(11, 'Nathan Salisbury', 'uadm55@example.com', '(122) 838-0637', '18 2nd Ct, 1st FL, Pierre, SD, 48106'),
(12, 'Burton Bunnell', 'Caldwell@example.com', '(529) 468-6964', '664 Town Way, Oklahoma City, OK, 55081'),
(13, 'Adah Jameson', 'NathanielC_Christman823@example.com', '(789) 568-6157', '66 East Quailwood Rd, Standard Building, Montgomery, AL, 48135'),
(14, 'Adam Geer', 'Valdez@example.com', '(507) 184-2162', '3215 Beachwood Highway, Lincoln, Nebraska, 38238'),
(15, 'Freeman Selby', 'Rich.F_Hutchins@example.com', '(948) 826-7804', '3927 North Town Street, Augusta, Maine, 09086'),
(16, 'Laura Barger', 'phkfhcmu_jjjdjuvrms@example.com', '(286) 001-2185', '3235 NW Farmview Loop, Boston, Massachusetts, 65476'),
(17, 'Ariel Hermann', 'AdalineW.Radford8@example.com', '(718) 229-1171', '1765 Ironwood Hwy, Kearns Bldg, Juneau, AK, 44263'),
(18, 'Adam Maddox', 'SmalleyS@nowhere.com', '(659) 832-5274', '739 Waterview Hwy, Helena, MT, 64021'),
(19, 'Winnifred Brantley', 'gxsgr25@example.com', '(899) 567-0654', '3949 New Town Blvd, Guardian Building, Phoenix, AZ, 19385'),
(20, 'Gayle Baugh', 'ikzv7@nowhere.com', '(674) 683-5376', '44 White Glenwood Court, Appartment 9, Salt Lake City, Utah, 30714'),
(21, 'Delcie Abney', 'AmosBliss189@example.com', '(835) 754-7630', '1752 East Chapel Hill Highway, Austin, Texas, 53257'),
(22, 'Kasey Furr', 'jajk3595@example.com', '(397) 639-0832', '34 New Waterview Loop, 3rd FL, Carson City, NV, 56781'),
(23, 'Gertie Abel', 'sdyfq9887@nowhere.com', '(878) 889-3248', '875 Stonewood Pkwy, Carson City, Nevada, 72024'),
(24, 'Myles Angel', 'Newsome21@example.com', '(792) 850-9043', '786 Rock Hill Drive, Augusta, Maine, 44321'),
(25, 'Jerome Gipson', 'Hoover@example.com', '(898) 388-9426', '3984 Ironwood Loop, Santa Fe, NM, 62291'),
(26, 'Lilla Perez', 'Russell@nowhere.com', '(365) 356-4078', '1912 E Deepwood Ave, Austin, Texas, 55348'),
(27, 'Josephine Norwood', 'DorcasLadner5@example.com', '(861) 549-7247', '63 Waterview Ct, Boise, ID, 60661'),
(28, 'Elli Robertson', 'OlgaFerry@example.com', '(296) 043-6622', '37 Market Street, APT 666, Cheyenne, Wyoming, 21327'),
(29, 'Curtis Hutson', 'pqfmmt48@example.com', '(461) 654-2968', '3249 Fox Hill Ct, 1st FL, Saint Paul, Minnesota, 69091'),
(30, 'Melia Gates', 'OdellG752@example.com', '(463) 980-1962', '804 West Bayview Ln, STE 1849, Trenton, NJ, 49680'),
(31, 'Marc Pickering', 'LakeeshaAbel8@example.com', '(113) 450-2756', '546 NW Waterview Blvd, Duke Energy Building, Charleston, WV, 15053'),
(32, 'Alida Jobe', 'Scarborough@example.com', '(249) 938-5859', '92 3rd Ct, Montpelier, Vermont, 60820'),
(33, 'Cordelia Key', 'MathewDeal16@example.com', '(894) 989-7256', '729 Meadowview Drive, Hartford, Connecticut, 90181'),
(34, 'Reba Gregg', 'LaveraLRoberge63@nowhere.com', '(134) 228-5449', '1787 Mountain Loop, Salt Lake City, UT, 54836'),
(35, 'Jarod Bourgeois', 'LucillaAbreu267@example.com', '(896) 756-6541', '1664 NW Edgewood Pkwy, Buhl Building, Tallahassee, Florida, 40360'),
(36, 'Oliva Coble', 'Sturgill@example.com', '(948) 551-7855', '283 Sharp Hill Parkway, STE 8682, Dover, Delaware, 25934'),
(37, 'Corey Musgrove', 'pcvmbj959@nowhere.com', '(250) 604-2488', '31 SE Stonewood Lane, Annapolis, Maryland, 85286'),
(38, 'Bud Grubbs', 'Ketchum@example.com', '(720) 779-2685', '963 2nd Parkway, Atlanta, Georgia, 68754'),
(39, 'Newton Graves', 'CierraCheatham@nowhere.com', '(565) 967-6647', '442 White Edgewood Ct, Frankfort, Kentucky, 20402'),
(40, 'Tamica Goins', 'Tanner_Banuelos@example.com', '(748) 936-9702', '718 NW Hunting Hill Blvd, Albany, New York, 70768'),
(41, 'Bertram Herzog', 'MalcomKnutson757@nowhere.com', '(346) 279-2551', '924 East Church Pkwy, Buhl Building, Sacramento, California, 45033'),
(42, 'Malcolm Coward', 'Alley91@example.com', '(153) 446-2344', '365 Red Beachwood Ct, Bartlett Building, Montgomery, Alabama, 78518'),
(43, 'Carley Valdez', 'Nickie_B_Ambrose@nowhere.com', '(871) 703-6933', '467 SE Hazelwood Loop, 7th FL, Charleston, WV, 26819'),
(44, 'Lizzie Krueger', 'SanfordRivas721@example.com', '(130) 566-1060', '3747 Farmview Blvd, Bartlett Building, Olympia, WA, 43866'),
(45, 'Celestine Hong', 'Rudolph358@example.com', '(852) 645-5229', '1388 Ironwood Ln, Cheyenne, WY, 22475'),
(46, 'Shonda Leake', 'Tenisha_Mcclintock@nowhere.com', '(303) 737-0588', '1321 9th Circle, Bismarck, North Dakota, 66160'),
(47, 'Hubert Waldrop', 'utxpbh4739@example.com', '(542) 738-1744', '91 Bayview Dr, Lincoln, NE, 73119'),
(48, 'Alphonso Meeks', 'Adolph.Antoine@example.com', '(307) 844-2142', '1684 White Sharp Hill Street, Juneau, Alaska, 00157'),
(49, 'Aimee Stamm', 'BalderasG5@example.com', '(705) 905-9161', '84 Ski Hill Hwy, Providence, RI, 35291'),
(50, 'Sonia Ackerman', 'Ted.Mace49@example.com', '(267) 504-9171', '30 51th Road, Equitable Building, Trenton, New Jersey, 66590'),
(51, 'Derrick Ruiz', 'Erick.O.Altman@example.com', '(214) 228-0248', '3156 Red Lake Court, Providence, Rhode Island, 27203'),
(52, 'Alejandro Espinal', 'Beeler85@example.com', '(462) 606-6779', '88 Hidden Sharp Hill Way, Oklahoma City, Oklahoma, 88132'),
(53, 'Myrtis Thornhill', 'TraciCloud@nowhere.com', '(804) 695-5063', '2392 N Glenwood Hwy, Comcast Building, Phoenix, AZ, 77755'),
(54, 'Calvin Looney', 'AddieD.Armstead@example.com', '(444) 334-3071', '33 NW Beachwood Lane, Kearns Building, Saint Paul, Minnesota, 13777'),
(55, 'Deedee Strange', 'Lavenia.Abraham@example.com', '(500) 088-1212', '218 Riddle Hill Lane, Austin, Texas, 74487'),
(56, 'Burt Hughes', 'MaynardGivens@example.com', '(159) 590-3479', '1671 South Brentwood Circle, Judge Building, Concord, NH, 69428'),
(57, 'Calvin Abrams', 'Hairston5@example.com', '(765) 622-3546', '2756 New Hope Highway, Duke Energy Building, Salt Lake City, UT, 95791'),
(58, 'Hobert Adam', 'Ackerman@example.com', '(914) 862-0831', '3674 NW Rockwood Loop, Kearns Building, Oklahoma City, OK, 75766'),
(59, 'Adan Pulido', 'Kinney@example.com', '(706) 194-2050', '2449 Fox Hill Highway, Atlanta, Georgia, 35095'),
(60, 'Abel Christian', 'Aiken@example.com', '(748) 250-2120', '89 W Brentwood Highway, Charleston, WV, 79011'),
(61, 'Jeanna Maxwell', 'ymqukl565@example.com', '(706) 582-5072', '1758 Red Ski Hill Ln, Dover, DE, 76340'),
(62, 'Alice Gonzales', 'Edwardo_P.Mcclintock965@nowhere.com', '(252) 934-2319', '2315 East Mount Ct, Victor Executive Bldg, Jackson, Mississippi, 26804'),
(63, 'Ronnie Roby', 'Keene136@example.com', '(215) 782-8729', '39 Parkwood Blvd, Calyon Building, Phoenix, AZ, 00283'),
(64, 'Mervin Lyon', 'Cohen311@example.com', '(204) 742-7270', '35 NW Rushwood Parkway, Albany, New York, 58177'),
(65, 'Abram Fenton', 'Darrell_Mcintyre21@example.com', '(359) 897-3048', '2801 N Mount Blvd, Hartford, CT, 93898'),
(66, 'Carlton Beaudoin', 'AngelitaX.Sandoval@example.com', '(661) 377-4472', '114 4th Blvd, Charleston, West Virginia, 84421'),
(67, 'Alexa Saucedo', 'Abram.Burdette919@nowhere.com', '(483) 688-0441', '657 Prospect Hill Cir, 1st Floor, Jackson, Mississippi, 86182'),
(68, 'Bryce Estrada', 'kybxospa.lacod@example.com', '(580) 372-9954', '1647 Brentwood Blvd, APT 348, Salem, OR, 60219'),
(69, 'Milton Gay', 'LourdesAbraham@example.com', '(221) 088-2303', '36 Sharp Hill Cir, Penobscot Building, Providence, Rhode Island, 61033'),
(70, 'Halley Bostic', 'ConcettaEnnis544@example.com', '(101) 915-1700', '2539 North Monument Rd, Standard Building, Indianapolis, Indiana, 41421'),
(71, 'Darrick Olmstead', 'kolwfbu5952@example.com', '(327) 238-9014', '1768 South Market Ct, Phoenix, AZ, 26004'),
(72, 'Logan Flannery', 'Isaacs9@example.com', '(558) 761-5575', '2576 Mountain Ave, Hartford, Connecticut, 17281'),
(73, 'Armando Alvarez', 'Tessie_Sommers@example.com', '(704) 154-1009', '68 Riverview Lane, Little Rock, Arkansas, 08092'),
(74, 'Glynis Redman', 'AbigailBloom@example.com', '(831) 903-3356', '349 West Ski Hill Hwy, Comcast Bldg, Albany, NY, 27993'),
(75, 'Sonya Tinsley', 'kthkuizh3830@nowhere.com', '(568) 266-9611', '348 West Flintwood Drive, Albany, NY, 16608'),
(76, 'Machelle Andersen', 'CleoAbraham329@example.com', '(173) 550-4987', '2982 Monument St, Little Rock, Arkansas, 15153'),
(77, 'Owen Alston', 'Aponte@nowhere.com', '(649) 508-6611', '3398 Front Circle, Plaza Building, Dover, DE, 95351'),
(78, 'Bradford Alfaro', 'Larson115@example.com', '(620) 111-5860', '878 Red Buttonwood Parkway, 3rd FL, Montpelier, VT, 31764'),
(79, 'Benito Agee', 'Melendez@example.com', '(321) 812-3396', '36 South Front Ct, Providence, RI, 12755'),
(80, 'Alan Judd', 'bfcv409@example.com', '(309) 458-2377', '45 NE Brentwood Pkwy, Duke Energy Building, Bismarck, North Dakota, 61210'),
(81, 'Abram Swank', 'Weston34@nowhere.com', '(695) 860-2322', '40 Hidden Mountain Court, Tallahassee, FL, 94804'),
(82, 'Elaina Gruber', 'MatthewHindman@example.com', '(946) 379-6534', '278 Hunting Hill Hwy, Frankfort, KY, 96524'),
(83, 'Debbra Packer', 'PughC@example.com', '(421) 620-9728', '43 Ski Hill Loop, Victor Executive Building, Boise, Idaho, 58799'),
(84, 'Freeman Blevins', 'Rosalee_RMatney542@example.com', '(593) 874-1574', '1981 Oak Drive, Oklahoma City, OK, 79763'),
(85, 'Drew Burt', 'ConnieAllard@example.com', '(901) 147-6202', '95 Hope Pkwy, Oklahoma City, OK, 43843'),
(86, 'Rivka Caron', 'KaterineHinojosa@example.com', '(293) 320-0330', '979 Oak Court, Frankfort, KY, 12341'),
(87, 'Lesia Hatch', 'Card@example.com', '(120) 174-2505', '985 Hunting Hill Highway, Indianapolis, IN, 20437'),
(88, 'Janis Gonsalves', 'KarlynBurt479@nowhere.com', '(447) 879-8076', '161 Hidden Woodcock Lane, Indianapolis, Indiana, 50144'),
(89, 'Selina Pfeiffer', 'HomerCalvin@example.com', '(627) 397-8872', '1713 Oak Street, Dover, Delaware, 75251'),
(90, 'Johnathan Magana', 'vfdpiabb_mjai@example.com', '(962) 527-7217', '1362 New Sharp Hill Way, Duke Energy Bldg, Annapolis, Maryland, 31040'),
(91, 'Hosea Spears', 'AbbyRBlalock826@example.com', '(800) 994-3306', '2173 Meadowview Cir, Hartford, CT, 37773'),
(92, 'Graham Alger', 'Dalila_JRust@example.com', '(205) 222-4616', '29 Buttonwood Hwy, Salem, OR, 33546'),
(93, 'Kizzy Hightower', 'Adan_Busch@nowhere.com', '(295) 895-2033', '93 Red Hunting Hill Loop, Jefferson City, MO, 43405'),
(94, 'Sanjuanita Conners', 'JuleneDasilva@example.com', '(834) 214-7026', '913 E Riddle Hill Ct, Raleigh, NC, 45680'),
(95, 'Tanner Van', 'Dewayne_Wheaton@example.com', '(927) 899-2792', '490 West Parkwood St, Montgomery, Alabama, 90655'),
(96, 'Abel Paulson', 'Armstead@example.com', '(929) 892-0626', '87 Hazelwood Cir, 6th Floor, Austin, Texas, 54177'),
(97, 'Abdul Freed', 'LyndsayColley@nowhere.com', '(142) 148-9450', '78 White Riverview Avenue, 2nd FL, Annapolis, Maryland, 81567'),
(98, 'Ora Dorris', 'SaundraCavazos@example.com', '(614) 476-7795', '2409 Glenwood Ave, Calyon Bldg, Harrisburg, Pennsylvania, 11378'),
(99, 'Abbie Gurley', 'JenaeMarcum651@example.com', '(689) 603-5711', '791 3rd Ln, Olympia, WA, 62499'),
(100, 'Việt đoàn văn', 'viet@gmail.com', '12345', 'Ba vì');

-- 
-- Dumping data for table ticket
--
INSERT INTO ticket VALUES
(6, '4cf2dd43-5f4b-71b6-e212-ebbbcf065d1c', 68, 11, 5),
(7, '11eea441-2a19-1735-6b78-553c0310877a', 19, 2, 23),
(8, '3a10e21a-7b72-4e25-e512-ebbbcf065d1c', 46, 7, 30),
(9, '25b365f2-2435-14d4-caf8-494a84b910f4', 39, 18, 48),
(17, '2d7c5749-57b4-3c7a-eddc-845b5dcdad45', 60, 5, 17),
(18, '450bb33b-2a2d-352b-e412-ebbbcf065d1c', 55, 3, 24),
(19, '392fa796-4918-764e-6d78-553c0310877a', 48, 14, 45),
(20, '64982a26-5d67-270d-b5ad-cb989f2177da', 97, 12, 49),
(22, '5626a583-2f8f-4518-e229-16c01537719a', 1, 13, 16),
(23, '54a11339-4527-4d4c-ccc7-6c0aeb6ec302', 3, 1, 27),
(32, '79e2659b-1e78-7dc9-0528-030d4265475f', 0, 1, 14),
(33, '7dcdc0cb-212f-604b-c7f8-494a84b910f4', 50, 4, 18),
(34, '3d7f2a35-42d8-229a-e429-16c01537719a', 29, 18, 34),
(42, '5f7b48e5-16f9-2f2f-ecdc-845b5dcdad45', 4, 18, 6),
(43, '3c1063e8-464b-245e-c9f8-494a84b910f4', 86, 20, 28),
(44, '5a6d957e-29e7-4a12-84c3-d3ede7a72094', 37, 6, 32),
(45, '3f93d93d-2236-468c-fd74-9471face0ab4', 75, 9, 35),
(46, '194fda9a-2129-413c-e529-16c01537719a', 95, 20, 38),
(47, '405cd8be-1160-35ff-85c3-d3ede7a72094', 34, 5, 44),
(53, '4628f6df-6e4d-4115-fb74-9471face0ab4', 69, 4, 21),
(54, '1a5df1f7-1200-63f1-0628-030d4265475f', 34, 3, 31),
(55, '23f585fb-3a2d-505d-b4ad-cb989f2177da', 21, 9, 33),
(56, '6e52efd1-769c-2ea0-eedc-845b5dcdad45', 20, 9, 36),
(57, '1b561f86-2664-2a3e-efdc-845b5dcdad45', 72, 1, 40),
(63, '7a0b757e-41eb-4df6-c6f8-494a84b910f4', 7, 7, 3),
(65, '1731fa87-79fd-4cc1-6978-553c0310877a', 83, 3, 8),
(66, '7b01963d-2bc0-5b15-82c3-d3ede7a72094', 56, 17, 12),
(67, '29d431fd-2d4b-248f-b2ad-cb989f2177da', 78, 3, 20),
(68, '28462535-1b23-3184-e329-16c01537719a', 10, 17, 25),
(69, '25f99060-45d4-4d94-6c78-553c0310877a', 98, 13, 39),
(70, '5835bc5a-49a5-3026-86c3-d3ede7a72094', 0, 8, 47),
(75, '19165ed7-212e-21c4-0428-030d4265475f', 65, 17, 1),
(76, '471530a2-44fe-7395-b1ad-cb989f2177da', 22, 2, 9),
(77, '5f620c85-55d9-7632-6a78-553c0310877a', 0, 8, 13),
(78, '7e760549-7d28-2394-c8f8-494a84b910f4', 52, 2, 22),
(79, '437ca88e-2dde-4dea-b3ad-cb989f2177da', 41, 3, 26),
(80, '62d5360d-27b8-1ff8-cdc7-6c0aeb6ec302', 41, 7, 42),
(81, '4d1ff813-25eb-7909-cbf8-494a84b910f4', 6, 17, 50),
(85, '62452262-64e1-492b-0728-030d4265475f', 66, 4, 37),
(86, '54b663bd-1ea7-5260-f0dc-845b5dcdad45', 85, 12, 43),
(89, '3631011e-4559-4ad8-b0ad-cb989f2177da', 9, 18, 2),
(90, '185f84ed-4563-51a0-cac7-6c0aeb6ec302', 6, 1, 7),
(91, '1ce192a3-6b70-712d-fa74-9471face0ab4', 75, 2, 15),
(92, '2d7c4ad9-5762-3f18-fc74-9471face0ab4', 39, 7, 29),
(93, '2cb2bad7-3b25-1669-0828-030d4265475f', 44, 20, 41),
(94, '1235c88b-5f2a-78d9-e612-ebbbcf065d1c', 4, 17, 46),
(97, '2924c34d-68f1-1d0a-c9c7-6c0aeb6ec302', 13, 5, 4),
(98, '27366e4a-5248-12e3-e312-ebbbcf065d1c', 19, 1, 10),
(99, '3be7f5cf-7438-6ede-83c3-d3ede7a72094', 83, 3, 19),
(100, '16f20a3e-4e43-1b90-cbc7-6c0aeb6ec302', 66, 14, 11),
(123, '00000000-0000-0000-0000-000000000000', 69, 14, 15),
(199, '582f11c9-c0c1-475c-aa11-897be8e1d1fa', 80, 11, 5);

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;