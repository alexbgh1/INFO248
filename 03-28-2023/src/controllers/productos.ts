import { Request, Response } from "express";
import Producto from "../models/producto";

export const getProductos = async (req: Request, res: Response) => {
  const productos = await Producto.findAll();

  res.json({
    productos,
  });
};

export const getProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const producto = await Producto.findByPk(id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({
      msg: `no existe un producto con el id ${id}`,
    });
  }
};
