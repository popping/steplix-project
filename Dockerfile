FROM mysql:latest

# Install Node and pm2
RUN apt update && apt full-upgrade -y && apt install curl -y

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 12.18.1

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash 
RUN chmod a+x $NVM_DIR/nvm.sh
RUN $NVM_DIR/nvm.sh install $NODE_VERSION 
RUN $NVM_DIR/nvm.sh alias default $NODE_VERSION 
RUN $NVM_DIR/nvm.sh use default

ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN npm -g install pm2

# Database config
ENV MYSQL_ROOT_PASSWORD=mypassword
EXPOSE 3307:3306
WORKDIR /docker-entrypoint-initdb.d/
COPY ./mysql .

#App Config
WORKDIR /app
EXPOSE 80
ENV NODE_ENV="production"
ENV HTTP_PORT=80
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend/src ./src
CMD npm start && /entrypoint.sh mysqld
