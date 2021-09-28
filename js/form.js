        let botaoAdicionar = document.querySelector("#adicionar-paciente"); 

        botaoAdicionar.addEventListener("click" , function(event){
            event.preventDefault();
            
            //Selecionando o formulario:

            let formAdiciona = document.querySelector("#form-adiciona"); 

            //Pegando os valores dos campos:

            let paciente = obtemPacienteDoFormulario(formAdiciona); 
            console.log(paciente);
            let erros = validaPaciente(paciente);

            //Validando peso e altura (JS puro):

            if(erros.length > 0){
                exibirMensagensDeErro(erros); 
                return; 
            }   
              
            // Criando tabela:

            montaTabela(paciente);

            // Reset da pagina; 
            

            formAdiciona.reset();
            let mensagensErro = document.querySelector("#mensagens-erro");
            mensagensErro.innerHTML = "";       

           
        })

 
        
        
       