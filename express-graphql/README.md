# Prueba_GraphQL

## Repositorio de prueba de GraphQL

### Configurar la BD
-Antes que nada, necesitas una BD PostgreSQL

-Busca el archivo **Creates.sql** en la carpeta **database** y corre los creates en la BD

-Hazle algunos inserts para que puedas consultarlos luego desde la aplicación
 
### Configurar la aplicación
-Ejecuta el comando

```bash
$ npm install
```

-En la carpeta **database**, en el archivo **conectiondb.js**, busca la constante *connectionData* e introduce los siguiente:

```json
{
  "user": "<USUARIO DE LA BASE DE DATOS>",
  "host": "<HOST DE CONEXIÓN A LA BASE DE DATOS>",
  "database": "<NOMBRE DE LA BASE DE DATOS>",
  "password": "<CONTRASEÑA DEL USUARIO PARA LA CONEXIÓN A LA BASE DE DATOS>",
  "port": <NÚMERO DEL PUERTO DEL HOST>
}
```

Ahora con la aplicación y la BD listas, inicia la aplicación con el comando

```bash
$ node index
```

Si lo prefieres y para facilitar la ejecución en entorno de desarrollo puedes ejecutar el comando

```bash
$ npm run dev
```

Para usar la aplicación usa la url http://localhost:4000/api
