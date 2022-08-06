FROM node:latest
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm install axios
EXPOSE 8020
CMD ["npm","start"]