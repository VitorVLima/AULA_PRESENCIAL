const botao = document.getElementById('bottomMenu');
const category = document.getElementById('bottomCat');
const subitem = document.getElementById('subclass');

// Função para fechar a sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
        setTimeout(() => {
            sidebar.style.display = 'none'; // Esconder após a transição
        }, 500); // Tempo da transição
        subitem.style.display = 'none';
        
        const icon = document.getElementById('open-btn-icon');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Listener para o botão de menu
botao.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('visible')) {
        closeSidebar();
    } else {
        sidebar.style.display = 'block'; // Mostrar imediatamente
        setTimeout(() => {
            sidebar.classList.add('visible'); // Aplicar opacidade
        }, 10); // Pequena pausa para garantir que o display esteja definido
    }

    const icon = document.getElementById('open-btn-icon');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Evento para a categoria
category.addEventListener('click', function() {
    subitem.style.display = subitem.style.display === 'none' ? 'block' : 'none';
});

// Listener para fechar a sidebar ao clicar fora
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const isClickInside = sidebar.contains(event.target) || botao.contains(event.target);
    
    if (!isClickInside) {
        closeSidebar();
    }
});





