
FROM node:12.8.1-alpine
RUN mkdir -p /usr/src/orders
WORKDIR /usr/src/orders
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]

