import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogValidationSchemas.js';

export const blogRouter = express.Router();
blogRouter.get('/', Blogs.GetController.getBlogs);

blogRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);

blogRouter.put(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

blogRouter.delete('/:id', Blogs.DeleteController.deleteBlog);
