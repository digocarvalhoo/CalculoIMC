
// função para o calculo do imc 
function CalcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

// Função para classificar os pesos
function ClassificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade Grave');
    }
}

// função main
(function () {

    const peso = 102
    const altura = 1.81

    const imc = CalcularImc(peso, altura);
    console.log(ClassificarImc(imc));
}
)();