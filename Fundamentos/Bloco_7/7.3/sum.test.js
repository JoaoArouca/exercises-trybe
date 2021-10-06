const sum = require('./sum');

describe ('Função soma', () => {
    test('4 + 5 = 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('4 + "5" = Error', () => {
        expect(() => {
            sum(4,'5');
        }).toThrowError();
    });
    test('Testa mensagem de Erro', () => {
        expect(() => {
            sum(4, "5");
        }).toThrowError(new Error('parameters must be numbers'));
    })
})