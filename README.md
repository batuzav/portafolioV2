# ...[Portafolio Pedro Batuza]...

Repositorio del portafolio de Pedro.

## Contenido

pagina web, resumen de experiencia laboral y proyectos:

- [React](https://es.reactjs.org/)
- [Sass](https://sass-lang.com/)

  **Página sin conecxión a base de datos**

## Programas necesarios

Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:

- [Nodejs](https://nodejs.org/es/download/) v12.18.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Como Clonar

Comando para clonar:

```bash
cd existing_folder
git clone https://github.com/batuzav/portafolioV2.git

```

## Intalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

### Run en LocalHost:

Ejecutar el comando:

```bash
npm start
```

## Subir cambios

Para poder subir cambios al repositorio es necesario utilizar los siguientes comandos.

`git add .` o si lo prefiere `git add "./direction_file"`

```bash
git commit -m "tu mensaje"
git push origin master
```

o si usted se encuentra en otro branch

```bash
git push origin "your_branch"
```

##Como hacer un buen commit

Cada cada commit deberá de llevar alguna bandersa que distinga lo que se realizo en el commit. Debe utilizarse las siguientes banderas.
Es recomendado utilizar un icono como referencia visual de la bandera que se esa utilizando.
Ejemplo de banderas.

- `f.-` **feat**: Ha añadido una nueva freature (modulo, o la salida completa de una característica)
- `F.-` **fix**: Ha realizado un cambio que repará un Bug
- `d.-` **docs**: Ha realizado cambios en la
- `s.-` **style**: Ha realizado cambios que representen estilos
- `r.-` **refactor**:Ha realizado cambios de codigo que no corrigieron ningún Bug o añadieron una feature
- `t.-` **test**: Todo a aquel cambio que sea modo de prueba
- `c.-` **chore**: Ha actualizado un tarea contruida previamneto, configuracion en el package manager, etc.

Ejemplos de iconos:

    - ➕ `:heavy_plus_sign:` Cuando se añade un archivo o se implementa un feature
    - 🔨 `:hammer:` Cuando se soluciona un Bug o un Issue
    - 💚 `:green_heart:` Cuando se mejora un codigo o comentarios
    - ⚡ `:zap`` Cuando se mejora el rendimiento
    - 📜 `:scroll:` Cuando se actualiza documentos o el readme
    - 🔑 `:key:` Cuando se trata de un cambio relacionado con la seguridad
    - 🔁 `:repeat:` Cuando se actualizan dependencias
    - ✅ `:white_check_mark:` Cuando un nuevo feature se implementa con exito a producción
    - ❌ `:x:` Cuando se esta eliminando codigo o archivos.
    - 🎉 `:tada:` commit inicial o terminacion de un grupo de modulo completo o una version nueva
    - 🚧 `:construction:` cuando se esta contruyendo un feature o una tarea
    - 🚀 `:rocket:` cuando se implementa un nuevo feature o tarea.

Ejemplo:
`git commit -m "[:heavy_plus_sign:] r.- add a UserResolver to. [:rocket:] f.- create a function createUser to use in graphQL"`

### Autor

Desarrollo realizado por [BATUZAV](https://batuzav.com)
