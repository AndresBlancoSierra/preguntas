const preguntasSalidaCodigo = [

  { tipo: "salida", pregunta: "print(2 + 3 * 4)", respuesta: "14" },
  { tipo: "salida", pregunta: "print('5' + '3')", respuesta: "53" },
  { tipo: "salida", pregunta: "print(10 / 3)", respuesta: "3.3333333333333335" },
  { tipo: "salida", pregunta: "print(7 % 2)", respuesta: "1" },

  { tipo: "salida", pregunta: "print(type('Hola'))", respuesta: "<class 'str'>" },
  { tipo: "salida", pregunta: "print(2 ** 3)", respuesta: "8" },
  { tipo: "salida", pregunta: "print(len('abc'))", respuesta: "3" },
  { tipo: "salida", pregunta: "print(len([1,2,3]))", respuesta: "3" },

  { tipo: "salida", pregunta: "print('si' if 5 > 3 else 'no')", respuesta: "si" },
  { tipo: "salida", pregunta: "print('hello'.upper())", respuesta: "HELLO" },
  { tipo: "salida", pregunta: "print('hello'[1])", respuesta: "e" },

  { tipo: "salida", pregunta: "print(bool(''))", respuesta: "False" },
  { tipo: "salida", pregunta: "print(bool('abc'))", respuesta: "True" },

  { tipo: "salida", pregunta: "x = [1,2,3]\nprint(x.pop())", respuesta: "3" },

  { tipo: "salida", pregunta: "print(int('5') - 2)", respuesta: "3" },
  { tipo: "salida", pregunta: "print(int('1') + 1)", respuesta: "2" },

  { tipo: "salida", pregunta: "print(list('abcd'))", respuesta: "['a', 'b', 'c', 'd']" },

  { tipo: "salida", pregunta: "print('texto'[1:3])", respuesta: "ex" },

  { tipo: "salida", pregunta: "print([1,[2,3]][1][0])", respuesta: "2" },

  { tipo: "salida", pregunta: "print(3 + True)", respuesta: "4" },
  { tipo: "salida", pregunta: "print(False + False)", respuesta: "0" },

  { tipo: "salida", pregunta: "print(int('5') * int('2'))", respuesta: "10" },

  { tipo: "salida", pregunta: "print('a' if 2 > 3 else 'b')", respuesta: "b" },

  { tipo: "salida", pregunta: "import math\nprint(math.floor(4.7))", respuesta: "4" },
  { tipo: "salida", pregunta: "import math\nprint(math.ceil(4.2))", respuesta: "5" },

  { tipo: "salida", pregunta: "print('-'.join(['1','2','3']))", respuesta: "1-2-3" },

  { tipo: "salida", pregunta: "print('hola'.replace('o','a'))", respuesta: "hala" },

  { tipo: "salida", pregunta: "print(str(123))", respuesta: "123" },

  { tipo: "salida", pregunta: "print(2 == int('2'))", respuesta: "True" },

  { tipo: "salida", pregunta: "x = [10,20,30]\nx[1] = 99\nprint(x)", respuesta: "[10, 99, 30]" }

];