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
✍️ *Atualizado em: 10/08/2025*

