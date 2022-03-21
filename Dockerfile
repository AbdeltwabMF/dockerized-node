# Base Image alpine: to be replaced later on cause it violate RMS GNU System :).
# First Stage: Web Application
FROM node:17-alpine
WORKDIR /application
COPY . .
RUN npm install
CMD [ "node", "app.js" ]
