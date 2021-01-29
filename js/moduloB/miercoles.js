import { terreno } from "../../index.js";
import { validarHasAntes, encontrarValorModulos } from "./funciones.js";
import { calcularDiaJueves } from "./jueves.js";
 
export function calcularDiaMiercoles(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorMiercoles = 52 - anterior;
           document.querySelector(".modulo3miercolesB").value = modulo3valorMiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorMiercoles,"modulo3miercolesB", terreno, "martes", "Modulo3", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo3valorMiercoles, "Modulo3","modulo2miercolesB","modulo1miercolesB","modulo4miercolesB","lineastotalesmiercolesB", "hasmiercolesB", hectareaje, terreno, margenError, calcularDiaJueves);
           break;

       case "Modulo2":
           let modulo2valormiercoles = 53 - anterior;
           console.log(modulo2valormiercoles)
           document.querySelector(".modulo2miercolesB").value = modulo2valormiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valormiercoles,"modulo2miercolesB", terreno, "martes", "Modulo2", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo2valormiercoles, "Modulo2","modulo1miercolesB","modulo4miercolesB","modulo3miercolesB","lineastotalesmiercolesB", "hasmiercolesB", hectareaje, terreno, margenError, calcularDiaJueves);

           break;
       case "Modulo1":
           const modulo1valormiercoles = 52 - anterior;
           document.querySelector(".modulo1miercolesB").value = modulo1valormiercoles;

           validarHasAntes(modulo1valormiercoles,"modulo1miercolesB", terreno, "miercoles", "Modulo1", hectareaje, anterior, margenError, calcularDiaJueves);

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo1valormiercoles, "Modulo1","modulo4miercolesB","modulo3miercolesB","modulo2miercolesB","lineastotalesmiercolesB", "hasmiercolesB", hectareaje, terreno, margenError, calcularDiaJueves);

           break;
       case "Modulo4":
           const modulo4valormiercoles = 53 - anterior;
           document.querySelector(".modulo4miercolesB").value = modulo4valormiercoles;

           //Funcion que encuentra los valores de las siguientes celdas
           encontrarValorModulos(modulo4valormiercoles, "Modulo4","modulo3miercolesB","modulo2miercolesB","modulo1miercolesB","lineastotalesmiercolesB", "hasmiercolesB", hectareaje, terreno, margenError, calcularDiaJueves);
           
           break;
       default:
           break;
   }
}


