# Rubiko Basic Docker

Este repositorio contiene los archivos necesarios para crear una imagen Docker llamada `rubiko-basic-docker` que proporciona un servicio HTTP en el puerto 5000 capaz de responder a peticiones GET `/health` con un estado "OK". Además, también incluye un archivo `docker-compose.yml` que define dos servicios: uno para el contenedor web y otro para realizar llamadas `curl` al contenedor web y mostrar el resultado de la respuesta.

## Contenido del Repositorio

- **Archivo Postman**: Este archivo lo puedes importar en postman para hacer pruebas de la petición GET `/health` .

- **Dockerfile**: Este archivo contiene las instrucciones para construir la imagen Docker `rubiko-basic-docker`. Incluye la configuración necesaria para exponer el puerto 5000 y ejecutar el script que maneja las respuestas HTTP.

- **docker-compose.yml**: Este archivo define dos servicios: `web` y `curl`. El servicio `web` se basa en la imagen `rubiko-basic-docker` y se mapea al puerto 5050 del host. El servicio `curl` utiliza la imagen predeterminada de `curl` y se configura para realizar llamadas `curl` al contenedor `web`

- **index.js**: Este archivo contiene el script para iniciar el servidor, con control de errores.

## Cómo Usar

A continuación se describen los pasos para ejecutar un contenedor `rubiko-basic-docker` utilizando Docker y cómo utilizar `docker-compose` para lanzar ambos servicios.

### Ejecución con Docker

1. Asegúrate de tener Docker instalado en tu sistema.
2. Clona este repositorio en tu máquina local.
3. Construye la imagen Docker `rubiko-basic-docker` ejecutando el siguiente comando dentro del directorio del repositorio:

    **docker build -t rubiko-basic-docker .**

4. Lanza un contenedor a partir de la imagen recién creada:

    **docker run -p 5050:5000 rubiko-basic-docker**

5. Ahora puedes realizar una petición HTTP GET a `http://localhost:5050/health` para obtener un resultado 200 con la palabra "OK".

### Ejecución con Docker Compose

1. Asegúrate de tener Docker Compose instalado en tu sistema.
2. Clona este repositorio en tu máquina local si aún no lo has hecho.
3. Ejecuta el siguiente comando para iniciar los servicios definidos en el archivo `docker-compose.yml`:

    **docker-compose up**

4. El servicio `web` estará disponible en `http://localhost:5050/health`, y el servicio `curl` mostrará el resultado de la llamada `curl` al servicio `web`.