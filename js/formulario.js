
//LISTA DE FUNÇÕES

function formulario(form) {
    var paciente= {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: valorIMC(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montarTd(dado, classe) {
    var Td=document.createElement('td');
    Td.textContent=dado;
    Td.classList.add(classe);

    return Td;
}

function montarTabela(paciente) {
    var pacienteTr=document.createElement('tr');
    pacienteTr.classList.add('paciente');
    
    // Criação da tabela no HTML
    // Colocar filhos (td) dentro do pai (tr)
    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function adicionarPaciente(paciente) {
    var pacienteTr=montarTabela(paciente);
    var tabela=document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function validarPaciente(paciente) {
    var erros=[];
    
    if(paciente.nome.length==0) { erros.push('Nome vazio!') }
    if(paciente.peso.length==0) { erros.push('Peso vazio!') }
    if(paciente.altura.length==0) { erros.push('Altura vazia!') }
    if(paciente.gordura.length==0) { erros.push('Gordura vazia!') }

    if(validarPeso(paciente.peso)==false) { erros.push(' Peso inválido!') }
    if(validarAltura(paciente.altura)==false) { erros.push(' Altura inválida!'); }

    return erros;
}

function exibirErro(erros) {
    var ul=document.querySelector('#mensagem-erro');
    ul.innerHTML='';

    erros.forEach(function(erro)
        {
            var li=document.createElement('li');
            li.textContent=erro;
            ul.appendChild(li);
        })
}


// FORMULÁRIO DE ADIÇÃO DE PACIENTES

var botao=document.querySelector('#adicionar');

botao.addEventListener('click', function(event) {
        // Seletor do formulário e da tabela
        event.preventDefault();
        var form=document.querySelector('#form');

        // Declaração das variáveis
        var paciente=formulario(form);       

        // Validação dos dados
        var erros=validarPaciente(paciente);

        if (erros.length>0) {
            exibirErro(erros);
            return;
        }
        
        adicionarPaciente(paciente);
        
        form.reset();
        var mensagemErro=document.querySelector('#mensagem-erro');
        mensagemErro.innerHTML='';
    })