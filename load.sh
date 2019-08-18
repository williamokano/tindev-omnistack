#!/bin/bash

URL="http://localhost:3333/devs"

if [[ ! -z $1 ]]; then
    URL=$1
fi

for GITHUB_USERNAME in `cat brazilian_github_users.csv`; do
    echo "Registering $GITHUB_USERNAME"
    curl -X POST \
        -H "Content-Type: application/json" \
        -d "{\"username\": \"$GITHUB_USERNAME\"}" \
        $URL
done