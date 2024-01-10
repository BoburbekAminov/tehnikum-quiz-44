FROM node:16.16

WORKDIR /quiz

COPY . /quiz

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]