# Aula 7

O professor corrigiu os dois exercícios passados na aula anterior, explicando passo a passo de como fazer com que o programa funcione.

Também realizamos um exercício para fixarmos o que aprendemos.

## Códigos (do professor)

**[Calcular o IMC]**

```
// Aplicativo de cálculo de combustível
// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Home(), // primeira tela do aplicativo (rota)
    debugShowCheckedModeBanner: false, // tira o logo do debug
  ));
}

// Stateful  - permite alterar valores no ambiente (variáveis)
// Stateless - apenas para a apresentação de conteúdo
// classe que configura o ambiente como "editável"
class Home extends StatefulWidget {
  const Home({super.key});
  @override // sobrescrita de método da classe pai
  // criação de um controle de estado para a aplicação
  _HomeState createState() => _HomeState();
}

// Classe que fará o controle das variáveis da aplicação
class _HomeState extends State<Home> {
  // definição dos objetos (controladores ou controllers)
  // TextEditingController: campo de entrada de dados texto (input)
  TextEditingController pesoController = TextEditingController();
  TextEditingController alturaController = TextEditingController();
  String _resultado = ''; // texto de resposta da aplicação

  // objeto para controlar o fomulário onde estarão os inputs
  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // método que altera o "estado" das variáveis
  // limpa os campos do formulário e o seu estado
  void _reset() {
    setState(() {
      pesoController.text = '';
      alturaController.text = '';
      _resultado = '';
      _formKey = GlobalKey<FormState>();
    });
  }

  // realiza o cálculo dos valores dos combustíveis
  // não pode esquecer de usar o setState() dentro de um
  // método que fará alguma alteração em variáveis e/ou objetos
  void _calcular() {
    double varPeso = double.parse(pesoController.text.replaceAll(',', '.'));
    double varAltura = double.parse(alturaController.text.replaceAll(',', '.'));
    double imc = varPeso / (varAltura * varAltura);

    String indicador = '';
    if (imc < 18.5) {
      indicador = 'Abaixo do Peso';
    } else if (imc < 25) {
      indicador = 'Peso Normal';
    } else if (imc < 30) {
      indicador = 'Sobrepeso';
    } else if (imc < 35) {
      indicador = 'Obesidade Grau 1';
    } else if (imc < 40) {
      indicador = 'Obesidade Grau II';
    } else {
      indicador = 'Obesidade Grau III';
    }

    setState(() {
      _resultado = 'Seu IMC é ${imc.toStringAsFixed(2)} e indica $indicador';
    });
  }

  // construtor que implementa a interface do usuário
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // barra superior
      appBar: AppBar(
        title: const Text(
          'Calculadora IMC',
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
      // vamos montar o corpo da aplicação
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(15.0, 0, 15.0, 0), // margem interna
        child: Form(
          key: _formKey, // é a referência para o formulário
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch, // alargar
            // aqui vamos colocar os campos de entrada (inputs)
            children: <Widget>[
              const Icon(
                Icons.scale,
                size: 70.0,
                color: Colors.black,
              ),
              TextFormField(
                controller: pesoController,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                validator: (value) => value!.isEmpty
                    ? 'Esse valor é obrigatório'
                    : null, // validacão de dados
                decoration: InputDecoration(
                  labelText: 'Informe o Peso',
                  labelStyle: TextStyle(color: Colors.lightBlue[900]),
                ),
                style: TextStyle(color: Colors.lightBlue[900], fontSize: 25.0),
              ),
              TextFormField(
                controller: alturaController,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                validator: (value) => value!.isEmpty
                    ? 'Esse valor é obrigatório'
                    : null, // validacão de dados
                decoration: InputDecoration(
                  labelText: 'Informe a Altura',
                  labelStyle: TextStyle(color: Colors.lightBlue[900]),
                ),
                style: TextStyle(color: Colors.lightBlue[900], fontSize: 25.0),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 50, bottom: 50),
                child: SizedBox(
                  height: 50,
                  child: RawMaterialButton(
                    onPressed: () {
                      // se a validação passou, então executa
                      if (_formKey.currentState!.validate()) {
                        _calcular();
                      }
                    }, // falta implementar
                    fillColor: Colors.red,
                    child: const Text(
                      'Calcular',
                      style: TextStyle(color: Colors.white, fontSize: 25.0),
                    ),
                  ),
                ),
              ),
              Text(
                _resultado, // variável com o valor do resultado retornado
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.lightBlue[900], fontSize: 25),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

---

**[Média Pendurada]**

.* Está faltando a interface

```
 // definição dos objetos (controladores ou controllers)
  // TextEditingController: campo de entrada de dados texto (input)
  TextEditingController n1Controller = TextEditingController();
  TextEditingController n2Controller = TextEditingController();
  TextEditingController n3Controller = TextEditingController();
  TextEditingController n4Controller = TextEditingController();
  TextEditingController cursoController = TextEditingController();

  String _resultado = ''; // texto de resposta da aplicação

  // objeto para controlar o fomulário onde estarão os inputs
  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // método que altera o "estado" das variáveis
  // limpa os campos do formulário e o seu estado
  void _reset() {
    setState(() {
      n1Controller.text = '';
      n2Controller.text = '';
      n3Controller.text = '';
      n4Controller.text = '';
      cursoController.text = '';

      _resultado = '';
      _formKey = GlobalKey<FormState>();
    });
  }

  // realiza o cálculo dos valores dos combustíveis
  // não pode esquecer de usar o setState() dentro de um
  // método que fará alguma alteração em variáveis e/ou objetos
  void _calcular() {
    double varN1 = 6; //double.parse(n1Controller.text.replaceAll(',', '.'));
    double varN2 = 5; //double.parse(n2Controller.text.replaceAll(',', '.'));
    double varN3 = 8; //double.parse(n3Controller.text.replaceAll(',', '.'));
    double varN4 = 6; //double.parse(n4Controller.text.replaceAll(',', '.'));

    String varCurso = 'D'; //cursoController.text;

    int peso1 = 0;
    int peso2 = 0;
    int peso3 = 0;
    int peso4 = 0;

    if (varCurso == 'A') {
      peso1 = 2;
      peso2 = 3;
      peso3 = 4;
      peso4 = 5;
    } else if (varCurso == 'B') {
      peso1 = 3;
      peso2 = 4;
      peso3 = 4;
      peso4 = 6;
    } else if (varCurso == 'C') {
      peso1 = 6;
      peso2 = 3;
      peso3 = 4;
      peso4 = 3;
    } else if (varCurso == 'D') {
      peso1 = 2;
      peso2 = 3;
      peso3 = 5;
      peso4 = 5;
    }

    double varMedia =
        (varN1 * peso1) + (varN2 * peso2) + (varN3 * peso3) + (varN4 * peso4);
    int pesos = peso1 + peso2 + peso3 + peso4;

    double mediaPonderada = varMedia / pesos;

    String status = (mediaPonderada >= 6 ? 'APROVADO' : 'REPROVADO');

    setState(() {
      _resultado = 'Média: ${mediaPonderada.toStringAsFixed(2)} - $status';
    });
  }
```