let numeroSecreto = 0;
let intentos      = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);

function AsignarTextoElemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto)
        {
            AsignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else
        {
            if (numeroDeUsuario > numeroSecreto)
                {AsignarTextoElemento('p','El numero secreto es menor');}
            else
                {{AsignarTextoElemento('p','El numero secreto es mayor');}}

            intentos++;    
            limpiarCarja('#ValorUsuario');
        }

    return;
}

function limpiarCarja(elemento)
{
    document.querySelector(elemento).value = '';
}

function generarNumeroSecreto()
{
    console.log(listaNumerosSorteados);
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    //Validar si se sorteo todos los numeros
    if (listaNumerosSorteados.length === numeroMaximo)
    {
        AsignarTextoElemento('p','Upps, Hemos sorteados todos los numeros');
    }
    else
    {
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        } else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


    
}

function condicionesIniciales()
{
    AsignarTextoElemento('h1','Juego del Numero Secreto');
    AsignarTextoElemento('p',`Indica un numero del 1 a ${numeroMaximo}`);
    //Limipar la caja
    limpiarCarja('#ValorUsuario');
    //Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Reiniciar contados intentos
    intentos = 1;
    //Disabled boton
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego()
{        
    //Indicar mensaje de intervalo
    condicionesIniciales();    
}

condicionesIniciales();