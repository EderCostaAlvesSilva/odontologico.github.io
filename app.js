const nomePaciente = document.getElementById('Paciente');
const btnCon = document.getElementById('btnCon');
const btnPrio = document.getElementById('btnPrio');
const btnAte = document.getElementById('btnAte');
const lista = document.getElementById('lista');
const atendendo = document.getElementById('atendendo');

let pacientes = Array()
let add = 0;

function consulta(){
  
    let nome = nomePaciente.value;

    if(nome == ''){
        alert('informe o nome do Paciente')
        nomePaciente.focus();
        return;
    }


    pacientes.push(nome);

    let criarLista = document.createElement('li');
    criarLista.innerHTML = pacientes[add];
    add++;
    lista.appendChild(criarLista);

    nomePaciente.value = '';
    console.log(pacientes, add)
    nomePaciente.focus();
}

function prioridade(){
    let nome = nomePaciente.value;

    if(nome == ''){
        alert('informe o nome do Paciente')
        nomePaciente.focus();
        return;
    }

    lista.textContent = '';  
    add++;
    
    pacientes.unshift(nome);

    for(index = 0; index < add; index++){
    let criarLista = document.createElement('li');
    criarLista.innerHTML = pacientes[index];
    lista.appendChild(criarLista);
}
    nomePaciente.value = '';
   
    console.log(pacientes, add)
    nomePaciente.focus();
}

function atender(){
    lista.textContent = ''; 
    
    let novo =  pacientes[0];
    add--;

    if(add < 0){
        alert('Não há pacientes para atender !')
        add = 0;
    }
    
    atendendo.textContent = '';
    atendendo.textContent = novo;
    pacientes.shift();

    for(index = 0; index < add; index++){
        let criarLista = document.createElement('li');
        criarLista.innerHTML = pacientes[index];
        lista.appendChild(criarLista);
    }
    
    console.log(pacientes, add)
}

btnAte.addEventListener('click', atender)

btnPrio.addEventListener('click', prioridade)

btnCon.addEventListener('click', consulta)