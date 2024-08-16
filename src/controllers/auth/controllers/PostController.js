import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import HttpCodes from 'http-status-codes';
import { internalError } from '../../../helpers/helpers.js';
import UserModel from '../../../models/userSchema.js';

export class PostController {
  static async postLogin(req, res) {
    const { body } = req;
    try {
      const user = await UserModel.findOne({
        username: body.username,
        isActive: true,
      });

      if (!user || !bcryptjs.compareSync(body.password, user.password)) {
        res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'Usuario y/o contraseña incorrectos',
        });
        return;
      }

      const userInfo = {
        user: {
          id: user._doc._id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          isAdmin: user.isAdmin,
        },
      };

      const token = jwt.sign(userInfo, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      console.log(user);

      res.json({
        data: token,
        message: 'Logueo exitoso',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un erro intentando iniciar sesion');
    }
  }
}
