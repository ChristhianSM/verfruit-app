import { terreno } from "../../index.js";
import { validarHasAntes, encontrarValorModulos, validarMargenError } from "./funciones.js";
import { calcularDiaSabado } from "./sabado.js";
 
export function calcularDiaViernes(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorviernes = 52 - anterior;
           document.querySelector(".modulo3viernes").value = modulo3valorviernes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo3valorviernes,"modulo3viernes", terreno, "viernes", "Modulo3", hectareaje, anterior, margenError, calcularDiaSabado);

            //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorviernes, "Modulo3","modulo2viernes","modulo1viernes","modulo4viernes","lineastotalesviernes", "hasviernes", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo2viernes").value);

           break;
       case "Modulo2":
           const modulo2valorviernes = 53 - anterior;
           document.querySelector(".modulo2viernes").value = modulo2valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valorviernes,"modulo2viernes", terreno, "viernes", "Modulo2", hectareaje, anterior, margenError, calcularDiaSabado);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valorviernes, "Modulo2","modulo1viernes","modulo4viernes","modulo3viernes","lineastotalesviernes", "hasviernes", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo1viernes").value);

           break;
       case "Modulo1":
           const modulo1valorviernes = 52 - anterior;
           document.querySelector(".modulo1viernes").value = modulo1valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo1valorviernes,"modulo1viernes", terreno, "viernes", "Modulo1", hectareaje, anterior, margenError, calcularDiaSabado);
           
           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorviernes, "Modulo1","modulo4viernes","modulo3viernes","modulo2viernes","lineastotalesviernes", "hasviernes", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4viernes").value);

           break;
       case "Modulo4":
           const modulo4valorviernes = 53 - anterior;
           document.querySelector(".modulo4viernes").value = modulo4valorviernes;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valorviernes, "Modulo4","modulo3viernes","modulo2viernes","modulo1viernes","lineastotalesviernes", "hasviernes", hectareaje, terreno, margenError, calcularDiaSabado);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo3viernes").value);

           break;
       default:
           break;
   }
}