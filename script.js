document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menuLateral');
    const abrir = document.getElementById('abrir');
    const fechar = document.getElementById('fechar');

    abrir.addEventListener('click', function() {
        menu.style.display = 'block';
    });

    fechar.addEventListener('click', function() {
        menu.style.display = 'none';
    });
});