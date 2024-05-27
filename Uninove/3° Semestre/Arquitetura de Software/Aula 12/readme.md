# Aula 11

### Leitura dos Seguintes Tópicos do AAPA

- Enterprise Java Beans
- Frameworks usados para implementar software em 3 camadas
- Hibernate ou JavaServer Faces
- Projeto Final

---

##  Enterprise Java Beans

Aplicações corporativas Java são complexas e geralmente divididas em partes distribuídas.
Java EE fornece APIs para desenvolvimento eficiente dessas aplicações, exigindo um servidor de aplicações Java EE.
As principais APIs incluem Java Web, EJB e JPA.

**Modelos de Componentes de Aplicação:**
Componentes de aplicação são unidades de software reutilizáveis e autônomas.
EJB é o modelo padrão de componentes para Java EE, oferecendo serviços autônomos de regras de negócios.

**Beans de Sessão:**
Beans de sessão encapsulam regras de negócio e têm três tipos: sem estado, com estado e singleton.
Os beans de sessão sem estado são projetados para operações independentes, atendendo a múltiplos clientes eficientemente.

**Interfaces De Negócio Remotas:**
Interface remota permite acesso a beans de sessão fora do ambiente do servidor de aplicação.
A anotação @Remote define uma interface remota.

**Beans de Sessão Com Estado:**
Beans de sessão com estado mantêm instâncias enquanto o cliente usa vários métodos.
A classe do bean contém campos de estado modificados por métodos de negócio.
Métodos marcados com @Remove finalizam a conversação e destroem a instância do bean.

**Callbacks do Ciclo de Vida:**
Callbacks facilitam a inicialização e liberação de recursos dos beans de sessão.
Os métodos @PostConstruct e @PreDestroy são usados para inicialização e liberação de recursos.
A passivação serializa instâncias de bean para preservar estado.

A página fornece exemplos e detalhes sobre a implementação e uso dos EJBs, demonstrando como eles facilitam o desenvolvimento de aplicações corporativas em Java EE.

---

##  Frameworks usados para implementar software em 3 camadas

Os frameworks de software para implementação em três camadas simplificam o desenvolvimento ao oferecer funcionalidades pré-desenvolvidas para requisitos não funcionais. Eles direcionam os desenvolvedores para concentrarem-se nas regras de negócio. Os frameworks geralmente têm componentes pré-estruturados, conhecidos como "frozen spots", que raramente precisam de modificação, e "hot spots", que conectam o software desenvolvido com os componentes necessários.

Alguns frameworks amplamente utilizados incluem o Spring para aplicativos Java EE, oferecendo flexibilidade e extensibilidade, o ASP.NET da Microsoft, com suporte a diferentes linguagens de programação e arquiteturas, o Ruby on Rails (Rails) para desenvolvimento web com Ruby, seguindo o modelo MVC e promovendo a modularização, e o Laravel para aplicações PHP, oferecendo um sistema modular e um roteador para gerenciar requisições.

Embora os frameworks agilizem o desenvolvimento e reduzam o esforço repetitivo, eles também exigem tempo para aprendizado e podem introduzir componentes desnecessários. No entanto, suas vantagens em economia de tempo e recursos superam as desvantagens, justificando sua popularidade e uso contínuo.

---

##  Hibernate ou JavaServer Faces

O Hibernate e o JavaServer Faces (JSF) são duas tecnologias amplamente utilizadas no desenvolvimento de aplicações de grande porte em Java. Ambas ganharam popularidade devido às suas características distintas e à capacidade de simplificar tarefas complexas no desenvolvimento de software.


### Hibernate
O Hibernate é um framework de mapeamento objeto-relacional (ORM) que simplifica a comunicação entre o código Java e o banco de dados relacional. Ele permite que os desenvolvedores trabalhem com objetos Java em vez de lidar diretamente com SQL. Principais características e razões para sua popularidade:

**Mapeamento Objeto-Relacional (ORM):**
O Hibernate facilita o mapeamento entre as entidades do modelo de domínio da aplicação e as tabelas do banco de dados, reduzindo a quantidade de código necessário para realizar operações de persistência.

**Facilidade de Uso:**
O Hibernate simplifica a tarefa de realizar operações de CRUD (criação, leitura, atualização e exclusão) em um banco de dados, eliminando a necessidade de escrever consultas SQL manualmente.

**Portabilidade e Flexibilidade:**
O Hibernate oferece suporte a uma ampla variedade de bancos de dados, o que permite que as aplicações sejam facilmente portadas entre diferentes sistemas de gerenciamento de banco de dados (SGBDs) sem alterações significativas no código.

**Integração com o Ecossistema Java EE:**
O Hibernate é amplamente integrado com outras tecnologias Java, como JPA (Java Persistence API) e JTA (Java Transaction API), facilitando o desenvolvimento de aplicações Java EE completas.

**Comunidade Ativa e Suporte:**
O Hibernate é uma tecnologia de código aberto com uma comunidade ativa de desenvolvedores e uma vasta documentação disponível, o que facilita a aprendizagem e solução de problemas.


### JavaServer Faces (JSF)
O JSF é um framework de interface de usuário para o desenvolvimento de aplicações web baseadas em Java. Ele simplifica a criação de interfaces de usuário dinâmicas e interativas, permitindo que os desenvolvedores construam componentes reutilizáveis e adotem uma abordagem baseada em componentes para o desenvolvimento de interfaces de usuário. Principais características e razões para sua popularidade:

**Modelo Baseado em Componentes:**
O JSF permite que os desenvolvedores construam interfaces de usuário usando componentes reutilizáveis, como botões, tabelas, formulários, etc., o que facilita a criação de interfaces consistentes e de fácil manutenção.

**Gerenciamento de Estado:**
O JSF gerencia automaticamente o estado da interface de usuário, permitindo que os desenvolvedores criem interfaces interativas sem a necessidade de escrever código JavaScript complexo para rastrear o estado do cliente.

**Integração com outros Frameworks:**
O JSF pode ser facilmente integrado com outros frameworks Java, como JPA, Hibernate e CDI (Contexts and Dependency Injection), permitindo o desenvolvimento de aplicações web robustas e escaláveis.

**Suporte a AJAX:**
O JSF oferece suporte integrado para AJAX (Asynchronous JavaScript and XML), permitindo que as aplicações web atualizem partes específicas da página sem recarregar a página inteira, melhorando a experiência do usuário.

**Ferramentas de Desenvolvimento:**
Existem várias ferramentas de desenvolvimento disponíveis para o JSF, como o Eclipse, NetBeans e IntelliJ IDEA, que oferecem suporte ao desenvolvimento de aplicações JSF, incluindo recursos de design visual e depuração.

Em resumo, o Hibernate e o JSF são duas tecnologias poderosas que simplificam o desenvolvimento de aplicações Java, oferecendo recursos avançados e uma ampla gama de funcionalidades para os desenvolvedores. Sua popularidade se deve em grande parte à sua facilidade de uso, flexibilidade e capacidade de acelerar o desenvolvimento de software de grande porte.

---

## Projeto Final

A página "projeto final" possui alguns vídeos ilustrando como a arquitetura do projeto do semestre deverá ser feita, auxiliando para que caso alguém ainda possua alguma dúvida de como montar a arquitetura, assista o vídeo e esclareça suas dúvidas.

