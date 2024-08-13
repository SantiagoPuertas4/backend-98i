import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// TODO: Importar base de datos

console.clear();
console.log('Inicializando servidor...');

// 1. Inicializar servidor
const app = express();

// 2. Configurar los valores del servidor
const PORT = process.env.PORT || 3000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// 4. Rutas (o endpoints)
// TODO: Importar rutas

// 5. Loop del servidor
app.listen(PORT, () => {
  console.log(`El servidor esta arriba y en el puerto ${PORT}`);
});
