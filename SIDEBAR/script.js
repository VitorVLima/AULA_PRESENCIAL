const openButton = document.getElementById('open-btn');

openButton.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open-sidebar');

    const icon = document.getElementById('open-btn-icon');

    if (icon.classList.contains('fa-chevron-right')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    } else {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    }
});


