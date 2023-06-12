# Pagos360Interview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Info Util
El login funciona de forma directa con la pantalla de busqueda. Utilizando un Guard para no permitir el uso de la pagina sin estar logueado. El proveedor de Auth es Auth0, con una cuenta de prueba con las credenciales:
- Email: test@test360.com
- Password: Test.360

Dado que la logica del formulario es sencilla, opte por mantener una estructura "Single Page" para la busqueda y los resultados.

La seccion de los resultados permanece oculta hasta que la busqueda se realiza y obtenemos informacion para rellenar la tabla.

Tambien agregue un componente con la informacion general que obtenemos con nuestro request fuera de la key `data`.

El selector de fecha es un input con el type `date` para no depender de ninguna libreria JS que me permita tener un DatePicker, y el funcionamiento nativo del elemento HTML es facil y comodo de usar tanto en Desktop como en Mobile.

Tambien cuento con distintas variables que se manipulan durante el proceso de busqueda para que la UI vaya reflejando los estados en el que se encuentra la app. 
Ejemplos: Un spinner de loading cuando la busqueda se esta ejecutando, avisos de error cuando un request falla y cuando obtenemos resultados.


## Conocimientos Aplicados
- Pipes
- Services
- Interfaces
- Routing
- Pages/Components
- Environments
- Guards


## Tecnologias Utilizadas
- Node 20
- Angular 16
- Tailwind CSS
- DaisyUI (Tailwind UI Library)
- Auth0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

