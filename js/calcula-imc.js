
        // Selecionando todos os pacientes:

        let pacientes = document.querySelectorAll(".paciente");
       
        // Iterando "pacientes":

        for(i = 0; i < pacientes.length; i++) {

        let paciente = pacientes[i]; 

        let tdPeso = paciente.querySelector(".info-peso");
        let peso = tdPeso.textContent;
        let tdAltura = paciente.querySelector(".info-altura"); 
        let altura = tdAltura.textContent;

        //Verificador peso
        let pesoEhValido = validaPeso(peso);
        
        if (!pesoEhValido) {
            tdPeso.textContent = "Peso Inválido";
            paciente.classList.add("mensagem-erro")
        }

        //Verificador Altura
        let alturaEhValida = validaAltura(altura);

        if (!alturaEhValida) {
            tdAltura.textContent = "Altura Inválida";
            paciente.classList.add("mensagem-erro")
        }

        // Verificador imc
        let tdImc = paciente.querySelector(".info-imc");

        if(pesoEhValido && alturaEhValida){
            tdImc.textContent = calculaImc(peso, altura); 
        } else {
            tdImc.textContent = "Erro ao Calcular";
        }

        }

        function calculaImc(peso, altura) {
            
            let imc = peso / (altura * altura);
            
            return imc.toFixed(2);


        }

        function validaPeso(peso){

            if (peso >= 0 && peso <= 500) {
                return true;
            } else {
                return false;
            }
        }

        function validaAltura(altura){

            if (altura >= 0 && altura <= 3.0) {
                return true;
            } else {
                return false;
            }
        }
