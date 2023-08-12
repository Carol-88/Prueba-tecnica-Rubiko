# Usa una imagen base adecuada
FROM node:18

# Crea un directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo en el contenedor
COPY . /app

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 5000
EXPOSE 5000

# Configura el comando para iniciar el servidor
CMD ["node", "index.js"]

