# ProyectoFinal-Elizalde

## Descripción del Proyecto
**ProyectoFinal-Elizalde** es una web app de e-commerce desarrollada en **React** que permite a los usuarios explorar, seleccionar y comprar autos. La aplicación implementa un carrito de compras, un checkout con formulario de comprador, validación de stock y registro de órdenes en **Firebase Firestore**.  
El objetivo principal es practicar patrones de React, hooks, manejo de estado global con Context, y la integración con un servicio en la nube para almacenar datos persistentes.

---

## Funcionalidades
- Listado dinámico de productos (autos) y vista de detalle.
- Agregar, eliminar y vaciar productos del carrito.
- Selección de cantidad con validación de stock.
- Checkout con formulario de datos del comprador.
- Generación de orden en Firestore y devolución de ID al usuario.
- Actualización automática del stock de productos.
- Manejo de casos de productos sin stock y mensajes informativos.
- Navegación SPA utilizando **React Router**.

---

## Tecnologías Usadas
- **Front-end**: React, React Router, React Hooks, Context API
- **Estilos**: TailwindCSS
- **Base de datos**: Firebase Firestore
- **Herramientas adicionales**: React Icons, Vite

---

## Estructura de Carpetas

src/
├── components/
│ ├── Cart/
│ │ └── CartWidget.jsx
│ ├── CategoriasSection/
│ │ └── CategoriasSection.jsx
│ ├── Context/
│ │ ├── CartContext.jsx
│ │ └── CartProvider.jsx
│ ├── Item/
│ │ ├── Item.jsx
│ ├── ItemCount/
│ │ ├── ItemCount.jsx
│ ├── ItemDetail/
│ │ ├── ItemDetail.jsx
│ ├── ItemDetailContainer/
│ │ ├── ItemDetailContainer.jsx
│ ├── ItemList/
│ │ ├── ItemList.jsx
│ ├── ItemListContainer/
│ │ ├── ItemListContainer.jsx
│ ├── Layouts/
│ │ └── Layout.jsx
│ └── Navbar/
│ └── NavBar.jsx
└── pages/
│  └── Cart.js
│  └── Contact.jsx
│  └── Vehicles.jsx
└── scripts/
│  └── uploadAutos.js
└── firebase/
│   └── config.js
├── main.jsx
├── Routes.jsx
├── index.css
├── Home.jsx


---

## Configuración y Ejecución del Proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/ProyectoFinal-Elizalde.git
cd ProyectoFinal-Elizalde

2. Instalar dependencias:
npm install