const preguntasOpLogicosJava = [

  { tipo: "logico", pregunta: "System.out.println(true && false);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(true || false);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(!true);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!false);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(5 > 3 && 2 < 4);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(5 > 3 && 2 > 4);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(5 > 3 || 2 > 4);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(5 < 3 || 2 > 4);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!(5 > 3));", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!(5 < 3));", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(true && true && false);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(true || false || false);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(false && false || true);", respuesta: "true",
    explicacion: "&& tiene prioridad: (false && false)=false, luego false || true" },

  { tipo: "logico", pregunta: "System.out.println(false && (false || true));", respuesta: "false",
    explicacion: "Paréntesis primero: false || true = true, luego false && true" },

  { tipo: "logico", pregunta: "System.out.println((false && false) || true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(10 == 10 && 5 == 5);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(10 == 10 && 5 == 6);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(10 == 10 || 5 == 6);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(10 != 10 || 5 == 6);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(7 >= 7 && 3 != 3);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(7 >= 7 || 3 != 3);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println('a' < 'b');", respuesta: "true",
    explicacion: "Se comparan por valor Unicode (como ASCII)" },

  { tipo: "logico", pregunta: "System.out.println('a' > 'b');", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(3 + 2 == 5 && 4 > 2);", respuesta: "true",
    explicacion: "3+2=5 (true) y 4>2 (true)" },

  { tipo: "logico", pregunta: "System.out.println(3 + 2 == 6 && 4 > 2);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true || false && false);", respuesta: "true",
    explicacion: "&& tiene prioridad: false && false = false, luego true || false" },

  { tipo: "logico", pregunta: "System.out.println((true || false) && false);", respuesta: "false",
    explicacion: "Paréntesis primero: true || false = true, luego true && false" },

  { tipo: "logico", pregunta: "System.out.println(false || false || false);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true && !false);", respuesta: "true",
    explicacion: "!false = true, luego true && true" },

  { tipo: "logico", pregunta: "System.out.println(!(true && false) || false);", respuesta: "true",
    explicacion: "true && false = false, luego !false = true, luego true || false" },

    // NUEVAS 30
  { tipo: "logico", pregunta: "System.out.println(true || false && true);", respuesta: "true",
    explicacion: "&& tiene mayor prioridad que ||: false && true = false, luego true || false = true" },

  { tipo: "logico", pregunta: "System.out.println((true || false) && true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(!true || false);", respuesta: "false",
    explicacion: "!true = false, luego false || false = false" },

  { tipo: "logico", pregunta: "System.out.println(!false && true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(4 > 2 && 6 < 10);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(4 > 2 && 6 > 10);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(8 == 8 || 3 > 5);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(8 != 8 || 3 > 5);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!(4 == 4));", respuesta: "false",
    explicacion: "4 == 4 es true, luego !true = false" },

  { tipo: "logico", pregunta: "System.out.println(!(4 != 4));", respuesta: "true",
    explicacion: "4 != 4 es false, luego !false = true" },

  { tipo: "logico", pregunta: "System.out.println('A' == 'a');", respuesta: "false",
    explicacion: "Java distingue mayúsculas y minúsculas" },

  { tipo: "logico", pregunta: "System.out.println('X' != 'x');", respuesta: "true",
    explicacion: "Caracteres diferentes por case sensitivity" },

  { tipo: "logico", pregunta: "System.out.println(5 <= 5 && 7 >= 7);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(5 < 5 || 7 > 7);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true && (false || true));", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(false || (true && false));", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!true && false);", respuesta: "false",
    explicacion: "!true = false, luego false && false = false" },

  { tipo: "logico", pregunta: "System.out.println(!false || false);", respuesta: "true",
    explicacion: "!false = true, luego true || false = true" },

  { tipo: "logico", pregunta: "System.out.println(2 < 3 && 3 < 4);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(2 < 3 && 3 > 4);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(1 == 1 || 2 == 3);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(1 != 1 || 2 == 3);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!(2 < 3));", respuesta: "false",
    explicacion: "2 < 3 es true, luego !true = false" },

  { tipo: "logico", pregunta: "System.out.println(!(2 > 3));", respuesta: "true",
    explicacion: "2 > 3 es false, luego !false = true" },

  { tipo: "logico", pregunta: "System.out.println(true && !true);", respuesta: "false",
    explicacion: "!true = false, luego true && false = false" },

  { tipo: "logico", pregunta: "System.out.println(false || !false);", respuesta: "true",
    explicacion: "!false = true, luego false || true = true" },

  { tipo: "logico", pregunta: "System.out.println(3 >= 3 && 2 <= 2);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(3 > 3 || 2 < 2);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true || true && false);", respuesta: "true",
    explicacion: "&& tiene prioridad: true && false = false, luego true || false = true" },

  { tipo: "logico", pregunta: "System.out.println((true || true) && false);", respuesta: "false",
    explicacion: "Paréntesis primero: true || true = true, luego true && false = false" }

];