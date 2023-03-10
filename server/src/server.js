const http = require('http');

require('dotenv').config();

const app = require('./app');
const {mongoConnect} = require('./services/mongo');
const {loadPlanetsData} = require('./models/planets.models');
const {loadLaunchesData} = require('./models/launches.model');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer () {
    await loadPlanetsData();
    await mongoConnect();
    await loadLaunchesData();

    server.listen(PORT, ()=> {
        console.log('Listening to port '+PORT);
    });
}

startServer()