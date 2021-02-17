FROM node:14-alpine
WORKDIR /nuraltec-1
ENV PORT 80
COPY package.json /nuraltec-1/package.json
RUN npm install
COPY . /nuraltec-1
EXPOSE 8080
CMD ["node", "server.js"]