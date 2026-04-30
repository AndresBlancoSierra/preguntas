const preguntasSalidaCodigo = [

  { tipo: "salida", pregunta: "print(2 + 3 * 4)", respuesta: "14",
    explicacion: "La multiplicación tiene mayor prioridad que la suma: 3*4=12, luego 2+12=14" },

  { tipo: "salida", pregunta: "print('5' + '3')", respuesta: "53",
    explicacion: "Son strings, por lo que se concatenan, no se suman" },

  { tipo: "salida", pregunta: "print(10 / 3)", respuesta: "3.3333333333333335",
    explicacion: "En Python la división siempre devuelve float" },

  { tipo: "salida", pregunta: "print(7 % 2)", respuesta: "1",
    explicacion: "El operador % devuelve el residuo de la división" },

  { tipo: "salida", pregunta: "print(type('Hola'))", respuesta: "<class 'str'>",
    explicacion: "type() muestra el tipo de dato" },

  { tipo: "salida", pregunta: "print(2 ** 3)", respuesta: "8",
    explicacion: "** es potencia: 2^3 = 8" },

  { tipo: "salida", pregunta: "print(len('abc'))", respuesta: "3",
    explicacion: "len() cuenta la cantidad de elementos" },

  { tipo: "salida", pregunta: "print(len([1,2,3]))", respuesta: "3",
    explicacion: "La lista tiene 3 elementos" },

  { tipo: "salida", pregunta: "print('si' if 5 > 3 else 'no')", respuesta: "si",
    explicacion: "Operador ternario: como 5>3 es True, devuelve 'si'" },

  { tipo: "salida", pregunta: "print('hello'.upper())", respuesta: "HELLO",
    explicacion: "upper() convierte el texto a mayúsculas" },

  { tipo: "salida", pregunta: "print('hello'[1])", respuesta: "e",
    explicacion: "Los strings son indexados desde 0" },

  { tipo: "salida", pregunta: "print(bool(''))", respuesta: "False",
    explicacion: "String vacío es False en Python" },

  { tipo: "salida", pregunta: "print(bool('abc'))", respuesta: "True",
    explicacion: "String no vacío es True" },

  { tipo: "salida", pregunta: "x = [1,2,3]\nprint(x.pop())", respuesta: "3",
    explicacion: "pop() elimina y retorna el último elemento" },

  { tipo: "salida", pregunta: "print(int('5') - 2)", respuesta: "3",
    explicacion: "Se convierte el string a entero antes de restar" },

  { tipo: "salida", pregunta: "print(int('1') + 1)", respuesta: "2",
    explicacion: "'1' se convierte a entero y se suma 1" },

  { tipo: "salida", pregunta: "print(list('abcd'))", respuesta: "['a', 'b', 'c', 'd']",
    explicacion: "list() convierte el string en lista de caracteres" },

  { tipo: "salida", pregunta: "print('texto'[1:3])", respuesta: "ex",
    explicacion: "Slice: incluye índice 1 y excluye el 3" },

  { tipo: "salida", pregunta: "print([1,[2,3]][1][0])", respuesta: "2",
    explicacion: "Primero accede a [2,3], luego al índice 0" },

  { tipo: "salida", pregunta: "print(3 + True)", respuesta: "4",
    explicacion: "True equivale a 1 en Python" },

  { tipo: "salida", pregunta: "print(False + False)", respuesta: "0",
    explicacion: "False equivale a 0" },

  { tipo: "salida", pregunta: "print(int('5') * int('2'))", respuesta: "10",
    explicacion: "Ambos strings se convierten a enteros antes de multiplicar" },

  { tipo: "salida", pregunta: "print('a' if 2 > 3 else 'b')", respuesta: "b",
    explicacion: "2>3 es False, por eso devuelve 'b'" },

  { tipo: "salida", pregunta: "import math\nprint(math.floor(4.7))", respuesta: "4",
    explicacion: "floor redondea hacia abajo" },

  { tipo: "salida", pregunta: "import math\nprint(math.ceil(4.2))", respuesta: "5",
    explicacion: "ceil redondea hacia arriba" },

  { tipo: "salida", pregunta: "print('-'.join(['1','2','3']))", respuesta: "1-2-3",
    explicacion: "join une los elementos usando '-' como separador" },

  { tipo: "salida", pregunta: "print('hola'.replace('o','a'))", respuesta: "hala",
    explicacion: "replace sustituye caracteres en el string" },

  { tipo: "salida", pregunta: "print(str(123))", respuesta: "123",
    explicacion: "Convierte número a string" },

  { tipo: "salida", pregunta: "print(2 == int('2'))", respuesta: "True",
    explicacion: "Se convierte '2' a entero antes de comparar" },

  { tipo: "salida", pregunta: "x = [10,20,30]\nx[1] = 99\nprint(x)", respuesta: "[10, 99, 30]",
    explicacion: "Se modifica el valor en la posición 1 de la lista" }

];