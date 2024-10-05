const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {
    Somar(req, res) {
        try {
            const resultado = ServiceExercicio.Somar(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    CalculaSalario(req, res) {
        try {
            const { salarioHora, horasTrabalhadas } = req.body
            // const salarioHora = req.body.salarioHora
            // const horasTrabalhadas = req.body.horasTrabalhadas
            const resultado = ServiceExercicio
                .CalculaSalario(salarioHora, horasTrabalhadas)
            
            res.status(201).json({ msg: resultado })
        } catch (e) {
            res.status(422).json({ msg: e.message })  
        }
    }

    Triangulo(req, res) {
        try {
            const { a, b, c } = req.body
            const resultado = ServiceExercicio.VerificaTriangulos(a,b,c)
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerExercicio()