# Contact Management Mini Web App

Un sistema simple de gestión de contactos construido con **Vue 3** (Frontend), **Node.js** (Backend) y **SQL Server**.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente:

1.  **Node.js**: [Descargar aquí](https://nodejs.org/)
2.  **SQL Server**:
    *   **Opción Recomendada (Fácil):** SQL Server Express LocalDB (Incluido con Visual Studio o instalable por separado).
    *   **Opción Estándar:** SQL Server Developer/Standard/Enterprise.

## Instrucciones de Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <tu-url-del-repositorio>
    cd <nombre-de-la-carpeta>
    ```

2.  **Instalar dependencias del Backend:**
    ```bash
    cd backend
    npm install
    ```

3.  **Instalar dependencias del Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Inicializar la Base de Datos (IMPORTANTE):**
    
    El proyecto usa **SQL LocalDB** por defecto. Para crear la base de datos y las tablas, ejecuta:
    ```bash
    cd ../backend
    node setup_db.js
    ```
    *Si usas una instancia de SQL Server diferente, configura las variables en `backend/.env` antes de ejecutar este paso.*

## Ejecución

Para correr la aplicación, necesitas dos terminales (o pestañas):

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
# El servidor correrá en http://localhost:3000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# La aplicación correrá en http://localhost:5173
```

¡Listo! Abre el enlace del frontend en tu navegador para usar la aplicación.
