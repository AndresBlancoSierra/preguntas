const preguntasOpLogicosJava = [

  {
    pregunta: "System.out.println(true && false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(true || false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(!true);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(5 > 3 && 2 < 4);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(5 > 3 && 2 > 4);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(5 > 3 || 2 > 4);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(5 < 3 || 2 > 4);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!(5 > 3));",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!(5 < 3));",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(true && true && false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(true || false || false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(false && false || true);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(false && (false || true));",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println((false && false) || true);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(10 == 10 && 5 == 5);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(10 == 10 && 5 == 6);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(10 == 10 || 5 == 6);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(10 != 10 || 5 == 6);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(7 >= 7 && 3 != 3);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(7 >= 7 || 3 != 3);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println('a' < 'b');",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println('a' > 'b');",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(3 + 2 == 5 && 4 > 2);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(3 + 2 == 6 && 4 > 2);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(true || false && false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println((true || false) && false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(false || false || false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(true && !false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(!(true && false) || false);",
    respuesta: "true"
  },
  // NUEVAS 30
  {
    pregunta: "System.out.println(true || false && true);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println((true || false) && true);",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(!true || false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!false && true);",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(4 > 2 && 6 < 10);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(4 > 2 && 6 > 10);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(8 == 8 || 3 > 5);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(8 != 8 || 3 > 5);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(!(4 == 4));",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!(4 != 4));",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println('A' == 'a');",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println('X' != 'x');",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(5 <= 5 && 7 >= 7);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(5 < 5 || 7 > 7);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(true && (false || true));",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(false || (true && false));",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(!true && false);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!false || false);",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(2 < 3 && 3 < 4);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(2 < 3 && 3 > 4);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(1 == 1 || 2 == 3);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(1 != 1 || 2 == 3);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(!(2 < 3));",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(!(2 > 3));",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(true && !true);",
    respuesta: "false"
  },
  {
    pregunta: "System.out.println(false || !false);",
    respuesta: "true"
  },

  {
    pregunta: "System.out.println(3 >= 3 && 2 <= 2);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println(3 > 3 || 2 < 2);",
    respuesta: "false"
  },

  {
    pregunta: "System.out.println(true || true && false);",
    respuesta: "true"
  },
  {
    pregunta: "System.out.println((true || true) && false);",
    respuesta: "false"
  }

];