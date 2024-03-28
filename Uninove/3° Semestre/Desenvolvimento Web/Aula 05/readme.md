# Aula 5
## Criando um Banco de Dados

É necessário ter o XAMPP, e dar START no APACHE e MYSQL.
Após iniciar o MYSQL e o APACHE, clique em ADMIN do MYSQL.

Para criar um banco de dados, utilizaremos o seguinte link: http://localhost/phpmyadmin/index.php?

Com a seguinte conexão:
utf8_general_ci

## Exercício | Banco de Dados
- Insira no banco de dados, dados de 10 alunos; (INSERT)
- Faça uma consulta que traga todos os alunos que têm a sílaba "ma"; (SELECT)
- Faça uma alteração e coloque senha padrão para todos alunos como sendo 123; (UPDATE)
- Remove do banco de dados todos alunos que fazem curso de enfermagem. (DELETE)

### Respostas
1)
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Marcelo', 'TADS', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Marcio', 'TADS', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Akin', 'Enfermagem', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Leonardo', 'TADS', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Vitor', 'Enfermagem', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Mauricio', 'TADS', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Maria', 'TADS', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Sergio', 'Enfermagem', '123');
INSERT INTO aluno(ra, nome, curso, senha) VALUES ('', 'Leandro', 'Ciência da Computação', '123');

2)
SELECT * FROM aluno WHERE nome LIKE "%ma%";
LIKE só funciona para TEXTO, se for número utilizaremos o seguinte:
WHERE ra = '7';

"%a%"
Isso mostrará qualquer texto que possua o conteúdo "a"
"a%"
Este mostrará um texto que começa com "a"
"%a"
Já isso mostrará todo o texto acabe com o conteúdo "a"
"leonardo%"
Já isso mostrará todo o texto que comece com "leonardo"

3)
UPDATE aluno SET senha = '12345';

4)
DELETE FROM aluno WHERE curso = "Enfermagem";

EXTRA)
Mudar a senha de um aluno chamado 'Gustavo' para 'senhalegal':
UPDATE aluno SET senha = 'senhalegal' WHERE nome = 'Gustavo';

EXTRA²)
Mudar a senha de um aluno que começo com o nome "ma":
UPDATE aluno SET senha = '123' WHERE nome LIKE "ma%";

---

O seguinte código irá mostrar quantas vezes cada grupo aparece em uma tabela:
select curso, count(curso) from aluno group by curso

Para deletar uma tabela inteira:
DELETE FROM aluno;

---

## Exercício

image.png
Fazer isso em Bootstrap

## Código
[index.jsp]
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Site Legal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>
  h1 {
  margin-top: 5vh;
  }
  .mb-3 {
  display: flex;
  align-items: center;
  gap: 0 1em;
  }
  .img-pequena {
  width: 2.2em;
  height: 2.2em;
  }
  .img-pequena:hover {
  cursor: pointer;
  }
 
  .col {
  display:flex;
  flex-direction: column;
  gap: 5em 0;
  }
  </style>
  </head>
  <body>

    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col-3">

    </div>
    <div class="col">
      <h1>UNINOVE - Cadastro de Alunos</h1>
     
<form>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">RA........:</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu RA">
 </div>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">Nome.:</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu Nome">
 </div>
 <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">Curso..:</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu Curso">
 </div>
 <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">Senha.:</label>
   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua Senha">
 </div>
 
<button type="button" class="btn btn-primary">Buscar</button>
<button type="button" class="btn btn-success">Salvar</button>
<button type="button" class="btn btn-danger">Limpar</button>
 
</form>
     
<table class="table">
 <thead>
   <tr>
     <th scope="col">Excluir</th>
     <th scope="col">Editar</th>
     <th scope="col">RA</th>
     <th scope="col">Nome</th>
     <th scope="col">Curso</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <th scope="row"><img class="img-pequena" src="trash.png"></th>
     <td><img class="img-pequena" img src="editar.png"></td>
     <td>923341</td>
     <td>Gustavo</td>
     <td>TADS</td>
   </tr>
   <tr>
     <th scope="row"><img class="img-pequena" src="trash.png"></th>
      <td><img class="img-pequena" img src="editar.png"></td>
     <td>934293423</td>
     <td>Fátima</td>
     <td>Curso Legal</td>
   </tr>
 </tbody>
</table>
     
    </div>
    <div class="col-3">

    </div>
  </div>
</div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>