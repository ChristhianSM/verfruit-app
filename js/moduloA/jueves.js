import { terreno } from "../../index.js";
import { validarHasAntes,encontrarValorModulos } from "./funciones.js";
import { calcularDiaViernes } from "./viernes.js";
 
export function calcularDiaJueves(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorjueves = 52 - anterior;
           document.querySelector(".modulo3jueves").value = modulo3valorjueves;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorjueves,"modulo3jueves", terreno, "jueves", "Modulo3", hectareaje, anterior, margenError, calcularDiaViernes);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorjueves, "Modulo3","modulo2jueves","modulo1jueves","modulo4jueves","lineastotalesjueves", "hasjueves", hectareaje, terreno, margenError, calcularDiaViernes);

           break;
       case "Modulo2":
           const modulo2valorjueves = 53 - anterior;
           document.querySelector(".modulo2jueves").value = modulo2valorjueves;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valorjueves, "Modulo2","modulo1jueves","modulo4jueves","modulo3jueves","lineastotalesjueves", "hasjueves", hectareaje, terreno, margenError, calcularDiaViernes);

           break;
       case "Modulo1":
           const modulo1valorjueves = 52 - anterior;
           document.querySelector(".modulo1jueves").value = modulo1valorjueves;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo1valorjueves,"modulo1jueves", terreno, "jueves", "Modulo1", hectareaje, anterior, margenError, calcularDiaViernes);

            //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valorjueves, "Modulo1","modulo4jueves","modulo3jueves","modulo2jueves","lineastotalesjueves", "hasjueves", hectareaje, terreno, margenError, calcularDiaViernes);

           break;
       case "Modulo4":
           const modulo4valorjueves = 53 - anterior;
           console.log("anterior"+anterior)
           document.querySelector(".modulo4jueves").value = modulo4valorjueves;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valorjueves, "Modulo4","modulo3jueves","modulo2jueves","modulo1jueves","lineastotalesjueves", "hasjueves", hectareaje, terreno, margenError, calcularDiaViernes);

           break;
       default:
           break;
   }
}