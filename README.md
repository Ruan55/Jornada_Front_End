# Jornada_Front_End

# 🚀 Minha Jornada no Curso de Front-end - HubLightHouse

Este repositório é dedicado ao registro do meu aprendizado ao longo do curso de **Front-end** oferecido pela HubLightHouse em parceria com Future Tech, FIAP, Infinity School e Intel.  
O objetivo é documentar os tópicos estudados, compartilhar códigos de exemplo e acompanhar minha evolução.

---

## 📅 Progresso

### **HTML**
1. **Estrutura básica do HTML**  
   - Declaração `<!DOCTYPE html>`
   - Elementos `<html>`, `<head>` e `<body>`
   - Organização de conteúdo

2. **Meta tags, Cabeçalho e Parágrafo**  
   - Uso de `<meta>` para definir charset, viewport e descrições
   - Elementos de título `<h1>` até `<h6>`
   - Parágrafos `<p>`

3. **Formatação de texto**  
   - Negrito `<b>` e `<strong>`
   - Itálico `<i>` e `<em>`
   - Sublinhado `<u>` e `<ins>`
   - Texto riscado `<s>` e `<del>`

4. **Elementos de citação**  
   - Citação curta `<q>`
   - Citação longa `<blockquote>`
   - Abreviações `<abbr>`
   - Endereço `<address>`

---

## 📂 Estrutura do Repositório
```

📦 meu-curso-frontend
┣ 📂 html
┃ ┣ 📜 estrutura-basica.html
┃ ┣ 📜 meta-tags.html
┃ ┣ 📜 formatacao-texto.html
┃ ┗ 📜 citacoes.html
┗ 📜 README.md

```

## 📅 Dia 2 - HTML

1. **Comentários**  
   - Uso de `<!-- comentário -->` para inserir anotações no código sem afetar a renderização.

2. **Links**  
   - Link padrão: `<a href="https://exemplo.com">Texto do link</a>`
   - Abrir em nova aba: `<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">Abrir em nova aba</a>`
   - Link interno para outra página: `<a href="pagina.html">Ir para página</a>`

3. **Imagens**  
   - Imagem simples: `<img src="imagem.jpg" alt="Descrição da imagem">`
   - Definindo tamanho: `<img src="imagem.jpg" alt="Descrição" width="300">`

4. **Tabelas**  
   - Estrutura básica:
     ```html
     <table>
       <tr>
         <th>Coluna 1</th>
         <th>Coluna 2</th>
       </tr>
       <tr>
         <td>Dado 1</td>
         <td>Dado 2</td>
       </tr>
     </table>
     ```

