import AppGenerator from './AppGenerator';
import path from 'path';

AppGenerator({
  buildDirectory: '../dist',
  compress: true,
  environment: process.env.NODE_ENV || 'development',
  fallbackRoute: (app) => {
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
  },
});
