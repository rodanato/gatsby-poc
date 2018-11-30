FROM node:8.12.0-alpine
COPY . .
RUN npm install --global gatsby-cli
RUN ls
RUN npm i
RUN gatsby develop
EXPOSE 8000