import HttpCodes from 'http-status-codes';

export const isAdmin = (req, res, next) => {
  const { user } = req;

  if (user.isAdmin) {
    next();
    return;
  }

  res.status(HttpCodes.FORBIDDEN).json({
    data: null,
    message: 'No tienes permiso para acceder a este recurso',
  });
};
