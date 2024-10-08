function eFibonacci(num) {
    let a = 0, b = 1;

    if (num === 0 || num === 1){
        return true;
    }
    
    while (b < num) {
        [a, b] = [b, a + b];
    }

    return b === num;
}

function verificarFibonacci() {
    const input = prompt("Digite um número:");
    const number = parseInt(input);

    let result;

    if (eFibonacci(number)) {
        result = `${number} pertence à sequência de Fibonacci.`;
    } else {
        result = `${number} não pertence à sequência de Fibonacci.`;
    }
    
    document.getElementById("resultado").innerText = result;
}
    
/*-------------------------------------------------------------------------*/

function contarA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    return count;
}

function temAquantosA() {
    const input = prompt("Digite uma string:");
    const string = input.toLowerCase();
    
    const count = contarA(string);
    
    document.getElementById("resultado").innerText = `A letra 'a' aparece ${count} vezes na string.`;
}

/*-------------------------------------------------------------------------*/

function valorSoma(){
    let indice = 12;
    let soma = 0;
    let k = 1;

    while(k < indice){
        k= k + 1;
        soma = soma + k;
    }

    document.getElementById("resultado").innerText = `O valor da soma e: ${soma}`;
    
}

/*-------------------------------------------------------------------------*/

function completandoLogica(){
    document.getElementById("resultado").innerText = `a) 1, 3, 5, 7, 9
    b) 2, 4, 8, 16, 32, 64, 128
    c) 0, 1, 4, 9, 16, 25, 36, 49
    d) 4, 16, 36, 64, 100
    e) 1, 1, 2, 3, 5, 8, 13
    f) 2,10, 12, 16, 17, 18, 19, (não entendi a lógica)`
}

/*-------------------------------------------------------------------------*/

function lampada(){
    
    document.getElementById("resultado").innerText = `-Ligaria o interruptor 1 e deixaria ligado durante uns 15 minutos. 

    -Desligaria o interruptor 1 e ligaria o interruptor 2.

    -Sairia pela primeira vez para ver a lâmpada 1, se a lâmpada 1 estivesse ligada ela seria o interruptor 2. Se ela não estivesse ligada, mas se estivesse quente, ela seria do interruptor 1, mas se ela não estivesse ligada e fria, ela seria do interrupdor 3.
    
    -Voltaria para a sala dos interruptores.

    -Desligaria o interruptor 2 e ligaria o interruptor 3.
    
    -Sairia pela segunda vez para ver a lâmpada 2, se a lâmpada 2 estivesse ligada ela seria o interruptor 3. Se ela não estivesse ligada, mas se estivesse quente, ela seria do interruptor 1, mas se ela estivesse ligada e fria, ela seria do interrouptor 2.

    -Voltaria para a sala dos interruptores.
    
    -Assim eu teria descoberto qual o interruptor de 2 lâmpadas(interruptor 1 e 2) e o interruptor que sobrasse seria da lâmpada 3.`
} 