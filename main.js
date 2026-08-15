'use strict'

const botaoCalcular = document.getElementById('calcular') //equivalente a definir variável

function botaoCalcular.onclick = calcularIdade () 
{
    const anoNasc = document.getElementById('ano-de-nascimento')
    const caixaResultado = document.getElementById('resultado')
    const anoAtual = 2026

    const idade = anoAtual - anoNasc.value

    caixaResultado.textContent = idade 
} 

botaoCalcular.onclick = calcularIdade

