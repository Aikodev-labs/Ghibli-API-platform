# Información y paginación

La API detecta automáticamente si la intención del cliente es obtener todos los elementos de la colección o si desea obtener elementos ordenados y paginados.

Esto se logra a través de la detección de parámetros en la URL, es decir que si no se envía ningún parámetro, la API devolverá todos los elementos de la colección, pero si se envía un parámetro de ordenamiento o paginación, la API devolverá los elementos ordenados y paginados.

## Paginación

La API cuenta con paginación de elementos, por lo que si se desea obtener una cantidad determinada de elementos, se debe enviar el parámetro `limit` con el número de elementos que se desean obtener.

Por ejemplo, si se desea obtener 10 películas, se debe enviar el parámetro `limit` con el valor `10`:

```bash
GET https://ghibli-api-v1.azurewebsites.net/api/v1/movies/limit=10
```

```json
{
    wait for example
}
```

Además, se recibirán metadatos de la paginación como se puede observar en el ejemplo anterior.

## Parámetros

Los parámetros que se pueden enviar para ordenar y paginar los elementos son los siguientes:

- `limit`: cantidad de elementos a obtener.
- `sort`: campo por el cual se desea ordenar los elementos.
- `order`: orden de los elementos, puede ser `asc` o `desc`.
- `page`: número de página a obtener.

## Ejemplos

