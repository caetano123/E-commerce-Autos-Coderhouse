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
```text
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
│ │ └── Item.jsx
│ ├── ItemCount/
│ │ └── ItemCount.jsx
│ ├── ItemDetail/
│ │ └── ItemDetail.jsx
│ ├── ItemDetailContainer/
│ │ └── ItemDetailContainer.jsx
│ ├── ItemList/
│ │ └── ItemList.jsx
│ ├── ItemListContainer/
│ │ └── ItemListContainer.jsx
│ ├── Layouts/
│ │ └── Layout.jsx
│ └── Navbar/
│ └── NavBar.jsx
├── pages/
│ ├── Cart.jsx
│ ├── Contact.jsx
│ └── Vehicles.jsx
├── scripts/
│ └── uploadAutos.js
├── firebase/
│ └── config.js
├── main.jsx
├── Routes.jsx
├── index.css
└── Home.jsx
```
---

## Configuración y Ejecución del Proyecto

1. Clonar el repositorio:
```bash
git https://github.com/caetano123/E-commerce-Autos-Coderhouse.git

2. Instalar dependencias:
npm install

3.Crear archivo de variables de entorno:

Renombrar el archivo .env.example a .env y completar con tus credenciales de Firebase:

VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id


⚠️ Nunca subas tu archivo .env con credenciales reales a GitHub. Solo sube .env.example.

4.Ejecutar la aplicación en modo desarrollo:

npm run dev


5.Abrir el proyecto en el navegador:

Vite normalmente lo servirá en http://localhost:5173
