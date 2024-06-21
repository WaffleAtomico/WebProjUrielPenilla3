-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-06-2024 a las 17:56:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arctic_donuts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `Id` int(11) NOT NULL,
  `payment_id` varchar(255) NOT NULL,
  `payer_id` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `currency` varchar(3) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `fk_user_mail` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shop_cart`
--

CREATE TABLE `shop_cart` (
  `id_cart` int(11) NOT NULL,
  `totalcost` int(11) NOT NULL,
  `fk_product` int(11) NOT NULL,
  `fk_user` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shop_product`
--

CREATE TABLE `shop_product` (
  `id_product` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_cost` int(11) NOT NULL,
  `product_amount` int(11) NOT NULL,
  `product_img_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shop_product`
--

INSERT INTO `shop_product` (`id_product`, `product_name`, `product_cost`, `product_amount`, `product_img_url`) VALUES
(5, 'Dona Fresa', 10, 199, 'https://1.bp.blogspot.com/-IVi3HOmGXhI/VDYzhgzLQpI/AAAAAAAAAEc/tr8QsF9tjLQ/s1600/IMG_9534.JPG'),
(6, 'Dona Chocolate', 12, 173, 'https://th.bing.com/th/id/R.6248eb63a9ac4aac24560ada9d8f3878?rik=pgbIDL6pbDzDGA&riu=http%3a%2f%2fplaceralplato.com%2ffiles%2f2015%2f07%2fDonas-de-chocolate-y-canela.jpg&ehk=Jr4lGcUKKJKK31VHBT45A%2byTkFjmnqTZ83X1yRLs3H8%3d&risl=&pid=ImgRaw&r=0'),
(16, 'Dona Vainilla', 1, 14, 'https://2.bp.blogspot.com/-heh1qKSFwXw/WCib_sUfOcI/AAAAAAAAA3k/2bvQwegeOVg4s5OnM7PasqcgpM7p1iEgQCLcB/s1600/tan%2Bdulce%2Brecetas-0016-2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_mail` varchar(40) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `user_lastname` varchar(20) NOT NULL,
  `user_password` varchar(40) NOT NULL,
  `user_creditcard` varchar(16) NOT NULL,
  `user_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_mail`, `user_name`, `user_lastname`, `user_password`, `user_creditcard`, `user_type`) VALUES
('a20300687@ceti.mx', 'Victor', 'Garcia', 'ceticolomos', '2403', 1),
('a20300701@live.ceti.mx', 'Penilla', 'Skakievich', 'phos', '0', 1),
('albor@gmail.com', 'Damian', 'Albor', 'badicecream', '0104', 1),
('duowars@gmail.com', 'duo', 'wars', 'playzzzz', '5047', 1),
('loco@gmail.com', 'Loco', 'Damian', 'waluigi', '0104', 1),
('test1@gmail.com', 'Oscar', 'Penilla', '123', '4189148888', 0),
('uriel24gp@gmail.com', 'Uriel', 'Garcia', 'hola1234', '2403', 0),
('weyjuegos5@gmail.com', 'Wey', 'Kratos', 'weykratos', '0', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `fk_user_mail` (`fk_user_mail`);

--
-- Indices de la tabla `shop_cart`
--
ALTER TABLE `shop_cart`
  ADD UNIQUE KEY `fk_product` (`fk_product`),
  ADD UNIQUE KEY `fk_user` (`fk_user`);

--
-- Indices de la tabla `shop_product`
--
ALTER TABLE `shop_product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `shop_product`
--
ALTER TABLE `shop_product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`fk_user_mail`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `shop_cart`
--
ALTER TABLE `shop_cart`
  ADD CONSTRAINT `shop_cart_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shop_cart_ibfk_2` FOREIGN KEY (`fk_product`) REFERENCES `shop_product` (`id_product`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
