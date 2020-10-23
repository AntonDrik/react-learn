import setClasses from "../setClasses";

describe('SetClasses fn:', () => {

    test('should be a function', () => {
        expect(typeof setClasses).toBe('function');
    });

    test('should return string', () => {
        expect(setClasses('test', 'test1')).toBe('test test1')
    })

});
