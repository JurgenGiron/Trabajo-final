# 🌸 Floristería - Proyecto Final Interfaces en React 711-2025

Este proyecto consiste en una aplicación web desarrollada con React que simula un sistema de compras para una floristería. El sistema permite a los usuarios realizar un proceso completo de compra, desde el registro de sus requerimientos hasta el pago final con validación de tarjeta.

## 🚀 Tecnologías utilizadas

- React
- JavaScript
- React Router
- useState, useEffect, useContext
- HTML & CSS
- Validaciones con expresiones regulares y lógica condicional
- Scroll infinito con carga dinámica

## 🖥️ Funcionalidades principales

### 1. Vista de Requerimientos
- Formulario con validación para registrar el nombre del comprador, presupuesto, dirección y tipo de entrega.
- Botón para iniciar la compra y limpiar campos.
- Validación de errores antes de continuar.

### 2. Vista de Productos
- Lista de productos con **scroll infinito** (15 elementos por carga).
- Tarjetas con 4 atributos principales: nombre, descripción, precio e imagen.
- Filtros funcionales por dos atributos: uno tipo `select` y otro libre.
- Sección de detalles del producto con botón para agregar al carrito.
- Barra de navegación para cancelar o continuar la compra.

### 3. Vista de Carrito de Compras
- Tabla con los productos agregados y su detalle.
- Resumen del total de compra incluyendo cargo por domicilio si aplica.
- Formulario para validar datos de tarjeta de crédito (número, fecha de vencimiento, CVV, titular).
- Validación del presupuesto y desactivación del botón tras confirmar compra.
- Mensaje de éxito o error según resultado de la validación.

## 🎯 Objetivo del Proyecto

El objetivo es aplicar los conceptos clave aprendidos en la asignatura, como la creación de componentes en React, manejo de estado y eventos, uso de contextos, y validación de datos en una aplicación funcional que simule un proceso real de compra.

## 📦 Estructura del Proyecto

src/
│
├── components/
│ ├── FormRequerimientos.jsx
│ ├── ListaProductos.jsx
│ ├── DetalleProducto.jsx
│ ├── Filtros.jsx
│ ├── CarritoCompra.jsx
│ └── TarjetaCredito.jsx
│
├── context/
│ └── CompraContext.js
│
├── App.jsx
└── index.js


## 📽️ Demo

(https://p6ht24.csb.app/)

## 🧑‍💻 Autor

- Jurgen Giron
- Proyecto Final - Interfaces en React 711-2025

