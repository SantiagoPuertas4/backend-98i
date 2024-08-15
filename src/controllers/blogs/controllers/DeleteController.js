import HttpCodes from 'http-status-codes';
import BlogModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class DeleteController {
  static async deleteBlog(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const action = await BlogModel.updateOne(
        {
          _id: id,
          isActive: true,
        },
        {
          isActive: false,
        },
      );
      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El blog indicado no fue encontrado',
        });
        return;
      }
      res.json({
        data: null,
        message: 'Blog eliminado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error eliminando el recurso indicado');
    }
  }
}
