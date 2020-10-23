import textBuilder from '../TextBuilder';

describe('TextBuilder Class:', () => {

    test('should be a TextBuilder instance', () => {
        expect(typeof textBuilder).toBe('object');
    });

    test('should have methods: set, cut, capitalizeFirstLetter', () => {
        expect(textBuilder).toEqual(
            expect.objectContaining({
                set: expect.any(Function),
                cut: expect.any(Function),
                capitalizeFirstLetter: expect.any(Function),
            })
        )
    });

    test('should have getter: value', () => {
        const something = textBuilder.set('bar').value;
        expect(something).toEqual('bar');
    });

    test('should return chain when call methods', () => {
        expect(textBuilder.set('test')).toEqual(textBuilder);
        expect(textBuilder.capitalizeFirstLetter()).toEqual(textBuilder);
        expect(textBuilder.cut(1)).toEqual(textBuilder);
    });

    test('should cut text', () => {
        const result = textBuilder.set('test').cut(2).value;
        expect(result).toEqual('te...');
    });

    test('should not cut text', () => {
        const result = textBuilder.set('test').cut(5).value;
        expect(result).toEqual('test')
    });

    test('should return capitalized first letter', () => {
        const result = textBuilder.set('text').capitalizeFirstLetter().value;
        expect(result).toEqual('Text');
    })
});
