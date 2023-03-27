import { Request, Response } from "express";
import { data } from "../db/data";
import { data_productos } from "../db/data_productos";
// import { productos } from "../db/data_productos";
import Producto from "../models/producto";
import Usuario from "../models/usuario";
import bcrypt from "bcryptjs";

export const loadData = async (req: Request, res: Response) => {
  try {
    // limpiar bd
    await Usuario.destroy({ where: {}, force: true });

    // cargar datos
    const users = data.map((user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
      return user;
    });

    // Encriptar

    await Usuario.bulkCreate(users);
    await Producto.bulkCreate(data_productos);

    res.json({
      msg: "cargado correctamente",
      ok: true,
    });
  } catch (error: any) {
    console.log(error);
  }
};
