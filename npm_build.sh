#!/bin/bash
cd flask_react
npm run build
cd ..

if [ -d "./app/static" ]; then
    rm -rf app/static
fi

mkdir app/static
mv -v flask_react/build/* app/static/