5. **Listas**  
   - Lista não ordenada:
     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
     ```
   - Lista ordenada:
     ```html
     <ol>
       <li>Passo 1</li>
       <li>Passo 2</li>
     </ol>
     ```

---
✍️ *Atualizado em: 06/08/2025*

---

## 📅 Dia 3 - HTML

1. **Iframes**  
   - Inserindo páginas dentro de outras:
     ```html
     <iframe src="https://exemplo.com" width="600" height="400" style="border:none;"></iframe>
     ```

2. **Formulários**  
   - Estrutura básica:
     ```html
     <form action="/enviar" method="post">
       <label for="nome">Nome:</label>
       <input type="text" id="nome" name="nome">

       <label for="email">Email:</label>
       <input type="email" id="email" name="email">

       <input type="submit" value="Enviar">
     </form>
     ```

3. **Áudio**  
   - Inserindo áudio com controles:
     ```html
     <audio controls>
       <source src="musica.mp3" type="audio/mpeg">
       Seu navegador não suporta o elemento de áudio.
     </audio>
     ```

4. **Vídeo**  
   - Inserindo vídeo com controles:
     ```html
     <video width="640" height="360" controls>
       <source src="video.mp4" type="video/mp4">
       Seu navegador não suporta o elemento de vídeo.
     </video>
     ```

5. **Divs e Tags Semânticas**  
   - Uso de `<div>` para agrupar conteúdo.
   - Tags semânticas para melhor estrutura e acessibilidade:
     ```html
     <header>Topo do site</header>
     <nav>Menu de navegação</nav>
     <main>Conteúdo principal</main>
     <section>Seção de artigos</section>
     <article>Artigo individual</article>
     <aside>Informações adicionais</aside>
     <footer>Rodapé do site</footer>
     ```

---
---

## 📅 Dia 4 - CSS

1. **CSS Inline**  
   - Aplicado diretamente dentro da tag HTML:  
     ```html
     <p style="color: blue; font-size: 18px;">Texto com CSS inline</p>
     ```

2. **CSS Interno**  
   - Definido dentro da tag `<style>` no próprio documento HTML:  
     ```html
     <head>
       <style>
         p {
           color: red;
           font-size: 20px;
         }
       </style>
     </head>
     <body>
       <p>Texto com CSS interno</p>
     </body>
     ```

3. **CSS Externo**  
   - Arquivo separado (`style.css`) conectado via `<link>`:  
     ```html
     <head>
       <link rel="stylesheet" href="style.css">
     </head>
     ```
     **style.css**:
     ```css
     p {
       color: green;
       font-size: 22px;
     }
     ```

4. **Seletores, Classes e IDs**  
   - **Seletor de elemento:**  
     ```css
     p {
       color: purple;
     }
     ```
   - **Classe (.)**  
     ```css
     .destaque {
       background-color: yellow;
     }
     ```
     ```html
     <p class="destaque">Texto destacado</p>
     ```
   - **ID (#)**  
     ```css
     #titulo {
       font-size: 28px;
     }
     ```
     ```html
     <h1 id="titulo">Título com ID</h1>
     ```

5. **Color**  
   - Definição de cores em CSS:
     ```css
     h1 {
       color: red;               /* Nome da cor */
     }
     p {
       color: #00ff00;           /* Hexadecimal */
     }
     span {
       color: rgb(0, 0, 255);    /* RGB */
     }
     div {
       color: hsl(200, 100%, 50%); /* HSL */
     }
     ```

---
---

## 📅 Dia 5 - CSS

1. **Background**  
   - Definição de cor ou imagem de fundo:
     ```css
     body {
       background-color: lightgray;
     }

     div {
       background-image: url("fundo.jpg");
       background-repeat: no-repeat;
       background-size: cover;
     }
     ```

2. **Border**  
   - Personalizando bordas:
     ```css
     p {
       border: 2px solid black;    /* largura, estilo e cor */
       border-radius: 10px;        /* borda arredondada */
     }
     ```

3. **Margin**  
   - Espaçamento externo (fora do elemento):
     ```css
     div {
       margin: 20px;            /* aplica em todos os lados */
       margin: 10px 20px;       /* vertical | horizontal */
       margin: 5px 10px 15px;   /* top | laterais | bottom */
       margin: 5px 10px 15px 20px; /* top | right | bottom | left */
     }
     ```

4. **Padding**  
   - Espaçamento interno (dentro do elemento):
     ```css
     div {
       padding: 15px;            /* todos os lados */
       padding: 10px 20px;       /* vertical | horizontal */
     }
     ```

5. **Width e Height**  
   - Definindo largura e altura dos elementos:
     ```css
     img {
       width: 300px;
       height: 200px;
     }

     div {
       width: 50%;      /* metade da largura do elemento pai */
       height: auto;    /* ajusta automaticamente */
     }
     ```

---
---

## 📅 Dia 6 - CSS

1. **Text**  
   - Propriedades para estilização de texto:
     ```css
     p {
       text-align: center;       /* alinhamento: left | right | center | justify */
       text-decoration: underline; /* decoração: none | underline | line-through */
       text-transform: uppercase;  /* transformação: uppercase | lowercase | capitalize */
       letter-spacing: 2px;      /* espaçamento entre letras */
       line-height: 1.5;         /* altura da linha */
     }
     ```

2. **Font**  
   - Controle de fonte e estilo:
     ```css
     body {
       font-family: Arial, Helvetica, sans-serif; /* família da fonte */
       font-size: 16px;          /* tamanho */
       font-weight: bold;        /* espessura: normal | bold | lighter | 100–900 */
       font-style: italic;       /* estilo: normal | italic | oblique */
     }
     ```

3. **Estilização de Links**  
   - Personalização dos estados do link:
     ```css
     a {
       color: blue;
       text-decoration: none;   /* remove o sublinhado */
     }

     a:hover {
       color: red;              /* quando o mouse passa por cima */
     }

     a:active {
       color: green;            /* quando o link é clicado */
     }

     a:visited {
       color: purple;           /* links já visitados */
     }
     ```

4. **Display**  
   - Controle de exibição de elementos:
     ```css
     div {
       display: block;   /* padrão para div */
     }

     span {
       display: inline;  /* padrão para span */
     }

     li {
       display: inline-block; /* mistura inline e block */
     }

     .oculto {
       display: none;    /* remove da tela */
     }
     ```

5. **Max-width**  
   - Define a largura máxima do elemento (responsividade):
     ```css
     img {
       max-width: 100%;   /* imagem nunca ultrapassa o container */
       height: auto;      /* mantém a proporção */
     }

     div {
       max-width: 800px;
       margin: 0 auto;    /* centraliza na tela */
     }
     ```

---
---

## 📅 Dia 7 - CSS

1. **Position**  
   - Controla a posição dos elementos na página:  
     ```css
     .estatico {
       position: static;   /* padrão */
     }

     .relativo {
       position: relative; /* relativo à posição normal */
       top: 10px;
       left: 20px;
     }

     .absoluto {
       position: absolute; /* relativo ao elemento pai com position diferente de static */
       top: 0;
       right: 0;
     }

     .fixo {
       position: fixed;    /* fixo na tela, mesmo ao rolar */
       bottom: 0;
       right: 0;
     }

     .grudento {
       position: sticky;   /* fica fixo após certo ponto */
       top: 0;
     }
     ```

2. **Overflow**  
   - Controla o conteúdo que ultrapassa o tamanho do elemento:  
     ```css
     div {
       width: 200px;
       height: 100px;
       overflow: visible;   /* padrão */
       overflow: hidden;    /* esconde conteúdo extra */
       overflow: scroll;    /* adiciona barras de rolagem */
       overflow: auto;      /* adiciona scroll somente se necessário */
     }
     ```

3. **Float**  
   - Posiciona elementos lado a lado:  
     ```css
     img {
       float: left;   /* flutua à esquerda */
     }

     p {
       float: right;  /* flutua à direita */
     }
     ```

4. **Opacity**  
   - Define a transparência do elemento:  
     ```css
     .transparente {
       opacity: 0.5;   /* 0 = totalmente invisível | 1 = totalmente visível */
     }
     ```

5. **Efeito Dropdown (Menu Suspenso)**  
   - Estrutura de menu suspenso usando `:hover`:  
     ```html
     <div class="dropdown">
       <button class="dropbtn">Menu</button>
       <div class="dropdown-content">
         <a href="#">Opção 1</a>
         <a href="#">Opção 2</a>
         <a href="#">Opção 3</a>
       </div>
     </div>
     ```

     ```css
     .dropdown {
       position: relative;
       display: inline-block;
     }

     .dropbtn {
       background-color: #3498db;
       color: white;
       padding: 10px;
       border: none;
       cursor: pointer;
     }

     .dropdown-content {
       display: none;
       position: absolute;
       background-color: #f9f9f9;
       min-width: 160px;
       box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
       z-index: 1;
     }

     .dropdown-content a {
       color: black;
       padding: 10px;
       text-decoration: none;
       display: block;
     }

     .dropdown-content a:hover {
       background-color: #ddd;
     }

     .dropdown:hover .dropdown-content {
       display: block;   /* Mostra o menu ao passar o mouse */
     }
     ```

---

## 📅 Dia 8 - CSS

1. **Especificidades CSS**  
   - O CSS aplica estilos de acordo com uma hierarquia de prioridade:
     - **Inline** > **ID** > **Classe/Pseudo-classe/Atributo** > **Elemento**
     ```css
     p { color: blue; }           /* menor prioridade */
     .texto { color: green; }     /* classe */
     #paragrafo { color: red; }   /* id */
     <p id="paragrafo" class="texto" style="color: purple;"> <!-- cor final = purple -->
     ```

2. **Regra `!important`**  
   - Força a prioridade de uma propriedade, ignorando outras regras:
     ```css
     p {
       color: red !important;
     }
     ```

3. **Efeito Gradiente**  
   - Gradiente linear e radial:
     ```css
     div {
       background: linear-gradient(to right, red, yellow);
     }

     section {
       background: radial-gradient(circle, blue, lightblue);
     }
     ```

4. **Propriedades `text-shadow` e `box-shadow`**  
   - **Sombra em texto:**
     ```css
     h1 {
       text-shadow: 2px 2px 5px gray;  /* deslocamento-x | deslocamento-y | blur | cor */
     }
     ```
   - **Sombra em caixa:**
     ```css
     div {
       box-shadow: 4px 4px 10px rgba(0,0,0,0.3);
     }
     ```

5. **Efeitos de Texto**  
   - Personalização avançada:
     ```css
     h2 {
       text-transform: uppercase;   /* maiúsculas */
       text-decoration: underline;  /* sublinhado */
       letter-spacing: 3px;         /* espaçamento entre letras */
       word-spacing: 10px;          /* espaçamento entre palavras */
       background: linear-gradient(to right, #ff7e5f, #feb47b);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent; /* efeito gradiente no texto */
     }
     ```

---

---

## 📅 Dia 9 - CSS

1. **Media Queries**  
   - Permitem aplicar estilos diferentes dependendo do tamanho da tela ou dispositivo.  
   - Estrutura básica:
     ```css
     @media (condição) {
       /* estilos aplicados apenas quando a condição for verdadeira */
     }
     ```

   - **Exemplos práticos:**
     ```css
     /* Estilo para telas menores que 600px */
     @media (max-width: 600px) {
       body {
         background-color: lightblue;
       }

       h1 {
         font-size: 20px;
       }
     }

     /* Estilo para telas entre 601px e 1024px */
     @media (min-width: 601px) and (max-width: 1024px) {
       body {
         background-color: lightgreen;
       }
     }

     /* Estilo para telas maiores que 1024px */
     @media (min-width: 1025px) {
       body {
         background-color: lightgray;
       }
     }
     ```

   - **Media queries por orientação:**
     ```css
     /* Estilo aplicado apenas no modo retrato */
     @media (orientation: portrait) {
       body {
         font-size: 14px;
       }
     }

     /* Estilo aplicado apenas no modo paisagem */
     @media (orientation: landscape) {
       body {
         font-size: 18px;
       }
     }
     ```
---

## 📅 Dia 10 - CSS (Flexbox)

1. **O que é Flexbox?**  
   - Um modelo de layout unidimensional que organiza elementos em **linha (row)** ou **coluna (column)**.
   - Habilitado pela propriedade `display: flex;` no container.

---

### **Propriedades do Container (Pai)**

- **display**
  ```css
  .container {
    display: flex;   /* ativa o flexbox */
  }

* **flex-direction**

  ```css
  .container {
    flex-direction: row;        /* padrão: linha */
    flex-direction: column;     /* coluna */
    flex-direction: row-reverse; /* linha invertida */
  }
  ```

* **justify-content** (alinhamento no eixo principal)

  ```css
  .container {
    justify-content: flex-start; /* padrão */
    justify-content: center;
    justify-content: flex-end;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
  }
  ```

* **align-items** (alinhamento no eixo cruzado)

  ```css
  .container {
    align-items: stretch; /* padrão */
    align-items: center;
    align-items: flex-start;
    align-items: flex-end;
    align-items: baseline;
  }
  ```

* **flex-wrap** (quebra de linha)

  ```css
  .container {
    flex-wrap: nowrap; /* padrão */
    flex-wrap: wrap;   /* quebra em novas linhas */
  }
  ```

---

### **Propriedades dos Itens (Filhos)**

* **order** (ordem de exibição)

  ```css
  .item {
    order: 1; /* menor número = aparece primeiro */
  }
  ```

* **flex-grow** (quanto o item cresce)

  ```css
  .item {
    flex-grow: 1; /* cresce proporcionalmente */
  }
  ```

* **flex-shrink** (quanto o item encolhe)

  ```css
  .item {
    flex-shrink: 1; /* encolhe proporcionalmente */
  }
  ```

* **flex-basis** (tamanho inicial antes da distribuição)

  ```css
  .item {
    flex-basis: 200px;
  }
  ```

* **align-self** (alinhamento individual)

  ```css
  .item {
    align-self: center; /* sobrescreve align-items */
  }
  ```

---

### **Exemplo Prático:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #eee;
}

