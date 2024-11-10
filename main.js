// Seletores dos elementos do DOM
const form = document.querySelector('#form');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

// Evento de envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Cria o objeto de dados do post
    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    // Envia o post para a API usando fetch com método POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        // Renderiza o título e o conteúdo do post
        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;

        // Limpa os campos do formulário
        titulo.value = '';
        conteudo.value = '';
    })
    .catch((error) => console.error('Erro ao enviar post:', error));
});
