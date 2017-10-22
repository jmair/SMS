/* eslint-disable no-console */

import compression from 'compression';
import express from 'express';
import expressWinston from 'express-winston';
import open from 'open';
import path from 'path';
import winston from 'winston';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import defaultConfig from '../src/config';
import apiRoutes from './apiRoutes/index';

let environment = process.env.NODE_ENV || 'development';

function inDevelopment() {
  return environment === 'development';
}

export default (args) => {
  environment = args.environment || environment;

  const app = express();
  const config = Object.assign({}, defaultConfig, args);
  const consoleLoggerOptions = config.loggerOptions;
  const port = config.port;

  const buildDirectory = config.buildDirectory;
  const fileLoggerOptions = Object.assign(
    {},
    consoleLoggerOptions,
    {
      filename: path.join(__dirname, `../log/${environment}.log`),
      prettyPrint: inDevelopment(),
    }
  );

  // Must define before routing
  // app.use(expressWinston.logger({
  //   transports: [
  //     new winston.transports.Console(consoleLoggerOptions),
  //     new winston.transports.File(fileLoggerOptions)
  //   ],
  //   level: 'debug',
  // }));

  if (config.compress) {
    app.use(compression());
  }

  app.use(express.static(path.join(__dirname, buildDirectory)));

  // parse body params and attach them to req.body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(cookieParser());
  app.use(methodOverride());

  // secure apps by setting various HTTP headers
  app.use(helmet());

  app.get('/healthcheck', (req, res) => res.json({success: true}));
  // app.use('/api', apiRoutes);

  if (config.route) {
    config.route(app);
  }

  if (config.fallbackRoute) {
    config.fallbackRoute(app);
  }

  // Must define after routing
  // app.use(expressWinston.errorLogger({
  //   transports: [
  //     new winston.transports.Console(consoleLoggerOptions),
  //     new winston.transports.File(fileLoggerOptions),
  //   ]
  // }));

  return app.listen(process.env.PORT || port, err => {
    if (err)
      console.log(err);
    else if (config.openBrowserOnStart)
      open(`http://localhost:${port}`);
  });

};
