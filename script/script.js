let painelLista = jQuery(".painel-lista");
let novaTarefa = jQuery(".addTarefa");
let btnNovaTarefa = jQuery(".btnAdd");

// let tarefaLista = jQuery(".tarefa-da-lista");
/* let btnChecked = jQuery("#checked").hide()
let btnUnChecked = jQuery("#unchecked") */


novaTarefa.keypress((e) => {
    if (novaTarefa.val() != '') {
        if (e.keyCode == 13) {
            criarDivTarefa();
        }
    }
})

btnNovaTarefa.click(function addTarefa() {
    if (novaTarefa.val() != '') {
        criarDivTarefa();
    }
})

function criarDivTarefa() {
   
    let painelListaTarefa = jQuery('<div></div>').addClass('painel-lista-tarefa')

    let btnCheck = jQuery('<button></button>').addClass("btnCheck btn").attr({id:'checked'}).append('<img src="assets/icon/checkbox-checked.svg" alt="Ícone sinal de mais">')
    

    let btnUnCheck = jQuery('<button></button>').addClass("btnCheck btn").attr({id:'unchecked'}).append('<img src="assets/icon/checkbox-unchecked.svg" alt="Ícone sinal de mais">')
    
    let inputTarefa = jQuery('<input></input>').addClass("tarefa-da-lista").attr("readonly","readonly")
    
    let btnEdit = jQuery('<button></button>').addClass("btnEdit btn").append(' <img src="assets/icon/pencil.svg" alt="Ícone sinal de mais">')

    let btnExclui = jQuery('<button></button>').addClass("btnExclui btn").append('<img src="assets/icon/bin.svg" alt="Ícone sinal de mais">')

    painelListaTarefa.append(btnCheck).append(btnUnCheck).append(inputTarefa).append(btnEdit).append(btnExclui);

    
    painelLista.append(painelListaTarefa)

    addTarefaInput(inputTarefa)
    editaTarefa(btnEdit,inputTarefa)
    MarcaTarefaFeita(btnCheck,btnUnCheck,btnEdit,btnExclui,inputTarefa)

    return painelLista

}

function editaTarefa(btnEdit, inputTarefa) {
    btnEdit.click(() => {
        inputTarefa.removeAttr("readonly","readonly").focus()
        inputTarefa.keypress((e) => {

            if (inputTarefa.focus()) {
                if (e.keyCode == 13) {
                    inputTarefa.attr("readonly","readonly");
                }
            }
        })
    })
}

function addTarefaInput(tarefaLista) {
    let tarefa = novaTarefa.val();
    tarefaLista.val(tarefa);
    novaTarefa.val('')
}

function MarcaTarefaFeita(btnChecked, btnUnChecked,x,y, tarefaLista) {
    btnChecked.hide();

    btnUnChecked.click((e) => {
        btnChecked.fadeToggle();
        btnUnChecked.fadeToggle(.5);
        tarefaLista.css({
            "font-style": "italic",
            "text-decoration": "line-through",
        })
    })
    btnChecked.click((e) => {
        btnChecked.fadeToggle();
        btnUnChecked.fadeToggle(.5);
        tarefaLista.css({
            "font-style": "normal",
            "text-decoration": "none",
    
        })
    })
}
