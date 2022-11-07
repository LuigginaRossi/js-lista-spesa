const listaSpesa = ["patate", "zucchine", "melanzane"];
console.log(listaSpesa);

const spesaEl = document.querySelector( ".spesa-container" );
console.log(spesaEl);


let i = 0;

while ( i < listaSpesa.length ) {

    spesaEl.innerHTML = listaSpesa;

    console.log( listaSpesa[ i ] );
    i++;

}

