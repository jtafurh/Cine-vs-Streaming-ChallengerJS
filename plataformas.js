function cantidadPlataformas(){
    const plataformas = [];
    if (document.getElementById("netflix").checked){
        plataformas.push({
            nombre: "netflix", 
            precio: 44.90, 
        });
    };
    if (document.getElementById("disney").checked){
        plataformas.push({
            nombre: "disney", 
            precio: 25.90, 
        });
    };
    if(document.getElementById("amazon").checked){
        plataformas.push({
            nombre: "amazon", 
            precio: 16.90, 
        });
    };
    if(document.getElementById("hbo").checked){
        plataformas.push({
            nombre: "hbo", 
            precio: 34.90, 
        });
    }
    return plataformas;
};
