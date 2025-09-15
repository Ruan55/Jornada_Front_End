function Verificar(){

    let data = new Date();

    let ano = data.getFullYear();

    let formularioAno = document.getElementById('txtano');

    let resultado = document.querySelector('div#resultado');

    if(formularioAno.value.length == 0 || formularioAno.value > ano){

        window.alert('[ERRO] Verifique os dados e tente novamente');

    }

    else{

        let sexFormulario = document.getElementsByName('radsex');

        let idade = ano - Number(formularioAno.value);

        let genero = '';

        // Criando um elemento HTML pelo JavaScript
        let imagem = document.createElement('img');

        // Atribuindo a ID pelo JavaScript
        imagem.setAttribute('id', 'foto');

        if(sexFormulario[0].checked){

            genero = 'Homem';

            if(idade >= 0 && idade < 10){

                // Criança
                imagem.setAttribute('src', 'imagens/bebe-menino.jpg');

            }

            else if(idade >= 11 && idade <= 25){

                // Jovem
                imagem.setAttribute('src', 'imagens/homem-jovem.jpg');

            }

            else if(idade >= 26 && idade <= 59){

                // Adulto
                imagem.setAttribute('src', 'imagens/homem-adulto.jpg');

            }

            else{

                // Idoso
                imagem.setAttribute('src', 'imagens/homem-idoso.jpg');

            }

        }

        else if(sexFormulario[1].checked){

            genero = 'Mulher';

            if(idade >= 0 && idade < 10){

                // Criança
                imagem.setAttribute('src', 'imagens/bebe-menina.jpg');

            }

            else if(idade >= 11 && idade <= 25){

                // Jovem
                imagem.setAttribute('src', 'imagens/mulher-jovem.jpg');

            }

            else if(idade >= 26 && idade <= 59){

                // Adulto
                imagem.setAttribute('src', 'imagens/mulher-adulta.jpg');

            }

            else{

                // Idoso
                imagem.setAttribute('src', 'imagens/mulher-idosa.jpg');

            }

        }

        resultado.style.textAlign = 'Center';

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.` ;

        resultado.appendChild(imagem);

        imagem.style.width = '350px';

    }

}