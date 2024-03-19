# Aula 4
## Padrão MVC

- Ler no AAPA: Arquitetura em 3 camadas (MVC)
- Pesquisar no GOOGLE: Padrão de arquitetura MVC

#### Porque usar o padrão MVC?
A principal função de utilizar a arquitetura em 3 camadas (MVC), é que dessa maneira as camadas podem ser reaproveitadas para outros projetos. 

Um dos primeiros padrões de projeto a surgir, mesmo antes dos componentes de software, o padrão de projeto denominado MVC, também conhecido como Model-View-Controller, orienta o desenvolvedor a organizar seus componentes em 3 camadas:

- Modelo: esta camada agrupa os componentes de software que executam as regras de negócios, gerenciamento de conexão com as bases de dados, além de lógica e funções necessárias para manter o software sendo executado;

- Visão: esta camada agrupa os componentes que permitem ao usuário do software informar, ou ter acesso, aos dados que o sistema trafega;

- Controle: esta camada agrupo os componentes de software que controlam a troca de informações entre os componentes que estão instalados nas outras duas camadas.

---

### Projetos em MVC

Se você cria um projeto, sem o MVC, e eventualmente deseja refazer esse projeto com melhorias, você teria que refazer tudo do 0, porém se estivesse utilizando o padrão MVC, você poderia reutilizar os componentes ajustando somente o necessário.

Um carro, por exemplo, se você furar o pneu, você não precisa trocar o carro todo, somente a roda.

---

### O que é um componente
Um componente pode ser 2 coisas:
- Uma ou várias classes;
- Um objeto.

---

### ASP.NET
ASP.NET não é uma linguagem de programação, mas sim um framework.

ASP.NET é HTML com C#

Servidores de aplicação: Java = tomcat | ASP.NET = IIS Express | PHP = APACHE
Um servidor de aplicação permite utilizar outras linguagens de programação back-end junto com HTML e CSS

Para abrir o projeto:
Visual Studio 2022 -> Criar projeto em ASP.NET -> Gerenciador de Soluções -> Views -> Home -> Index.cshtml

---

## Anotações VITOR

AULA DE HOJE:
Pesquisar no google padrão MVC

M - Model >>>>> Modelo
V - View >>>>>>>>>>>> Visualização
C -  Controller >>>>>>> Controlador

Manipulação dos dados ( model )
Interação do usuário ( view )
Camada de controle ( controller )

A arquitetura foi criada em 1979 pelo cientista noruegues Trygve Reenskaug.