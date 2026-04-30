const preguntasOpLogicos = [

  { pregunta: "True and False", respuesta: "False" },
  { pregunta: "True or False", respuesta: "True" },
  { pregunta: "not True", respuesta: "False" },
  { pregunta: "not False", respuesta: "True" },

  { pregunta: "True and True", respuesta: "True" },
  { pregunta: "False or True", respuesta: "True" },
  { pregunta: "False and True", respuesta: "False" },

  { pregunta: "10 > 5 and 3 < 7", respuesta: "True" },
  { pregunta: "10 == 10 or 5 == 6", respuesta: "True" },
  { pregunta: "5 != 5", respuesta: "False" },

  { pregunta: "3 + 2 == 5 and 4 > 2", respuesta: "True" },
  { pregunta: "True and False or True", respuesta: "True" },
  { pregunta: "False and True or False", respuesta: "False" },

  { pregunta: "not (True or False)", respuesta: "False" },
  { pregunta: "7 >= 7 and 3 != 3", respuesta: "False" },

  { pregunta: "'hola' == 'HOLA'", respuesta: "False" },
  { pregunta: "'hola' == 'hola'", respuesta: "True" },

  { pregunta: "5 < 3 or 8 > 2", respuesta: "True" },
  { pregunta: "not True and not False", respuesta: "False" },

  { pregunta: "True or True or False", respuesta: "True" },
  { pregunta: "False and False and True", respuesta: "False" },

  { pregunta: "10 % 3 == 1 and 5 > 2", respuesta: "True" },

  { pregunta: "'a' < 'b'", respuesta: "True" },

  { pregunta: "0 == False", respuesta: "True" },

  { pregunta: "bool('')", respuesta: "False" },
  { pregunta: "bool('texto')", respuesta: "True" },

  { pregunta: "False or 0 or ''", respuesta: "'' (cadena vacía)" },

  { pregunta: "True and 'texto'", respuesta: "'texto'" },

  { pregunta: "not (5 > 3 and 2 < 4)", respuesta: "False" },

  { pregunta: "(5 > 3) and (2 > 4)", respuesta: "False" },

  // NUEVAS 30
  { pregunta: "True or False and False", respuesta: "True" },
  { pregunta: "(True or False) and False", respuesta: "False" },

  { pregunta: "not (False and True)", respuesta: "True" },
  { pregunta: "not False and True", respuesta: "True" },

  { pregunta: "3 > 2 and 5 < 10", respuesta: "True" },
  { pregunta: "3 > 2 and 5 > 10", respuesta: "False" },

  { pregunta: "8 == 8 or 2 > 5", respuesta: "True" },
  { pregunta: "8 != 8 or 2 > 5", respuesta: "False" },

  { pregunta: "not (3 == 3)", respuesta: "False" },
  { pregunta: "not (3 != 3)", respuesta: "True" },

  { pregunta: "'a' == 'A'", respuesta: "False" },
  { pregunta: "'Python' == 'python'", respuesta: "False" },

  { pregunta: "4 <= 4 and 6 >= 6", respuesta: "True" },
  { pregunta: "4 < 4 or 6 > 6", respuesta: "False" },

  { pregunta: "True and (False or True)", respuesta: "True" },
  { pregunta: "False or (False and True)", respuesta: "False" },

  { pregunta: "not True or False", respuesta: "False" },
  { pregunta: "not (True or False)", respuesta: "False" },

  { pregunta: "bool(0)", respuesta: "False" },
  { pregunta: "bool(1)", respuesta: "True" },

  { pregunta: "bool([])", respuesta: "False" },
  { pregunta: "bool([1])", respuesta: "True" },

  { pregunta: "bool(None)", respuesta: "False" },
  { pregunta: "bool(True)", respuesta: "True" },

  { pregunta: "1 < 2 < 3", respuesta: "True" },
  { pregunta: "1 < 2 > 3", respuesta: "False" },

  { pregunta: "not (1 < 2)", respuesta: "False" },
  { pregunta: "not (1 > 2)", respuesta: "True" },

  { pregunta: "True and not False", respuesta: "True" },
  { pregunta: "False or not True", respuesta: "False" }

];