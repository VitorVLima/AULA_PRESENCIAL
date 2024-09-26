const searchBottom = document.getElementById('searchBottom');
const value = document.getElementById('search');
const items = document.querySelectorAll('.items .item');
const noResults = document.getElementById('noResults');

// Função para pegar o parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function searchItems() {
    const result = value.value.toLowerCase().trim();
    let hasResults = false;

    if (result === '') {
        window.alert('Digite o time que deseja encontrar');
        items.forEach(item => {
            item.style.display = 'none';
        });
        noResults.style.display = 'none'; // Esconder a mensagem de "sem resultados"
    } else {
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent.toLowerCase().trim().indexOf(result) !== -1) {
                items[i].style.display = 'block'; // Mostrar item
                hasResults = true;
            } else {
                items[i].style.display = 'none'; // Esconder item
            }
        }
    }

    if (hasResults) {
        noResults.style.display = 'none'; // Esconder mensagem de "sem resultados"
    } else {
        noResults.style.display = 'block'; // Mostrar mensagem de "sem resultados"
    }
}

// Preencher o campo de pesquisa com o valor da URL
const query = getQueryParam('query');
if (query) {
    value.value = decodeURIComponent(query);
    searchItems(); // Executar a pesquisa automaticamente
}

// Evento de clique no botão de pesquisa
searchBottom.addEventListener('click', searchItems);

// Evento de pressionar a tecla Enter
value.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchItems();
    }
});
