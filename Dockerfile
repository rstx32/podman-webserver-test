FROM node:lts-alpine
WORKDIR /usr/src/hello-world
COPY . /usr/src/hello-world/
RUN npm install
EXPOSE 80
CMD ["npm", "start"]