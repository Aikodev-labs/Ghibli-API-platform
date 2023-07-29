# MarkdownComponent

## Dependencias 

El componente requiere la instalación de una dependencia de la libreria              
       [react-markdown](https://www.npmjs.com/package/react-markdown)

npm i react-markdown

## Escritura de la documentación y renderizado

1. Para redactar en formato markdown, dentro de la carpeta **docs** se creará un archivo con extención .md referenciando al componente a documentar. Ej:

 - MarkdownComponent.md
 - Button.md
 - HightlighterComponent.md

2. Para renderizar el contenido del archivo .md, dentro del componente, se utilizará un Hook de Efecto.

```jsx
  
  useEffect(() => {
     fetch('../docs/MarkdownComponent.md')
     .then(response => response.text())
     .then(data => setmdText(data))
     
  }, []);
  ```

## Importaciones

En caso de necesitar mostrar la documentación en alguna sección del sitio :

 ```jsx
  import MarkdownComponent from "./components/MarkdownComponent"
  ```

  ### Notas :

  1. Para previsualizar la escritura en markdown en Visual Studio Code :
   ctrl + shift + p --> markdown --> markdown preview.
  2. Sintaxis de escritura y formato básicos de markdown [docs-github](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).



