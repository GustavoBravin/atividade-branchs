// Contador simples de cliques
let cliques = 0;

const botao = document.getElementById('btnContador');
const spanContador = document.getElementById('contador');

botao.addEventListener('click', () => {
  cliques++;
  spanContador.textContent = cliques;

  if (cliques === 5) {
    alert('Você já clicou 5 vezes! 🎉');
  }
});

console.log('script.js carregado com sucesso.');

// Modo escuro
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnTema.textContent = document.body.classList.contains('dark')
    ? '☀️ Modo claro'
    : '🌙 Modo escuro';
});
