FROM node:alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Expense Tracker frontend react app."
LABEL maintainer = ["Raghvendra"]

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]