.item {
  background: #3498db;
  color: white;
  padding: 20px;
  font-size: 18px;
}
```

---

---

## 📅 Dia 11 - JavaScript

1. **Variáveis**  
   - Usadas para armazenar valores.  
   - Em JavaScript existem três formas de declarar:
     ```js
     var nome = "Ruan";    // forma mais antiga (evitar em projetos grandes)
     let idade = 23;       // escopo de bloco (recomendado)
     const PI = 3.1415;    // constante (não pode ser reatribuída)
     ```

---

2. **Tipos Primitivos**  
   - **String (texto):**
     ```js
     let nome = "Ruan";
     ```
   - **Number (números inteiros ou decimais):**
     ```js
     let idade = 23;
     let altura = 1.75;
     ```
   - **Boolean (verdadeiro ou falso):**
     ```js
     let ativo = true;
     ```
   - **Undefined (não definido):**
     ```js
     let valor;
     console.log(valor); // undefined
     ```
   - **Null (nulo propositalmente):**
     ```js
     let vazio = null;
     ```
   - **Symbol e BigInt (menos usados, mas importantes):**
     ```js
     let simbolo = Symbol("id");
     let numeroGrande = 123456789012345678901234567890n;
     ```

---

3. **Tratamento de Dados**  
   - **Conversão de String para Número:**
     ```js
     let numero = "42";
     console.log(Number(numero)); // 42
     console.log(parseInt(numero)); // 42 (inteiro)
     console.log(parseFloat("42.5")); // 42.5 (decimal)
     ```

   - **Conversão de Número para String:**
     ```js
     let idade = 23;
     console.log(String(idade)); // "23"
     console.log(idade.toString()); // "23"
     ```

   - **Verificando tipos de dados:**
     ```js
     let nome = "Ruan";
     console.log(typeof nome); // "string"

     let ativo = true;
     console.log(typeof ativo); // "boolean"
     ```

---

### **Exemplo Prático**
```js
let nome = "Ruan";
let idade = "23";

