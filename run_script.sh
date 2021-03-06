#!/bin/sh

SHELL_ARG="yarn start:dev"
SERVER_PORT="4200"

print_help() {
  echo "\nUsage: ./run_script.sh [option]\n"
  echo "Options:"
  echo "  start [--port=4321]   Install dependencies and start local dev server"
  echo "  serve [--port=4321]   Start local dev server"
  echo "  stop                  Stop local dev server"
  echo "  build                 Generate the dev build"
  echo "  prod                  Generate the prod build"
  echo "  shell                 Open shell prompt in the container"
  echo "  help                  Show this help (default option)\n"
}

docker_run_it() {
  docker run -it --rm \
    --name tekcapsule-web \
    -p "$SERVER_PORT":"$SERVER_PORT" \
    -v "$PWD":/app \
    akhilpb001/ng-cli:11.2.8 \
    /bin/sh -c "$SHELL_ARG"
}

docker_run_nonit() {
  docker run --rm \
    --name tekcapsule-web-runner \
    -v "$PWD":/app \
    akhilpb001/ng-cli:11.2.8 \
    /bin/sh -c "$SHELL_ARG"
}

# Print help if there are no arguments
if [ -z "$1" ]; then
  print_help
  exit
fi

# Extracting server port from the CLI command
if [[ "$2" == "--port="* ]]; then
  SERVER_PORT="$(echo $2 | sed 's/--port=//')"
fi

# Parsing CLI commands and running actions
if [[ "$1" == "build" ]]; then
  echo "[INFO] Deleting generated files..."
  SHELL_ARG="rm -rf dist/"
  docker_run_nonit
  echo "[INFO] Installing dependencies..."
  SHELL_ARG="yarn install"
  docker_run_nonit
  echo "[INFO] Generating dev build..."
  SHELL_ARG="yarn build"
  docker_run_nonit
  exit
elif [[ "$1" == "prod" ]]; then
  echo "[INFO] Deleting generated files..."
  SHELL_ARG="rm -rf dist/"
  docker_run_nonit
  echo "[INFO] Installing dependencies..."
  SHELL_ARG="yarn install"
  docker_run_nonit
  echo "[INFO] Generating prod build..."
  SHELL_ARG="yarn build:prod"
  docker_run_nonit
  exit
elif [[ "$1" == "start" ]]; then
  echo "[INFO] Installing dependencies..."
  SHELL_ARG="yarn install"
  docker_run_nonit
  echo "[INFO] Starting local dev server..."
  SHELL_ARG="yarn start:dev --port $SERVER_PORT"
  docker_run_it
  exit
elif [[ "$1" == "serve" ]]; then
  echo "[INFO] Starting local dev server..."
  SHELL_ARG="yarn start:dev --port $SERVER_PORT"
  docker_run_it
  exit
elif [[ "$1" == "stop" ]]; then
  echo "[INFO] Stopping local dev server..."
  docker stop tekcapsule-web
  exit
elif [[ "$1" == "shell" ]]; then
  echo "[INFO] Opening shell prompt in the container..."
  docker run -it --rm \
    --name tekcapsule-web-shell \
    -v "$PWD":/app \
    akhilpb001/ng-cli:11.2.8 /bin/sh
  exit
elif [[ "$1" == "help" ]]; then
  print_help
  exit
else
  echo "\nError: Invalid option"
  print_help
  exit
fi
