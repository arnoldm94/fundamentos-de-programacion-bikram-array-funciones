// - [ ] 1.- Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**
var arrayVacio = []

//- [ ] 2.- Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//- [ ] 3.- Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)

var arrayNumerosPares = [0, 2, 4, 6, 8]

//- [ ] 4.- Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

//- [ ] 5.- Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**
function suma (num1, num2){
return num1 + num2;
}

//- [ ] 6.- Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**
function potenciacion(num1,num2) {
    return Math.pow(num1, num2)
    }

//- [ ] 7.- Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**

function separarPalabras (str){
    let arr = str.split(" ");
return arr
}

//- [ ] 8.- Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar
 //el primer string el número dado de veces**

function repetirString(str,num) {
    let str1 = ""
    while (num !== 0) {
      str1 += str
      num = num - 1;
        }
        return (str1)
    }

//- [ ] 9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****    


function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }


//- [ ] 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**

let numeros = []
function ordenarArray (numeros){
    numeros.sort(function(a, b){return a - b});
    return numeros
}

//- [ ] 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**

function obtenerPares(arraynumero) {
    let pares = arraynumero.filter(function(arraynumero) {
        return arraynumero % 2 === 0;

    });
    return pares;
}


//- [ ] 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**
function pintarArray(arr) {
    let cadena = '['; 
   
    for (let i = 0; i < arr.length; i++) {
      cadena += arr[i];
     
      if (i !== arr.length - 1) {
        cadena += ', ';
      }
    }
   
    cadena += ']';   
    return cadena;
  }

  
//- [ ] 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **
//un array en el que se haya aplicado la función a cada elemento del array**

function arrayMapi (arr,a){
    return arr.map((element, index) => a(element, index));
  }

//- [ ] 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array**
 //y devuelva **un array en el que se hayan eliminado los duplicados**
 function eliminarDuplicados(array) {
 
  let arraySinDuplicados = [];

  array.forEach(function(elemento) {

      if (!arraySinDuplicados.includes(elemento)) {
          arraySinDuplicados.push(elemento);
      }
  });

  return arraySinDuplicados;
}

//- [ ] 15.- Crear variable de nombre **arrayNumerosNeg** declarada con 
//un **array de números del 0 al -9 (0, -1, -2...)**
var arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//- [ ] 16.- Crear variable de nombre **holaMundo** declarada con valor 
//**array con las palabras 'Hola' y 'Mundo'**
let holaMundo = ["Hola","Mundo"];

//- [ ] 17.- Crear variable de nombre **loGuardoTodo** declarada con valor
//**array con valores 'hola', 'que', 23, 42.33 y 'tal'**

let loGuardoTodo = ["hola","que", 23, 42.33, "tal"];


//- [ ] 18.- Crear variable de nombre **arrayDeArrays** declarada con
 //valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


// 19.- Crea la función **multiplicacion** que acepte como argumento  
//**dos números** y devuelva **el resultado de su multiplicación**
function multiplicacion (n1,n2){
  return n1*n2
}


//- [ ] 20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**
 function division (n1,n2){
return n1/n2
 }

//- [ ] 21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**
function esPar(n) {
  if (n%2 ===0) {
    return true
      } else {
       return false
      }
}


//- [ ] 22.- Crea el array **arrayFunciones** que tenga como valor **las funciones:
// suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**

let arrayFunciones =[suma,function resta(n1,n2){return n1-n2}, multiplicacion];

 //23.-  Crear la función **ordenarArray2** que acepta como argumento
 // **un array de números** y devuelva un **array ordenado de mayor a menor**

function ordenarArray2(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr;
}

//- [ ] 24.- Crear la función **obtenerImpares** que acepta como argumento **
//un array de números** y devuelva un **array con los elementos impares**
function obtenerImpares(ar) {
   let impares = ar.filter(function(elemento) {
      return elemento % 2 !== 0;
  });
  return impares;
}

//- [ ] 25.- Crear la función **sumarArray** que acepte como argumento
// **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**
function sumarArray(array) {
  let suma = array.reduce(function(acumulador, elemento) {
      return acumulador + elemento;
  }, 0);

  return suma;
}

//- [ ] 26.- Crear la función **multiplicarArray** que acepte como argumento
// **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**
function multiplicarArray(array) {
  let multiplicacion = array.reduce(function(acumulador, elemento) {
      return acumulador * elemento;
  }, 1); 
  return multiplicacion;
}