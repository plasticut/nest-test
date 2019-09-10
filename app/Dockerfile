FROM node:10.16.3

WORKDIR /src/app
ADD ./app/package.json /src/app/package.json

RUN npm install

ADD ./dto /src/dto
ADD ./app/tsconfig.json /src/app/tsconfig.json
ADD ./app/src /src/app/src

EXPOSE 3000