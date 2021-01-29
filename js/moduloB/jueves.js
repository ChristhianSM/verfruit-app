import { terreno } from "../../index.js";
import { validarHasAntes,encontrarValorModulos, validarMargenError } from "./funciones.js";
import { calcularDiaViernes } from "./viernes.js";
 
export function calcularDiaJueves(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorjueves = 52 - anterior;
           document.querySelector(".modulo3juevesB").value = modulo3valorjueves;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorjueves,"modulo3juevesB", terreno, "jueves", "Modulo3", hectareaje, anterior, margenError, calcularDiaViernes);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorjueves, "Modulo3","modulo2juevesB","modulo1juevesB","modulo4juevesB","lineastotalesjuevesB", "hasjuevesB", hectareaje, terreno, margenError, calcularDiaViernes);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo2juevesB").value);

           break;
       case "Modulo2":
           const modulo2valorjueves = 53 - anterior;
           document.querySelector(".modulo2juevesB").value = modulo2valorjueves;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valorjueves, "Modulo2","modulo1juevesB","modulo4juevesB","modulo3juevesB","lineastotalesjuevesB", "hasjuevesB", hectareaje, terreno, margenError, calcularDiaViernes);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo1juevesB").value);

           break;
       case "Modulo1":
           const modulo1valorjueves = 52 - anterior;
           document.querySelector(".modulo1juevesB").value = modulo1valorjueves;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo1valorjueves,"modulo1juevesB", terreno, "jueves", "Modulo1", hectareaje, anterior, margenError, calcularDiaViernes);

            //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorjueves, "Modulo1","modulo4juevesB","modulo3juevesB","modulo2juevesB","lineastotalesjuevesB", "hasjuevesB", hectareaje, terreno, margenError, calcularDiaViernes);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4juevesB").value);

           break;
       case "Modulo4":
           const modulo4valorjueves = 53 - anterior;
           console.log("anterior"+anterior)
           document.querySelector(".modulo4juevesB").value = modulo4valorjueves;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valorjueves, "Modulo4","modulo3juevesB","modulo2juevesB","modulo1juevesB","lineastotalesjuevesB", "hasjuevesB", hectareaje, terreno, margenError, calcularDiaViernes);

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo3juevesB").value);

           break;
       default:
           break;
   }
}