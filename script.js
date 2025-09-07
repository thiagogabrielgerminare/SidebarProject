document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menuLateral');
    const abrir = document.getElementById('abrir');
    const fechar = document.getElementById('fechar');
    const toggleTheme = document.getElementById('toggleTheme');

    abrir.addEventListener('click', function() {
        menu.classList.add('active');
    });

    fechar.addEventListener('click', function() {
        menu.classList.remove('active');
    });

    toggleTheme.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
});
