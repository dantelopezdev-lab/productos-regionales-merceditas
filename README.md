# Trabajo Práctico: Presentación del Sitio Web
**Cátedra:** Programación Web II  
**Docente:** Lic. Carlos Pacheco  
**Proyecto:** Sitio Web de *Productos Regionales Merceditas* (Cafayate, Valles Calchaquíes, Salta)

---

## 📋 Cumplimiento de Consignas del Trabajo Práctico

1. **A) Página Principal (API Pública GitHub):**
   - Consume la API REST pública de GitHub (`https://api.github.com/users/octocat`).
   - Muestra de forma dinámica más de 3 datos (`public_repos`, `followers`, `id`, `login`, `name`).
   - Incluye obligatoriamente la imagen de perfil provista por la API (`avatar_url`).
   - Incluye botón interactivo para refrescar datos.

2. **B) Segunda Página (Array de Objetos Local):**
   - Implementa un array de objetos con los productos auténticos de *Merceditas*:
     - Queso Criollo de Cabra tradicional.
     - Quesillo Calchaquí elaborado por acidificación y pasta hilada.
     - Cortes seleccionados de Cabrito lechal y Cordero serrano.
     - Artesanías forjadas en astas de cabra añadidas con alpaca (cuchillos criollos y vasos chopp).
   - Cada elemento del array incluye nombre, descripción, presentación, precio e imagen obligatoria.

3. **C) Tercera Página (Formulario de Contacto Funcional y Mapa Embebido):**
   - Formulario funcional con acción directa a correo electrónico (`mailto:`).
   - Mapa interactivo de Cafayate embebido mediante `<iframe>` de Google Maps al lado del formulario.

---

## 🚀 Instrucciones de Ejecución Local

1. Descomprimir el archivo descargado.
2. Abrir la terminal dentro de la carpeta:
   ```bash
   npm install
   npm run dev
   ```
3. Abrir en el navegador: `http://localhost:5173`.

---

## 📦 Instrucciones para Compilar y Desplegar en GitHub Pages

1. Compilar el proyecto para producción:
   ```bash
   npm run build
   ```
2. Inicializar el repositorio Git y subirlo a tu cuenta de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Entrega TP Programacion Web II - Merceditas Cafayate"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
3. En GitHub, ir a **Settings** -> **Pages**, seleccionar el origen o utilizar el despliegue automático de la carpeta `dist`.
