import { Beneficio } from "./components/Publicacion/Beneficio/beneficio";
import { Publicacion } from "./components/Publicacion/publicacion";
import { Usuario } from "./components/Usuario/usuario";

function generarUsuarios(): Usuario[] {
  const usuarios: Usuario[] = [];
  const publicacion1 = new Publicacion(
    1,
    "titulo1",
    "descripcion1",
    new Date()
  );

  const publicacionBeneficio1 = new Beneficio(
    2,
    "titulo2",
    "descripcion2",
    new Date(),
    "beneficio"
  );

  const usuario1 = new Usuario("usuario1", "1234", "admin", 1, [
    publicacion1 as Publicacion,
    publicacionBeneficio1 as Beneficio,
  ]);
  usuarios.push(usuario1 as Usuario);
  return usuarios;
}

function main() {
  const usuarios = generarUsuarios();
  usuarios.map((usuario) => {
    console.log(usuario);
    usuario.saludar();
    console.log("Mis publicaciones asociadas son:");
    usuario.getPublicaciones().map((publicacion) => {
      console.log(publicacion);
      if (publicacion instanceof Beneficio) {
        console.log(publicacion.getTipo());
      }
    });
  });
}
// call main
main();
