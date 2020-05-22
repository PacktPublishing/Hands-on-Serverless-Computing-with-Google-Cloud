FROM node:12-slim
LABEL MAINTAINER Rich Rose

# Allocate a work directory
WORKDIR /usr/src/app

# Copy across source
COPY package*.json ./
RUN npm install --only=production

COPY . .

# PORT to export externally
EXPOSE 8080

# Create start command
CMD [ "npm", "start"]
