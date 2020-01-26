FROM node:10

# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY . .
