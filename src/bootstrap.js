import Webserver from 'app/core/webserver';
const bdd = require('app/core/bdd');
const routage = require('app/core/routage');

bdd.connection((err) => {

  Webserver.start(3000, (err, express) => {
    if (!err) {
      console.log('Webserver started');
      routage.route(express);
    }
  });
});