// Convertendo string para número
let idadeNumero = Number(idade);

console.log("Nome:", nome);              // Nome: Ruan
console.log("Idade + 2:", idadeNumero + 2); // 25
console.log("Tipo de idade:", typeof idadeNumero); // number
````

---

## 📅 Dia 12 - JavaScript (Operadores)

1. **Operadores Aritméticos**  
   - Usados em cálculos matemáticos:
     ```js
     let a = 10;
     let b = 3;

     console.log(a + b); // 13 (adição)
     console.log(a - b); // 7  (subtração)
     console.log(a * b); // 30 (multiplicação)
     console.log(a / b); // 3.333... (divisão)
     console.log(a % b); // 1  (módulo/resto)
     console.log(a ** b); // 1000 (exponenciação)
     ```

---

2. **Operadores de Atribuição**  
   - Usados para atribuir valores às variáveis:
     ```js
     let x = 5;

     x += 2; // x = x + 2 → 7
     x -= 1; // x = x - 1 → 6
     x *= 3; // x = x * 3 → 18
     x /= 2; // x = x / 2 → 9
     x %= 4; // x = x % 4 → 1
     x **= 3; // x = x ** 3 → 1
     ```

---

3. **Operadores Relacionais**  
   - Usados para comparar valores (retornam `true` ou `false`):
     ```js
     let a = 5;
     let b = "5";
     let c = 10;

     console.log(a == b);  // true  (igualdade de valor)
     console.log(a === b); // false (igualdade de valor e tipo)
     console.log(a != b);  // false (diferente de valor)
     console.log(a !== b); // true  (diferente de valor ou tipo)
     console.log(a > c);   // false
     console.log(a < c);   // true
     console.log(a >= 5);  // true
     console.log(c <= 10); // true
     ```

