FROM node

WORKDIR /kinesio

COPY package*.json ./
RUN npm install
COPY ./src ./src

EXPOSE 3000
CMD [ "npm", "start" ]