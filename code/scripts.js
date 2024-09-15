document.addEventListener('DOMContentLoaded', () => {
    // Code pour faire défiler les images des docteurs
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].style.opacity = 1;
    }

    setInterval(showNextItem, 5000); // Change l'image toutes les 3 secondes

    // Code pour la page de bienvenue
    if (!window.location.hash) {
        window.location.hash = 'welcome';
        window.location.href = 'welcome.html';
    }
});
