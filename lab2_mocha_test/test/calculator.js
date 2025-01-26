const assert = require('assert');
const calculator = require('../app/calculator');

describe('Calculator Function', () => { 
    it('should return 7 when the value is 5 + 2', () => {
        assert.equal(calculator.add(5,2), 7);
    });

    it('should fail when the value is 5 + 2 = 8', () => {
        assert.equal(calculator.add(5,2), 8);
    });
    
    it('should return 3 when the value is 5 - 2', () => {
        assert.equal(calculator.sub(5,2), 3);
    });

    it('should fail when the value is 5 - 2 = 5', () => {
        assert.equal(calculator.sub(5,2), 5);
    });

    it('should return 10 when the value is 5 * 2', () => {
        assert.equal(calculator.mul(5,2), 10);
    });

    it('should fail when the value is 5 * 2 = 8', () => {
        assert.equal(calculator.mul(5,2), 12);
    });

    it('should return 5 when the value is 10 / 2', () => {
        assert.equal(calculator.div(10,2), 5);
    });

    it('should fail when the value is 10 / 2 = 2', () => {
        assert.equal(calculator.div(10,2), 2);
    }); 


})