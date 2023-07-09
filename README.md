# 🚀 Aprendendo JavaScript - Curso Básico

## Objetivo

Este repositório está aberto para quem quiser acompanhar o curso "Aprendendo Javascript básico" com Alan Alencar.

## Como participar

Você pode clonar o projeto e baixar os arquivos para seu repositório local. Depois clique no botão `star` para dar um like no projeto.

Para poder contribuir com o repositório, solicite ao e-mail alanalencar@me.com a permissão para o seu usuário do github e conte um pouco sobre você, suas experiências e perspectivas neste aprendizado.

Seja bem-vindo.

## Recursos adicionais

Um grupo de discussão pode ser encontrado na ferramenta __discord__. O link para se inscrever no canal é https://discord.gg/DWHycEKk82, participe.

## Primeira aula

#### Conteúdo

Aprendemos que JavaScript não é uma linguagem complexa e difícil como a crença limitante insiste em declarar. Vimos o quanto ela é parecida com as declarações da linguagem C, como outras linguagens similares como PHP e Object Pascal.

Aprendemos as qualidades e vimos as principais dificuldades que o JS leva para quem está no aprendizado inicial.

Aprendemos ainda como é formado um documento HTML5 e como fazer inserções dinâminas via console do JS em uma página. Vimos como buscar um elemento através do DOM, alterá-lo e ainda criar ou excluir elementos.

O conteúdo está na pasta `aula 1` com os slides em formato _.pdf_ dentro da pasta `slides`. Se você quiser, baixe ainda o _para casa_ na pasta `exercicios` e faça sua prática.

## Segunda Aula

#### Conteúdo

Aprendemos a escrever código JavaScript dentro das nossas páginas HTML usando a tag `script` e também manipulamos tags usando `document.getElemenstByTagName`.

Aprendemos que este método retorna sempre um `HTMLCollection` e portanto precisamos enderecar a sua posição no array.

Aprendemos ainda as funções `alert`, `confirm` e `prompt`. Adicionamente usamos a instrução condicional `if` para testar retornos.

## Terceira Aula

#### Conteúdo

Estudamos os tipos primitivos do JavaScript, suas nuances e principalmente suas caracteristicas.Aprendemos sobre `string`, `number`, `boolean`, `null`, `undefined` e como declarar estes tipos em variáveis.

Aprendemos as regras básicas de nomes para as variáveis e como o JavaScript usa da _inferência_ para detrminar qual é o tipo que uma variável terá no momento da sua inicialização ou posteriormente quando obtem o dado.

Também apresentamos o comando `typeof` que permite saber qual é o tipo de uma variável dentro do nosso algoritmo no JavaScript.

Por último aprendemos o conceiro de coerção e de como o JavaScript trata coerção em operações matemáticas com +, -, * e /.

## Quarta Aula

#### Conteúdo

Aprendemos como declarar uma variável com `var`, `let` e como é o comportamento com cada um deles. Também vimos que o escopo de _var_ é global, enquanto que as variáveis declaradas com _let_ possuem escopo de bloco.

Aprendemos a declarar constantes com `const` e porque não é possível modificá-las ao longo do nosso programa.

Aprendemos também o conceito de _hoisting_ e porque devemos tomar cuidado com ele.

Por último, agora sabemos como dar saída formatada com `console.log`, `console.warn` e `console.error` com o uso de _Template Strings_.

## Quinta Aula

#### Conteúdo

Aprendemos como usar o comando de condicional `if` para testar uma ou mais condições com operadores de comparação para decidir qual será o rumo do nosso algoritmo.

Aprendemos como criar condições compostas com os operadores __||__ (ou) e o __&&__ (e) para criar condições mais complexas e também como usar a negativa da condição com a instrução `else`. 

Vimos ainda que não é uma boa prática criar _ifs_ aninhados e como contornar com `else if`.

Para fechar, vimos como é fácil cair nas armadilhas dos algoritmos de cálculos matemáticos caso não seja bem escrito nosso código.

## Sexta Aula

#### Conteúdo

Conhecemos a estrutura `switch` do Javascript e como podemos usá-la como alternativa a `if` aninhados ou `else if` com várias opções. Ela pode deixar seu código mais limpo e fácil de manutenção.

Em contrapartida vimos também suas limitações, especialmente quando a comparações complexas com __&&__ (e) e desta forma como ele não é nada eficiente.

Vimos ainda que há uma forma curta chamada __ternário__ de construir uma sentença que teste uma condição e se _verdadeiro_ faça isto ou se _falso_ faça aquilo. Bem útil e limpa, mas requer um pouco mais de experiência e olhar apurado.

Para fechar, vimos como é importante sempre revisitar os códigos em busca de refatorar melhor o que escrevemos, mas devemos tomar cuidado para não deixar nossa proficiência tornar a manutenção ineficiente para outros desenvolvedores.

