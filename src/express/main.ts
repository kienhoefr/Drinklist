/*
 * Web Server and API for Drinklist
 * --------------------------------
 * Author: Raphael Kienhöfer
 */
import Server from './server';
import * as fs from 'fs';
import AppSettings from './models/app-settings';
import * as bodyParser from 'body-parser';
import DbService from './services/api/db.service';

// TODO: Ensure all config files exist

// Read config values
const settings: AppSettings = JSON.parse(fs.readFileSync(fs.realpathSync('./') + '/data/settings.json', 'utf8'));

// Initialize services
const dbService = new DbService(fs.realpathSync('./') + '/data/history.db');

// Initialize server
const server = new Server({
  port: settings.port,
  fullHost: settings.host,
  middlewares: [
    bodyParser.json(),
  ],
  modules: [
  ],
  services: [
    dbService,
  ],
});

server.listen();

process.on('SIGINT', server.shutdown());
process.on('SIGTERM', server.shutdown());
