# Aula 11
### páginas 
- Frameworks para gerenciamento de Dados
- API de Persistência Java

## Frameworks
Aprendemos a importância da persistência de dados em aplicativos, garantindo que os dados estejam sempre disponíveis e atualizados. Para isso, geralmente são usados sistemas de gerenciamento de banco de dados (SGBDs), principalmente relacionais que utilizam SQL. O desenvolvimento de frameworks e APIs de persistência ajuda a manter a flexibilidade e independência dos aplicativos em relação aos SGBDs, permitindo trocas de bancos de dados com mínimas modificações no software.

Frameworks e APIs de persistência, como Hibernate e JPA, utilizam Mapas Objeto-Relacional (ORM) para mapear entidades e relacionamentos de tabelas de banco de dados para objetos na aplicação, facilitando a construção de queries e mantendo a independência do SGBD. Padrões de projeto como Unity-of-Work, Repository, Bridge, Factory, e Gateway são recomendados para desenvolver essas APIs, otimizando a eficiência e flexibilidade no gerenciamento de dados.

---

## API
A API de Persistência Java (JPA) foi criada para resolver as limitações do JDBC, que requer gerenciamento manual de conexões e execução de comandos SQL diretamente no código Java. JPA automatiza a gestão de conexões e comandos SQL, mantendo os objetos ativos na memória do servidor durante transações, reduzindo a carga no servidor de dados. Utilizando o mecanismo de Mapas Objeto-Relacional (ORM), a JPA mapeia entidades de banco de dados diretamente para objetos Java, facilitando o gerenciamento e consulta dos dados.

A JPA usa anotações para definir classes de entidades que representam tabelas de banco de dados. O EntityManager controla essas entidades, permitindo operações como inserção, atualização, seleção e exclusão de dados de maneira mais segura e eficiente. As consultas podem ser feitas usando JPQL, uma linguagem de consulta específica da JPA. A configuração da unidade de persistência é feita através do arquivo XML persistence.xml, que define as propriedades necessárias para a conexão com o banco de dados.

Para demonstrar a aplicação dos conceitos da JPA em uma aplicação Java SE, um projeto de exemplo chamado ExemploJPA é criado no NetBeans. Este projeto inclui a entidade Usuario, mapeada para a tabela Usuario do banco de dados, e a classe UsuarioBD, que gerencia operações de persistência usando o EntityManager. A classe principal, ExemploJPA, inicializa a unidade de persistência ExemploJPAPU, cria e manipula objetos Usuario, persistindo-os, consultando, atualizando e excluindo-os no banco de dados Derby. O exemplo utiliza o Hibernate como provedor de persistência e inclui dependências específicas, como as bibliotecas Hibernate, Jandex e o driver JDBC do Derby.

Para configurar o ambiente, o arquivo persistence.xml define a unidade de persistência e suas propriedades de conexão com o banco de dados Derby. A tabela Usuario é criada e populada com dados iniciais usando um script SQL. O projeto também detalha como configurar bibliotecas necessárias no NetBeans e acessar o banco de dados Derby. Após configurar e executar o projeto, os resultados, incluindo logs gerados pelo Hibernate, são visualizados, com possíveis erros de chave primária devido ao uso de IDs gerados aleatoriamente, que podem ser corrigidos com interação do usuário via JOptionPane.
