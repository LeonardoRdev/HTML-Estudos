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
  String converterMoeda1 = "USD-BRL"; // Dólar para Real
  // O valor abaixo era pra ser "DOUBLE", mas o programa não funciona de outro jeito.
  String valorCotacaoMoeda1 = "0";
  String converterMoeda2 = "BRL-USD"; // Real para Dolar
  // O valor abaixo era pra ser "DOUBLE", mas o programa não funciona de outro jeito.
  String valorCotacaoMoeda2 = "0";
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
          } else {
            valorCotacaoMoeda2 = '${data['bid']}';
          }
          // void main() async {
          //   // Espera 1 segundo
          //   await Future.delayed(Duration(seconds: 1));
          //   valorCotacaoMoeda1 = data['bid'];
          // }

          main();
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

  // Interface | Front-end:
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cotação de Moedas'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const Text("Informe a 1° Moeda:"),
            const SizedBox(height: 20),
            TextField(
              onChanged: (value) {
                setState(() {
                  converterMoeda1 = value;
                  fetchData(converterMoeda1);
                });
              },
            ),
            const Text("Informe a 2° Moeda:"),
            const SizedBox(height: 20),
            TextField(
              onChanged: (value) {
                setState(() {
                  converterMoeda2 = value;
                  fetchData(converterMoeda2);
                });
              },
            ),
            Text("Moeda 1: " + converterMoeda1),
            Text('Valor m1: $valorCotacaoMoeda1'),
            Text("Moeda 2: " + converterMoeda2),
            Text('Valor m2: $valorCotacaoMoeda2'),
            Text('COTAÇÃO: ${data['bid']}'),

            // O Teste abaixo faz a multiplicação da variável "valor1":
            Text('\nTeste: ${double.parse(valorCotacaoMoeda1) * 3}'),
          ],
        ),
      ),
    );
  }
}

```