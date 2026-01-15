# Anythink Market Services

This repository hosts two simple services used together via Docker Compose:
- A FastAPI task service on port `8000` (Python).
- A minimal Express server scaffold on port `8001` (Node.js,).

## Project Structure

- `python-server/src/main.py`: FastAPI app with two routes for adding and listing tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a package.
- `python-server/requirements.txt`: Python dependencies for the FastAPI service.
- `python-server/Dockerfile`: Image definition for the FastAPI service.
- `node-server/src/index.js`: Express server entry point (listens on `8001`, no routes yet, uses nodemon during `yarn start`).
- `node-server/package.json`: Node dependencies and scripts.
- `node-server/Dockerfile`: Image definition for the Node service.
- `docker-compose.yml`: Orchestrates both services.

## Running Both Services

1) Build and start the stack:

```shell
docker compose up --build
```

2) Services will be available at:
- FastAPI: http://localhost:8000
- Node (scaffold): http://localhost:8001

To stop everything, use `docker compose down`.

## API (Python Service)

- `POST /tasks`: Adds a task to the in-memory list.
- `GET /tasks`: Retrieves the current task list.

## Migration Notes

- The Compose file now includes both `python-server` and `node-server`. Re-run with `--build` after pulling to ensure both images rebuild.
- The Node service uses nodemon in `yarn start`, so code changes under `node-server/src` hot-reload inside the container.
- If you previously ran only the Python service, no extra env vars are required; the new Node service simply binds to `8001`.
