const Router = require('router');

const router = new Router();
const http = require('http');

const server = http.createServer((req, res) => {
  router(req, res, (err) => {

  });
});
router.post('/message', (req, res) => {

});
router.use((req, _res, next) => {
  next();
});
server.listen(3000, () => {
  // console.log('Listening on port 3000');
});
