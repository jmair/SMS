#Template

## Development

1. Install Node modules.
```
npm install
```
2. Create new local DB and configure Knex to connect to MYSQL.
```
mysql -u username -p
create database [databasename];
cp knexfile.bk knexfile.js
vim knexfile.js
```
3. Run the Knex migrations and seed the database.
```
npm run knex:migrate
npm run knex:migrate:test
knex seed:run
```
4. Start Source Server.
```
npm start
```
## Deployment

1. Install npm modules.
```
npm install
```
2. Update site production configuration.
```
vim config.js
```
3. Create production MYSQL DB.

4. Configure Knex to connect to MYSQL DB.
```
cp knexfile.bk knexfile.js
vim knexfile.js
```
5. Run Knex migrations.
```
knex migrate:latest
```
6. Transpile to ES5.
```
npm run build
```
7. Use process manager to start services.
```
pm2 start express_dist/distServer.js
```
