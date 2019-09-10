FROM node:10.16.3

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src/renderer
ADD ./renderer/package.json /src/renderer/package.json

RUN npm install

RUN rm -rf /var/cache/apk/*

ADD ./dto /src/dto
ADD ./renderer/tsconfig.json /src/renderer/tsconfig.json
ADD ./renderer/src /src/renderer/src
