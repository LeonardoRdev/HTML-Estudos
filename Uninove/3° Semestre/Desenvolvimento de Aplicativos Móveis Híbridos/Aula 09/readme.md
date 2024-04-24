# Aula 9
### Desafio da Aula
**Desafio:** Implementar um APP que realiza a cotação de moedas
https://docs.awesomeapi.com.br/api-de-moedas

## API em DART

**pubspec.yaml** (lê-se: yamul)
Em "dependecies" (linha 12), vamos inserir uma depencêndia para a API funcionar:
**http: ^0.13.3**
Isso permite o acesso pelo protocole http.

Ele também precisa buscar os dados, no próprio servidor do flutter, e traze-los para podermos implementarmos.

Para isso é preciso fazer o seguinte:
**Pub Commands** -> pub get

---

### Map
**MAP** = Transforma uma lista (array) em um objeto
exemplo:
pessoa = {"nome": "Edson"}
que é exatamente o formato de um arquivo JSON.

Ele vai MAPEAR as chaves e os valores, vai **transformar uma lista em um objeto**.

---

### Controle - Remoto

**Future:** valor ou erro que estará disponível no futuro. Usado em segundo plano para aguardar respostas remotas ou que demandem espera.

**async:** significa que a transação é "não sincronizada", permitindo que outras coisas possam ser realizadas antes que a resposta seja concluída.

**await:** é usada para pausar uma execução de uma função assíncrona até que um Future seja resolvido (finalizado).

---
### Código Dart:

**Consumindo API - CEP**
```Dart
// ignore_for_file: library_private_types_in_public_api
import 'package:http/http.dart' as http; // acesso web
import 'dart:convert'; // tratamento do JSON
import 'package:flutter/material.dart'; // interface

// consulta de CEP
// doc: https://docs.awesomeapi.com.br/api-cep
// uri: https://cep.awesomeapi.com.br/{cep}
void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'API CEP',
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
  // lógica da aplicação
  String cep = '01510000'; // Rua da Glória
  Map<String, dynamic> data = {}; // pessoa = {"nome": "Edson"}
  String errorMessage = '';

  // Construção do método para buscar os dados remotos na API
  // Endereço: https://cep.awesomeapi.com.br/{cep}

  Future<void> fetchData() async {
    // response vai conter os dados retornados
    // da consulta externa

    // Tratamento dos erros:
    try {
      final response =
          await http.get(Uri.parse('https://cep.awesomeapi.com.br/$cep'));
      if (response.statusCode == 200) {
        // Se der bom (200):
        setState(() {
          data = json.decode(response.body); // converte os dados recebidos
          errorMessage = '';
        });
      } else {
        // Lança uma excessão que o servidor retornou algum erro:
        throw Exception('Falha ao carregas os dados');
      }
    } catch (e) {
      // Pega o erro para tratarmos (avisar o usuário)
      data = {};
      errorMessage = '$e';
      // Troca "Exception" por "Erro":
      errorMessage = errorMessage.replaceAll("Exception", "Erro");
    }
    // Testando nosso código
    // print(data);
    // print(errorMessage);
  }

  // Se quisermos carregar qualquer coisa no início do APP
  // @override
  // void initState() {
  //   super.initState();
  //   fetchData(); // executa a consulta quando iniciar
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('API CEP'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            const Text('Informe o CEP:'),
            const SizedBox(height: 20),
            // Sem controller:
            TextField(
              onChanged: (value) {
                setState(() {
                  cep = value;
                  // Quando mudar o input, o CEP pega o valor digitado
                });
              },
            ),
            // Botão para realizar a busca (API);
            ElevatedButton(
              onPressed: () {
                fetchData(); // Chama o método, para buscar os dados
              },
              child: const Text('Buscar CEP:'),
            ),
            // Tratamento dos erros ocorridos:
            if (errorMessage.isNotEmpty)
              Text(errorMessage,
                  style: TextStyle(
                    color: Colors.red,
                  )),

            // Ocultando os campos quando houver erro:
            if (errorMessage.isEmpty && data.isNotEmpty)
              // Mostrando os dados retornados
              Column(
                children: [
                  Text('Rua: ${data['address']}'),
                  Text('Bairro: ${data['district']}'),
                ],
              ),
            Text(cep),
          ],
        ),
      ),
    );
  }
}

```