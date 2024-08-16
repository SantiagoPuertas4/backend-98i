import { internalError } from '../../../helpers/helpers.js';
import UserModel from '../../../models/userSchema.js';

export class GetController {
  static async getUsers(_, res) {
    try {
      const data = await UserModel.find({
        isActive: true,
      });

      const filteredData = data.map((user) => {
        return {
          id: user._doc._id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          isAdmin: user.isAdmin,
        };
      });

      res.json({
        data: filteredData,
        message: 'Usuarios encontrados correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error al leer la lista de usuarios');
    }
  }
}
