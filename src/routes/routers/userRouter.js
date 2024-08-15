import express from 'express';
import { Users } from '../../controllers/users/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_userValidationSchema } from '../../helpers/validationSchemas/userValidationSchemas.js';

export const userRouter = express.Router();
userRouter.get('/', Users.GetController.getUsers);

userRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_userValidationSchema),
  Users.PostController.postuser,
);

userRouter.put(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_userValidationSchema),
  Users.PutController.putuser,
);

userRouter.delete('/:id', Users.DeleteController.deleteuser);
