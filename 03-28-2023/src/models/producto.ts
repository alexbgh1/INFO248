import { DataType, DataTypes } from "sequelize";
import db from "../db/connection";

// Definiendo la "clase/obj" Producto
import Usuario from "./usuario";

const Producto = db.define(
  "Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Definiendo la relación con la tabla Usuario
    // usuarioId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Usuario,
    //     key: "id",
    //   },
    // },
  },
  { paranoid: true }
);

export default Producto;
