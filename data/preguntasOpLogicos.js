const preguntasOpLogicos = [

  { tipo: "logico", pregunta: "True and False", respuesta: "False" },
  { tipo: "logico", pregunta: "True or False", respuesta: "True" },
  { tipo: "logico", pregunta: "not True", respuesta: "False" },
  { tipo: "logico", pregunta: "not False", respuesta: "True" },

  { tipo: "logico", pregunta: "True and True", respuesta: "True" },
  { tipo: "logico", pregunta: "False or True", respuesta: "True" },
  { tipo: "logico", pregunta: "False and True", respuesta: "False" },

  { tipo: "logico", pregunta: "10 > 5 and 3 < 7", respuesta: "True" },
  { tipo: "logico", pregunta: "10 == 10 or 5 == 6", respuesta: "True" },
  { tipo: "logico", pregunta: "5 != 5", respuesta: "False" },

  { tipo: "logico", pregunta: "3 + 2 == 5 and 4 > 2", respuesta: "True" },
  { tipo: "logico", pregunta: "True and False or True", respuesta: "True" },
  { tipo: "logico", pregunta: "False and True or False", respuesta: "False" },

  { tipo: "logico", pregunta: "not (True or False)", respuesta: "False" },
  { tipo: "logico", pregunta: "7 >= 7 and 3 != 3", respuesta: "False" },

  { tipo: "logico", pregunta: "'hola' == 'HOLA'", respuesta: "False" },
  { tipo: "logico", pregunta: "'hola' == 'hola'", respuesta: "True" },

  { tipo: "logico", pregunta: "5 < 3 or 8 > 2", respuesta: "True" },
  { tipo: "logico", pregunta: "not True and not False", respuesta: "False" },

  { tipo: "logico", pregunta: "True or True or False", respuesta: "True" },
  { tipo: "logico", pregunta: "False and False and True", respuesta: "False" },

  { tipo: "logico", pregunta: "10 % 3 == 1 and 5 > 2", respuesta: "True" },

  { tipo: "logico", pregunta: "'a' < 'b'", respuesta: "True" },

  { tipo: "logico", pregunta: "0 == False", respuesta: "True" },

  { tipo: "logico", pregunta: "bool('')", respuesta: "False" },
  { tipo: "logico", pregunta: "bool('texto')", respuesta: "True" },

  { tipo: "logico", pregunta: "False or 0 or ''", respuesta: "'' (cadena vacía)" },

  { tipo: "logico", pregunta: "True and 'texto'", respuesta: "'texto'" },

  { tipo: "logico", pregunta: "not (5 > 3 and 2 < 4)", respuesta: "False" },

  { tipo: "logico", pregunta: "(5 > 3) and (2 > 4)", respuesta: "False" },

  // NUEVAS 30
  { tipo: "logico", pregunta: "True or False and False", respuesta: "True" },
  { tipo: "logico", pregunta: "(True or False) and False", respuesta: "False" },

  { tipo: "logico", pregunta: "not (False and True)", respuesta: "True" },
  { tipo: "logico", pregunta: "not False and True", respuesta: "True" },

  { tipo: "logico", pregunta: "3 > 2 and 5 < 10", respuesta: "True" },
  { tipo: "logico", pregunta: "3 > 2 and 5 > 10", respuesta: "False" },

  { tipo: "logico", pregunta: "8 == 8 or 2 > 5", respuesta: "True" },
  { tipo: "logico", pregunta: "8 != 8 or 2 > 5", respuesta: "False" },

  { tipo: "logico", pregunta: "not (3 == 3)", respuesta: "False" },
  { tipo: "logico", pregunta: "not (3 != 3)", respuesta: "True" },

  { tipo: "logico", pregunta: "'a' == 'A'", respuesta: "False" },
  { tipo: "logico", pregunta: "'Python' == 'python'", respuesta: "False" },

  { tipo: "logico", pregunta: "4 <= 4 and 6 >= 6", respuesta: "True" },
  { tipo: "logico", pregunta: "4 < 4 or 6 > 6", respuesta: "False" },

  { tipo: "logico", pregunta: "True and (False or True)", respuesta: "True" },
  { tipo: "logico", pregunta: "False or (False and True)", respuesta: "False" },

  { tipo: "logico", pregunta: "not True or False", respuesta: "False" },
  { tipo: "logico", pregunta: "not (True or False)", respuesta: "False" },

  { tipo: "logico", pregunta: "bool(0)", respuesta: "False" },
  { tipo: "logico", pregunta: "bool(1)", respuesta: "True" },

  { tipo: "logico", pregunta: "bool([])", respuesta: "False" },
  { tipo: "logico", pregunta: "bool([1])", respuesta: "True" },

  { tipo: "logico", pregunta: "bool(None)", respuesta: "False" },
  { tipo: "logico", pregunta: "bool(True)", respuesta: "True" },

  { tipo: "logico", pregunta: "1 < 2 < 3", respuesta: "True" },
  { tipo: "logico", pregunta: "1 < 2 > 3", respuesta: "False" },

  { tipo: "logico", pregunta: "not (1 < 2)", respuesta: "False" },
  { tipo: "logico", pregunta: "not (1 > 2)", respuesta: "True" },

  { tipo: "logico", pregunta: "True and not False", respuesta: "True" },
  { tipo: "logico", pregunta: "False or not True", respuesta: "False" }

];