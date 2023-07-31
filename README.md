# School Grading Coding Challenge

This is a full-stack web application monorepo with the use of yarn workspaces.
See deployed [demo](https://school-grading-coding-challenge-web.onrender.com/) using [Render.com](https://render.com/) free-tier plan

## Table of Contents

- [Project Structure](#project-structure)
- [Commands](#commands)
- [Client](#client)
- [Server](#server)
- [Deploying](#deploying)

## Project Structure

```
server\
  |--src\
    |--config\          # Environment variables and configuration related things
    |--controllers\     # Route controllers (controller layer)
    |--db\              # Prisma Schema
    |--middlewares\     # Custom express middlewares
    |--routes\          # Routes
    |--services\        # Business logic (service layer)
    |--utils\           # Utility classes and functions
    |--validations\     # Request data validation schemas
    |--app.js           # Express app
    |--index.js         # App entry point
  |--client\
    |--public\
    |--src\
      |--assets\        # Media assets
      |--components\    # Custom React components built with Tailwindcss
      |--constants\     # Contains constant variables
      |--App.css
      |--App.jsx
      |--index.css
      |--main.jsx

```

## Commands

Running locally:

```bash
yarn dev
```

## Client

Read more on the client application documentation.

## Server

Read more on the RESTful api server documentation.

## Deploying

TO DO.

