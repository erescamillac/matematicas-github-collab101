function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if (b === 0) throw new Error("¡División entre CERO!");
    return a / b;
}

sumar(5, 3);
restar(10, 6);