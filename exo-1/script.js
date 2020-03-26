// you can write js here
var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");
let celsius = kelvin - 273; //  La température en Celsius est de 273 degrés inférieure à celle en Kelvin.
let fahrenheit = Math.floor(celsius * (9/5) + 32); // une température en Fahrenheit avec la formule : Fahrenheit = Celsius * (9/5) + 32
                                                        //Math.floor(number) :modifier le résultat de la variable fahrenheit pour obtenir un entier

console.log('hello from file');
console.log(celsius);
console.log(fahrenheit);