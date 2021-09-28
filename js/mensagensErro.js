function exibirMensagensDeErro(erros){

    //Selecionando UL:
    let ul = document.querySelector("#mensagens-erro"); 
    ul.innerHTML = ""; 

    // Criando li para erros (testando forEach):

    erros.forEach(function(erro) {

        let li = document.createElement("li"); 
        li.textContent = erro; 
        ul.appendChild(li)
    }); 
    }


