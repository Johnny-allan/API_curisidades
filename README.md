# 🏔️ API Curiosidades de Teresópolis

API REST para gerenciar curiosidades sobre a cidade de Teresópolis, desenvolvida com Node.js, Express e Sequelize.

## 📋 Sobre o Projeto

Sistema completo com backend e frontend para visualizar, cadastrar, editar e excluir curiosidades sobre Teresópolis. Os dados são armazenados em banco de dados SQLite via Sequelize ORM.

## 🚀 Tecnologias

### Backend
- Node.js
- Express.js
- Sequelize ORM
- SQLite
- CORS

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

├── backend/
│   ├── server.js          # Servidor Express + Sequelize
│   ├── banco.sqlite       # Banco de dados local (gerado automaticamente)
│   ├── package.json       # Dependências
│   └── README.md
└── frontend/
    ├── index.html         # Interface principal
    ├── script.js          # Lógica do frontend
    └── style.css          # Estilos

## 🔧 Instalação e Execução

### Backend

cd backend
npm install
npm start

O servidor estará rodando em http://localhost:3000

### Frontend

Abra o arquivo frontend/index.html diretamente no navegador.

Ou use o http-server do próprio Node.js:

cd frontend
npx http-server

## 📡 Endpoints da API

### GET /curiosidades
Retorna todas as curiosidades cadastradas.

### POST /curiosidades
Cria uma nova curiosidade.

Body:
{
  "titulo": "Título da curiosidade",
  "descricao": "Descrição detalhada",
  "foto_url": "URL da imagem"
}

### PUT /curiosidades/:id
Atualiza uma curiosidade existente.

### DELETE /curiosidades/:id
Remove uma curiosidade pelo ID.

## 💡 Funcionalidades

- ✅ Listar todas as curiosidades
- ✅ Adicionar novas curiosidades
- ✅ Editar curiosidades via modal
- ✅ Excluir curiosidades com confirmação
- ✅ Dados iniciais carregados automaticamente
- ✅ Persistência de dados com SQLite + Sequelize
- ✅ Interface responsiva

## 👨💻 Autor

**Allan Johnny**

Projeto estudantil desenvolvido em 2026

## 📄 Licença

Este é um projeto educacional de código aberto.
