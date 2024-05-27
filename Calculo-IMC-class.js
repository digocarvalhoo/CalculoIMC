
// Classe 'Pessoa', para receber dados;
class Pessoa {

    nome;
    peso;
    altura;

    // Método especial dentro da classe que é chamado automaticamente quando um objeto 'Pessoa' é instanciado;
    constructor(nome, peso, altura) {

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    // Método que calcula o Índice de Massa Corporal (IMC) com base nos atributos peso e altura do objeto 'Pessoa';
    CalcularIMC() {
        return this.peso / Math.pow(this.altura, 2.);
    }

    // Método que utiliza o resultado do cálculo do IMC (CalcularIMC()) para retornar uma string indicando a classificação do IMC da pessoa;
    ClassificarImc() {
        const imc = this.CalcularIMC();
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
}

// Instanciação de Objetos e Utilização dos Métodos;
const Rodrigo = new Pessoa('Rodrigo', 102, 1.77);
const Diogo = new Pessoa('Diogo', 65, 1.79);

// Imprimindo o IMC, e sua Classificação;
console.log(`Imc de Diogo: ${Diogo.CalcularIMC().toFixed(2)} - Classificação:${Diogo.ClassificarImc()}`);
console.log(`Imc de Rodrigo: ${Rodrigo.CalcularIMC().toFixed(2)} - Classificação: ${Rodrigo.ClassificarImc()}`);