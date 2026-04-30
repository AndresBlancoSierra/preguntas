const preguntasSalidaCodigoJava = [

  { tipo: "salida", pregunta: "System.out.println(2 + 3 * 4);", respuesta: "14",
    explicacion: "Multiplicación tiene prioridad: 3*4=12, luego 2+12" },

  { tipo: "salida", pregunta: "System.out.println(\"5\" + 3);", respuesta: "53",
    explicacion: "String + número = concatenación en Java" },

  { tipo: "salida", pregunta: "System.out.println(10 / 3);", respuesta: "3",
    explicacion: "División entre enteros → resultado entero (se trunca)" },

  { tipo: "salida", pregunta: "System.out.println(10.0 / 3);", respuesta: "3.3333333333333335",
    explicacion: "Al usar double, el resultado es decimal" },

  { tipo: "salida", pregunta: "System.out.println(7 % 2);", respuesta: "1",
    explicacion: "El operador % devuelve el residuo" },

  { tipo: "salida", pregunta: "System.out.println(true && false);", respuesta: "false",
    explicacion: "AND lógico: solo es true si ambos son true" },

  { tipo: "salida", pregunta: "System.out.println(true || false);", respuesta: "true",
    explicacion: "OR lógico: basta con que uno sea true" },

  { tipo: "salida", pregunta: "System.out.println(!true);", respuesta: "false",
    explicacion: "El operador ! invierte el valor booleano" },

  { tipo: "salida", pregunta: "System.out.println(5 > 3 ? \"si\" : \"no\");", respuesta: "si",
    explicacion: "Operador ternario: condición verdadera devuelve 'si'" },

  { tipo: "salida", pregunta: "System.out.println(2 > 3 ? \"a\" : \"b\");", respuesta: "b",
    explicacion: "Como 2>3 es falso, devuelve la segunda opción" },

  { tipo: "salida", pregunta: "System.out.println(\"Hola\".length());", respuesta: "4",
    explicacion: "length() devuelve la cantidad de caracteres" },

  { tipo: "salida", pregunta: "System.out.println(\"Hola\".charAt(1));", respuesta: "o",
    explicacion: "Los índices empiezan en 0: H=0, o=1" },

  { tipo: "salida", pregunta: "System.out.println(\"Hola\".toUpperCase());", respuesta: "HOLA",
    explicacion: "Convierte el string a mayúsculas" },

  { tipo: "salida", pregunta: "System.out.println(\"Hola\".substring(1,3));", respuesta: "ol",
    explicacion: "Incluye índice 1, excluye el 3" },

  { tipo: "salida", pregunta: "System.out.println(3 + 2 + \"5\");", respuesta: "55",
    explicacion: "Primero suma 3+2=5, luego concatena → '55'" },

  { tipo: "salida", pregunta: "System.out.println(\"5\" + 2 + 3);", respuesta: "523",
    explicacion: "Desde el inicio es string → todo se concatena" },

  { tipo: "salida", pregunta: "System.out.println(5 + 2 + \"3\");", respuesta: "73",
    explicacion: "5+2=7, luego se concatena con '3'" },

  { tipo: "salida", pregunta: "int x = 5; x++; System.out.println(x);", respuesta: "6",
    explicacion: "Se incrementa x antes de imprimir en esta línea" },

  { tipo: "salida", pregunta: "int x = 5; System.out.println(x++);", respuesta: "5",
    explicacion: "Post-incremento: imprime primero y luego incrementa" },

  { tipo: "salida", pregunta: "int x = 5; System.out.println(++x);", respuesta: "6",
    explicacion: "Pre-incremento: incrementa antes de imprimir" },

  { tipo: "salida", pregunta: "System.out.println(4 / 2 * 3);", respuesta: "6",
    explicacion: "Evaluación izquierda a derecha: (4/2)=2 → 2*3=6" },

  { tipo: "salida", pregunta: "System.out.println(4 / (2 * 3));", respuesta: "0",
    explicacion: "2*3=6, luego 4/6=0 (división entera)" },

  { tipo: "salida", pregunta: "System.out.println(1 + 2 + 3 + \"4\");", respuesta: "64",
    explicacion: "1+2+3=6, luego se concatena con '4'" },

  { tipo: "salida", pregunta: "System.out.println(\"1\" + 2 + 3 + 4);", respuesta: "1234",
    explicacion: "Al empezar con string, todo se concatena" },

  { tipo: "salida", pregunta: "System.out.println(5 == 5);", respuesta: "true" },

  { tipo: "salida", pregunta: "System.out.println(5 == 6);", respuesta: "false" },

  { tipo: "salida", pregunta: "System.out.println(5 != 6);", respuesta: "true",
    explicacion: "!= significa 'diferente de'" },

  { tipo: "salida", pregunta: "System.out.println(5 >= 5);", respuesta: "true",
    explicacion: ">= incluye igualdad" },

  { tipo: "salida", pregunta: "System.out.println('a' + 1);", respuesta: "98",
    explicacion: "'a' es 97 en ASCII → 97 + 1 = 98" },

  { tipo: "salida", pregunta: "System.out.println('A' + 1);", respuesta: "66",
    explicacion: "'A' es 65 en ASCII → 65 + 1 = 66" }

];