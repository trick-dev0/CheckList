let envio = () => {
     // SELECIONEI A TAG "OL"
    const lista = document.querySelector(".listaOrdenada");
    // CRIEI A TAG "LI" QUE ORÁ ARMAZENAR O CONTEÚDO DIGITADO NA CAIXA DE TEXTO
    let li = document.createElement("li");
    // SELECIONEI A CAIXA DE TEXTO
    let conteudoTexto = document.querySelector(".texto");
    // Adicionei o texto que estava armazenado na tag dentro do "li" criado
    li.innerText = conteudoTexto.value; 
    li.classList.add("item")
    lista.appendChild(li)

    // Limpa a caixa de text
    if (conteudoTexto.value != "") {
        conteudoTexto.value = ""
    }

    //Botão de deletar


    //criei um botão
    let del = document.createElement("button"); 
     // adicionei o texto ao botão
    del.innerText = "Remover";
     // adicionei uma classe ao botão
    del.classList.add("botaoDeletar");
     // Adiccionei o botão a tag "li"
    li.appendChild(del);
    
    del.addEventListener("click", function(){
        li.remove()
    })
}

let botao = document.querySelector(".botao"); // selecionei o botão

botao.addEventListener("click", envio);

