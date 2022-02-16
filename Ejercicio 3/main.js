function conslog() {
    let myObj = { Nombre: "Aitor", Apellidos : "Carro Sanz" };
    console.log(myObj);
};

function constable(){
    let marcaRopa1 = { Nombre: "Gucci" }
    let marcaRopa2 = { Nombre: "Nike" }
    let marcaRopa3 = { Nombre: "Puma" }

    console.table([marcaRopa1, marcaRopa2, marcaRopa3]);
};

function conswarn() {
    let materiaCEP = { Nombre: "Programación", horasSemanales: "8", nombreProfesor: "Joan Serrano" };
    console.warn(materiaCEP);
};
