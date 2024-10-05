const ServiceExercicio = require('../src/services/exercicio')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = ServiceExercicio.Somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = ServiceExercicio.Somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = ServiceExercicio.Somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = ServiceExercicio.Somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = ServiceExercicio.Somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const funSomar = () => ServiceExercicio.Somar(1, 'a');
        expect(funSomar).toThrow('Informe um número')
    })
    
    it('Somar uma letra com um número', () => {
        const funSomar = () => ServiceExercicio.Somar('b', 2);
        expect(funSomar).toThrow('Informe um número')
    })
    
})

describe('Testes da função calculaSalario: ', () => {
    // faz os its (testes)
})