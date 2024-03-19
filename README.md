# Posts app

You can run this application with docker or manually. Instructions for both ways are placed in this (readme) file.
App is built with react, typescript and vite.
Unit tests are written with vitest, e2e test are made with cypress. 
From external libraries axios and @tanstack/react-query are used for data fetching and react-router-dom for routing application.
Styling is done with css modules, so there are no any libraries used.
Most of logic is placed in custom hooks, so components are clear as much as they can be.
I needed around 6 hours to complete this application (with tests), completely
Since api requested to build this app, doesn't have prebuilt relations, I did it by myself on front-end.
Manually app wil be served on http://localhost:5173
Docker will serve on http://localhost:5174
## Installation

```bash
git clone <REPO_URL>
```

```bash
cd <REPO_URL>
```

### Install all dependencies
```bash
yarn
```

```bash
npm install
```

In nest examples we will use only yarn as package manager for npm commands are the same just with run prefix

### Start in dev mode

```bash
yarn dev
```

### Start in prod mode
If it is already build than just preview

```bash
yarn build && yarn preview
```

### Build
It must be done before running in prod mode
```bash
yarn build
```

### Lint
```bash
yarn lint
```

### Format
Prettier for all ts and tsx files 
```bash
yarn format
```

### Test unit
```bash
yarn test
```

### Test e2e

#### Run cypress test in terminal
If it doesn't work or you are using npm package manager change line 12 and 13 in package.json file
```bash,
yarn e2e:run
```
#### Interactive mode
Open in browser controlled by cypress
```bash
yarn e2e:open
```

### Run with docker

Build image
```bash
docker build . -t <some_name>
```
Run container
```bash
docker run <some_name>
```

### Run with docker compose
```bash
docker-compose up
```