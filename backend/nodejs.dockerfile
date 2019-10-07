FROM node:10

COPY package*.json ./usr/app/
WORKDIR /usr/app
RUN npm install
COPY . /usr/app
EXPOSE 3333
WORKDIR /usr/app/src
CMD ["node", "server.js"]