var bancodedados=[]
var controle = 0;
function limparinputs(){
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let endereco = document.getElementById("endereco")
    let telefone = document.getElementById("telefone");
    nome.value="";
    sobrenome.value="";
    endereco.value="";
    telefone.value="";
}

function salvaredit(){
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let endereco = document.getElementById("endereco")
    let telefone = document.getElementById("telefone");
    if(nome.value !="" && sobrenome.value !="" && endereco.value !="" && telefone.value !="") {    
        const itens = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            endereco: endereco.value,
            telefone: telefone.value
        }
        bancodedados[controle]=itens;
        document.getElementById("nome").readOnly = true;
        document.getElementById("sobrenome").readOnly = true;
        document.getElementById("endereco").readOnly = true;
        document.getElementById("telefone").readOnly = true;
        document.getElementById("incluir").disabled = false;
        document.getElementById("incluir").classList.remove("desativar");
        document.getElementById("salvar").disabled = true;
        document.getElementById("salvar").classList.add("desativar");
        document.getElementById("cancelar").disabled = true;
        document.getElementById("cancelar").classList.add("desativar");
        document.getElementById("editar").disabled = false;
        document.getElementById("editar").classList.remove("desativar");
        document.getElementById("excluir").disabled = false;
        document.getElementById("excluir").classList.remove("desativar");
    }else {
        alert("Não foi possível salvar a sua edição. Por favor, preencha todos os campos.");
    }
    document.getElementById("salvar").onclick = salvar;
}

function incluir() {
    document.getElementById("excluir").classList.add("desativar");
    document.getElementById("editar").classList.add("desativar");
    document.getElementById("nome").readOnly = false;
    document.getElementById("sobrenome").readOnly = false;
    document.getElementById("endereco").readOnly = false;
    document.getElementById("telefone").readOnly = false;
    document.getElementById("salvar").disabled = false;
    document.getElementById("cancelar").disabled = false;
    document.getElementById("salvar").classList.remove("desativar");
    document.getElementById("cancelar").classList.remove("desativar");
    document.getElementById("incluir").classList.remove("desativar");
    document.getElementById("incluir").disabled =true;
    document.getElementById("incluir").classList.add("desativar");
    limparinputs();
}
function editar(){
    document.getElementById("nome").readOnly = false;
    document.getElementById("sobrenome").readOnly = false;
    document.getElementById("endereco").readOnly = false;
    document.getElementById("telefone").readOnly = false;
    document.getElementById("salvar").disabled = false;
    document.getElementById("salvar").classList.remove("desativar");
    document.getElementById("cancelar").disabled = false;
    document.getElementById("cancelar").classList.remove("desativar");
    document.getElementById("incluir").disabled = true;
    document.getElementById("incluir").classList.add("desativar");
    document.getElementById("excluir").disabled = true;
    document.getElementById("excluir").classList.add("desativar");
    document.getElementById("editar").disabled = true;
    document.getElementById("editar").classList.add("desativar");
    document.getElementById("salvar").onclick = salvaredit;
}

function salvar() {
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let endereco = document.getElementById("endereco")
    let telefone = document.getElementById("telefone");
    if(nome.value !="" && sobrenome.value !="" && endereco.value !="" && telefone.value !="") {    
        const itens = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            endereco: endereco.value,
            telefone: telefone.value
        }
        let salv = bancodedados.length
        bancodedados[salv]=itens;
        controle = salv;
        document.getElementById("nome").readOnly = true;
        document.getElementById("sobrenome").readOnly = true;
        document.getElementById("endereco").readOnly = true;
        document.getElementById("telefone").readOnly = true;
        document.getElementById("incluir").disabled = false;
        document.getElementById("incluir").classList.remove("desativar");
        document.getElementById("salvar").disabled = true;
        document.getElementById("salvar").classList.add("desativar");
        document.getElementById("cancelar").disabled = true;
        document.getElementById("cancelar").classList.add("desativar");
        document.getElementById("editar").disabled = false;
        document.getElementById("editar").classList.remove("desativar");
        document.getElementById("excluir").disabled = false;
        document.getElementById("excluir").classList.remove("desativar");
    }else {
        alert("Não foi possível salvar. Por favor, preencha todos os campos.");
    }
}

