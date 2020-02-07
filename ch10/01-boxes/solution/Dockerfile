FROM node:12-slim
LABEL MAINTAINER Rich Rose

RUN apt-get update -y \
    && apt-get install -y boxes \
    && apt-get clean

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "npm", "start" ]
