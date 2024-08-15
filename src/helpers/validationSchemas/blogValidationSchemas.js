import Joi from 'joi';

export const post_put_blogValidationSchema = Joi.object({
  title: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'title' debe tener como minimo 3 caracteres",
    'string.max': "El campo 'title' debe tener cmo maximo 30 caracteres",
    'any.required': "El campo 'title' es requerido",
    '*': "Revisa el campo 'title'",
  }),
  imageUrl: Joi.string().trim().min(3).uri().required().messages({
    'string.min': "El campo 'imageUrl' debe tener como minimo 3 caracteres",
    'string.uri': "El campo 'imageUrl' debe ser una URL valida",
    'any.required': "El campo 'imageUrl' es requerido",
    '*': "Revisa el campo 'imageUrl'",
  }),
  content: Joi.string().trim().min(3).max(500).required().messages({
    'string.min': "El campo 'title' debe tener como minimo 3 caracteres",
    'string.max': "El campo 'title' debe tener cmo maximo 500 caracteres",
    'any.required': "El campo 'title' es requerido",
    '*': "Revisa el campo 'title'",
  }),
});
