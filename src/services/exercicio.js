class ServiceExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) + Number(num2);
    }

    CalculaSalario(valorHora, horasTrabalhadas) {
        if (isNaN(valorHora) || isNaN(horasTrabalhadas)) {
            throw new Error('Informe um número')
        }
        return valorHora * horasTrabalhadas
    }

    VerificaTriangulos(a, b, c) {
        if (!a || !b || !c) {
            return "Não é um triangulo"
        }
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            return 'Nao é um triangulo'
        } else if ((a == b) || (a == c)) {
            return 'Equilatero'
        } else if ((a == b) || (a == c) || (b == c)) {
            return 'Isósceles'
        } else {
            return 'Escaleno'
        }
    }
}

// module.exports = ServiceExercicio -> const exercicio = new ServiceExercicio()
module.exports = new ServiceExercicio()