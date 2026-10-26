// Contador simples de cliques
let cliques = 0;

const botao = document.getElementById('btnContador');
const spanContador = document.getElementById('contador');

botao.addEventListener('click', () => {
  cliques += 2;
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

// Resetar contador
const btnResetar = document.getElementById('btnResetar');

btnResetar.addEventListener('click', () => {
  cliques = 0;
  spanContador.textContent = cliques;
});

// Voltar ao topo
const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lista de tarefas
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

btnAdicionar.addEventListener('click', () => {
  const texto = inputTarefa.value.trim();
  if (texto === '') return;

  const item = document.createElement('li');
  item.textContent = texto;
  listaTarefas.appendChild(item);
  inputTarefa.value = '';
});

// Relógio
const elementoHora = document.getElementById('hora');

function atualizarHora() {
  elementoHora.textContent = new Date().toLocaleTimeString('pt-BR');
}

atualizarHora();
setInterval(atualizarHora, 1000);

// Zoom na galeria
document.querySelectorAll('.card img').forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoom');
  });
});

// Compartilhar
const btnCompartilhar = document.getElementById('btnCompartilhar');

btnCompartilhar.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  alert('Link copiado!');
});

// Imprimir
const btnImprimir = document.getElementById('btnImprimir');

btnImprimir.addEventListener('click', () => {
  window.print();
});