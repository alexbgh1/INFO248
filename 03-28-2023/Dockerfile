# Create node:lastest image
FROM node:latest

WORKDIR /app

# Agregamos el package.json y package-lock.json
COPY package*.json ./

# Instalamos paquenes npm y typescript globalmente
RUN npm ci && npm install typescript -g

COPY . .

RUN npm run build

CMD ["npm","start"]
