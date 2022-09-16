
//LISTA DE FUNÇÕES

function exibir(x) { console.log(x) }

function valorIMC(p, h) { imc=p/(h*h); return imc.toFixed(2) }

function validarPeso(peso) {
    if (peso>=0 && peso<=800) { return true; }
    else { return false; }
}

function validarAltura(altura) {
    if (altura>=0 && altura<=3.0) { return true; }
    else { return false; }
}


// CÁLCULO DO IMC

var pacientes=document.querySelectorAll('.paciente');

var peso, altura, tdIMC, IMC, i;

for(i=0; i<pacientes.length; i++) {
    var pac_i=pacientes[i];

    peso=pac_i.querySelector(".info-peso").textContent;
    altura=pac_i.querySelector(".info-altura").textContent;
    tdIMC=pac_i.querySelector(".info-imc");

    var valPeso=validarPeso(peso); // validação do peso
    var valAltura=validarAltura(altura); // validação da altura

    if(valPeso==false) {
        tdIMC.textContent = "Peso inválido!";
        pac_i.classList.add('paciente-invalido');
        valPeso=false;
    }

    if(valAltura==false) {
        tdIMC.textContent = "Altura inválida!";
        pac_i.classList.add('paciente-invalido');
        valAltura=false;
    }

    if(valPeso==true && valAltura==true) {
        IMC=valorIMC(peso,altura);    
        tdIMC.textContent=IMC;
    }    
}
