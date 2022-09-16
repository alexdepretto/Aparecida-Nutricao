// BUSCADOR DE PACIENTES EM OUTRO SERVIDOR

var botao=document.querySelector('#buscar');

botao.addEventListener('click', function() {
    var site=new XMLHttpRequest(); 
    site.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    site.addEventListener('load', function() {
        if(site.status==200) {
            var resposta=site.responseText;
            var pacientes=JSON.parse(resposta);
            
            pacientes.forEach(function(paciente)
                { adicionarPaciente(paciente) });
        }
        else {
            exibir(site.status);
            exibir(site.responseText);
            var erroAJAX=document.querySelector('#erro-ajax');
            erroAJAX.classList.remove('invisivel');
            erroAJAX.style.color='red';
        }    
    });
    site.send();
});