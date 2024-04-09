# Aula 7

Hoje iremos ver como funcionam os ponteiros da linguagem C e Alocação dinâmica de memória, seguindo os ensinamentos do AVA.

Os ponteiros podem ser utilizados para diversas finalidades. Dentre elas, cita-se:
Subprogramas (funções e procedimentos): modificação de argumentos em subrotinas, quando os parâmetros são passados por referência;
Alocação dinâmica de memória: permitem a criação de estruturas de dados complexas, tais como listas encadeadas e árvores binárias;

Um ponteiro é uma variável especial que armazena endereço de memória ao invés de armazenar um dado ou valor.

A única diferença na declaração de ponteiros com relação às variáveis mais comuns (int, float e char) está no fato dele armazenar endereço de memória. Para informar que a variável é um ponteiro, basta colocar o símbolo de asterisco (*) ao lado do tipo da variável.

## DECLARAÇÃO

A forma geral de declaração de um ponteiro em linguagem C é:

tipo *nome-variável;

Onde, tipo é um tipo qualquer de dados e nome-variável é o nome pelo qual o ponteiro será referenciado.

Exemplos:

Declaração de um ponteiro denominado px, que armazenará o endereço de memória de uma variável do tipo int.
int *px;

Declaração de um ponteiro denominado pc, que armazenará o endereço de memória de uma variável do tipo char.
char *pc;

## OPERADORES

A manipulação de variáveis declaradas como ponteiros se faz por meio da utilização de dois operadores unários, que são os seguintes:

* : o operador “asterisco” pode ser utilizado sob 2 formas: na declaração de ponteiros e para acessar o conteúdo da variável que está sendo apontada pelo ponteiro. No exemplo abaixo é mostrada a utilização deste operador.
 
& : este operador permite acessar o endereço de memória de uma variável. Para tanto, ele deve ser utilizado antes do nome da variável. 

---

Basicamente, existem três maneiras de reservar espaço de memória para o armazenamento de dados: o uso de variáveis globais, o uso de variáveis locais e a alocação dinâmica de variáveis.
Para as variáveis globais é reservado espaço de memória que existe enquanto o programa estiver executando. 
No caso das variáveis locais, o espaço existe apenas enquanto a função que declarou a variável está sendo executada, sendo liberado para outros usos quando a execução da função termina.
A alocação dinâmica é o processo que aloca memória em tempo de execução. Esse espaço alocado dinamicamente permanece reservado até que seja explicitamente liberado pelo programa.

## Biblioteca "stdlib.h"

A biblioteca padrão “stdlib.h” contém uma série de funções pré-definidas para tratar a alocação dinâmica de memória em C. Abaixo, seguem as funções mais utilizadas:

malloc( )    -> Reservar um espaço na Memória
sizeof( )     -> Retorna o tamanho em bytes de um variável / tipo de dados
realloc( )    -> Redimensiona um espaço previamente alocado pelo "malloc( )"
free( )        -> Libera o espaço alocado em memória de variáveis alocadas dinamicamente
 
Função malloc:

A função malloc reserva espaço de memória livre. Esta função recebe como parâmetro o número de bytes de memória que se deseja alocar. A função retorna um ponteiro (endereço) genérico (void*) para o endereço inicial da área da memória alocada se houver espaço livre. Caso contrário, retorna um endereço nulo (representado pelo símbolo NULL), se não houver espaço livre. 

Função sizeof:

A função sizeof retorna o tamanho, em bytes, do que for definido como parâmetro para a função.

Função realloc:

A função realloc é usada para redimensionar um espaço alocado previamente com malloc. Seus argumentos são um ponteiro para o início de uma área previamente alocada, e o novo tamanho, que pode ser maior ou menor que o tamanho original.

realloc retorna um ponteiro para a nova área alocada. Este ponteiro pode ser igual ao ponteiro original se o novo tamanho for menor que o tamanho original, e diferente do ponteiro original se o novo tamanho for maior que o tamanho original.

Função free:

As variáveis alocadas dentro de uma função, também conhecidas como variáveis automáticas ou locais, desaparecem assim que a execução da função termina. Já as variáveis alocadas dinamicamente continuam a existir mesmo depois que a execução da função termina. Se for necessário liberar a memória ocupada por essas variáveis, é preciso recorrer à função free.

A função free recebe como argumento um ponteiro para uma área de memória previamente alocada por malloc() e então libera esta área para uma possível utilização futura. Ela não deve ser aplicada a uma parte de um bloco de bytes alocado por malloc. Aplique free apenas ao bloco todo.


