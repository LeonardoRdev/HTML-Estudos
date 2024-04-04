# Aula 6

Na aula de hoje finalizamos o código que calcula se vale mais abastecer com álcool ou gasolina.
Também foram passados 2 desafios:
- Calcular o IMC de uma pessoa com as informações que o usuário fornecer;
- Calcular a média de nota de uma matéria.

Também aprendi que cada conteúdo pode ter um "child", que serve quase como uma div dentro da outra, para estruturar como você quer que o layout fique no final.git

## Código da Aula

```
// ignore_for_file: library_private_types_in_public_api

import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Home(),
    debugShowCheckedModeBanner: false,
  ));
}

class Home extends StatefulWidget {
  const Home({super.key});
  @override
  _HomeState createState() => _HomeState();
}

// Código "Principal"
class _HomeState extends State<Home> {
  TextEditingController pesoController = TextEditingController();
  TextEditingController alturaController = TextEditingController();
  double _IMC = 0;
  String _resultado = "";

  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void _reset() {
    setState(() {
      pesoController.text = "";
      alturaController.text = "";
      _resultado = "";
      _formKey = GlobalKey<FormState>();
    });
  }

  void _calcularIMC() {
    double varPeso = double.parse(pesoController.text.replaceAll(",", "."));
    double varAltura = double.parse(alturaController.text.replaceAll(",", "."));

    setState() {
      _IMC = (varPeso / (varAltura * varAltura));
      if (_IMC < 18.5) {
        _resultado = "Abaixo do peso";
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text(
            "Calculador de IMC",
            style: TextStyle(color: Colors.white),
          ),
          centerTitle: true,
          backgroundColor: Colors.red,
          actions: <Widget>[
            Padding(
              padding: EdgeInsets.only(right: 20),
              child: IconButton(
                  onPressed: () {
                    _reset();
                  },
                  icon: const Icon(Icons.refresh, color: Colors.white)),
            )
          ],
        ),

        // Corpo da aplicação
        body: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(30, 15, 30, 20),
          child: Form(
            key: _formKey, // Referência para o formulário
            child: Column(
              // Alargar
              crossAxisAlignment: CrossAxisAlignment.stretch,

              children: <Widget>[
                const Icon(
                  Icons.calculate_outlined,
                  size: 90,
                ),
                TextFormField(
                  controller: pesoController,
                  textAlign: TextAlign.center,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                      labelText: "Digite seu peso",
                      labelStyle: TextStyle(
                        fontSize: 20,
                      )),
                  style: const TextStyle(fontSize: 25),
                ),
                TextFormField(
                  controller: alturaController,
                  textAlign: TextAlign.center,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: "Digite sua altura",
                    labelStyle: TextStyle(
                      fontSize: 20,
                    ),
                  ),
                  style: const TextStyle(fontSize: 25),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(80, 50, 80, 50),
                  child: SizedBox(
                    height: 60,
                    child: RawMaterialButton(
                      onPressed: () => {_calcularIMC()},
                      fillColor: Colors.red,
                      child: const Text(
                        "Calcular",
                        style: TextStyle(fontSize: 30),
                      ),
                    ),
                  ),
                ),
                Text(
                  "eita",
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 25),
                )
              ],
            ),
          ),
        ));
  }
}

```