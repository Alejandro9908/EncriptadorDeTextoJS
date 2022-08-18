
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

btn_copiar.addEventListener('click', () => {
    salida.select();
    document.execCommand('copy');
    alert('Texto copiado');
});

btn_encriptar.addEventListener('click', () => {
    encriptar(entrada.value);
});

btn_desencriptar.addEventListener('click', () => {
    desencriptar(entrada.value);
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
