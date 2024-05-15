# Aula 11

### Atividade

Com base nas aulas anteriores, você deverá interagir com a API To-Do-List (link abaixo), seguindo a documentação do github e implementar:

- Tela de Login
- Tela de reposta com: id, nome, e-mail e TOKEN

Documentação: https://github.com/EdsonMSouza/php-api-to-do-list
EndPoints: https://todolist-api.edsonmelo.com.br/api/

O cadastro deverá ser feito pelo reqbin.com

---

## Códigos
.* Caso queira fazer login, os dados são os seguintes:
Usuário: pedro_legal
Senha: pedro123

**main.dart**
```DART
import 'package:flutter/material.dart';
import 'alterar.dart';
import 'cadastrar.dart';
import 'dados.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; // Tratamento do JSON

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

  // Variáveis
  late int _usuarioId;
  late String _usuarioNome;
  late String _usuarioEmail;
  late String _usuarioToken;

  String _mensagemErro = '';

  // API
  Map<String, dynamic> data = {}; // pessoa = {"nome": "Edson"}
  String errorMessage = '';

  // Construção do método para buscar os dados remotos na API
  // Endereço: https://cep.awesomeapi.com.br/{cep}

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
  void _enviarDadosParaTelaAlterar(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => Alterar(
          text: ['Deu certo!'],
        ),
      ),
    );
  }

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
                // Padding(
                //   padding: const EdgeInsets.only(top: 50),
                //   child: SizedBox(
                //     height: 60,
                //     width: 170,
                //     child: RawMaterialButton(
                //       onPressed: () {
                //         _enviarDadosParaTelaAlterar(context);
                //       },
                //       child:
                //           const Text('Alterar', style: TextStyle(fontSize: 30)),
                //     ),
                //   ),
                // ),
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

**dados.dart**
```DART
import 'package:flutter/material.dart';

class Dados extends StatelessWidget {
  // Variável para receber nossos dados
  final List text;

  // No construtor, vamos pegar os dados enviados
  const Dados(
      {Key? key, required this.text /*É requerido que os dados cheguem*/})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Login Concluído!",
              style: TextStyle(color: Colors.white)),
          centerTitle: true,
          backgroundColor: const Color(0xFF5800DB),
        ),
        body: Center(
            child: Column(
          children: [
            // Text[x], é o indice x do array (o array consiste em "usuario" e "senha")
            Text('ID: ${text[0]}',
                style: const TextStyle(fontSize: 24)), // "ID"
            Text('Nome: ${text[1]}',
                style: const TextStyle(fontSize: 24)), // "Nome"
            Text('Email: ${text[2]}',
                style: const TextStyle(fontSize: 24)), // "Email"
            Text('Token: ${text[3]}',
                style: const TextStyle(fontSize: 24)), // "Tokenn"
            MaterialButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text("Voltar"),
            ),
          ],
        )));
  }
}

```