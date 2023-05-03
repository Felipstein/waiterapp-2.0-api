# WaiterAPP 2.0 (API)

## Instalação

1.Clone o projeto e navegue para o diretório do mesmo:

```bash
git clone https://github.com/Felipstein/waiterapp-2.0-api

cd ./waiterapp-2.0-api
```

2.Instale as dependências com npm ou yarn:

```bash
npm i
```

ou

```bash
yarn
```

3.Crie um arquivo chamado `.env` na raiz do projeto com base no arquivo `.env.example`

4.Caso você tenha e opte em rodar o banco de dados pelo docker compose, execute o seguinte comando para rodar de forma automatica um docker com a imagem postgres em seu computador:

```bash
docker-compose up
```

5.Aplique as migrations do prisma no seu banco de dados com o seguinte script:

```bash
npx prisma migrate deploy
```

6.Por fim, execute o seguinte comando para iniciar a API:

```bash
npm run dev
```

ou

```bash
yarn dev
```
