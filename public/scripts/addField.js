document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    // Duplicar os campos
    const newFieldContainer = window.document.querySelector('.schedule-item').cloneNode(true);
        // A palavra node sempre vai se referir aos elementos HTML
        // O argumento true é para a função clodeNode tambémm clonar os elementos filhos

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input');
                    // Pegando os elementos dentro de newFieldContainer
                    // querySelectorAll('input'); --> Vai pegar todos os elementos input dentro de newFieldContainer

    // Agora vamos limpar os campos
    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar field do momento (field) e limpa
        field.value = "";
    });

    // Colocar na página
    window.document.querySelector('#schedule-items').appendChild(newFieldContainer);
}