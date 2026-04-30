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
  { tipo: "logico", pregunta: "5 != 5", respuesta: "False",
    explicacion: "!= significa 'diferente de', y 5 sí es igual a 5" },

  { tipo: "logico", pregunta: "3 + 2 == 5 and 4 > 2", respuesta: "True",
    explicacion: "3+2=5 (True) y 4>2 (True) → True and True" },

  { tipo: "logico", pregunta: "True and False or True", respuesta: "True",
    explicacion: "and se evalúa primero: (True and False)=False, luego False or True" },

  { tipo: "logico", pregunta: "False and True or False", respuesta: "False",
    explicacion: "(False and True)=False, luego False or False" },

  { tipo: "logico", pregunta: "not (True or False)", respuesta: "False",
    explicacion: "Dentro del paréntesis: True or False = True, luego not True" },

  { tipo: "logico", pregunta: "7 >= 7 and 3 != 3", respuesta: "False",
    explicacion: "7>=7 es True pero 3!=3 es False → True and False" },

  { tipo: "logico", pregunta: "'hola' == 'HOLA'", respuesta: "False",
    explicacion: "Las cadenas son sensibles a mayúsculas/minúsculas" },

  { tipo: "logico", pregunta: "'hola' == 'hola'", respuesta: "True" },

  { tipo: "logico", pregunta: "5 < 3 or 8 > 2", respuesta: "True",
    explicacion: "5<3 es False pero 8>2 es True → False or True" },

  { tipo: "logico", pregunta: "not True and not False", respuesta: "False",
    explicacion: "not True = False y not False = True → False and True" },

  { tipo: "logico", pregunta: "True or True or False", respuesta: "True" },

  { tipo: "logico", pregunta: "False and False and True", respuesta: "False" },

  { tipo: "logico", pregunta: "10 % 3 == 1 and 5 > 2", respuesta: "True",
    explicacion: "10%3=1 (True) y 5>2 (True)" },

  { tipo: "logico", pregunta: "'a' < 'b'", respuesta: "True",
    explicacion: "Se comparan por orden ASCII/Unicode" },

  { tipo: "logico", pregunta: "0 == False", respuesta: "True",
    explicacion: "En Python, False equivale a 0" },

  { tipo: "logico", pregunta: "bool('')", respuesta: "False",
    explicacion: "String vacío es False" },

  { tipo: "logico", pregunta: "bool('texto')", respuesta: "True" },

  { tipo: "logico", pregunta: "False or 0 or ''", respuesta: "'' (cadena vacía)",
    explicacion: "or devuelve el primer valor 'truthy'; todos son falsy → devuelve el último" },

  { tipo: "logico", pregunta: "True and 'texto'", respuesta: "'texto'",
    explicacion: "and devuelve el último valor si todos son truthy" },

  { tipo: "logico", pregunta: "not (5 > 3 and 2 < 4)", respuesta: "False",
    explicacion: "Dentro: True and True = True, luego not True" },

  { tipo: "logico", pregunta: "(5 > 3) and (2 > 4)", respuesta: "False",
    explicacion: "True and False" },
    
  { tipo: "logico", pregunta: "True or False and False", respuesta: "True",
    explicacion: "and se evalúa primero: False and False = False, luego True or False" },

  { tipo: "logico", pregunta: "(True or False) and False", respuesta: "False",
    explicacion: "Paréntesis primero: True or False = True, luego True and False" },

  { tipo: "logico", pregunta: "not (False and True)", respuesta: "True",
    explicacion: "Dentro: False and True = False, luego not False" },

  { tipo: "logico", pregunta: "not False and True", respuesta: "True",
    explicacion: "not tiene prioridad: not False = True, luego True and True" },

  { tipo: "logico", pregunta: "3 > 2 and 5 < 10", respuesta: "True" },
  { tipo: "logico", pregunta: "3 > 2 and 5 > 10", respuesta: "False" },

  { tipo: "logico", pregunta: "8 == 8 or 2 > 5", respuesta: "True" },
  { tipo: "logico", pregunta: "8 != 8 or 2 > 5", respuesta: "False" },

  { tipo: "logico", pregunta: "not (3 == 3)", respuesta: "False" },
  { tipo: "logico", pregunta: "not (3 != 3)", respuesta: "True" },

  { tipo: "logico", pregunta: "'a' == 'A'", respuesta: "False",
    explicacion: "Comparación sensible a mayúsculas/minúsculas" },

  { tipo: "logico", pregunta: "'Python' == 'python'", respuesta: "False" },

  { tipo: "logico", pregunta: "4 <= 4 and 6 >= 6", respuesta: "True" },
  { tipo: "logico", pregunta: "4 < 4 or 6 > 6", respuesta: "False" },

  { tipo: "logico", pregunta: "True and (False or True)", respuesta: "True" },
  { tipo: "logico", pregunta: "False or (False and True)", respuesta: "False" },

  { tipo: "logico", pregunta: "not True or False", respuesta: "False",
    explicacion: "not tiene prioridad: not True = False, luego False or False" },

  { tipo: "logico", pregunta: "not (True or False)", respuesta: "False" },

  { tipo: "logico", pregunta: "bool(0)", respuesta: "False",
    explicacion: "0 es un valor falsy en Python" },

  { tipo: "logico", pregunta: "bool(1)", respuesta: "True" },

  { tipo: "logico", pregunta: "bool([])", respuesta: "False",
    explicacion: "Lista vacía es falsy" },

  { tipo: "logico", pregunta: "bool([1])", respuesta: "True" },

  { tipo: "logico", pregunta: "bool(None)", respuesta: "False",
    explicacion: "None es falsy" },

  { tipo: "logico", pregunta: "bool(True)", respuesta: "True" },

  { tipo: "logico", pregunta: "1 < 2 < 3", respuesta: "True",
    explicacion: "Comparación encadenada: (1<2) and (2<3)" },

  { tipo: "logico", pregunta: "1 < 2 > 3", respuesta: "False",
    explicacion: "Equivale a (1<2) and (2>3)" },

  { tipo: "logico", pregunta: "not (1 < 2)", respuesta: "False" },
  { tipo: "logico", pregunta: "not (1 > 2)", respuesta: "True" },

  { tipo: "logico", pregunta: "True and not False", respuesta: "True",
    explicacion: "not False = True, luego True and True" },

  { tipo: "logico", pregunta: "False or not True", respuesta: "False",
    explicacion: "not True = False, luego False or False" }

];