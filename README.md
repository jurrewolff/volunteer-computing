# Compunity

Compunity is a distributed computing platform, enabling multiple people to work on one project at the same time. At the core of our website we connect researchers to volunteers through a server. Researchers in need of more computing power are able to upload their computationally expensive C projects, after which it will be subdivided into jobs. Consequently, signed up volunteers can browse projects and contribute to a researcher's project bij executing jobs for the chosen project. After a project all jobs of a project are executed, the results can be downloaded by the researcher - easy as that. Our website aims to make executing large projects faster and more efficient.

## How it works

A project is made up of a c program and an input file. Uploaded c files are compiled to WebAssembly by the webserver using the Emscripten compiler. Each client worker then executes this Wasm code with a single line from the uploaded input file as an argument. When a client is done executing they will post their result and start executing again after getting a new input from the web server.

## Installation

1. Install the required dependencies: `docker, docker-compose, npm`
2. Start the application: `bash start_dev.sh`

## Usage
The application database can be managed using "phpmyadmin". This service is accessible through a web-interface at port
3602 of the server IP-address. The website itself is reached at port 3601. 

`bash npm_build.sh` can be used to rebuild the react into the static folder.  
`bash start.sh` can be used to start the website.  

## License
DO WHAT THE F*CK YOU WANT

## Overview

Front-end: React, CSS  
Backend-end: Python, EMCC

## Authors
Paul Ganzevoort  
Jeffrey Kragten   
Paul Kwakernaak  
Ruben Lanjouw  
Tessa van Lobbrecht  
Tommaso Trooster  
Jurre Wolff  
Lleyton Wynter  
Jan Deen  
