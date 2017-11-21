import Webserver from 'app/core/webserver';

Webserver.start(3000, (err) => {
    if (!err) {
        console.log('Webserver started');
    }
});