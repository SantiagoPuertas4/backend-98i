import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogValidationSchemas.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const blogRouter = express.Router();
blogRouter.get('/', Blogs.GetController.getBlogs);

blogRouter.post(
  '/',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);

blogRouter.put(
  '/',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

blogRouter.delete(
  '/:id',
  isAuthenticated,
  isAdmin,
  Blogs.DeleteController.deleteBlog,
);
