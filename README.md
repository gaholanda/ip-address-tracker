# IP Address Tracker

Saiba a localização de qualquer IP (v4), ou domínio público da internet, com base na api da [Ipify](https://geo.ipify.org/).

Acesse a [Demonstração](https://ip-address-tracker-chi-two.vercel.app/).

### 1. Pacotes utilizados

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Jest](https://www.npmjs.com/package/jest)
- [enzyme](https://www.npmjs.com/package/enzyme)
- [nprogress](https://www.npmjs.com/package/nprogress)
- [public-ip](https://www.npmjs.com/package/public-ip)
- [axios](https://www.npmjs.com/package/axios)
- [leaflet](https://www.npmjs.com/package/leaflet)
- [react-leaflet](https://react-leaflet.js.org/)
- [styled-components](https://styled-components.com/)

### 2. Instalação

É preciso ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina.<br>
Após clonar o repositório faça:

```
npm install
```

Caso tenha o `yarn` instalado, pode usá-lo para instalar as dependências.

### 3. Rodando local

Para rodar o projeto, é preciso de uma **key** da [Ipify](https://geo.ipify.org/).<br>
Caso não tenha, será preciso se cadastrar no serviço para criar uma.

Tendo gerado a key, crie um arquivo `.env.local`, na raiz, com os seguintes dados:

```
API_KEY=<Ipify_Key>
```

Para rodar a aplicação localmente, faça:

```
npm run dev
```

Você poderá acessar o projeto em _http://localhost:3000_.<br>
A aplicação terá no topo da tela uma identificação do ambiente de desenvolvimento.

### 4. Testes

Para rodar os testes, faça:

```
npm run test
```

Existem dois testes configurados: um unitário e um de integração.

### 5. Gerando pacotes para entrega

#### 1. Homologação

Gerando o pacote:

```
npm run build:staging
```

Rodando o projeto:

```
npm run start:staging
```

#### 2. Produção

Gerando o pacote:

```
npm run build
```

Rodando o projeto:

```
npm run start
```
