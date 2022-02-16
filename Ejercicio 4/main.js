function validateForm() {
    let x = document.forms["myForm"]["txtNombre"].value;
      if (x == "") {
      alert("El campo nombre debe estar rellenado.");
      return false;
    }

    let chxIdioma = document.forms["myForm"]["chxIdioma"];
    {
      for(y=0;y<chxIdioma.length;y++){
        if(chxIdioma[y]==null){
          alert("Debes seleccionar mínimo uno de los campos.")
        }
      }
    
    }
  }