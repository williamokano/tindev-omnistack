# Tindev Backend
Backend

## How to run
You need a mongodb server  

**Using docker**: `./start.sh [mongo_connection_string]` or `build -t tindev:backend . && docker run --init -p 3333:3333 -e MONGO_CONNECTION_STRING=[mongo_connection_string] tindev:backend`  
**Non-docker approach**: `yarn install && yarn dev`  

**Using docker-compose**: You don't need a mongo server. Just type `docker-compose up`.  

## How to build
Don't know yet