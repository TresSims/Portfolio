FROM node:14

RUN mkdir /code
WORKDIR /code

COPY package.json .
COPY package-lock.json .

RUN yarn install

CMD ["yarn", "dev"]
