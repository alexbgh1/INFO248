export class Publicacion {
  public id: number;
  public titulo: string;
  public descripcion: string;
  public fechaPublicacion: Date;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    fechaPublicacion: Date
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
  }

  // Metodos de la clase
  getTitulo(): string {
    return this.titulo;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getFechaPublicacion(): Date {
    return this.fechaPublicacion;
  }
}
