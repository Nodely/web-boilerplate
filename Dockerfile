FROM node:12 as BUILDER

WORKDIR /opt/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM nodely/base:latest
LABEL Author Ivan Soloviev <info@nodely.ru>

COPY --from=BUILDER /opt/app/build /usr/share/nginx/html
