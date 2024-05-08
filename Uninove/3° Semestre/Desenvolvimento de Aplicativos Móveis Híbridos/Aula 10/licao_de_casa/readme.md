# Lição de casa

A atividade de hoje foi bem simples, apenas tive que criar mais 2 telas, das quais utilizaremos na próxima aula para implementar mais conteúdos no programa "Telas Multiplas"!

### Códigos
**main.dart**
```Dart
import 'package:flutter/material.dart';
import 'alterar.dart';
import 'cadastrar.dart';
import 'dados.dart';

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

  // Método para enviar dados para as outras telas:
  //
  // Enviar para DADOS.DART
  void _enviarDadosParaTelaDados(BuildContext context) {
    // Para enviar os dados precisamos do contexto da nossa página
    // E para isso vamos utilizar o contexto do build
    List textToSend = <String>[
      usuarioController.text,
      senhaController.text
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
          title: const Text("Telas"),
          centerTitle: true,
        ),
        body: SingleChildScrollView(
          child: Form(
            key: _formKey, // Identificador do formulário
            child: Column(
              // Campos para digitação:
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: TextFormField(
                    controller: usuarioController,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: TextFormField(
                    controller: senhaController,
                  ),
                ),

                // Botão para enviar o valor digitado para a outra tela:
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: SizedBox(
                    height: 60,
                    width: 170,
                    child: RawMaterialButton(
                      onPressed: () {
                        // Chamar o método de envio de dados
                        _enviarDadosParaTelaDados(context);
                      },
                      child: const Text(
                        'Login',
                        style: TextStyle(fontSize: 30),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: SizedBox(
                    height: 60,
                    width: 170,
                    child: RawMaterialButton(
                      onPressed: () {
                        _enviarDadosParaTelaAlterar(context);
                      },
                      child:
                          const Text('Alterar', style: TextStyle(fontSize: 30)),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 50),
                  child: SizedBox(
                    height: 60,
                    width: 170,
                    child: RawMaterialButton(
                      onPressed: () {
                        _enviarDadosParaTelaCadastrar(context);
                      },
                      child: const Text(
                        'Cadastrar',
                        style: const TextStyle(fontSize: 30),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}

```

**alterar.dart**
```Dart
import 'package:flutter/material.dart';

class Alterar extends StatelessWidget {
  final List text;

  const Alterar({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Alterar'),
        centerTitle: true,
      ),
      body: Center(
          child: Column(
        children: [
          Text(
            text[0],
            style: const TextStyle(fontSize: 30),
          )
        ],
      )),
    );
  }
}

```

**cadastrar.dart**
```Dart
import 'package:flutter/material.dart';

class Cadastrar extends StatelessWidget {
  final List text;

  const Cadastrar({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastrar'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Text(
              text[0],
              style: const TextStyle(fontSize: 50),
            ),
          ],
        ),
      ),
    );
  }
}

```