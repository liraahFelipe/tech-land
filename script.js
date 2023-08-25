
// script.js

// Exemplo de manipulação de elementos usando JavaScript
const featureCards = document.querySelectorAll('.feature-card');

// Adiciona um evento de clique a cada cartão de recurso
featureCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
