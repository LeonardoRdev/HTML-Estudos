# Desafio Cotação

Aqui está o desafio passado pelo professor.
O objetivo é pedir para o usuário colocar qual moeda ele quer ver a cotação, e mostrar igual o google.

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
  String converterMoeda = "USD-BRL"; // Dólar para Real
  String converterMoeda2 = "BRL-USD"; // Real para Dolar
  Map<String, dynamic> data = {};
  String errorMessage = '';

  Future<void> fetchData() async {
    try {
      final response = await http.get(
          Uri.parse('https://economia.awesomeapi.com.br/last/$converterMoeda'));
      // final response2 = await http.get(
      // Uri.parse('https://economia.awesomeapi.com.br/$converterMoeda2'));
      if (response.statusCode == 200) {
        setState(() {
          data = json.decode(response.body);
          errorMessage = 'Deu bom';
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
    print(data);
    print(data['bid']);
    print(errorMessage);
  }

  // @override
  // void initState() {
  //   super.initState();
  //   fetchData();
  // }

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
            const Text("Informe a 1° Moerda:"),
            const SizedBox(height: 20),
            TextField(
              onChanged: (value) {
                setState(() {
                  converterMoeda = value;
                });
              },
            ),
            ElevatedButton(
                onPressed: () {
                  fetchData();
                },
                child: const Text('ENVIAR')),
            Text(converterMoeda),
            Text('COTAÇÃO: ${data}')
          ],
        ),
      ),
    );
  }
}

```