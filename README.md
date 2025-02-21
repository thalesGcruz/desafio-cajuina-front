This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Frontend

#### 1 - Clonar o Repositório:
Clone o repositório do projeto para sua máquina local:
```bash
git clone https://github.com/thalesGcruz/desafio-cajuina-front.git
```
Em seguida, entre na pasta do frontend:
```bash
cd desafio-cajuina-front
```

#### 2 - Instalar as Dependências:
Instale as dependências do projeto:
```bash
npm install
```

#### 3 - Configurar as Variáveis de Ambiente:
Crie o arquivo `.env` na raiz do projeto e defina as variáveis de ambiente:
As variáveis de ambiente necessárias para rodar o projeto foram enviadas por e-mail junto com a documentação. Crie um arquivo .env na raiz do projeto e insira as variáveis conforme instruído no e-mail.

O arquivo `.env` estará pronto com as variáveis de ambiente já configuradas corretamente, então não será necessário fazer mais alterações nele.

#### 4 - Rodar o Frontend Localmente:
Após instalar as dependências e configurar o arquivo `.env`, você pode rodar o frontend localmente:
```bash
npm run dev
```
O frontend será iniciado em [http://localhost:3000](http://localhost:3000).

#### 5 - Verificar o Funcionamento do Frontend:
Certifique-se de que o frontend da aplicação esteja rodando na porta 3000 localmente, pois o CORS do backend está configurado para aceitar requisições apenas desse host. Para garantir isso, você pode executar o frontend com o comando padrão do Next.js.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

