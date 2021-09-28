function obtemPacienteDoFormulario(form){
        
    let paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}