//procurar botao
document.querySelector("#add-time")
//quando clicar no botoa
.addEventListener('click', cloneField)


//Executar uma acao
function cloneField() {
    //duplicar os campos. que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false
    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //console.log(fields[0].value = "")
    //para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    //colocar na pagina. Donde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}