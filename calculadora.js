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

/*--Se agrega funcion para calculo de factorial (desde el Repo-Remoto)--*/
function factorial(n){
    if (n <= 0) return 1;
    return n * factorial(n - 1);
}

sumar(5, 3);
restar(10, 6);
