# Aula 12 | Última Aula

#### AAPA
Leitura dos seguintes itens:
- Recursividade
- Árvores

### Site Dinâmico / Chamada Recursiva

Um site se torna dinâmico quando ele muda ao longo do tempo, podemos fazer isso colocando uma função dentro dela mesma.

Uma função se torna recursiva quando dentro dela é feita uma ou mais chamadas a ela mesma. A ideia é dividir um problema original em subproblemas menores de mesma natureza, e depois combinar as soluções obtidas para gerar a solução do problema original de tamanho maior.

O problema é que isso consome mais memória da CPU e normalmente é evitado.

### Árvores
Árvores são criadas ao contrário do esperado, com suas raízes para cima, e suas folhas para baixo.
se T = 0 -> a árvore está vazia
O nó raiz é um ponto na árvore que não chega de lugar nenhum, o primeiro ponto / ponto mais alto.
Outros subpontos que possuem mais ramificações, se tornam sub-árvores.
Já os pontos sem ramificações (os pontos mais baixos), são as folhas de uma árvore.

As árvores também possuem níveis, de acordo com a profundidade das ramificações.

Os valores de cada ponto da árvore depende se são maiores ou menores do que os pontos raizes:
-maior vai pra direita
- menor vai pra esquerda

#### Árvores Binárias
As árvores binárias sempre criam 2 ramificações por vez.
