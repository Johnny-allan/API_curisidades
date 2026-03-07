# API Curiosidades de Teresópolis

API simples para gerenciar curiosidades sobre Teresópolis.

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Rode a API:
```bash
npm start
```

Ou em modo desenvolvimento:
```bash
npm run dev
```

Os dados ficam salvos no arquivo `dados.json`.

## Endpoints

### GET /curiosidades
Retorna todas as curiosidades cadastradas.

### POST /curiosidades
Cria uma nova curiosidade.

Body:
```json
{
  "titulo": "Nome do local",
  "descricao": "Descrição da curiosidade",
  "foto_url": "URL da foto"
}
```
