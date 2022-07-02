FROM node:16

# Install OpenJDK-11
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    apt-get clean;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jre/openjdk-11-jre-headless/
RUN export JAVA_HOME

# INSTALL NPM 
RUN npm install -g npm@latest
RUN npm --version
# INSTALL YARN 
RUN npm install -g yarn@latest --force
RUN yarn --version

ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true

# Node libraries
RUN node -p process.versions

# INSTALL CHROME

# Chrome dependencies
RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

ENV CHROME_VERSION 103.0.5060.53

RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN google-chrome --version
# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

# INSTALL PACKAGES
WORKDIR /usr/wdio/
COPY package*.json ./
COPY . .
EXPOSE 8080
RUN npm install
#COPY /node_modules/wdio-image-comparison-service /usr/wdio/node_modules/wdio-image-comparison-service
#COPY /node_modules/webdriver-image-comparison /usr/wdio/node_modules/webdriver-image-comparison
COPY package*.json ./

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
ENTRYPOINT ["npm", "run", "test"]
