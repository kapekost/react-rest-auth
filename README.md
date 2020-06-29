# react-rest-auth - in docker with NodeJS service
React Authentication, middleware, hooks, navigation and async REST requests

There is a basic setup for 2 projects, 
- ReactJS app
- NodeJS server

Each project has a Dockerfile to start in development mode hooking to your local files for live editing and refresh
A main docker-compose file starts both, and a production version that copies the react built project under the /public serve directory of the server


## Development
```
docker-compose up
```
## Production build
```
docker-compose -f docker-compose.production up
```

alternatively, you can start the projects within their directory with common node / yarn 

in each project
```
yarn install
yarn start
```
