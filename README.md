# Demo App

## Setup 

All Steps are run using docker cli from the root directory

1. Install Node Dependencies

```bash
docker run -it  --rm -v "$PWD":/app -w "/app" node:latest npm install
```

2. Build Assets

```bash
docker run -it  --rm -v "$PWD":/app -w "/app" node:latest npm run build
```

3. Run Servers

```bash
docker run -d -p 8882:8080 --name=demo-client --rm -v "$PWD"/dist:/app -w "/app" node:latest npx http-server
```

## View Website 

http://127.0.0.1:8882/


## Run Tests

1. Jest

```bash
    docker run -it  --rm -v "$PWD":/app -w "/app" node:latest npm run test
```

## Shutdown

1. Stop Docker Containers
```bash
docker stop demo-client
```
