# 🏔️ API Curiosidades de Teresópolis

API REST para gerenciar curiosidades sobre a cidade de Teresópolis, desenvolvida com Node.js, Express e PostgreSQL.

## 🌐 Site no Ar

Acesse: https://api-curisidades.onrender.com

## 📋 Sobre o Projeto

Sistema completo com backend e frontend para visualizar, cadastrar, editar e excluir curiosidades sobre Teresópolis. Os dados são armazenados em banco de dados PostgreSQL hospedado no Render.

## 🚀 Tecnologias

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (produção) / SQLite (desenvolvimento local)
- CORS

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── server.js          # Servidor Express + Sequelize
│   ├── banco.sqlite       # Banco de dados local (desenvolvimento)
│   ├── package.json       # Dependências
│   └── README.md
└── frontend/
    ├── index.html         # Interface principal
    ├── script.js          # Lógica do frontend
    └── style.css          # Estilos
```

## 🔧 Instalação e Execução Local

### Backend

```bash
cd backend
npm install
npm start
```

O servidor estará rodando em `http://localhost:3000`

### Frontend

Abra o arquivo `frontend/index.html` diretamente no navegador ou use um servidor local:

```bash
cd frontend
python -m http.server 8000
```

## 📡 Endpoints da API

### GET /curiosidades
Retorna todas as curiosidades cadastradas.

### POST /curiosidades
Cria uma nova curiosidade.

**Body:**
```json
{
  "titulo": "Título da curiosidade",
  "descricao": "Descrição detalhada",
  "foto_url": "URL da imagem"
}
```

### PUT /curiosidades/:id
Atualiza uma curiosidade existente.

### DELETE /curiosidades/:id
Remove uma curiosidade pelo ID.

## 💡 Funcionalidades

- ✅ Página inicial exibe todas as curiosidades automaticamente
- ✅ Painel lateral de gerenciamento acessível pelo botão "Cadastro" no canto superior direito
- ✅ Adicionar novas curiosidades pelo painel lateral
- ✅ Editar curiosidades via modal de edição
- ✅ Excluir curiosidades com confirmação
- ✅ Dados persistidos em PostgreSQL
- ✅ Dados iniciais carregados automaticamente se o banco estiver vazio
- ✅ Interface responsiva (mobile e desktop)

## ☁️ Hospedagem

- Plataforma: [Render](https://render.com)
- Backend + Frontend: 1 Web Service (Node.js)
- Banco de dados: PostgreSQL (Render Free)

## 👨💻 Autor

**Allan Johnny**

Projeto estudantil desenvolvido em 2026

## 📄 Licença

Este é um projeto educacional de código aberto.
