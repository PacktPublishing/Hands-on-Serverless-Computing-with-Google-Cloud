FROM node:12-slim
MAINTAINER LABEL Rich Rose
WORKDIR /usr/src/app
COPY package.json package*.json ./
RUN npm install --only=production
COPY . .
CMD ["npm", "start"]
