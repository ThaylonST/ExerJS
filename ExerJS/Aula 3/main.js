document.addEventListener("DOMContentLoaded", carregarContatos);
const formulario = document.getElementById("form-group");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    adicionarContato();
});

function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    if (nome === "" || telefone === "" || email === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const contato = { nome, telefone, email };
    salvarContato(contato);
    limparCampos();
    carregarContatos();
}

function salvarContato(contato) {
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.push(contato);
    localStorage.setItem("contatos", JSON.stringify(contatos));
}

function carregarContatos() {
    const lista = document.getElementById("listaContatos");
    lista.innerHTML = "";
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

    contatos.forEach((contato, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p><strong>Nome:</strong> <span contenteditable="false" id="nome-${index}">${contato.nome}</span></p>
            <p><strong>Telefone:</strong> <span contenteditable="false" id="telefone-${index}">${contato.telefone}</span></p>
            <p><strong>E-mail:</strong> <span contenteditable="false" id="email-${index}">${contato.email}</span></p>
            <button type="button" class="edit" onclick="editarContato(${index})">Editar</button>
            <button type="button" class="save" onclick="salvarEdicao(${index})" style="display:none;">Salvar</button>
            <button type="button" class="delete" onclick="removerContato(${index})">X</button>
        `;
        lista.appendChild(li);
    });
}

function removerContato(index) {
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.splice(index, 1);
    localStorage.setItem("contatos", JSON.stringify(contatos));
    carregarContatos();
}

function editarContato(index) {
    document.getElementById(`nome-${index}`).contentEditable = "true";
    document.getElementById(`telefone-${index}`).contentEditable = "true";
    document.getElementById(`email-${index}`).contentEditable = "true";
    document.querySelectorAll(".edit")[index].style.display = "none";
    document.querySelectorAll(".save")[index].style.display = "inline-block";
}

function salvarEdicao(index) {
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos[index] = {
        nome: document.getElementById(`nome-${index}`).innerText,
        telefone: document.getElementById(`telefone-${index}`).innerText,
        email: document.getElementById(`email-${index}`).innerText
    };
    localStorage.setItem("contatos", JSON.stringify(contatos));
    carregarContatos();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
}