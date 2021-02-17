![image](https://user-images.githubusercontent.com/49694866/108147277-55702c80-70ad-11eb-8eaf-7f179652ffef.png)

## Como executar / How to run

Instale as dependências / Install all the dependencies:

```sh
npm install
```

Crie um arquivo .env e adicione a URL da API como variável de ambiente no seguinte formato  / Create an .env file and add the API URL on the following format:

```sh
Create .env
REACT_APP_API_URL= "api-URL-without-'https'"
```

Execute o projeto / Execute the project:

```sh
npm start
```


## Estrutura do Projeto / Project Structure

```
├── public
├── src
│   └──__test__
│       ├── __snapshots__
│       ├── files // Arquivos de teste
│   └── assets //images
│   └── components // Components usados para criação das páginas
│       ├── Button
│       ├── Icon
│       ├── ListRanking
│       ├── Logo
│       ├── Score
│   └── pages  // Páginas da aplicação
│       ├── Home
│       ├── Game
│       ├── Ranking
│       ├── Result
│   └── services
│       ├── api.js // Url da Api
│   └── styles
│       ├── global.js // Styled-components Global
│   
│   └── App.jsx
│   └── Index.jsx 
│   └── routes.jsx // Rotas da aplicação

```

## Contributing

1. Fork it (`https://github.com/mariaelizasa/JS-G3n1u5`)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
