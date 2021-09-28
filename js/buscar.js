// Simulando um campo de busca (Teste Expressões Regulares):

let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

    console.log(this.value);
    let pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        pacientes.forEach(function (paciente) {

            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;

            let regularExpression = new RegExp(campoFiltro.value, "i"); 

            if (!regularExpression.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});
