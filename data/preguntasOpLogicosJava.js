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

  { tipo: "logico", pregunta: "System.out.println(false && false || true);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(false && (false || true));", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println((false && false) || true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(10 == 10 && 5 == 5);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(10 == 10 && 5 == 6);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(10 == 10 || 5 == 6);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(10 != 10 || 5 == 6);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(7 >= 7 && 3 != 3);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(7 >= 7 || 3 != 3);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println('a' < 'b');", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println('a' > 'b');", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(3 + 2 == 5 && 4 > 2);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(3 + 2 == 6 && 4 > 2);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true || false && false);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println((true || false) && false);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(false || false || false);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(true && !false);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(!(true && false) || false);", respuesta: "true" },

  // NUEVAS 30
  { tipo: "logico", pregunta: "System.out.println(true || false && true);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println((true || false) && true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(!true || false);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!false && true);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(4 > 2 && 6 < 10);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(4 > 2 && 6 > 10);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(8 == 8 || 3 > 5);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(8 != 8 || 3 > 5);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!(4 == 4));", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!(4 != 4));", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println('A' == 'a');", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println('X' != 'x');", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(5 <= 5 && 7 >= 7);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(5 < 5 || 7 > 7);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true && (false || true));", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(false || (true && false));", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!true && false);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!false || false);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(2 < 3 && 3 < 4);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(2 < 3 && 3 > 4);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(1 == 1 || 2 == 3);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(1 != 1 || 2 == 3);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(!(2 < 3));", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(!(2 > 3));", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(true && !true);", respuesta: "false" },
  { tipo: "logico", pregunta: "System.out.println(false || !false);", respuesta: "true" },

  { tipo: "logico", pregunta: "System.out.println(3 >= 3 && 2 <= 2);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println(3 > 3 || 2 < 2);", respuesta: "false" },

  { tipo: "logico", pregunta: "System.out.println(true || true && false);", respuesta: "true" },
  { tipo: "logico", pregunta: "System.out.println((true || true) && false);", respuesta: "false" }

];