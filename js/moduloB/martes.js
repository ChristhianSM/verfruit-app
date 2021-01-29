 import { terreno } from "../../indexB.js";
 import { validarHasAntes, encontrarValorModulos, validarMargenError } from "./funciones.js";
 import { calcularDiaMiercoles } from "./miercoles.js";
 
 export function calcularDiaMartes(modulo, anterior, hectareaje, margenError){

    switch (modulo) {
        
        case "Modulo3":
            let modulo3valorMartes = 52 - anterior;
            document.querySelector(".modulo3martesB").value = modulo3valorMartes;

            //Deshabilitar los campos
            document.querySelector(".modulo4martesB").disabled = true;
            document.querySelector(".modulo2martesB").disabled = true;
            document.querySelector(".modulo1martesB").disabled = true;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo3valorMartes,"modulo3martesB", terreno, "martes", "Modulo3", hectareaje, anterior, margenError, calcularDiaMiercoles);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo3valorMartes, "Modulo3","modulo2martesB","modulo1martesB","modulo4martesB","lineastotalesmartesB", "hasmartesB", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo2martesB").value);

            break;
        case "Modulo2":
            const modulo2valorMartes = 53 - anterior;
            document.querySelector(".modulo2martesB").value = modulo2valorMartes;

             //Validar que el campo cumpla con el has
            validarHasAntes(modulo2valorMartes,"modulo2martesB", terreno, "martes", "Modulo2", hectareaje, anterior, margenError, calcularDiaMiercoles);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo2valorMartes, "Modulo2","modulo1martesB","modulo4martesB","modulo3martesB","lineastotalesmartesB", "hasmartesB", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo1martesB").value);
            
            break;
        case "Modulo1":
            const modulo1valorMartes = 52 - anterior;
            document.querySelector(".modulo1martesB").value = modulo1valorMartes;

             //Validar que el campo cumpla con el has
           validarHasAntes(modulo1valorMartes,"modulo3martesB", terreno, "martes", "Modulo1", hectareaje, anterior, margenError, calcularDiaMiercoles);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorMartes, "Modulo1","modulo4martesB","modulo3martesB","modulo2martesB","lineastotalesmartesB", "hasmartesB", hectareaje, terreno, margenError, calcularDiaMiercoles);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4martesB").value);

            break;
        case "Modulo4":
            const modulo4valorMartes = 53 - anterior;
            document.querySelector(".modulo4martesB").value = modulo4valorMartes;

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo4valorMartes, "Modulo4","modulo3martesB","modulo2martesB","modulo1martesB","lineastotalesmartesB", "hasmartesB", hectareaje, terreno, margenError, calcularDiaMiercoles);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo3martesB").value);

            break;
        default:
            break;
    }
}