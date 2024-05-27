# CalculoIMC
🔍 Cálculo de IMC, com base na altura e peso.

💻 Javascript e VS Code.

📚 Dados Utilizados - Imc em adultos em condição;

    - Abaixo de 18.5, abaixo do peso;
    - Entre 18.5 e 25, peso normal;
    - Entre 25 e 30, acima do peso; 
    - Entre 30 e 40, obeso;
    - Acima de 40, obesidade grave.

🚩 Características "Calculo-IMC-class.js":

 - Orientação a Objetos: Utiliza uma classe Pessoa para encapsular dados (nome, peso, altura) e métodos (CalcularIMC e ClassificarImc) relacionados ao IMC.
 - Reutilização de Código: Os métodos CalcularIMC() e ClassificarImc() são métodos de instância da classe Pessoa, o que permite calcular e classificar o IMC de diferentes pessoas de maneira organizada.
 - Legibilidade: O código é estruturado de forma a separar claramente a lógica de cálculo e classificação do IMC do resto da aplicação.
 - Manutenção: Facilita a manutenção e extensão do código, pois as funcionalidades estão encapsuladas dentro da classe Pessoa.

🚩 Características "Calculo-IMC-function.js":

 - Funções Separadas: Utiliza funções independentes (CalcularImc e ClassificarImc) para calcular e classificar o IMC.
 - Modularidade: As funções são separadas da lógica principal e podem ser reutilizadas em diferentes partes do código ou em outros projetos.
 - Simplicidade: É uma abordagem mais simples, sem a necessidade de definir uma classe e métodos de instância.
 - Execução Imediata (IIFE): A função main é uma IIFE, o que significa que é executada imediatamente após ser definida, útil para inicialização rápida e execução única de código.