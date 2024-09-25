const botao = document.getElementById('bottomMenu');
const category = document.getElementById('bottomCat');
const subitem = document.getElementById('subclass');

botao.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
        setTimeout(() => {
            sidebar.style.display = 'none'; // Esconder após a transição
        }, 500); // Tempo da transição
        subitem.style.display = 'none';
    } else {
        sidebar.style.display = 'block'; // Mostrar imediatamente
        setTimeout(() => {
            sidebar.classList.add('visible'); // Aplicar opacidade
        }, 10); // Pequena pausa para garantir que o display esteja definido
    }

    const icon = document.getElementById('open-btn-icon');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

category.addEventListener('click', function(){

    if(subitem.style.display == 'none'){
        subitem.style.display = 'block';
    }else{
        subitem.style.display = 'none';
    }
})




