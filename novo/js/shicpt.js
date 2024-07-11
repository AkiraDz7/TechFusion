document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('input[type="text"]').classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
});
