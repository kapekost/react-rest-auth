FROM node:13.12.0-alpine
# Create app directory
WORKDIR /app
ENV NODE_ENV="development"
ENV CI=false
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN yarn install --frozen-lockfile
# add app
COPY . ./

RUN yarn build:staging
# start app
CMD ["yarn", "start"]
