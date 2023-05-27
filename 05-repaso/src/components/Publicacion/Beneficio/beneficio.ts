import { Publicacion } from "../publicacion";

export class Beneficio extends Publicacion {
  public tipo: string;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    fechaPublicacion: Date,
    tipo: string
  ) {
    super(id, titulo, descripcion, fechaPublicacion);
    this.tipo = tipo;
  }

  // Metodos
  getTipo(): string {
    return this.tipo;
  }
}
