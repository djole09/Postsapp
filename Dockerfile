FROM node:21-alpine

WORKDIR /sum

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn", "preview" ]