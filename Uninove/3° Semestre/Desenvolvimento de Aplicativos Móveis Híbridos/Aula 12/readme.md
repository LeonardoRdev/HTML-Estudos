# Aula 12

#### Atividades

* Implementar a funcionalidade de Cadastro de Usuário no APP
* Finalizar as três atividades do Classroom

---

Agora o programa além de fazer login também cadastra usuários!

## Códigos
### Main.dart | Login

```Dart
import 'package:flutter/material.dart';
import 'cadastrar.dart';
import 'dados.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; // Tratamento do JSON
//import 'alterar.dart';

void main() {
  runApp(const MaterialApp(
    home: Home(),
    debugShowCheckedModeBanner: false,
  ));
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  // Chave para o nosso formulário
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // Controllers
  TextEditingController usuarioController = TextEditingController();
  TextEditingController senhaController = TextEditingController();

  // Variáveis | Respostas da API
  late int _usuarioId;
  late String _usuarioNome;
  late String _usuarioEmail;
  late String _usuarioToken;

  String _mensagemErro = '';

  // API
  Map<String, dynamic> data = {}; // pessoa = {"nome": "Edson"}
  String errorMessage = '';

  // Construção do método para buscar os dados remotos na API
  // Endereço: https://todolist-api.edsonmelo.com.br/api/user/login/

  Future<void> fetchData(String username, String password) async {
    const String apiUrl =
        'https://todolist-api.edsonmelo.com.br/api/user/login/';
    final Map<String, String> headers = {'Content-Type': 'application/json'};
    final Map<String, String> data = {
      'username': username,
      'password': password
    };

    try {
      final http.Response response = await http.post(
        Uri.parse(apiUrl),
        headers: headers,
        body: jsonEncode(data),
      );
      print('data: $data');

      if (response.statusCode == 200) {
        // Dados recebidos da API
        Map<String, dynamic> responseData = jsonDecode(response.body);
        if (responseData.containsKey('message')) {
          setState(() {
            _mensagemErro = 'Usuário ou Senha incorretos!';
          });
        } else {
          setState(() {
            _mensagemErro = '';
          });
          print("Login concluido com sucesso!");
          print('responseData: $responseData');
          _usuarioId = responseData['id'];
          _usuarioNome = responseData['name'];
          _usuarioEmail = responseData['email'];
          _usuarioToken = responseData['token'];
          _enviarDadosParaTelaDados(context);
        }
      } else {
        // Se a solicitação falhar
        print('Falha ao fazer login: ${response.statusCode}');
      }
    } catch (e) {
      // Se ocorrer um erro durante a solicitação
      print('Erro durante a solicitação: $e');
    }
  }

  // Método para enviar dados para as outras telas:
  // Enviar para DADOS.DART
  void _enviarDadosParaTelaDados(BuildContext context) {
    // Para enviar os dados precisamos do contexto da nossa página
    // E para isso vamos utilizar o contexto do build
    List textToSend = <String>[
      _usuarioId.toString(),
      _usuarioNome,
      _usuarioEmail,
      _usuarioToken
    ]; // Uma lista de Strings

    // Widget responsável por enviar os dados:
    Navigator.push(
      // .push -> estamos enviando dados
      context, // Valores do contexto (ambiente na árvore)
      MaterialPageRoute(
        builder: (context) => Dados(
          // Vamos enviar para "Dados()"
          text: textToSend,
        ),
      ),
    );
  }

  // Enviar para ALTERAR.DART
  // void _enviarDadosParaTelaAlterar(BuildContext context) {
  //   Navigator.push(
  //     context,
  //     MaterialPageRoute(
  //       builder: (context) => Alterar(
  //         text: ['Deu certo!'],
  //       ),
  //     ),
  //   );
  // }

  // Enviar para CADASTRAR.DART
  void _enviarDadosParaTelaCadastrar(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(
          builder: (context) => Cadastrar(
                text: ['Funcionou!!'],
              )),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Login", style: TextStyle(color: Colors.white)),
          centerTitle: true,
          backgroundColor: const Color(0xFF5800DB),
        ),
        body: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(70, 10, 70, 0),
          child: Form(
            key: _formKey, // Identificador do formulário
            child: Column(
              // Campos para digitação:
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(0, 25, 0, 25),
                  child: Text(
                    _mensagemErro,
                    style: const TextStyle(
                      fontSize: 20,
                      color: Colors.red,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 0),
                  child: TextFormField(
                    controller: usuarioController,
                    style: TextStyle(fontSize: 25),
                    decoration: const InputDecoration(
                      labelText: "Usuário",
                      labelStyle: TextStyle(fontSize: 20),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: TextFormField(
                    controller: senhaController,
                    style: TextStyle(fontSize: 25),
                    decoration: const InputDecoration(
                      labelText: "Senha",
                      labelStyle: TextStyle(fontSize: 20),
                    ),
                  ),
                ),

                // Botão para enviar o valor digitado para a outra tela:
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: SizedBox(
                    height: 60,
                    width: 190,
                    child: RawMaterialButton(
                      onPressed: () {
                        // Chamar o método para envio de dados (API)
                        fetchData(usuarioController.text, senhaController.text);
                        // Chamar o método de envio de dados
                        //_enviarDadosParaTelaDados(context);
                      },
                      child: const Text(
                        'Fazer login',
                        style: TextStyle(
                          fontSize: 30,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 20),
                  child: const Text('ou',
                      style: TextStyle(fontSize: 25),
                      textAlign: TextAlign.center),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 20),
                  child: SizedBox(
                    height: 60,
                    width: 390,
                    child: RawMaterialButton(
                      onPressed: () {
                        _enviarDadosParaTelaCadastrar(context);
                      },
                      child: const Text('Cadastre-se',
                          style: TextStyle(fontSize: 30),
                          textAlign: TextAlign.center),
                    ),
                  ),
                ),
                // Padding(
                //   padding: const EdgeInsets.only(top: 50),
                //   child: SizedBox(
                //     height: 60,
                //     width: 170,
                //     child: RawMaterialButton(
                //       onPressed: () {
                //         _enviarDadosParaTelaCadastrar(context);
                //       },
                //       child: const Text(
                //         'Cadastrar',
                //         style: const TextStyle(fontSize: 30),
                //       ),
                //     ),
                //   ),
                // ),
              ],
            ),
          ),
        ));
  }
}
```
---