---

4. **Operadores Lógicos**  
   - Usados em expressões condicionais:
     ```js
     let idade = 20;

     console.log(idade > 18 && idade < 30); // true (E)
     console.log(idade < 18 || idade > 30); // false (OU)
     console.log(!(idade > 18)); // false (NÃO)
     ```

---

5. **Operador Ternário**  
   - Forma simplificada de escrever um `if/else`:
     ```js
     let idade = 18;

     let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
     console.log(resultado); // "Maior de idade"
     ```

---

### **Exemplo Prático**
```js
let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("Maior que?", a > b);
console.log("E lógico:", a > 5 && b < 10);

let mensagem = (a % 2 === 0) ? "Número par" : "Número ímpar";
console.log(mensagem); // "Número par"
````
---

## 📅 Dia 13 - JavaScript (DOM e Eventos)

1. **Introdução ao DOM (Document Object Model)**  
   - O **DOM** é a representação da página HTML como uma árvore de objetos que o JavaScript pode manipular.  
   - Permite **acessar e alterar** elementos, estilos, atributos e conteúdo de uma página.

   - **Selecionando elementos:**
     ```js
     document.getElementById("titulo");       // seleciona pelo id
     document.getElementsByClassName("item"); // seleciona pela classe
     document.getElementsByTagName("p");      // seleciona pela tag
     document.querySelector(".classe");       // retorna o primeiro que encontrar
     document.querySelectorAll("p");          // retorna todos
     ```

   - **Alterando conteúdo e estilo:**
     ```js
     let titulo = document.getElementById("titulo");
     titulo.innerText = "Novo título";   // altera o texto
     titulo.style.color = "blue";        // altera a cor
     ```

---

2. **Eventos DOM**  
   - Um evento é **algo que acontece na página**, como um clique, digitação ou movimento do mouse.  
   - Podemos "escutar" e reagir a esses eventos com JavaScript.

   - **Eventos comuns:**
     - `onclick` → quando o usuário clica  
     - `onmouseover` → quando o mouse passa por cima  
     - `onchange` → quando o valor de um input muda  
     - `onkeydown` → quando uma tecla é pressionada  

   - **Exemplo 1 – Usando atributo HTML:**
     ```html
     <button onclick="mensagem()">Clique aqui</button>

     <script>
       function mensagem() {
         alert("Você clicou no botão!");
       }
     </script>
     ```

   - **Exemplo 2 – Usando addEventListener:**
     ```html
     <button id="btn">Clique em mim</button>

     <script>
       let botao = document.getElementById("btn");
       botao.addEventListener("click", function() {
         alert("Botão clicado com addEventListener!");
       });
     </script>
     ```

   - **Exemplo 3 – Mudando estilo com evento:**
     ```html
     <p id="texto">Passe o mouse sobre este texto</p>

     <script>
       let texto = document.getElementById("texto");

       texto.addEventListener("mouseover", function() {
         texto.style.color = "red";
       });

       texto.addEventListener("mouseout", function() {
         texto.style.color = "black";
       });
     </script>
     ```

---

---

## 📅 Dia 14 - JavaScript (Condições)

1. **Condições Simples (`if`)**  
   - Usada quando queremos executar um bloco de código apenas se uma condição for verdadeira:
     ```js
     let idade = 18;

     if (idade >= 18) {
       console.log("Você é maior de idade");
     }
     ```

---

2. **Condições Compostas (`if/else`)**  
   - Usada quando precisamos de **duas possibilidades**:
     ```js
     let hora = 20;

     if (hora < 18) {
       console.log("Boa tarde!");
     } else {
       console.log("Boa noite!");
     }
     ```

---

3. **Condições Encadeadas (`if/else if/else`)**  
   - Usada quando temos **mais de duas condições**:
     ```js
     let nota = 7;

     if (nota >= 9) {
       console.log("Aprovado com excelência!");
     } else if (nota >= 6) {
       console.log("Aprovado");
     } else {
       console.log("Reprovado");
     }
     ```

---

4. **Condição Aninhada (if dentro de if)**  
   - Um `if` dentro de outro `if`:
     ```js
     let idade = 20;
     let temCarteira = true;

     if (idade >= 18) {
       if (temCarteira) {
         console.log("Pode dirigir");
       } else {
         console.log("Precisa tirar a carteira");
       }
     } else {
       console.log("Ainda não pode dirigir");
     }
     ```

---

5. **Switch Case**  
   - Uma alternativa ao `if/else if`, muito usado quando temos várias opções:
     ```js
     let cor = "azul";

     switch (cor) {
       case "vermelho":
         console.log("A cor é vermelho");
         break;
       case "azul":
         console.log("A cor é azul");
         break;
       case "verde":
         console.log("A cor é verde");
         break;
       default:
         console.log("Cor não encontrada");
     }
     ```

---

### **Exemplo Prático**
```js
let diaSemana = 3;

