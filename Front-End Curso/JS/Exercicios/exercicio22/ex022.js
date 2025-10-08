const pessoa = {

    nome: "Ruan",

    // Adiciona a função dentro do objeto
    Apresentar: function(){

        // Agora 'this' se refere a 'pessoa'
        return `Olá, meu nome é ${this.nome}`;

    }

};

console.log(pessoa.Apresentar());