### Cadastrar.dart
```Dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; // Tratamento do JSON

class Cadastrar extends StatefulWidget {
  final List text;

  Cadastrar({Key? key, required this.text}) : super(key: key);

  @override
  _CadastrarState createState() => _CadastrarState();
}

class _CadastrarState extends State<Cadastrar> {
  // Chave para o nosso formulário
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // Controllers
  TextEditingController nomeController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController usuarioController = TextEditingController();
  TextEditingController senhaController = TextEditingController();

  String _mensagemErro = '';
  String _mensagemSucesso = '';

  // API
  Map<String, dynamic> data = {}; // usuario = {"nome": "Edson"}
  String errorMessage = '';

  // Construção do método para buscar os dados remotos na API
  // Endereço: https://todolist-api.edsonmelo.com.br/api/user/new/

  Future<void> fetchData(
      String name, String email, String username, String password) async {
    const String apiUrl = 'https://todolist-api.edsonmelo.com.br/api/user/new/';
    final Map<String, String> headers = {'Content-Type': 'application/json'};
    final Map<String, String> data = {
      'name': name,
      'email': email,
      'username': username,
      'password': password
    };

    try {
      final http.Response response = await http.post(
        Uri.parse(apiUrl),
        headers: headers,
        body: jsonEncode(data),
      );
      print('data: $data');
      print('resposta: ${response.statusCode}');

      if (response.statusCode == 200) {
        // Dados recebidos da API
        Map<String, dynamic> responseData = jsonDecode(response.body);
        print('recebi isso: $responseData');
        if (responseData.containsKey('id')) {
          setState(() {
            _mensagemErro = '';
            _mensagemSucesso = 'Usuário cadastrado com sucesso!';
          });
        } else {
          setState(() {
            _mensagemSucesso = '';
            _mensagemErro = 'Erro ao cadastrar usuário';
          });
          print("Cadastro concluido com sucesso!");
          print('responseData: $responseData');
        }
      } else {
        // Se a solicitação falhar
        print('Falha ao realizar Cadastro: ${response.statusCode}');
      }
    } catch (e) {
      // Se ocorrer um erro durante a solicitação
      print('Erro durante a solicitação: $e');
    }
  }

  //
  @override
  Widget build(BuildContext context) {
    // Tela bonitinha
    return Scaffold(
      appBar: AppBar(
        title: const Text("Cadastrar", style: TextStyle(color: Colors.white)),
        centerTitle: true,
        backgroundColor: const Color(0xFF5800DB),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(70, 10, 70, 0),
        child: Form(
          key: _formKey, // Identificador do formulário
          child: Column(
            // Campos para digitação:
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 20, 0, 0),
                child: Text(
                  _mensagemErro,
                  style: const TextStyle(
                    fontSize: 20,
                    color: Colors.red,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                child: Text(
                  _mensagemSucesso,
                  style: const TextStyle(
                    fontSize: 20,
                    color: Colors.green,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 0),
                child: TextFormField(
                  controller: nomeController,
                  style: TextStyle(fontSize: 25),
                  decoration: const InputDecoration(
                    labelText: "Nome",
                    labelStyle: TextStyle(fontSize: 20),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextFormField(
                  controller: emailController,
                  style: TextStyle(fontSize: 25),
                  decoration: const InputDecoration(
                    labelText: "E-mail",
                    labelStyle: TextStyle(fontSize: 20),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextFormField(
                  controller: usuarioController,
                  style: TextStyle(fontSize: 25),
                  decoration: const InputDecoration(
                    labelText: "Usuário",
                    labelStyle: TextStyle(fontSize: 20),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextFormField(
                  controller: senhaController,
                  style: TextStyle(fontSize: 25),
                  decoration: const InputDecoration(
                    labelText: "Senha",
                    labelStyle: TextStyle(fontSize: 20),
                  ),
                ),
              ),

              // Botão para enviar o valor digitado para a outra tela:
              Padding(
                padding: const EdgeInsets.only(top: 50),
                child: SizedBox(
                  height: 60,
                  width: 200,
                  child: RawMaterialButton(
                    onPressed: () {
                      // Chamar o método para envio de dados (API)
                      fetchData(nomeController.text, emailController.text,
                          usuarioController.text, senhaController.text);
                      // Chamar o método de envio de dados
                      //_enviarDadosParaTelaDados(context);
                    },
                    child: const Text(
                      'Cadastrar',
                      style: TextStyle(
                        fontSize: 30,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```