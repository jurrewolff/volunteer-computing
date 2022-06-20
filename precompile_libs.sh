#!/bin/bash
#echo "$PWD/emcc_cache"
if [ -d "emcc_cache" ]
then
    echo "cache exists"
else
    echo "cache not found."
    apt-get install -y emscripten && mkdir emcc_cache  && export EM_CACHE=$PWD/emcc_cache
    python /usr/share/emscripten/embuilder.py build MINIMAL
fi
