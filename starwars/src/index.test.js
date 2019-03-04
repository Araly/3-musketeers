const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
    describe('all', () => {
        test('should be a fulfilled array', () => {
            expect(starWars.all).toHaveLength(starWarsNames.length)
        });
        expect.extend({
            toBeArrayContainingStrings(received) {
                var result = true;
                for (element in received) {
                    if (typeof element != "string") {
                        result = false;
                    }
                }
                if (result) {
                    return {
                        message: () =>
                            `expected ${received} not to be an array containing strings`,
                        pass: true,
                    };
                }
                else {
                    return {
                        message: () =>
                            `expected ${received} to be an array containing strings`,
                        pass: false,
                    };
                }
            },
        });
        test('should be an array of strings', () => {
            expect(starWars.all).toBeArrayContainingStrings()
        });

        test('should contain `Luke Skywalker`', () => {
            expect(starWars.all).toContain("Luke Skywalker")
        });

        test('should not contain `Ben Quadinaros`', () => {
            expect(starWars.all).not.toContain("Ben Quadinaros")
        });
    });

    describe('random', () => {
        test('should return a random item from the starWars.all', () => {
            throw new Error('test not yet defined... remove the throw and write your test here');
        });

        test('should return an array of random items if passed a number', () => {
            throw new Error('test not yet defined... remove the throw and write your test here');
        });
    });
});
