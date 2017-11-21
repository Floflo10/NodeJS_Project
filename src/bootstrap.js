import Webserver from 'app/core/webserver';
const bdd = require('app/core/bdd/bdd.js');
const routage = require('app/core/webserver/routage.js');

bdd.connection((err) => {

  Webserver.start(3000, (err, express) => {
    if (!err) {
      console.log('Webserver started');
      routage.route(express);
    }
  });
});


