    function montaTabela(paciente){
    
    let tabela = document.querySelector("#tabela-pacientes");
    let pacienteTr = document.createElement("tr"); 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    tabela.appendChild(pacienteTr);
    pacienteTr.classList.add("paciente");

    return tabela;
 
}

function montaTd(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado; 
    td.classList.add(classe); 

    return td;
}
