function somar(num1, num2) {
    return Number(num1) + Number(num2);    
}

function calculaSalario(valorHora, horasTrabalhadas) {
    return valorHora * horasTrabalhadas
}

// Primeira forma
function verificaTriangulos(a, b, c) {
    let resultado
    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        resultado = 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        resultado = 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        resultado = 'Isósceles'
    } else {
        resultado = 'Escaleno'
    }

    return resultado
}

// Segunda forma
function verificaTriangulos2(a, b, c) {
    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        return 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        return 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// module.exports = somar // Exportando default, uma unica função
module.exports = { somar, calculaSalario, verificaTriangulos2 }