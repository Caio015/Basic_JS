function validaPaciente(paciente){

    var erros = [];
    
    if (!paciente.nome.length > 0) erros.push("Digite o nome do paciente");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (paciente.peso.length == 0) erros.push("Digite o peso");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    if (paciente.altura.length == 0) erros.push("Digite a altura");

    return erros;
}