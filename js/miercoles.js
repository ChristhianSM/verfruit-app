import { terreno } from "../index.js";
import { validarHasAntes, encontrarValorModulos } from "./funciones.js";
import { calcularDiaJueves } from "./jueves.js";
 
export function calcularDiaMiercoles(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorMiercoles = 52 - anterior;
           document.querySelector(".modulo3miercoles").value = modulo3valorMiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorMiercoles,"modulo3miercoles", terreno, "martes", "Modulo3", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorMiercoles, "Modulo3","modulo2miercoles","modulo1miercoles","modulo4miercoles","lineastotalesmiercoles", "hasmiercoles", hectareaje, terreno, margenError, calcularDiaJueves);
           break;

       case "Modulo2":
           let modulo2valormiercoles = 53 - anterior;
           console.log(modulo2valormiercoles)
           document.querySelector(".modulo2miercoles").value = modulo2valormiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valormiercoles,"modulo2miercoles", terreno, "martes", "Modulo2", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valormiercoles, "Modulo2","modulo1miercoles","modulo4miercoles","modulo3miercoles","lineastotalesmiercoles", "hasmiercoles", hectareaje, terreno, margenError, calcularDiaJueves);

           break;
       case "Modulo1":
           const modulo1valormiercoles = 52 - anterior;
           document.querySelector(".modulo1miercoles").value = modulo1valormiercoles;

           validarHasAntes(modulo1valormiercoles,"modulo1miercoles", terreno, "miercoles", "Modulo1", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valormiercoles, "Modulo1","modulo4miercoles","modulo3miercoles","modulo2miercoles","lineastotalesmiercoles", "hasmiercoles", hectareaje, terreno, margenError, calcularDiaJueves);

           break;
       case "Modulo4":
           const modulo4valormiercoles = 53 - anterior;
           document.querySelector(".modulo4miercoles").value = modulo4valormiercoles;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valormiercoles, "Modulo4","modulo3miercoles","modulo2miercoles","modulo1miercoles","lineastotalesmiercoles", "hasmiercoles", hectareaje, terreno, margenError, calcularDiaJueves);
           
           break;
       default:
           break;
   }
}


