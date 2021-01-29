import { terreno } from "../../index.js";
import { validarHasAntes, encontrarValorModulos, validarMargenError } from "./funciones.js";
import { calcularDiaSabado } from "./sabado.js";
 
export function calcularDiaViernes(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorviernes = 52 - anterior;
           document.querySelector(".modulo3viernesB").value = modulo3valorviernes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo3valorviernes,"modulo3viernesB", terreno, "viernes", "Modulo3", hectareaje, anterior, margenError, calcularDiaSabado);

            //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorviernes, "Modulo3","modulo2viernesB","modulo1viernesB","modulo4viernesB","lineastotalesviernesB", "hasviernesB", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo2viernesB").value);

           break;
       case "Modulo2":
           const modulo2valorviernes = 53 - anterior;
           document.querySelector(".modulo2viernesB").value = modulo2valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valorviernes,"modulo2viernesB", terreno, "viernes", "Modulo2", hectareaje, anterior, margenError, calcularDiaSabado);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valorviernes, "Modulo2","modulo1viernesB","modulo4viernesB","modulo3viernesB","lineastotalesviernesB", "hasviernesB", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo1viernesB").value);

           break;
       case "Modulo1":
           const modulo1valorviernes = 52 - anterior;
           document.querySelector(".modulo1viernesB").value = modulo1valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo1valorviernes,"modulo1viernesB", terreno, "viernes", "Modulo1", hectareaje, anterior, margenError, calcularDiaSabado);
           
           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorviernes, "Modulo1","modulo4viernesB","modulo3viernesB","modulo2viernesB","lineastotalesviernesB", "hasviernesB", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4viernesB").value);

           break;
       case "Modulo4":
           const modulo4valorviernes = 53 - anterior;
           document.querySelector(".modulo4viernesB").value = modulo4valorviernes;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valorviernes, "Modulo4","modulo3viernesB","modulo2viernesB","modulo1viernesB","lineastotalesviernesB", "hasviernesB", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo3viernesB").value);

           break;
       default:
           break;
   }
}