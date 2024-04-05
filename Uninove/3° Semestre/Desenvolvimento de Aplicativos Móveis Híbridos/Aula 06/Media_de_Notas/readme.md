# Média de Notas

[**Flutter**]

Falta apenas adicionar o peso para cada curso:
Curso A -> 3
Curso B -> 4
Curso C -> 5
Curso D -> 2

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
  TextEditingController notaUmController = TextEditingController();
  TextEditingController notaDoisController = TextEditingController();
  TextEditingController notaTresController = TextEditingController();
  TextEditingController notaQuatroController = TextEditingController();
  double _media = 0;
  String _resultado = "";
  String _situacaoMedia = "";

  String _dropdownValueUm = "dropUm";
  String _dropdownValueDois = "dropUm";
  String _dropdownValueTres = "dropUm";
  String _dropdownValueQuatro = "dropUm";

  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  void _reset() {
    setState(() {
      notaUmController.text = "";
      notaDoisController.text = "";
      notaTresController.text = "";
      notaQuatroController.text = "";
      _media = 0;
      _resultado = "";
      _situacaoMedia = "";
      _formKey = GlobalKey<FormState>();
    });
  }

  void _calcularMedia() {
    double varNotaUm = double.parse(notaUmController.text.replaceAll(",", "."));
    double varNotaDois =
        double.parse(notaDoisController.text.replaceAll(",", "."));
    double varNotaTres =
        double.parse(notaTresController.text.replaceAll(",", "."));
    double varNotaQuatro =
        double.parse(notaQuatroController.text.replaceAll(",", "."));

    setState(() {
      _media = ((varNotaUm + varNotaDois + varNotaTres + varNotaQuatro) / 4);
      _resultado = "Média: $_media";
      if (_media >= 6) {
        _situacaoMedia = "Aprovado";
      } else {
        _situacaoMedia = "Reprovado";
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Calcular Média",
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: IconButton(
              onPressed: () {
                _reset();
              },
              icon: const Icon(Icons.refresh, color: Colors.white),
            ),
          )
        ],
      ),

      // Corpo da aplicação (body)
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(30, 10, 30, 25),
        child: Form(
          key: _formKey, // Referência para o formulário
          child: Column(
            // esticar:
            crossAxisAlignment: CrossAxisAlignment.stretch,

            children: <Widget>[
              const Icon(
                Icons.calculate,
                size: 80,
                color: Colors.blue,
              ),
              Row(children: <Widget>[
                Expanded(
                  child: TextFormField(
                    controller: notaUmController,
                    textAlign: TextAlign.center,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                        labelText: "Primeira Nota",
                        labelStyle: TextStyle(
                          fontSize: 20,
                        )),
                    style: const TextStyle(fontSize: 25),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(45, 15, 60, 0),
                    child: DropdownButton<String>(
                        value: _dropdownValueUm,
                        onChanged: (String? newValue) {
                          setState(() {
                            _dropdownValueUm = newValue!;
                          });
                        },
                        items: const [
                          DropdownMenuItem<String>(
                            value: "dropUm",
                            child: Text("A"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropDois",
                            child: Text("B"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropTres",
                            child: Text("C"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropQuatro",
                            child: Text("D"),
                          ),
                        ]),
                  ),
                ),
              ]),
              Row(children: <Widget>[
                Expanded(
                  child: TextFormField(
                    controller: notaDoisController,
                    textAlign: TextAlign.center,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                        labelText: "Segunda Nota",
                        labelStyle: TextStyle(
                          fontSize: 20,
                        )),
                    style: const TextStyle(fontSize: 25),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(45, 15, 60, 0),
                    child: DropdownButton<String>(
                        value: _dropdownValueDois,
                        onChanged: (String? newValue) {
                          setState(() {
                            _dropdownValueDois = newValue!;
                          });
                        },
                        items: const [
                          DropdownMenuItem<String>(
                            value: "dropUm",
                            child: Text("A"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropDois",
                            child: Text("B"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropTres",
                            child: Text("C"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropQuatro",
                            child: Text("D"),
                          ),
                        ]),
                  ),
                ),
              ]),
              Row(children: <Widget>[
                Expanded(
                  child: TextFormField(
                    controller: notaTresController,
                    textAlign: TextAlign.center,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                        labelText: "Terceira Nota",
                        labelStyle: TextStyle(
                          fontSize: 20,
                        )),
                    style: const TextStyle(fontSize: 25),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(45, 15, 60, 0),
                    child: DropdownButton<String>(
                        value: _dropdownValueTres,
                        onChanged: (String? newValue) {
                          setState(() {
                            _dropdownValueTres = newValue!;
                          });
                        },
                        items: const [
                          DropdownMenuItem<String>(
                            value: "dropUm",
                            child: Text("A"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropDois",
                            child: Text("B"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropTres",
                            child: Text("C"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropQuatro",
                            child: Text("D"),
                          ),
                        ]),
                  ),
                ),
              ]),
              Row(children: <Widget>[
                Expanded(
                  child: TextFormField(
                    controller: notaQuatroController,
                    textAlign: TextAlign.center,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                        labelText: "Quarta Nota",
                        labelStyle: TextStyle(
                          fontSize: 20,
                        )),
                    style: const TextStyle(fontSize: 25),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(45, 15, 60, 0),
                    child: DropdownButton<String>(
                        value: _dropdownValueQuatro,
                        onChanged: (String? newValue) {
                          setState(() {
                            _dropdownValueQuatro = newValue!;
                          });
                        },
                        items: const [
                          DropdownMenuItem<String>(
                            value: "dropUm",
                            child: Text("A"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropDois",
                            child: Text("B"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropTres",
                            child: Text("C"),
                          ),
                          DropdownMenuItem<String>(
                            value: "dropQuatro",
                            child: Text("D"),
                          ),
                        ]),
                  ),
                ),
              ]),
              Padding(
                padding: const EdgeInsets.fromLTRB(75, 25, 75, 15),
                child: SizedBox(
                  height: 60,
                  child: RawMaterialButton(
                    onPressed: () => {_calcularMedia()},
                    fillColor: Colors.deepPurple,
                    child: const Text(
                      "Calcular",
                      style: TextStyle(fontSize: 30, color: Colors.white),
                    ),
                  ),
                ),
              ),
              Text(
                _resultado,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 25),
              ),
              Text(
                _situacaoMedia,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 30),
              )
            ],
          ),
        ),
      ),
    );
  }
}

```