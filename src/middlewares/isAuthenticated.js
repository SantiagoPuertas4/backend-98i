import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { headers } = req;

  const authorizationHeader = headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      data: null,
      message: 'No se encontro un token en la peticion',
    });
    return;
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);

    req.user = data.user;

    next();
  } catch (_) {
    res.status(401).json({
      data: null,
      message: 'El token no es valido',
    });
  }
};
