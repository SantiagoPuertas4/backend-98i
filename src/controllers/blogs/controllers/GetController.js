import BlogModel from '../../../models/blogSchema.js';
import HttpCodes from 'http-status-codes';

export class GetController {
  static async getBlogs(_, res) {
    try {
      const data = await BlogModel.find();

      const filteredData = data.map((blog) => {
        return {
          id: blog._doc._id,
          title: blog._doc.title,
          imageUrl: blog._doc.imageUrl,
          content: blog._doc.content,
        };
      });

      res.json({
        data: filteredData,
        message: 'Blogs encontrados correctamente',
      });
    } catch (e) {
      console.error(e);

      res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        data: null,
        message: 'Ocurrio un error al leer la lista de blogs',
      });
    }
  }
}
