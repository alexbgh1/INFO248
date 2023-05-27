import { Publicacion } from "../Publicacion/publicacion";

export class Usuario {
  // Propiedades de la clase
  public nombreUsuario: string;
  public contrasenia: string;
  public rol: string;
  public id: number;
  public publicaciones: Publicacion[];

  // Constructor de la clase
  constructor(
    nombreUsuario: string,
    contrasenia: string,
    rol: string,
    id: number,
    publicaciones: Publicacion[]
  ) {
    this.nombreUsuario = nombreUsuario;
    this.contrasenia = contrasenia;
    this.rol = rol;
    this.id = id;
    this.publicaciones = publicaciones;
  }

  // Métodos de la clase
  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  getPublicaciones(): Publicacion[] {
    return this.publicaciones;
  }

  saludar() {
    console.log(
      `Hola, mi nombre es ${this.getNombreUsuario()} y tengo rol ${this.rol}`
    );
  }
}
