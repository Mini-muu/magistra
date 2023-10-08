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
- Public network that exposes the next application to connect to the website

## Exposed Ports
Ports exposed during development will be the following: (in production only next application will be exposed)
| service      | port |
| ------------ | ---- |
| next         | 7525 |
| api          | 63   |
| pgadmin      | 8888 |
| redisinsight | 8001 |