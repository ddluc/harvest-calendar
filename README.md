# Harvest Calendar App

An interactive calendar for exploring seasonal vegetables, designed for the Pacific Northwest.

[View Demo](https://harvest-calendar.herokuapp.com/)

![Harvest Calendar Screenshot](https://harvest-calendar.herokuapp.com/assets/screenshot.png)

## About this project

I build this project because I love vegetables. I highly value sustainability and I hope that it becomes a useful tool for the community. But, I also built it as an exercise to help me stay up to date on some of the latest and greatest technologies. Here are some of the highlights:

- Flux implementation with React Hooks / Context
- Functional design patterns for easy testability
- Minimal dependencies:
  - API: 4 dependencies
  - UI: 8 dependencies (4 of which come by default with Create React App)
- CSS grid
- Express / Node.js / Postgres API backend
- Docker

## Development Instructions

### Setting up local dev

**API**

- Navigate to the project root `cd harvest-calendar`
- Create `.env` file in project root:
```
  DB_HOST=postgres
  DB_NAME=[database]
  DB_USER=[user]
  DB_PASS=[pass]
  ENV=development
  PORT=3300
```
- Run `npm install`
- Run `docker-compose up`
- The API should be running on port `3300`

**UI**

- Navigate to the 'ui' directory `cd harvest-calendar/ui`
- Run `npm install`
- Run `npm run start` -> This will start up the webpack build.
- App should be listening on port `3000`. To bundle the UI build see "Bundle the UI build" below

### Importing Data

- Update any/all csv files in the `sql/importer/data` directory
- Navigate to the project root `cd harvest-calendar`
- Run `npm run data-import`

### Bundle the UI build

- Navigate to the project root `cd harvest-calendar`
- Run `npm run build-ui`