function cancelar(){
    document.getElementById("salvar").onclick = salvar;
    if(bancodedados.length>0){
        let canc = bancodedados[controle];
        document.getElementById("nome").value = canc.nome;
        document.getElementById("sobrenome").value = canc.sobrenome;
        document.getElementById("endereco").value = canc.endereco;
        document.getElementById("telefone").value = canc.telefone;
        document.getElementById("editar").disabled = false;
        document.getElementById("editar").classList.remove("desativar");
        document.getElementById("excluir").disabled = false;
        document.getElementById("excluir").classList.remove("desativar");
    }else{
        limparinputs();
    }
    document.getElementById("nome").readOnly = true;
    document.getElementById("sobrenome").readOnly = true;
    document.getElementById("endereco").readOnly = true;
    document.getElementById("telefone").readOnly = true;
    document.getElementById("salvar").disabled = true;
    document.getElementById("salvar").classList.add("desativar");
    document.getElementById("cancelar").disabled = true;
    document.getElementById("cancelar").classList.add("desativar");
    document.getElementById("incluir").disabled = false;
    document.getElementById("incluir").classList.remove("desativar");
}


function excluir() {
    if (controle >= 0 && controle < bancodedados.length) {
        bancodedados.splice(controle, 1);
        if (bancodedados.length === 0) {
            controle = 0;
            limparinputs();
            alert("Todos os dados foram excluídos.");
        } else {
            if (controle >= bancodedados.length) {
                controle = bancodedados.length - 1;
            }
            let item = bancodedados[controle];
            document.getElementById("nome").value = item.nome;
            document.getElementById("sobrenome").value = item.sobrenome;
            document.getElementById("endereco").value = item.endereco;
            document.getElementById("telefone").value = item.telefone;
        }
        alert(`Item excluído com Sucesso`);
    } else {
        alert("Não há item para excluir.");
    }
}

function primeiroitem() {
    if (bancodedados.length > 0) {
        let prim = bancodedados[0];
        document.getElementById("nome").value = prim.nome;
        document.getElementById("sobrenome").value = prim.sobrenome;
        document.getElementById("endereco").value = prim.endereco;
        document.getElementById("telefone").value = prim.telefone;
        controle = 0;
    } else {
        alert("Não há dados armazenados no momento.");
    }
}

function proximo() {
    if (bancodedados.length > 0) {
        if (controle < bancodedados.length - 1) {
            controle++;
            let prox = bancodedados[controle];
            document.getElementById("nome").value = prox.nome;
            document.getElementById("sobrenome").value = prox.sobrenome;
            document.getElementById("endereco").value = prox.endereco;
            document.getElementById("telefone").value = prox.telefone;
        } else {
            alert("Você já está no último item.");
        }
    } else {
        alert("Não há dados armazenados no momento.");
    }
}

function anterior() {
    if (bancodedados.length > 0) {
        if (controle > 0) {
            controle--;
            let ant = bancodedados[controle];
            document.getElementById("nome").value = ant.nome;
            document.getElementById("sobrenome").value = ant.sobrenome;
            document.getElementById("endereco").value = ant.endereco;
            document.getElementById("telefone").value = ant.telefone;
        } else {
            alert("Você já está no primeiro item.");
        }
    } else {
        alert("Não há dados armazenados no momento.");
    }
}

function ultimoitem() {
    if (bancodedados.length > 0) {
        let ult = bancodedados[bancodedados.length - 1];
        document.getElementById("nome").value = ult.nome;
        document.getElementById("sobrenome").value = ult.sobrenome;
        document.getElementById("endereco").value = ult.endereco;
        document.getElementById("telefone").value = ult.telefone;
        controle = bancodedados.length - 1;
    } else {
        alert("Não há dados armazenados no momento.");
    }
}