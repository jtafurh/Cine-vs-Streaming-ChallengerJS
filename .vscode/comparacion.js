function costoMensualCine (cantidadPeliculas) {
    let costoEntrada = 21.70;
    return cantidadPeliculas*costoEntrada;
};

function costoMensualStreaming (plataformasStreaming){
    const preciosStreaming = plataformasStreaming.map(function(plataforma){
        return plataforma.precio
    });
    const sumaPreciosStreaming = preciosStreaming.reduce(function(acumulador,valorActual){
        return acumulador + valorActual
    });
    return sumaPreciosStreaming
}

//Interaccion de HTML con JS
function calcular(){
    const cantidadPeliculasIngresadas = document.getElementById("peliculasCine").value;
    const costoCine = costoMensualCine(cantidadPeliculasIngresadas);

    const plataformasStreamingSeleccionadas = cantidadPlataformas();
    const costoStreaming = costoMensualStreaming(plataformasStreamingSeleccionadas);       

    const resultadoPrecioCine = document.getElementById("resultadoCine");
    resultadoPrecioCine.innerText = "El costo de peliculas en entradas al cine es de S/." + costoCine.toFixed(2) + " soles";
    
    const resultadoPrecioStreaming = document.getElementById("resultadoStreaming");
    resultadoPrecioStreaming.innerText =  "El costo de peliculas en plataformas de streaming es de S/." + costoStreaming.toFixed(2) + " soles";
    
    const resultadoVs = document.getElementById("resultadoVs");
    if (costoCine > costoStreaming){
        resultadoVs.innerText =  "Te conviene usar las plataforma de Streaming";
    } else {
        resultadoVs.innerText =  "Te conviene ir al Cine";
    }
};