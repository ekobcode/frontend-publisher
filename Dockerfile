FROM node:latest
WORKDIR /app
COPY package.json .
COPY . .
EXPOSE 8020
CMD ["npm","start"]