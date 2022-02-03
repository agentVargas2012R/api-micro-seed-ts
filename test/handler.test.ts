import {expect} from 'chai';

describe('this is a sample set up', () => {
    it("should execute a test", () => {
       expect(true).to.be.true;
    });

    it('should test live reload', () => {
        expect(false).to.be.false;
    })
});