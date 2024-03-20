## FlutLab

Iremos trabalhar utilizando a IDE de Flutter **FlutLab.io:**

[FlutLab.io - Flutter IDE online](https://flutlab.io/)

Para escrever um texto em Flutter, utilizamos a seguinte sintaxe:

```dart
const Text(
              'Seu Saldo:',
              style: TextStyle(fontSize: 30),
            ),
```

É como se fosse um <p></p> com um style dentro.

Para colocar algum ícone:

```dart
child: const Icon(Icons.check_rounded),
```

Nesse exemplo o resultado seria: “✅”

---

## Código da Aula

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  static const String _title = 'Flutter Stateful Clicker Counter';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: _title,
      theme: ThemeData(
          // primarySwatch: Colors.pink,
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange)),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  double _counter = 0.01;

  void _incrementCounter() {
    setState(() {
      _counter = _counter * 2;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Subway Money 🤑'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Seu Saldo:',
              style: TextStyle(fontSize: 30),
            ),
            Text(
              'R\$ $_counter',
              style: const TextStyle(
                fontSize: 55,
                color: Color(0xff359d38),
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Acrescentar',
        child: const Icon(Icons.check_rounded),
      ),
    );
  }
}

```
