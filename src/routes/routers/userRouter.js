import express from 'express';
import { Users } from '../../controllers/users/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_userValidationSchema } from '../../helpers/validationSchemas/usersValidationSchemas.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

export const userRouter = express.Router();
userRouter.get('/', isAuthenticated, Users.GetController.getUsers);

userRouter.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_userValidationSchema),
  Users.PostController.postUser,
);
