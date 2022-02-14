# Personajes de Breaking Bad

Esta aplicación permite consultar los personajes de la serie "Breaking Bad". Los datos se obtienen mediante la API
disponible en https://breakingbadapi.com.

[Demo](https://breaking-bad-characters-rho.vercel.app/)

---

## Inicio

La aplicación fue creada a partir de Create React App, por lo que para arrancarla en local sólo es necesario ejectuar el
siguiente comando:

```
npm run start
```

## Estructura del proyecto

La estructura de carpetas del proyecto es la siguiente:

- **api**: Contiene la configuración de Axios y los hooks de React Query para las llamadas a la API.
- **assets**: Los recursos utilizados en la aplicación, como las imágenes y las cadenas de texto.
- **components**: Componentes generales que se reutilizan en varios lugares.
- **hooks**: Hooks personalizados para extraer lógica de otros componentes.
- **pages**: Componentes para las páginas de la aplicación, y los sub-componentes que las componen.
- **theme**: Contiene la configuración del tema que utiliza MUI para aplicar estilos a los componentes.
- **types**: Definición de tipos de datos utilizados a lo largo de la aplicación.
- **utils**: Funciones y objetos reutilizables.

## Librerías utilizadas

- **MUI**: Es una de las librerías de componentes más utilizadas. Multitud de componentes y facilidad de aplicar temas.
- **Axios**: Permite realizar peticiones HTTP de forma sencilla.
- **React Query**: Facilita las llamadas a la API proporcionando hooks y cacheando los resultados, haciendo innecesario
  manejar el estado entre componentes.
- **React Router**: La librería de routing más utilizada.
- **react-i18next**: Framework de internacionalización.
- **Helmet**: Permite modificar el contenido de la etiqueta `head` en cualquier componente.

## Testing

Se han incluído tests para algunos componentes y funciones, utilizando `jest` y `react-testing-library`. Todos los
archivos que tienen tests asociados los tienen en su misma carpeta, con el nombre [fichero].test.tsx.

Para lanzar los test ejecutar el siguiente comando:

```
npm run test
```