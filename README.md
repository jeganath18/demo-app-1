# ArchPilot Test Application

A minimal containerized Node.js application used to validate the ArchPilot deployment pipeline.

## Endpoints

- `GET /` — application information
- `GET /health` — health check

## Container

- Base image: Node.js 22 Alpine
- Port: 8080
- Target architecture: ARM64-compatible
