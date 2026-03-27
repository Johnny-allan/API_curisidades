const API_URL = 'http://localhost:3000/curiosidades';

let curiosidades = [];

function togglePainel() {
    const painel = document.getElementById('painel-overlay');
    painel.classList.toggle('hidden');
    if (!painel.classList.contains('hidden')) renderizarListaGerenciar();
}

function fecharPainelOverlay(e) {
    if (e.target === document.getElementById('painel-overlay')) togglePainel();
}

async function carregarCuriosidades() {
    const container = document.getElementById('curiosidades-container');
    container.innerHTML = '';
    try {
        const res = await fetch(API_URL);
        curiosidades = await res.json();
        curiosidades.forEach(item => container.appendChild(criarCard(item)));
    } catch {
        container.innerHTML = '<p class="erro">Erro ao conectar com a API. Certifique-se que o backend está rodando.</p>';
    }
}

function criarCard(item) {
    const div = document.createElement('div');
    div.className = 'curiosidade-item';
    div.innerHTML = `
        <img src="${item.foto_url || 'https://via.placeholder.com/450x320?text=Sem+Imagem'}" alt="${item.titulo}">
        <div class="curiosidade-info">
            <h2>${item.titulo}</h2>
            <p>${item.descricao}</p>
        </div>
    `;
    return div;
}

function renderizarListaGerenciar() {
    const lista = document.getElementById('lista-gerenciar');
    lista.innerHTML = '';
    curiosidades.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.titulo}</span>
            <div>
                <button class="btn-editar" onclick="abrirModal(${item.id}, '${escapar(item.titulo)}', '${escapar(item.descricao)}', '${escapar(item.foto_url || '')}')">✏️</button>
                <button class="btn-excluir" onclick="excluir(${item.id})">🗑️</button>
            </div>
        `;
        lista.appendChild(li);
    });
}

function escapar(str) {
    return str.replace(/'/g, "\\'").replace(/\n/g, ' ');
}

document.getElementById('form-cadastro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        foto_url: document.getElementById('foto_url').value
    };
    await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    e.target.reset();
    await carregarCuriosidades();
    renderizarListaGerenciar();
});

function abrirModal(id, titulo, descricao, foto_url) {
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-titulo').value = titulo;
    document.getElementById('edit-descricao').value = descricao;
    document.getElementById('edit-foto_url').value = foto_url;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

document.getElementById('btn-cancelar').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.add('hidden');
});

document.getElementById('form-editar').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('edit-id').value;
    const body = {
        titulo: document.getElementById('edit-titulo').value,
        descricao: document.getElementById('edit-descricao').value,
        foto_url: document.getElementById('edit-foto_url').value
    };
    await fetch(`${API_URL}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    document.getElementById('modal-overlay').classList.add('hidden');
    await carregarCuriosidades();
    renderizarListaGerenciar();
});

async function excluir(id) {
    if (!confirm('Tem certeza que deseja excluir esta curiosidade?')) return;
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    await carregarCuriosidades();
    renderizarListaGerenciar();
}

document.addEventListener('DOMContentLoaded', carregarCuriosidades);
