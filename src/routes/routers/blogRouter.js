import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';

export const blogRouter = express.Router();
blogRouter.get('/', Blogs.GetController.getBlogs);

blogRouter.post('/', Blogs.PostController.postBlog);

blogRouter.put('/:id', Blogs.PutController.putBlog);

blogRouter.delete('/:id', Blogs.DeleteController.deleteBlog);
