const assert = require('assert');
const apps = require('./index')

describe('Array', function () {
    describe('Array Competence Test', function () {
        it('should return crocodile as word with greatest length', function () {
            assert.equal("crocodile", apps.longestWord());
        });

        it('should return 43130880 as product of array elements', function () {
            assert.equal(43130880, apps.productArray());
        });

        it('should return 5.3 as average of array elements', function () {
            assert.equal(5.3, apps.averageWords());
        });

        it('should return an array with unique elements', function () {
            assert.deepEqual(["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"], apps.uniquifyArray())
        })

        it('should return the greatest sum of multi-array', function () {
            assert.equal(1076, apps.greatestSumMulti())
        })
    });
});