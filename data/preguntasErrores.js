const preguntasErrores = [

  {
    pregunta: "print(5 / 0)",
    respuesta: "Error: ZeroDivisionError"
  },
  {
    pregunta: "print(variable)",
    respuesta: "Error: NameError"
  },
  {
    pregunta: "print([1,2,3][3])",
    respuesta: "Error: IndexError"
  },
  {
    pregunta: "print(len(5))",
    respuesta: "Error: TypeError"
  },
  {
    pregunta: "int('abc')",
    respuesta: "Error: ValueError"
  },
  {
    pregunta: "x = [1,2,3]\nx.append(4)\nprint(len(x))",
    respuesta: "4"
  },
  {
    pregunta: "x = {'a':1}\nprint(x['b'])",
    respuesta: "Error: KeyError"
  },
  {
    pregunta: "print(int('10'))",
    respuesta: "10"
  },
  {
    pregunta: "def f():\n    raise Exception('error')\nf()",
    respuesta: "Error: Exception"
  },
  {
    pregunta: "print(1..real)",
    respuesta: "Error: SyntaxError"
  },
  {
    pregunta: "def test():\n    return 1, 2, 3\nprint(test())",
    respuesta: "(1, 2, 3)"
  },
  {
    pregunta: "print(0.1 + 0.2 == 0.3)",
    respuesta: "False"
  },
  {
    pregunta: "x = None\nprint(x)",
    respuesta: "None"
  },
  {
    pregunta: "x = {'a':{'b':1}}\nprint(x['a']['b'])",
    respuesta: "1"
  },
  {
    pregunta: "print('5' == 5)",
    respuesta: "False"
  },
  {
    pregunta: "print(None == None)",
    respuesta: "True"
  },
  {
    pregunta: "x = [1,2,3]\ndel x[1]\nprint(len(x))",
    respuesta: "2"
  },
  {
    pregunta: "import math\nprint(math.nan == math.nan)",
    respuesta: "False"
  },
  {
    pregunta: "s = 'hola'\ns[0] = 'H'",
    respuesta: "Error: TypeError"
  },
  {
    pregunta: "def f():\n    x = 1\nf()\nprint(x)",
    respuesta: "Error: NameError"
  },
  {
    pregunta: "print(type(None))",
    respuesta: "<class 'NoneType'>"
  },
  {
    pregunta: "def f():\n    return 'hola'\nprint(f())",
    respuesta: "hola"
  },
  {
    pregunta: "print([] == False)",
    respuesta: "False"
  },
  {
    pregunta: "print([1] + [2])",
    respuesta: "[1, 2]"
  },
  {
    pregunta: "x = (1, 2, 3)\nprint(x[1])",
    respuesta: "2"
  },
  {
    pregunta: "print(len('hola'))",
    respuesta: "4"
  },
  {
    pregunta: "x = [1,2,3]\nprint(x.index(4))",
    respuesta: "Error: ValueError"
  },
  {
    pregunta: "x = {}\nprint(type(x))",
    respuesta: "<class 'dict'>"
  },
  {
    pregunta: "import math\nprint(math.inf)",
    respuesta: "inf"
  },
  {
    pregunta: "def f():\n    return 42\nprint(f())",
    respuesta: "42"
  }

];