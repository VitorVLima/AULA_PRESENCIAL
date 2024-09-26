const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

function redirectToSearch() {
    const searchValue = searchInput.value.trim();
    if (searchValue) {
        // Redireciona para a página de pesquisa com o valor como parâmetro de URL
        window.location.href = `search.html?query=${encodeURIComponent(searchValue)}`;
    } else {
        alert('Digite um time para pesquisar');
    }
}

// Evento de clique no botão de pesquisa
searchButton.addEventListener('click', redirectToSearch);

// Evento de pressionar a tecla Enter
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectToSearch();
    }
});
