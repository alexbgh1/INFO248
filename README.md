1. Creación DB lista.
2. .env listo.
3. Base del código lista.

-- Primer problema -- 

Buscar las rutas > models > server.ts
http://localhost:8000/seed
http://localhost:8000/api/usuarios/2

-- Segundo problema --

Cómo añadir una ruta para
http://localhost:8000/api/usuarios/2/productos
y
http://localhost:8000/api/productos

Para ello creo que se debe crear un nuevo modelo y añadirlo a la base de datos. Llamado 'productos' y 'usuario_producto' respectivamente.
El problema es asignar los productos hacia un usuario, se debería hacer por referencia, pero no sé cómo hacerlo.
-------------
db > models > controllers > routes 

models : Definimos los modelos de la base de datos (Tipos de datos)
controllers: Definimos funciones (CRUD, GET,POST, DELETE, PUT)
routes: Definimos las rutas

-------------

models: server.ts se encarga de importar varias cosas, entre ello, las rutas
controllers: seed.ts 

Conclusión no se creó una ruta para /api/usuarios/2/productos/{id}
Pero se creó una ruta para /api/productos para desplegar productos

----------------------------------------------------

Correr docker

docker image rm a9

docker compose up
