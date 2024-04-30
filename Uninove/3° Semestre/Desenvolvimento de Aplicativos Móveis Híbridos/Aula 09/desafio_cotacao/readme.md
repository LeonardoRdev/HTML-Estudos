# Desafio Cotação

Aqui está o desafio passado pelo professor.
O objetivo é pedir para o usuário colocar qual moeda ele quer ver a cotação, e mostrar igual ao do google.

### Código:

```Dart
// ignore_for_file: library_private_types_in_public_api
import 'package:flutter/material.dart'; // Interface
import 'dart:convert'; // Tratamento do JSON
import 'package:http/http.dart' as http;

// Consulta de cotação
// doc: https://docs.awesomeapi.com.br/api-de-moedas
// uri: https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // Lógica da Aplicação | Back

  // Variáveis:
  String qtdMoeda1 = '1';
  String qtdMoeda2 = '1';

  // Controllers:
  final TextEditingController _moeda1QtdController =
      TextEditingController(text: '1');

  final TextEditingController _moeda2QtdController =
      TextEditingController(text: '1');

  final TextEditingController _moeda1Controller =
      TextEditingController(text: 'USD-BRL');

  final TextEditingController _moeda2Controller =
      TextEditingController(text: 'BRL-USD');

  // Mais variáveis
  String converterMoeda1 = "USD-BRL"; // Dólar para Real
  // O valor abaixo era pra ser "DOUBLE", mas o programa não funciona de outro jeito.
  String valorCotacaoMoeda1 = "1";
  String converterMoeda2 = "BRL-USD"; // Real para Dolar
  // O valor abaixo era pra ser "DOUBLE", mas o programa não funciona de outro jeito.
  String valorCotacaoMoeda2 = "1";
  Map<String, dynamic> data = {};
  String errorMessage = '';

  Future<void> fetchData(moedaChamada) async {
    try {
      final response = await http.get(
          Uri.parse('https://economia.awesomeapi.com.br/last/$moedaChamada'));

      if (response.statusCode == 200) {
        setState(() {
          // A "data" recebe a resposta da API com a chave "USDBRL", por exemplo.
          data = json.decode(response.body)[moedaChamada.replaceAll("-", "")];
          errorMessage = 'Deu bom';
          print('Data 1: $data');
          print('Data 1[bid]: ${data['bid']}');
          if (moedaChamada == converterMoeda1) {
            valorCotacaoMoeda1 = '${data['bid']}';
            // se for a moeda 1, alterar a qtd moeda2:
            qtdMoeda2 =
                (double.parse(valorCotacaoMoeda1) * double.parse(qtdMoeda1))
                    .toString();
            // Sempre que mudar a moeda, ele atualiza a quantidade também
            _moeda2QtdController.text = (double.parse(valorCotacaoMoeda1) *
                    double.parse(qtdMoeda1.isEmpty ? '1' : qtdMoeda1))
                .toStringAsFixed(2);
          } else {
            valorCotacaoMoeda2 = '${data['bid']}';
            // se for a moeda 2, alterar a qtd moeda1:
            qtdMoeda1 =
                (double.parse(valorCotacaoMoeda2) * double.parse(qtdMoeda2))
                    .toString();
            // Sempre que mudar a moeda, ele atualiza a quantidade também
            _moeda1QtdController.text = (double.parse(valorCotacaoMoeda2) *
                    double.parse(qtdMoeda2.isEmpty ? '1' : qtdMoeda2))
                .toStringAsFixed(2);
          }
        });
      } else {
        throw Exception('Falha ao carregar os dados');
      }
    } catch (e) {
      setState(() {
        data = {};
        errorMessage = '$e';
      });
    }

    print('Data 2: $data');
    print("Cotação: " + data['bid']);
    print("Mensagem de Erro: " + errorMessage);
  }

  // Para carregar a API ao iniciar o APP
  @override
  void initState() {
    super.initState();
    fetchData(converterMoeda1);
    fetchData(converterMoeda2);
  }

  // Interface | Front-end:
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Cotação de Moedas',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: const Color(0xFF5800DB),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(40, 20, 40, 0),
        child: Column(
          children: [
            // PRIMEIRA MOEDA:
            TextField(
              controller: _moeda1Controller,
              textAlign: TextAlign.center,
              decoration: const InputDecoration(
                  labelText: 'Informe a 1° Moeda:',
                  labelStyle: TextStyle(fontSize: 25)),
              style: const TextStyle(fontSize: 30),
              onChanged: (value) {
                setState(() {
                  converterMoeda1 = value;
                  fetchData(converterMoeda1);
                });
              },
            ),
            // Quantidade da primeira moeda:
            TextField(
              controller: _moeda1QtdController,
              textAlign: TextAlign.center,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                  hintText: '1',
                  labelText: 'Quantidade:',
                  labelStyle: TextStyle(fontSize: 20)),
              style: const TextStyle(fontSize: 25),
              onChanged: (value) {
                setState(() {
                  qtdMoeda1 = value;
                  _moeda2QtdController.text =
                      (double.parse(valorCotacaoMoeda1) *
                              double.parse(qtdMoeda1.isEmpty ? '1' : qtdMoeda1))
                          .toStringAsFixed(2);
                });
              },
            ),
            // SEGUNDA MOEDA:
            const Padding(padding: EdgeInsets.fromLTRB(0, 30, 0, 0)),
            TextField(
              controller: _moeda2Controller,
              textAlign: TextAlign.center,
              decoration: const InputDecoration(
                  labelText: 'Informe a 2° Moeda:',
                  labelStyle: TextStyle(fontSize: 25)),
              style: const TextStyle(fontSize: 30),
              onChanged: (value) {
                setState(() {
                  converterMoeda2 = value;
                  fetchData(converterMoeda2);
                });
              },
            ),
            // Quantidade da segunda moeda:
            TextField(
              controller: _moeda2QtdController,
              textAlign: TextAlign.center,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                  hintText: '1',
                  labelText: 'Quantidade:',
                  labelStyle: TextStyle(fontSize: 20)),
              style: const TextStyle(fontSize: 25),
              onChanged: (value) {
                setState(() {
                  qtdMoeda2 = value;
                  _moeda1QtdController.text =
                      (double.parse(valorCotacaoMoeda2) *
                              double.parse(qtdMoeda2.isEmpty ? '1' : qtdMoeda2))
                          .toStringAsFixed(2);
                });
              },
            ),
            // Testes abaixo:
            // Text('Moeda 1: $converterMoeda1'),
            // Text('Valor m1: $valorCotacaoMoeda1'),
            // Text('Moeda 2: $converterMoeda2'),
            // Text('Valor m2: $valorCotacaoMoeda2'),
            // Text('COTAÇÃO: ${data['bid']}'),
            // Text('Quantidade moeda 1 -> $qtdMoeda1'),
            // Text('Quantidade moeda 2 -> $qtdMoeda2'),
            // // O Teste abaixo faz a multiplicação da variável "valor1":
            // Text(
            //     '\nTeste: ${double.parse(valorCotacaoMoeda1) * double.parse(qtdMoeda1.isEmpty ? '1' : qtdMoeda1)}'),
          ],
        ),
      ),
    );
  }
}

```