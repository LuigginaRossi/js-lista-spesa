const listaSpesa = ["patate", "zucchine", "melanzane"];
console.log(listaSpesa);

const spesaEl = document.querySelector( ".spesa-container" );
console.log(spesaEl);


let i = 0;

while ( i < listaSpesa.length ) {

    spesaEl.innerHTML = listaSpesa;

    console.log( listaSpesa[ i ] );
    i++;

    
    const listaEl = document.querySelector( ".lista" );
    console.log(listaEl);

    //creiamo elementi (li):
    const pluto = document.createElement('p');

    //inseriamo qualcosa dentro li:
    pluto.innerHTML +=  listaSpesa[ i ] ;

    //stampiamo elemento completo:
    listaEl.append(pluto);

}

//---------------------

//creiamo elemento con createElement:
const pippo = document.createElement('p');

//inseriamo contenuto nell'elemento:
pippo.innerHTML = "hello world";

//stampiamo elemento completo:
spesaEl.append(pippo);


//---------------------
