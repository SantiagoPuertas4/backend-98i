import BlogModel from '../../../models/blogSchema.js';
import HttpCodes from 'http-status-codes';

export class PostController {
  static async postBlog(req, res) {
    console.log('Algo');

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
      console.error(e);
      res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Ocurrio un error al guardar el blog',
      });
    }

    res.json({
      message: 'Holiiii',
    });
  }
}
