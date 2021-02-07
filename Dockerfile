FROM node:14-alpine
WORKDIR /nuraltec
ENV PORT 80
COPY package.json /nuraltec/package.json
RUN npm install
COPY . /nuraltec
EXPOSE 8080
CMD ["node", "server.js"]