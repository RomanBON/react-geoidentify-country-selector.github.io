FROM node:slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g serve

COPY . /usr/src/app

EXPOSE 5000
CMD npm run build && serve -s build
