window.onload= function proyecto() {
    console.log("dcjfn");
    document.getElementById("cotizacion").addEventListener("submit", function (e) {
    e.preventDefault();
    var valor = document.getElementById("presupuesto").value;
    if (valor == null || isNaN(valor) || /^\s+$/.test(valor)) {
        alert("Por favor, ingrese un valor numérico");
      return false;
    }
  
    valor = document.getElementById("tiempo").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
      alert("Por favor, ingrese el tiempo estimado en el que desea el proyecto");
      return false;
    }
  
    valor = document.getElementById("mensaje").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
      alert("Por favor, ingrese un mensaje");
      return false;
    }
  
    valor = document.getElementById("nombre").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
      alert("Por favor, ingrese un nombre");
      return false;
    }
  
    valor = document.getElementById("email").value;
    if (valor == null || !/^\S+@\S+\.\S+$/.test(valor) || /^\s+$/.test(valor)) {
      alert("El email ingresado no es válido");
      return false;
    }
    })
}
