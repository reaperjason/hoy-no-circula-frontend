# HoyNoCircula

Es una aplicación que permite a los autos registrados consultar si pueden circular en determinada fecha y horario.
Las principales funcionalidades de la aplicación son:
  1) Registrar un vehiculo en el sistema.
  2) Consultar si un vehículo registrado puede circular en la fecha y hora establecidas.

La aplicacion esta dividida en 2 partes que corresponen al backend y frontend, en este repositorio se explicaran los detalles referentes al Frontend de la aplicación.
Para consultar sobre el backend de la aplicación dirigirse a: https://github.com/reaperjason/hoy-no-circula-backend

## Detalles Técnicos

El proyecto se creo con [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.
Node: 16.14.0
Package Manager: npm 8.3.1
El puerto sugerido es: http://localhost:4200
bootstrap: 5.0.2

## Diseño

El proyecto tiene un prototipo hecho en Figma, donde se visualizan las principales pantallas del mismo.
Enlace a Figma: https://www.figma.com/file/wWvfoCb6znWzItecSBAWnB/Hoy-no-circula?type=design&t=Kj50V75cmg3MVgMh-6
Aunque el prototipo de Figma no tiene diseños para aplicaciones mobiles, la app si cuenta con responsive design integrado.

## Instalacion

Es importante considerar los detalles técnicos para que el proyecto pueda correr correctamente.
A continuación se detallan los pasos a seguir:
  1) Clonar el proyecto de forma local desde este repositorio, rama master
  2) Instalar las dependencias necesarias con npm install --save
  3) Revisar los enviroment del proyecto y verificar que se use la URL del servidor backend (servidor AWS) o la URL local (servidor backend local)
  4) Ejecutar el comando ng s, asegurandose que el puerto sea el 4200 (puerto por defecto, habilitado en CORS)

Nota: bootstrap esta instalado en el index mediante importaciones <link> y <script>, por lo que no debería ser necesario instalarlo con npm, a menos que dichas importaciones
no funcionen correctamente en ese caso instalar bootstrap con npm install bootstrap@5.0.2 --save
## Despliegue

Para realizar un despligue del proyecto usar el comando `ng build`, esto permitira usar el enviroment de produccion y generará los archivos necesarios para el servidor web
en el directorio /dist


## Estructura y otros detalles

El proyecto esta estructurado en app, assets y enviroments como principales carpetas.
Dentro de app estan los componentes, modulos, modelos y servicios.
Dentro de componentes se encuentran las páginas principales del proyecto que previamente se definieron en Figma.
Dentro de los modulos se encuentra el SharedModule, que contiene componentes genericos que se pueden reutilizar en varios lugares del proyecto.

