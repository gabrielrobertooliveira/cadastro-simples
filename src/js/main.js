tabela = document.getElementById("listaItem");

let item = document.getElementById("cadastroItem").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.getElementById("nomeItem").value;
    let tipo = document.getElementById("tipoItem").value;
    let qtn = document.getElementById("qtnItem").value;
    let obs = document.getElementById("obsItem").value;

    let itens = {
        nome: nome,
        tipo: tipo,
        qtn: qtn,
        obs: obs
    }

    this.reset();

    let linha = document.createElement("tr");

    let colunaNome = document.createElement("td");
    colunaNome.textContent = itens.nome;
    
    let colunaTipo = document.createElement("td");
    colunaTipo.textContent = itens.tipo;
    
    let colunaQtn = document.createElement("td");
    colunaQtn.textContent = itens.qtn;
    
    let colunaObs = document.createElement("td");
    colunaObs.textContent = itens.obs;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaTipo);
    linha.appendChild(colunaQtn);
    linha.appendChild(colunaObs);

    tabela.appendChild(linha);
});

function limparTabela() {
    document.getElementById("listaItem").innerHTML = "";
}