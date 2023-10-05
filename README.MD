## Requirements
- docker
- pc that supports multi-processing

## Setup
To start (or restart) the project cd into the project root folder and run the command:
```sh
docker compose up -d
```
To stop cd into the project run the command:
```sh
docker compose down
```

## Healthchecks
Currently the service supports automatic healthchecks for the following services:
- api
- frontend

## Network
Currently the service network is made up of three parts: 
- Backend private network (not accessible from outside) that connects postgres, redis and api
- Frontend private network that connects api and next
- Frontend public network that exposes the next application to connect to the website (and temporarly also the api for a higher development speed)