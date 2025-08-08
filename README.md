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
✍️ *Atualizado em: 08/08/2025*
