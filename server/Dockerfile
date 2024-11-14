FROM node:18-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

RUN npm install

# Copy server code
COPY server ./server

EXPOSE 3001

CMD ["npm", "run", "dev:server"]