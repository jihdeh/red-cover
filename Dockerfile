FROM node:8.15.0-alpine

# use app as work directory
WORKDIR /app

COPY yarn.lock .

# Copy all local files into the app directory.
COPY . ./

RUN yarn install
