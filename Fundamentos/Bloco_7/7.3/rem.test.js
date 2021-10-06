const myRemove = require('./rem');

describe('Função Remover item do array', () => {
    test('Retorna array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 4]);
    })
})