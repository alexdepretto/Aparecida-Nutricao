
// REMOVER LINHA PELO PARENTESCO (parentNode)
var tabela=document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {
    var filho=event.target; // alvo no filho (td)
    var pai=filho.parentNode; // vínculo ao pai (tr)
    pai.classList.add('fadado');
    
    setTimeout(function() // remover o pai
    { pai.remove() }, 500);
});






