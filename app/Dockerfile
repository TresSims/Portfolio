FROM strapi/strapi:latest

WORKDIR /srv/app

COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]