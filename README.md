 API Curiosidades de Teresópolis

API REST para gerenciar curiosidades sobre a cidade de Teresópolis, desenvolvida com Node.js e Express.

## 📋 Sobre o Projeto

Sistema completo com backend e frontend para cadastrar, visualizar, editar e excluir curiosidades sobre Teresópolis. Os dados são armazenados em arquivo JSON.

## 🚀 Tecnologias

### Backend
- Node.js
- Express.js
- CORS
- File System (fs)

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── server.js          # Servidor Express
│   ├── dados.json         # Banco de dados JSON
│   ├── package.json       # Dependências
│   └── README.md          # Documentação do backend
└── frontend/
    ├── index.html         # Interface principal
    ├── script.js          # Lógica do frontend
    └── style.css          # Estilos
```

## 🔧 Instalação e Execução

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
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

## 📡 Endpoints da API

### GET /curiosidades
Retorna todas as curiosidades cadastradas.

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Título da curiosidade",
    "descricao": "Descrição detalhada",
    "foto_url": "URL da imagem"
  }
]
```

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

**Body:**
```json
{
  "titulo": "Título atualizado",
  "descricao": "Descrição atualizada",
  "foto_url": "URL atualizada"
}
```

### DELETE /curiosidades/:id
Remove uma curiosidade pelo ID.

## 💡 Funcionalidades

- ✅ Listar todas as curiosidades
- ✅ Adicionar novas curiosidades
- ✅ Editar curiosidades existentes
- ✅ Excluir curiosidades
- ✅ Interface responsiva
- ✅ Persistência de dados em JSON

## 👨‍💻 Autor

**Allan Johnny**

Projeto estudantil desenvolvido em 2026

## 📄 Licença

Este é um projeto educacional de código aberto.
