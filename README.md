# Projeto-pizzaria

Este projeto é uma API desenvolvida para gerenciar uma pizzaria, permitindo a criação e gestão de usuários, produtos, pedidos e categorias.

**Este projeto foi desenvolvido utilizando TypeScript e Node.js, com o Prisma como ORM para a interação com o banco de dados.**
**Feito com base nos conhecimentos disponibilizados pelo LAMIA - Lab. de Aprendizado de Máquina Aplicado a Indústria.**

## 📂 Estrutura do Projeto

```bash
├── prisma/             # Configurações e esquemas do Prisma ORM
├── src/                # Código-fonte principal
│   ├── @types/express  # Definições de tipos personalizados para o Express
│   ├── config/         # Configurações diversas, incluindo o Multer
│   ├── controllers/    # Controladores para cada funcionalidade
│   │   ├── Category/   # Controladores de Categoria
│   │   ├── Order/      # Controladores de Pedido
│   │   ├── Product/    # Controladores de Produto
│   │   └── User/       # Controladores de Usuário
│   ├── middlewares/    # Middlewares, como o de autenticação
│   ├── prisma/         # Configurações específicas do Prisma ORM
│   ├── services/       # Serviços que encapsulam a lógica de negócios
│   ├── routes.ts       # Definição das rotas da API
│   └── server.ts       # Inicialização do servidor Express
└── tmp/                # Arquivos temporários, como uploads
```

## Funcionalidades

- **Gerenciamento de Categorias:**
  - Criação e listagem de categorias.

- **Gerenciamento de Produtos:**
  - Criação de produtos e listagem de produtos por categoria.

- **Gerenciamento de Pedidos:**
  - Criação, adição de itens, remoção de itens, envio, detalhamento, finalização e remoção de pedidos.

- **Gerenciamento de Usuários:**
  - Autenticação, criação e detalhamento de usuários.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de execução para o JavaScript no lado do servidor.
- **Express:** Framework web para Node.js, usado para gerenciar rotas e middlewares.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática.
- **Prisma:** ORM utilizado para facilitar a interação com o banco de dados.
- **Postgres:** Banco de dados utilizado para persistência dos dados.
- **JWT (JSON Web Token):** Utilizado para autenticação segura de usuários.
- **Bcrypt:** Utilizado para criptografia de senhas.

## Estrutura do Projeto

- **src/**
  - **@types/express/**: Tipagens customizadas para o Express.
  - **config/**: Configurações de arquivos e bibliotecas (ex: multer).
  - **controllers/**: Controladores que lidam com as requisições e respostas HTTP.
    - **Category/**: `CreateCategoryController.ts`, `ListCategoryController.ts`
    - **Order/**: `AddItemController.ts`, `CreateOrderController.ts`, `DetailOrderController.ts`, `FinishOrderController.ts`, `ListOrderController.ts`, `RemoveItemController.ts`, `RemoveOrderController.ts`, `SendOrderController.ts`
    - **Product/**: `CreateProductController.ts`, `ListByCategoryController.ts`
    - **User/**: `AuthUserController.ts`, `CreateUserController.ts`, `DetailUserController.ts`
  - **middlewares/**: Middlewares de autenticação e outros.
  - **prisma/**: Configuração e esquema do Prisma ORM.
  - **services/**: Serviços que contêm a lógica de negócios, como a autenticação de usuários.
  - **routes.ts**: Definição das rotas da API.
  - **server.ts**: Arquivo principal que inicializa o servidor e configura o Express.

## Autenticação de Usuários

A autenticação dos usuários é realizada utilizando JWT (JSON Web Token). O processo envolve a verificação das credenciais fornecidas (e-mail e senha) e, em caso de sucesso, um token JWT é gerado e retornado ao cliente. Esse token é então utilizado para proteger rotas que exigem autenticação.

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/usuario/projeto-pizzaria.git
   ```
2. **Instale as dependências:**
   ```bash
   yarn install
   ```

3. **Configure o banco de dados:** Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente conforme necessário para conectar ao banco de dados.

4. **Rode as migrações do prisma:**
   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor:**
   ```bash
   yarn dev
   ```