## Sétima Aula

#### Conteúdo

O foco desta aula foi a criação de estruturas de repetições muito comuns nos programas para computadores. Conhecemos a estrutura `for` do Javascript e como podemos usá-la para criar um código consistente, coeso e seguro.

Vimos as mais variadas opções desta estrutura, trabalhando detalhadamente nas questões de _inicialização_, _condição_ e _incremento / decremento_ e como variar para termos estruturas com quaisquer contagem.

Vimos como criar situações dentro do _loop_ de _for_ para encerrar seu ciclo antecipadamente com a instrução `break` e como usar a instrução `continue` para deixar mais otimizado nosso código.

## Oitava Aula

#### Conteúdo

O foco desta aula foi a criação de estruturas de repetições nos programas com estrutura `while { ... }` no Javascript.

Também foi apresentado a estrutura `do { ... } while (condição)` que é semelhante a `while` porém com a particularidade de sempre executar uma iteração ao iniciar o bloco.

## Nona Aula

#### Conteúdo

A primeira aula com introdução do uso de `function` com Javascript. Agora nós podemos criar nossas próprias funções, blocos de código com repetições ou que precisam de uma proteção maior e reaproveitamento por parte dos algoritmos.

Vimos como é importante tratar os tipos dos argumentos (_parametros_) das nossas funções e como retornar um valor para o código que invocou a chamada.

## Décima Aula

#### Conteúdo

Vimos na prática o conceito de _inside functions_ onde o escopo da função só pode ser acessado de dentro da funcão a qual ela foi definida. Aprendemos também a criar funções com a notação de _function expression_ que é uma notação que associa a função e uma variável do seu programa.

Por fim, as _arrow functions_ e como é determinante optar por uma sintaxe ou outra no momento d criar suas próprias funções.

## Décima Primeira Aula

#### Conteúdo

Revivemos o conceito de _Arrow Function_, suas potencialidades e porque também são conhecidas como _lambda functions_ no Javascript. Vimos como é possível encurtar o código de uma arrow function de _block body_ para _concise block_ e como isto também torma mais complexo visualizar o processamento da função.

Aprendemos um pouco sobre o paradigma da __Programação Funcional__ e como é possível passar uma função lambda para uma outra função o tanto que isto torna a linguagem e as possibilidades gigantescas.

Por último falamos sobre os _rest parameters_ também conhecidos pela sua forma de escrita ___...parametro__ e como podem ser úteis para determinadas funções as quais não sabemos quantos parâmetros ela vai receber. Um exemplo bem comum disto é a função `console.log()` que pode receber uma quantidade enorme e não limitada de parâmetros para exibir na console do terminal ou do navegador.

## Décima Segunda Aula

#### Conteúdo

Hoje foi dia de aprendermos mais sobre os `arrays` em JavaScript. Elas são estruturas poderosas que vão permitir ao desenvolvedor trabalhar com um conjunto de  dados em uma
única estrutura, agora conhecida como _object_.

Os arrays são poderosos. Podem armazenar multiplas dimensões, tipos diferentes em um mesmo array e ser acessado pelo seu índice.

Aprendemos que um array tem uma propriedade importante chamada `length` que nos diz quantos elementos tem no array e que seu primeiro elemento é sempre índice 0 (zero). Vimos como criar novos elementos no final, no início e como excluir o primeiro e último elemento de uma array.

Por último vimos como sortear os elementos de um array e a pegadinha que é sortear strings com letras maiúsculas e minúsculas além de tipos diferentes de _string_. Veja os dois códigos desta unidade chamados `cerejaDoBolo.js` e `cerejaDoBolo_02.js`.

## Décima Terceira Aula

#### Conteúdo

Seguindo com os estudos sobre `arrays` aprendemos como usar os métodos padrões implementados neste objeto para fazermos iteração e filtro de elementos.

Usamos o método `forEach` para iterar os elementos do array e comparamos com o mesmo uso através do `for`. Vimos que o `forEach` permite usar uma função de `callback` como parâmetro o que nos dá uma flexibilidade maior quando há esta necessidade.

Aprendemos também a usar o método `map` que em primeira instância é muito parecido com o `forEach` porém com a particularidade de retornar um novo array se necessário. Lembrando que sempre será gerado um novo array do mesmo tamanho que o array original.

Por último vimos o método `filter` que também similar aos antecessores, mas com a capacidade de definir quais elementos do arra original vão ser inseridos no novo array. 

## Primeira Revisão

#### Conteúdo

Primeira revisão de todos os conhecimentos que aprendemos até a décima aula. Instrução `if`, `switch` e `for`. 

Todos os exercícios da revisão estão na pasta `revisao_1`. 

// Alan Alencar, 2023