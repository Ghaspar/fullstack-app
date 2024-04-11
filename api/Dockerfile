# Use uma imagem base do Node.js
FROM node:14

# Crie o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e o yarn.lock (ou package-lock.json) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta que o servidor Nest.js utiliza (por padrão é a porta 3000)
EXPOSE 3000

# Comando para iniciar o servidor Nest.js
CMD ["npm", "run", "start:dev"]
