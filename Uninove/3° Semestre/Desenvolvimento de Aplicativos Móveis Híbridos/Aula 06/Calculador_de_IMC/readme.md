# Calculador de IMC
[**Flutter**]

```
// ignore_for_file: library_private_types_in_public_api

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

    setState(() {
      _IMC = (varPeso / (varAltura * varAltura));
      if (_IMC < 18.5) {
        _resultado = "Abaixo do peso";
      } else if (_IMC >= 18.5 && _IMC < 25) {
        _resultado = "Peso Normal";
      } else if (_IMC >= 25 && _IMC < 30) {
        _resultado = "Sobrepeso";
      } else if (_IMC >= 30 && _IMC < 35) {
        _resultado = "Obesidade Grau 1";
      } else if (_IMC >= 35 && _IMC < 40) {
        _resultado = "Obesidade Grau 2";
      } else if (_IMC >= 40) {
        _resultado = "Obesidade Grau 3";
      } else {
        _resultado = "Algo deu errado...";
      }
    });
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
              padding: const EdgeInsets.only(right: 20),
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
                  Icons.person,
                  size: 90,
                ),
                TextFormField(
                  controller: pesoController,
                  textAlign: TextAlign.center,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
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
                  decoration: const InputDecoration(
                    labelText: "Digite sua altura",
                    labelStyle: TextStyle(
                      fontSize: 20,
                    ),
                  ),
                  style: const TextStyle(fontSize: 25),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(80, 50, 80, 70),
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
                  _resultado,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 35),
                )
              ],
            ),
          ),
        ));
  }
}

```