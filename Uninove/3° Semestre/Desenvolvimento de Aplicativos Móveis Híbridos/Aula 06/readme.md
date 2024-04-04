# Aula 6

Na aula de hoje finalizamos o código que calcula se vale mais abastecer com álcool ou gasolina.
Também foram passados 2 desafios:
- Calcular o IMC de uma pessoa com as informações que o usuário fornecer;
- Calcular a média de nota de uma matéria.

Também aprendi que cada conteúdo pode ter um "child", que serve quase como uma div dentro da outra, para estruturar como você quer que o layout fique no final.git

## Código da Aula

[**Combustível**]

```
// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Home(), // Primeira tela do aplicativo a ser carregada (rota)
    debugShowCheckedModeBanner: false, // Tira a faixinha escrito "debug"
  ));
}

// Classe que configura o ambiente como "editável"
// Stateful  - permite alterar valores no ambiente (variáveis)
// Stateless - apenas para a apresentação de conteúdo
class Home extends StatefulWidget {
  const Home({super.key});
  @override // Sobrescrita de método da classe pai
  // Criação de um controle de estado para a aplicação
  _HomeState createState() => _HomeState();
  // _Underline sigfica que a variável tem o alcançe "Global"
}

// Classe que fará o controle das variáveis da aplicação
class _HomeState extends State<Home> {
  // O "<>" é o TIPO do State
  // Definição dos objetos (controladores / controllers)
  // TextEditingController: Campo de entrada de dados texto (input)
  TextEditingController alcoolController = TextEditingController();
  TextEditingController gasolinaController = TextEditingController();
  String _resultado = ""; // Texto de resposta da aplicação

  // Objeto para controlar o formulário onde estarão os inputs
  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // Método que altera o "estado" das variáveis alteradas (limpas)
  // Limpa os campos do formulário e o seu estado
  // void -> não retorna nada
  void _reset() {
    setState(() {
      alcoolController.text = "";
      gasolinaController.text = "";
      _resultado = "";
      _formKey = GlobalKey<FormState>();
    });
  }

  // Realiza o cálculo dos valores dos combustíveis
  // Não pode esquecer de usar o setState() dentro de um
  // método que fará alguma alteração em variáveis e/ou objetos
  void _calcularCombustivel() {
    double varAlcool = double.parse(alcoolController.text.replaceAll(",", "."));
    double varGasolina =
        double.parse(gasolinaController.text.replaceAll(',', '.'));
    double proporcao = varAlcool / varGasolina; // Proporção de 70%
    setState(() {
      // Abaixo está sendo utilizado um operador TERNÁRIO (if, else)
      _resultado =
          (proporcao < 0.7) ? 'Abasteça com Álcool' : 'Abasteça com Gasolina';
    });
  }

  // Construtor que implemente a interface do usuário
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Álcool ou Gasolina?",
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.lightBlue[900],
        actions: <Widget>[
          IconButton(
              onPressed: () {
                _reset();
              },
              icon: const Icon(Icons.refresh, color: Colors.white)),
        ],
      ),

      // Vamos montar o corpo da aplicação
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(25, 10, 25, 0),
        child: Form(
          key: _formKey, // É a referência para o formulário
          child: Column(
            crossAxisAlignment:
                CrossAxisAlignment.stretch, // Alargar / Preencher
            // Aqui vamos colocar os campos de entrada (inputs)
            children: <Widget>[
              const Icon(
                Icons.local_gas_station,
                size: 70,
                color: Colors.black,
              ),
              TextFormField(
                controller: alcoolController,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                // Validação de dados:
                validator: (value) => value!.isEmpty
                    ? "Esse valor é obrigatório"
                    : null, // Se estiver vazio, retorne null
                decoration: InputDecoration(
                  labelText: "Valor do litro do Álcool",
                  labelStyle: TextStyle(
                    color: Colors.lightBlue[900],
                    fontSize: 20,
                  ),
                ),
                style: TextStyle(color: Colors.lightBlue[900], fontSize: 25),
              ),
              TextFormField(
                controller: gasolinaController,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                validator: (value) => value!.isEmpty
                    ? "Esse valor é obrigatório"
                    : null, // Se estiver vazio, retorne null
                decoration: InputDecoration(
                  labelText: "Valor do litro da Gasolina",
                  labelStyle: TextStyle(
                    color: Colors.lightBlue[900],
                    fontSize: 20,
                  ),
                ),
                style: TextStyle(color: Colors.lightBlue[900], fontSize: 25),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(80, 50, 80, 50),
                child: SizedBox(
                  height: 50,
                  child: RawMaterialButton(
                    onPressed: () => {
                      if (_formKey.currentState!.validate())
                        {_calcularCombustivel()}
                    },
                    fillColor: Colors.red,
                    child: const Text(
                      'Calcular',
                      style: TextStyle(color: Colors.white, fontSize: 25),
                    ),
                  ),
                ),
              ),
              Text(
                _resultado,
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 30),
              ),
            ],
          ),
        ),
      ),
    ); // Scaffold = Pacote / Basicamente um operador de CRUD
  }
}

```