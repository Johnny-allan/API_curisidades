const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DADOS_FILE = path.join(__dirname, 'dados.json');

function lerDados() {
    const dados = fs.readFileSync(DADOS_FILE, 'utf8');
    return JSON.parse(dados);
}

function salvarDados(dados) {
    fs.writeFileSync(DADOS_FILE, JSON.stringify(dados, null, 2));
}

app.use(cors());
app.use(express.json());

app.get('/curiosidades', (req, res) => {
    try {
        const dados = lerDados();
        res.json(dados.curiosidades);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao buscar curiosidades' });
    }
});

app.post('/curiosidades', (req, res) => {
    const { titulo, descricao, foto_url } = req.body;
    try {
        const dados = lerDados();
        const novoId = dados.curiosidades.length > 0 
            ? Math.max(...dados.curiosidades.map(c => c.id)) + 1 
            : 1;
        
        const novaCuriosidade = {
            id: novoId,
            titulo,
            descricao,
            foto_url
        };
        
        dados.curiosidades.push(novaCuriosidade);
        salvarDados(dados);
        
        res.status(201).json(novaCuriosidade);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao criar curiosidade' });
    }
});

app.delete('/curiosidades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const dados = lerDados();
        const index = dados.curiosidades.findIndex(c => c.id === id);
        
        if (index === -1) {
            return res.status(404).json({ erro: 'Curiosidade não encontrada' });
        }
        
        dados.curiosidades.splice(index, 1);
        salvarDados(dados);
        
        res.json({ mensagem: 'Curiosidade deletada com sucesso' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao deletar curiosidade' });
    }
});

app.put('/curiosidades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, descricao, foto_url } = req.body;
    try {
        const dados = lerDados();
        const index = dados.curiosidades.findIndex(c => c.id === id);
        
        if (index === -1) {
            return res.status(404).json({ erro: 'Curiosidade não encontrada' });
        }
        
        dados.curiosidades[index] = {
            id,
            titulo,
            descricao,
            foto_url
        };
        
        salvarDados(dados);
        res.json(dados.curiosidades[index]);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao atualizar curiosidade' });
    }
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
