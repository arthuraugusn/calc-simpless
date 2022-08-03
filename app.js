'use strict';

function calculoSoma (){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao1 = parseFloat(number1) + parseFloat(number2);
   
    resultado.textContent = operacao1;
}

function calculoSubtrair (){
    const number1 = document.getElementById('number1').value;
    const number2= document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao2 = parseFloat(number1) - parseFloat(number2);
   
    resultado.textContent = operacao2;
}

function calculoMultiplicar (){
    const number1 = document.getElementById('number1').value;
    const number2= document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao3 = parseFloat (numero1) * parseFloat (numero2);
  
    resultado.textContent = operacao3;
}

function calculoDividir (){
    const number1 = document.getElementById('number1').value;
    const number2= document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');

    let operacao4 = parseFloat (number1) / parseFloat (number2);
   
    resultado.textContent = operacao4;
}



document.getElementById('somar').addEventListener('click',  calculoSoma);
document.getElementById('subtrair').addEventListener('click', calculoSubtrair);
document.getElementById('multiplicar').addEventListener('click', calculoMultiplicar);
document.getElementById('dividir').addEventListener('click', calculoDividir);
