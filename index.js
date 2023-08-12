import express from 'express';

const app = express();
const PORT = 5000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || 'Error interno del servidor'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