if (diaSemana === 1) {
  console.log("Segunda-feira");
} else if (diaSemana === 2) {
  console.log("Terça-feira");
} else if (diaSemana === 3) {
  console.log("Quarta-feira");
} else {
  console.log("Outro dia");
}

````

## 📅 Dia 15 - JavaScript (Estruturas de Repetição)

1. **Laço While**  
   - Executa o bloco de código **enquanto** a condição for verdadeira.
   ```js
   let contador = 0;

   while (contador < 5) {
     console.log("Contagem:", contador);
     contador++; // incrementa
   }
   // Saída: 0, 1, 2, 3, 4

---

2. **Laço Do...While**

   * Executa o bloco **pelo menos uma vez**, e depois continua **enquanto** a condição for verdadeira.

   ```js
   let numero = 0;

   do {
     console.log("Número:", numero);
     numero++;
   } while (numero < 3);

   // Saída: 0, 1, 2
   ```

---

3. **Laço For**

   * Mais usado quando sabemos exatamente o número de repetições.

   ```js
   for (let i = 0; i < 5; i++) {
     console.log("Valor de i:", i);
   }
   // Saída: 0, 1, 2, 3, 4
   ```

---

4. **For...of**

   * Usado para percorrer arrays, strings e coleções iteráveis.

   ```js
   let frutas = ["maçã", "banana", "uva"];

   for (let fruta of frutas) {
     console.log(fruta);
   }
   // Saída: maçã, banana, uva
   ```

---

5. **For...in**

   * Usado para percorrer as **propriedades de um objeto**.

   ```js
   let pessoa = { nome: "Ruan", idade: 23 };

   for (let chave in pessoa) {
     console.log(chave, ":", pessoa[chave]);
   }
   // Saída: nome : Ruan
   //        idade : 23
   ```

---

### **Exemplo Prático**

```js
// Tabuada do 5 com FOR
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
```

## 📅 Dia 16 - JavaScript (Variáveis Compostas / Arrays)

1. **O que são Variáveis Compostas (Arrays)?**  
   - Diferente de variáveis simples (que armazenam apenas 1 valor), as variáveis compostas armazenam **vários valores em uma única estrutura**.  
   - Em JavaScript, usamos **arrays**.

   ```js
   let numeros = [10, 20, 30, 40, 50];
   console.log(numeros); // [10, 20, 30, 40, 50]
