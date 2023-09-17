FROM node:alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Expense Tracker backend API."
LABEL maintainer = ["Raghvendra"]

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm i
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]