FROM node:10-alpine

MAINTAINER dielloarias@gmail.com.br

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

