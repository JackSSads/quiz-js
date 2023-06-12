# Como baixar o código e alterar propriedades

Para executar este aplicativo, certifique-se de atender aos requisitos mínimos a seguir:

- Ter um gerenciador de pacotes instalado, como npm ou yarn.
- Ter suas credenciais do GitHub configuradas na máquina para baixar o projeto via HTTPS ou baixar o arquivo ZIP.

## Como baixar o repositório

Siga estas etapas para baixar o repositório em seu computador:

1. Abra um terminal (PowerShell, Git Bash ou outro de sua preferência) na pasta de sua escolha.

2. Configure suas credenciais do GitHub executando os seguintes comandos:

```bash
git config --global.email "<email_do_guithub>"
git config --global.name "<nome_do_usuario_git>"
```
### 2° - Baixando repositório

```
git clone https://github.com/JackSSads/quiz-js.git
```

## Como rodar o projeto localmente

Siga as etapas abaixo para executar o projeto localmente:

1. Instale as dependências do projeto usando um dos seguintes comandos:
```bash
npm install
ou
npm i
```

```bash
yarn add
```
2. Rodando projeto:
```
npm run dev
ou
yarn run dev
```

***

## Para alterar as perguntas, opções de respostas e a resposta correta

Você pode personalizar as perguntas, opções de respostas e respostas corretas editando o código-fonte do projeto.

Para isso, siga os passos abaixo:

1. Acesse o arquivo `src/data/questions_complete.js` no código-fonte do projeto.

2. Dentro desse arquivo, você pode modificar as informações conforme necessário. ___É importante manter a mesma estrutura do arquivo para que o app rode perfeitamente!!!___

3. Salve o arquivo após fazer as alterações.

4. Reinicie o projeto localmente seguindo as etapas mencionadas anteriormente para ver as alterações refletidas no quiz.

Para testar o projeto online, você pode acessar o quiz por meio do seguinte link: [https://quiz-js-seven.vercel.app/](https://quiz-js-seven.vercel.app/)

