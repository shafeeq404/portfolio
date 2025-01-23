document.getElementById('menu-toggle').addEventListener('click', function(){
    const navLinks = document.getElementById('nav-links');
    const headerTitle = document.querySelector('nav h1');
    navLinks.classList.toggle('show');
    headerTitle.classList.toggle('hide');
});
