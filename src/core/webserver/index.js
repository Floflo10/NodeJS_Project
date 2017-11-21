const express = require('express');
const bdd = require('app/core/bdd');
const route = require('app/core/routage');

class Webserver {


    constructor() {
        this.express = null;
        this.server = null;
    }

    start(port, callback) {
        this.express = express();

        this.server = this.express.listen(port, (err) => {
            if (typeof callback === 'function') {
                callback(err, this.express);
            }
        });
    }

    close(callback) {
        if (this.server === null) {
            callback(new Error('Web Server is not runnug'));
        } else {
            this.server.close(((err) => {
                if (typeof callback === 'function') {
                    callback(err);
                }
            }
            ));
        }
    }
}

export default new Webserver();