---

2. **Acessando valores do Array**

   * Cada item do array tem um **índice** (posição), começando do **0**.

   ```js
   let frutas = ["maçã", "banana", "uva"];

   console.log(frutas[0]); // maçã
   console.log(frutas[2]); // uva
   ```

---

3. **Alterando valores**

   ```js
   frutas[1] = "laranja";
   console.log(frutas); // ["maçã", "laranja", "uva"]
   ```

---

4. **Propriedade Length**

   * Mostra quantos elementos existem no array.

   ```js
   console.log(frutas.length); // 3
   ```

---

5. **Percorrendo Arrays com For**

   ```js
   let cores = ["azul", "verde", "vermelho"];

   for (let i = 0; i < cores.length; i++) {
     console.log(cores[i]);
   }
   ```

---

6. **Percorrendo Arrays com For...of**

   ```js
   for (let cor of cores) {
     console.log(cor);
   }
   ```

---

7. **Métodos mais usados em Arrays**

   ```js
   let numeros = [1, 2, 3];

   numeros.push(4);     // adiciona no final → [1,2,3,4]
   numeros.pop();       // remove do final → [1,2,3]
   numeros.unshift(0);  // adiciona no início → [0,1,2,3]
   numeros.shift();     // remove do início → [1,2,3]
   console.log(numeros.length); // 3
   ```

