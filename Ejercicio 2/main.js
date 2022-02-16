function winalert() {
    window.alert("Hola Aitor");
}

function winprompt() {
    var person = prompt("Introduce tu nombre");

    if (person != null) {
      document.getElementById("operacion2").innerHTML =
      "Hola " + person + ", que tal estás?";
    }
}

function winconfirm() {
    confirm("Acepta!");
}