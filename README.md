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

2.  **Configurar la Base de Datos (CRÍTICO):**
    
    *   Abre SQL Server Management Studio (SSMS) o tu herramienta preferida.
    *   Ejecuta el script ubicado en `database/database_setup.sql`. Este script creará la base de datos `TEST_FORM`, la tabla `Contactos` y los procedimientos almacenados necesarios.

3.  **Configurar el Backend:**
    
    Ve a la carpeta del backend e instala las dependencias:
    ```bash
    cd backend
    npm install
    ```

    **Configuración del entorno (.env):**
    Crea un archivo llamado `.env` en la carpeta `backend` y agrega lo siguiente. **Es muy importante que `DB_SERVER` coincida con tu instancia de SQL Server.**

    *Para SQL LocalDB (Opción recomendada):*
    ```ini
    PORT=3000
    DB_SERVER=(localdb)\MSSQLLocalDB
    DB_DATABASE=TEST_FORM
    ```

    *Para SQL Server Express o versiones completas:*
    ```ini
    PORT=3000
    DB_SERVER=localhost\SQLEXPRESS  # O el nombre de tu instancia
    DB_DATABASE=TEST_FORM
    ```

4.  **Instalar dependencias del Frontend:**
    
    Abre una nueva terminal, ve a la carpeta del frontend e instala las dependencias:
    ```bash
    cd ../frontend
    npm install
    ```

## Ejecución

Para correr la aplicación, necesitas dos terminales ejecutándose simultáneamente:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
# El servidor correrá en http://localhost:3000
# Deberías ver el mensaje: "Server is running on port 3000"
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# La aplicación correrá en http://localhost:5173
```

¡Listo! Abre el enlace que muestra la terminal del frontend (usualmente `http://localhost:5173`) en tu navegador para usar la aplicación.
