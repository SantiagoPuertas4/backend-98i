import HttpCodes from 'http-status-codes';
import { internalError } from '../../../helpers/helpers.js';
import BlogModel from '../../../models/blogSchema.js';

export class PostController {
  static async postBlog(req, res) {
    const { body } = req;

    const newBlog = new BlogModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });

    try {
      await newBlog.save();

      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Blog guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error al guardar el blog');
    }
  }
}
