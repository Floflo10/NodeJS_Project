import { expect } from 'chai';
import Webserver from 'app/core/webserver';

describe('Testing webserver', () => {
    it('is a good test example', () => {
        expect(maVariable).to.be.true;
    });

    it('is a bad test example', () => {
        expect(false).to.be.false;
    });

    it('sould run correctly', () => {
        Webserver.start(3001, (err) => {
            expect(err).to.not.exist;
            done();
        })
    })
});