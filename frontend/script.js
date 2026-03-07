// URL da API - ajuste conforme necessário
const API_URL = 'http://localhost:3000/curiosidades';

async function carregarCuriosidades() {
    try {
        const response = await fetch(API_URL);
        const curiosidades = await response.json();
        
        const container = document.getElementById('curiosidades-container');
        
        curiosidades.forEach(item => {
            const div = document.createElement('div');
            div.className = 'curiosidade-item';
            
            div.innerHTML = `
                <img src="${item.foto_url}" alt="${item.titulo}">
                <div class="curiosidade-info">
                    <h2>${item.titulo}</h2>
                    <p>${item.descricao}</p>
                </div>
            `;
            
            container.appendChild(div);
        });
    } catch (erro) {
        console.log('Erro ao carregar curiosidades:', erro);
        // Mostra dados de exemplo se a API não estiver disponível
        mostrarDadosExemplo();
    }
}

function mostrarDadosExemplo() {
    const container = document.getElementById('curiosidades-container');
    const exemplos = [
        {
            titulo: 'Dedo de Deus',
            foto_url: 'https://via.placeholder.com/450x320/4a7c59/ffffff?text=Dedo+de+Deus',
            descricao: 'O Dedo de Deus é o cartão postal mais famoso de Teresópolis. Com 1.692 metros de altitude, essa formação rochosa impressiona visitantes do mundo todo.'
        },
        {
            titulo: 'Parque Nacional da Serra dos Órgãos',
            foto_url: 'https://via.placeholder.com/450x320/2d5016/ffffff?text=Parque+Nacional',
            descricao: 'Criado em 1939, é um dos parques nacionais mais antigos do Brasil. Possui mais de 130 km de trilhas e abriga uma rica biodiversidade da Mata Atlântica.'
        }
    ];
    
    exemplos.forEach(item => {
        const div = document.createElement('div');
        div.className = 'curiosidade-item';
        
        div.innerHTML = `
            <img src="${item.foto_url}" alt="${item.titulo}">
            <div class="curiosidade-info">
                <h2>${item.titulo}</h2>
                <p>${item.descricao}</p>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// Carrega as curiosidades quando a página carregar
document.addEventListener('DOMContentLoaded', carregarCuriosidades);
