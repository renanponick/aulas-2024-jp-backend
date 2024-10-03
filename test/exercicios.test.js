const { somar, calculaSalario } = require('../src/services/exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const funSomar = () => somar(1, 'a');
        expect(funSomar).toThrow('Informe um número')
    })
    
    it('Somar uma letra com um número', () => {
        const funSomar = () => somar('b', 2);
        expect(funSomar).toThrow('Informe um número')
    })
    
})

describe('Testes da função calculaSalario: ', () => {
    // faz os its (testes)
})