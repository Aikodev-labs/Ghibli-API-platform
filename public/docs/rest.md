# Rest

**Url base:** `https://ghibli-api-v1.azurewebsites.net/api/v1/`

El llamado con método `GET` a la API desde su url base, devuelve un listado de endpoints disponibles en formato `JSON`.


```bash
GET https://ghibli-api-v1.azurewebsites.net/api/v1/
```

```json
{
    "movies": "http://localhost:8000/api/v1/movies/",
    "characters": "http://localhost:8000/api/v1/characters/",
    "locations": "http://localhost:8000/api/v1/locations/",
    "species": "http://localhost:8000/api/v1/species/",
    "vehicles": "http://localhost:8000/api/v1/vehicles/"
}
```

Como se puede observar, la API cuenta con 5 endpoints, uno por cada recurso disponible.

**Movies:** devuelve el lista de películas, esta lista puede contener el total de películas o una película en particular. Además, se puede ordenar por distintos parámetros que explicaremos más adelante y cuenta con paginación.

**Characters:** devuelve el lista de personajes, esta lista puede contener el total de personajes o un personaje en particular. Además, cuenta con ordenamiento y paginación que también detallaremos más adelante en su respectiva sección.

**Locations:** devuelve el lista de locaciones, esta lista puede contener el total de locaciones o una locación en particular.

**Species:** devuelve el lista de especies, esta lista puede contener el total de especies o una especie en particular.

**Vehicles:** devuelve el lista de vehículos, esta lista puede contener el total de vehículos o un vehículo en particular.
