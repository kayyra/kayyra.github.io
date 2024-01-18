function calcularLitros(){
    var elementoKm = document.getElementById("textoKm");
    var textoKm = elementoKm.value;
    var cantKm = Number(textoKm);
    
    var cantLitros = cantKm / 8.8;
    
  
    cantLitros = cantLitros.toFixed(2);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " litros de combustibles "; 
}
