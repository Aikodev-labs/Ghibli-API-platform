# Componente ClipBoard

## Dependencias 

El componente requiere la instalación de una dependencia de la libreria              
    de npm para React react-copy-to-clipbard, que permite copiar al texto
    al portapapeles.
     
     npm i clipboard-copy

## Importaciones

Para utilizar el componente debemos importarlo:

 ```jsx
  import { CopyToClipboard } from 'react-copy-to-clipboard';
  ```

  ## Componente

  El componente posee etiqueta de apertura y cierre y la prop 'text' 
  para pasar como string el texto a ser copiado:

   ```jsx
    <CopyToClipboard text=''>

    </CopyToClipboard>
  ```

  ## Dos ejemplos de cómo utilizar el componente:

  1. En este ejemplo, el componente envuelve un botón con un ícono de portapapeles.

     ```jsx
  <CopyToClipboard text='https:/ghibliapi.com/api'>

    <button>
      <HiOutlineClipboardDocument/>
    </button>

    </CopyToClipboard>
  ```

    2. En este ejemplo, el componente envuelve simplemente un texto (Copy!) para indicar dónde hacer click
    para copiar el texto.

     ```jsx
  <CopyToClipboard text='https:/ghibliapi.com/api'>

  <p>Copy!</p>

    </CopyToClipboard>
  ```