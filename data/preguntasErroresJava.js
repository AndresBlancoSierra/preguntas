const preguntasErroresJava = [

  {
    pregunta: "System.out.println(5 / 0);",
    respuesta: "ArithmeticException"
  },
  {
    pregunta: "int x; System.out.println(x);",
    respuesta: "Error de compilación (variable no inicializada)"
  },
  {
    pregunta: "System.out.println(\"Hola\".charAt(10));",
    respuesta: "StringIndexOutOfBoundsException"
  },
  {
    pregunta: "int[] arr = new int[3]; System.out.println(arr[5]);",
    respuesta: "ArrayIndexOutOfBoundsException"
  },
  {
    pregunta: "String s = null; System.out.println(s.length());",
    respuesta: "NullPointerException"
  },
  {
    pregunta: "System.out.println(\"5\" - 2);",
    respuesta: "Error de compilación"
  },
  {
    pregunta: "System.out.println(10 / 0.0);",
    respuesta: "Infinity"
  },
  {
    pregunta: "int x = 5; System.out.println(x + \"a\");",
    respuesta: "5a"
  },
  {
    pregunta: "int x = (int) 3.7; System.out.println(x);",
    respuesta: "3"
  },
  {
    pregunta: "System.out.println(true + false);",
    respuesta: "Error de compilación"
  },
  {
    pregunta: "int x = Integer.parseInt(\"abc\");",
    respuesta: "NumberFormatException"
  },
  {
    pregunta: "System.out.println(\"Hola\".substring(5,2));",
    respuesta: "StringIndexOutOfBoundsException"
  },
  {
    pregunta: "System.out.println(Math.max());",
    respuesta: "Error de compilación"
  },
  {
    pregunta: "int[] arr = null; System.out.println(arr.length);",
    respuesta: "NullPointerException"
  },
  {
    pregunta: "System.out.println(0.1 + 0.2 == 0.3);",
    respuesta: "false"
  },
  {
    pregunta: "char c = 'A'; c++; System.out.println(c);",
    respuesta: "B"
  },
  {
    pregunta: "System.out.println(\"Hola\".charAt(-1));",
    respuesta: "StringIndexOutOfBoundsException"
  },
  {
    pregunta: "int x = 5 / 2; System.out.println(x);",
    respuesta: "2"
  },
  {
    pregunta: "System.out.println((Object)null);",
    respuesta: "null"
  },
  {
    pregunta: "System.out.println(\"Hola\" == \"Hola\");",
    respuesta: "true"
  },
  {
    pregunta: "String a = new String(\"Hola\"); String b = new String(\"Hola\"); System.out.println(a == b);",
    respuesta: "false"
  },
  {
    pregunta: "String a = \"Hola\"; String b = \"Hola\"; System.out.println(a == b);",
    respuesta: "true"
  },
  {
    pregunta: "int[] arr = new int[3]; System.out.println(arr[0]);",
    respuesta: "0"
  },
  {
    pregunta: "boolean x = true; if(x = false) System.out.println(\"hola\");",
    respuesta: "No imprime nada"
  },
  {
    pregunta: "System.out.println(\"Hola\".toLowerCase());",
    respuesta: "hola"
  },
  {
    pregunta: "int x = Integer.valueOf(null);",
    respuesta: "NullPointerException"
  },
  {
    pregunta: "System.out.println('a' + 'b');",
    respuesta: "195"
  },
  {
    pregunta: "int x = 2147483647 + 1; System.out.println(x);",
    respuesta: "-2147483648"
  },
  {
    pregunta: "System.out.println(1 / 0.0);",
    respuesta: "Infinity"
  },
  {
    pregunta: "System.out.println((int)\"5\");",
    respuesta: "Error de compilación"
  }

];