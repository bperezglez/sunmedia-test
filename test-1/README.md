# sunmedia-test-1

- En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?
```
/* El valor de las tres variables es la concatenación de las dos primeras variables.
{
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    white: "#FFFFFF",
    black: "#000000"
} */
```
- Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.
```
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = {...rgb, ...wb};
```
- Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?
```
/* El bug claramente es el método Assing de la clase Object ya que internet explorer no soporta mucha de las nuevas incorporaciones a vanillajs. Para que funcione en Internet explorer deberíamos concatenar los dos objetos: */

var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = rgb;

for (var key in wb) {
    if (wb.hasOwnProperty(key) && !colors.hasOwnProperty(key)) {
        colors[key] = wb[key];
    }
}

```