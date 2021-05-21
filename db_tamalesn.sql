-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2021 a las 06:22:46
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db/tamalesn`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ID-cliente` int(20) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellidos` varchar(60) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ciudad` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `colonia` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correoElectronico` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `referenciaDomicilio` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(12) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ID-distribucion` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribucion`
--

CREATE TABLE `distribucion` (
  `ID-distribucion` int(20) NOT NULL,
  `diaDeEntrega` varchar(150) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombreDeColonia` varchar(500) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `horaInicioEntrega` time DEFAULT NULL,
  `horaFinalEntrega` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `ID-Pedido` int(20) NOT NULL,
  `fechaEntrega` date DEFAULT NULL,
  `estatus` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoDeEntrega` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cantidadTotal` int(11) DEFAULT NULL,
  `costoTotal` float DEFAULT NULL,
  `ID-cliente` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidoproducto`
--

CREATE TABLE `pedidoproducto` (
  `ID_Producto` int(20) NOT NULL,
  `ID-Pedido` int(20) NOT NULL,
  `fechaPedido` date NOT NULL,
  `cantidadPorProducto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `ID_Producto` int(11) NOT NULL,
  `Sabor` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  `Existencia` int(11) DEFAULT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ID-cliente`),
  ADD KEY `ID-distribucion` (`ID-distribucion`);

--
-- Indices de la tabla `distribucion`
--
ALTER TABLE `distribucion`
  ADD PRIMARY KEY (`ID-distribucion`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`ID-Pedido`),
  ADD KEY `ID-cliente` (`ID-cliente`);

--
-- Indices de la tabla `pedidoproducto`
--
ALTER TABLE `pedidoproducto`
  ADD PRIMARY KEY (`ID_Producto`,`ID-Pedido`,`fechaPedido`),
  ADD KEY `ID-Pedido` (`ID-Pedido`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `ID-cliente` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `distribucion`
--
ALTER TABLE `distribucion`
  MODIFY `ID-distribucion` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `ID-Pedido` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`ID-distribucion`) REFERENCES `distribucion` (`ID-distribucion`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`ID-cliente`) REFERENCES `cliente` (`ID-cliente`);

--
-- Filtros para la tabla `pedidoproducto`
--
ALTER TABLE `pedidoproducto`
  ADD CONSTRAINT `pedidoproducto_ibfk_1` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`),
  ADD CONSTRAINT `pedidoproducto_ibfk_2` FOREIGN KEY (`ID-Pedido`) REFERENCES `pedido` (`ID-Pedido`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
