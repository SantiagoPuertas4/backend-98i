import bcryptjs from 'bcryptjs';
import HttpCodes from 'http-status-codes';
import { internalError } from '../../../helpers/helpers.js';
import UserModel from '../../../models/userSchema.js';

export class PostController {
  static async postUser(req, res) {
    const { body } = req;

    const hashedPassword = bcryptjs.hashSync(body.password, 10);

    const newUser = new UserModel({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      password: hashedPassword,
    });

    try {
      await newUser.save();

      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Usuario guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error al guardar el usuario');
    }
  }
}
