# About this repository

## How to Run this repository

First create an '.env' file to store your environment variables in. URIs & keys will be provided
when necessary.

From the command line run the following commands:

```
npm install
npm run build
npm start
```
The repository will be running locally on port 3000.
```
localhost:3000/
```

## File-Structure
Here are the main folders to be concerned about

```
{ public } 
{ db }
{ server }
{ src }
```
* { public }: This folder is here for webpack to inject a javascript bundle file, for the most part
you won't need to make modifications to this repository

* { db }: Here you'll find a singular file that contains a user schema, a connection, and provides a bookshelf.js constructor that provides access to database. I plan on seperating these concerns.

* { server }: Here is the express server and a router that currently server, with a router and route handlers. Again I plan on seperating these concerns as well.

* { src }: Here is the front-end framework

### { src }: File-Structure
The front-end is broken up into two primary parts, the business logic `application` and presentational `ui`.
```
{ application }
-- { actions } 
-- { store } // supporting reducers are found here as well
{ ui }
-- { app } // this is the main component and has a seperate file
-- { components } // find stateless components with styles
-- { views } // the components that are linked to the redux store
```

