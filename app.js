
/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

let entrada = document.querySelector('#entrada');
let salida = document.querySelector('#salida');
let btn_encriptar = document.querySelector('#btn_encriptar');
let btn_desencriptar = document.querySelector('#btn_desencriptar');
let btn_copiar = document.querySelector('#btn_copiar');
let btn_borrar = document.querySelector('#btn_borrar');
let txt_default = document.querySelector('#txt_default');

btn_copiar.addEventListener('click', () => {
    salida.select();
    document.execCommand('copy');
    alert('Texto copiado');
});

btn_borrar.addEventListener('click', () => {
    entrada.value = '';
    salida.value = '';
    banderaTextoSalida();
});

btn_encriptar.addEventListener('click', () => {
    encriptar(entrada.value);
    banderaTextoSalida();
});

btn_desencriptar.addEventListener('click', () => {
    desencriptar(entrada.value);
    banderaTextoSalida();
});


function encriptar(cadena){
    cadena = cadena.split('');
    let res = ''
    cadena.forEach((caracter) => {
        switch (caracter) {
            case 'a':
                caracter = 'ai';
                res += caracter;
                break;
            case 'e':
                caracter = 'enter';
                res += caracter;
                break;
            case 'i':
                caracter = 'imes';
                res += caracter;
                break;
            case 'o':
                caracter = 'ober';
                res += caracter;
                break;
            case 'u':
                caracter = 'ufat';
                res += caracter;
                break;
            default:
                res += caracter;
                break;
        }
        
    });
    
    salida.value = res;
    
}

function desencriptar(cadena){
    let res = cadena.replaceAll('ai', 'a');
    res = res.replaceAll('enter', 'e');
    res = res.replaceAll('imes', 'i');
    res = res.replaceAll('ober', 'o');
    res = res.replaceAll('ufat', 'u')
    salida.value = res;
}

function banderaTextoSalida(){
    if(salida.value == ""){
        txt_default.classList.remove('hidden');
    }else{
        txt_default.classList.add('hidden');
    }
}

function validarCaracter(e) {
    let caracter = e.keyCode;

    if (caracter == 8) return true;//tecla borrar
    
    regex = /[a-z]/;

    caracter_final = String.fromCharCode(caracter);

    return regex.test(caracter_final);
}
