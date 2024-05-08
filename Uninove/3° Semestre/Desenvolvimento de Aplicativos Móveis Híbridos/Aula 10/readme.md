# Aula 10

### Simulado
O professor passou alguns exercícios, com a finalidade de nos preparar para a prova do ENADE e também a AV2 da faculdade.

As questões são a maioria sobre lógica de programação.

---

## Flutlab.io
Vamos criar multiplas telas para podermos navegar entre os aplicativos,
exemplo de telas que podemos fazer: Login, cadastro, aplicação.

**Atalhos para criar os widgets rapidamente:**
stf - StateFull
stl - StateLess


### Sobre a Aula
**Criamos uma aplicação que manda informações da tela:**
"main.dart"
**para a tela:**
"dados.dart"

O programa pede um nome de usuário e uma senha, e então envia as informações para a tela "dados.dart", mostrando as informações digitadas.

---

#### Lição de casa:
criar a navegação de "alterar.dart" e "cadastrar.dart".

---

## Código da Aula

**main.dart**
```Dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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

  // Método para enviar dados para as outras telas (dados.dart)
  void _enviarDadosOutraTela(BuildContext context) {
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
                    height: 20,
                    child: RawMaterialButton(
                      onPressed: () {
                        // Chamar o método de envio de dados
                        _enviarDadosOutraTela(context);
                      },
                      child: const Text('Entrar'),
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

**dados.dart**
```Dart
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
          title: const Text("Dados Enviados"),
          centerTitle: true,
        ),
        body: Center(
            child: Column(
          children: [
            // Text[x], é o indice x do array (o array consiste em "usuario" e "senha")
            Text(text[0], style: const TextStyle(fontSize: 24)), // "usuario"
            Text(text[1], style: const TextStyle(fontSize: 24)), // "senha"
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