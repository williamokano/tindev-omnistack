#!/bin/bash
MONGO_CONNECTION_STRING=$1

if [[ -z $MONGO_CONNECTION_STRING ]]; then
    MONGO_CONNECTION_STRING="mongodb://localhost:27017/myapp"
fi

docker build -t tindev:backend .
docker run --init -p 3333:3333 -e MONGO_CONNECTION_STRING="$MONGO_CONNECTION_STRING" tindev:backend