---

### **Exemplo Prático**

```js
let notas = [8, 6, 9, 7];
let soma = 0;

for (let nota of notas) {
  soma += nota;
}

let media = soma / notas.length;
console.log("Média:", media); // Média: 7.5
```

## 📅 Dia 17 - JavaScript (Funções)

1. **O que são Funções?**  
   - Funções são **blocos de código reutilizáveis** que podem ser chamados quando necessário.  
   - Elas podem receber **parâmetros** e retornar valores.

---

2. **Função Simples**
```js
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // Chamada da função
````

---

3. **Função com Parâmetros**

```js
function soma(a, b) {
  console.log("Resultado:", a + b);
}

soma(5, 3); // Resultado: 8
```

---

4. **Função com Retorno**

```js
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 6);
console.log(resultado); // 24
```

---

5. **Função Anônima (atribuída a variável)**

```js
let dobro = function(n) {
  return n * 2;
};

console.log(dobro(7)); // 14
```

---

6. **Arrow Function (Função de Flecha)**

```js
let quadrado = (n) => n * n;

console.log(quadrado(5)); // 25
```

---

7. **Parâmetro Padrão**

```js
function apresentar(nome = "Visitante") {
  console.log("Bem-vindo, " + nome);
}

apresentar();           // Bem-vindo, Visitante
apresentar("Ruan");     // Bem-vindo, Ruan
```

---

8. **Função dentro de outra (aninhada)**

```js
function externa() {
  function interna() {
    console.log("Função interna chamada!");
  }
  interna();
}

externa();
```

---

### **Exemplo Prático**

```js
function calcularMedia(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

let resultado = calcularMedia([8, 7, 9, 10]);
console.log("Média:", resultado); // Média: 8.5
```

---
---

## 📅 Dia 18 - React (Comandos Básicos)

1. **O que é React?**  
   - Biblioteca JavaScript para construção de interfaces de usuário.  
   - Baseado em **componentes** reutilizáveis.  
   - Usa **JSX**, que mistura HTML com JavaScript.

---

2. **Criando um Projeto React**  
   - Com Vite (mais moderno e rápido):
     ```bash
     npm create vite@latest meu-projeto
     cd meu-projeto
     npm install
     npm run dev
     ```

   - Com Create React App:
     ```bash
     npx create-react-app meu-projeto
     cd meu-projeto
     npm start
     ```

---

3. **Estrutura de um Componente Básico**
```jsx
function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Meu primeiro componente</p>
    </div>
  );
}

export default App;
````

---

4. **Usando JSX**

* JSX permite escrever **HTML dentro do JavaScript**.

```jsx
const nome = "Ruan";
const elemento = <h2>Bem-vindo, {nome}!</h2>;

function App() {
  return elemento;
}
```

---

5. **Componentes**

* Podem ser funções que retornam JSX.
* Devem começar com letra maiúscula.

```jsx
function Saudacao() {
  return <h2>Olá, mundo!</h2>;
}

function App() {
  return (
    <div>
      <Saudacao />
    </div>
  );
}

export default App;
```

---

6. **Props (Propriedades)**

* Permitem passar dados para componentes.

```jsx
function Saudacao(props) {
  return <h2>Olá, {props.nome}!</h2>;
}

function App() {
  return (
    <div>
      <Saudacao nome="Ruan" />
      <Saudacao nome="Maria" />
    </div>
  );
}

export default App;
```

---

7. **Fragmentos**

* Evitam adicionar `div` desnecessárias.

```jsx
function App() {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </>
  );
}

export default App;
```

---

### **Exemplo Prático**

```jsx
function Botao() {
  return <button>Clique aqui</button>;
}

function App() {
  return (
    <div>
      <h1>Meu App React</h1>
      <Botao />
    </div>
  );
}

export default App;
```

---

✍️ *Atualizado em: 27/09/2025*
