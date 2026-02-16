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

## Configuración de Base de Datos

El proyecto está configurado por defecto para usar **SQL LocalDB**.

1.  **Inicializar la Base de Datos:**
    Desde la carpeta `backend`, ejecuta el script de configuración:
    ```bash
    cd backend
    node setup_db.js
    ```
    *Este script se conectará a tu instancia local, creará la base de datos `TEST_FORM` y las tablas necesarias.*

    > **Nota para usuarios de SQL Server estándar:**
    > Si no usas LocalDB, edita el archivo `backend/.env` y `backend/db.js` con tus credenciales y servidor. Puedes usar el script `database/database_setup.sql` para crear la estructura manualmente.

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
