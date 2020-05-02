# sunmedia test-2
- Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?
```
4
4
4
4
4

/* El método setTimeout genera una función por cada iteración la cual tiene acceso al valor de i al final de su ciclo el cual es 4 al terminar. */
```
- Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
```
/* Cambiando la declaración de i, en vez de declararlo como var, ponerlo como let para que su scope se mantenga en el bloque y asi preservar el valor de i en cada ejecución de bloque */
```