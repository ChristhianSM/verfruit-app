 import { terreno } from "../../index.js";
 import { validarHasAntes, encontrarValorModulos, validarMargenError } from "./funciones.js";
 import { calcularDiaMiercoles } from "./miercoles.js";
 
 export function calcularDiaMartes(modulo, anterior, hectareaje, margenError){

    switch (modulo) {
        
        case "Modulo3":
            let modulo3valorMartes = 52 - anterior;
            document.querySelector(".modulo3martes").value = modulo3valorMartes;

            //Deshabilitar los campos
            document.querySelector(".modulo4martes").disabled = true;
            document.querySelector(".modulo2martes").disabled = true;
            document.querySelector(".modulo1martes").disabled = true;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo3valorMartes,"modulo3martes", terreno, "martes", "Modulo3", hectareaje, anterior, margenError, calcularDiaMiercoles);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo3valorMartes, "Modulo3","modulo2martes","modulo1martes","modulo4martes","lineastotalesmartes", "hasmartes", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo2martes").value);

            break;
        case "Modulo2":
            const modulo2valorMartes = 53 - anterior;
            document.querySelector(".modulo2martes").value = modulo2valorMartes;

             //Validar que el campo cumpla con el has
            validarHasAntes(modulo2valorMartes,"modulo2martes", terreno, "martes", "Modulo2", hectareaje, anterior, margenError, calcularDiaMiercoles);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo2valorMartes, "Modulo2","modulo1martes","modulo4martes","modulo3martes","lineastotalesmartes", "hasmartes", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo1martes").value);
            
            break;
        case "Modulo1":
            const modulo1valorMartes = 52 - anterior;
            document.querySelector(".modulo1martes").value = modulo1valorMartes;

             //Validar que el campo cumpla con el has
           validarHasAntes(modulo1valorMartes,"modulo3martes", terreno, "martes", "Modulo1", hectareaje, anterior, margenError, calcularDiaMiercoles);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorMartes, "Modulo1","modulo4martes","modulo3martes","modulo2martes","lineastotalesmartes", "hasmartes", hectareaje, terreno, margenError, calcularDiaMiercoles);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4martes").value);

            break;
        case "Modulo4":
            const modulo4valorMartes = 53 - anterior;
            document.querySelector(".modulo4martes").value = modulo4valorMartes;

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo4valorMartes, "Modulo4","modulo3martes","modulo2martes","modulo1martes","lineastotalesmartes", "hasmartes", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo3martes").value);

            break;
        default:
            break;
    }
}