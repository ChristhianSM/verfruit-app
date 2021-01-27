import { hectareaje, margenError, terreno } from "../index.js";
import { calcularDiaJueves } from "./jueves.js";
 
export function calcularDiaMiercoles(modulo, anterior){
   switch (modulo) {
       case "Modulo3":
           const modulo3valorMiercoles = 52 - anterior;
           document.querySelector(".modulo3miercoles").value = modulo3valorMiercoles;
       
           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorMiercoles + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo2",i)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorMiercoles + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2miercoles").value = i;
                               document.querySelector(".modulo1miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo1", j);
                               break;
                           }
                       }
                   }
               }
           }

           break;
       case "Modulo2":
           const modulo2valormiercoles = 53 - anterior;
           document.querySelector(".modulo2miercoles").value = modulo2valormiercoles;

           //For que comprueba los valores
           for (let i = 1; i <= 52; i++) {
               const lineasTotales = modulo2valormiercoles + i*1.05;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo1", i);
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valormiercoles + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1miercoles").value = i;
                               document.querySelector(".modulo4miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo4", j);
                               break;
                           }
                       }
                   }
               }
           }
           
           break;
       case "Modulo1":
           const modulo1valormiercoles = 52 - anterior;
           document.querySelector(".modulo1miercoles").value = modulo1valormiercoles;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo1valormiercoles*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo4", i);
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valormiercoles*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4miercoles").value = i;
                               document.querySelector(".modulo2miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo3", j);
                               break;
                           }
                       }
                   }
               }
           }
           break;
       case "Modulo4":
           const modulo4valormiercoles = 53 - anterior;
           document.querySelector(".modulo4miercoles").value = modulo4valormiercoles;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valormiercoles*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo3", i);
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo4valormiercoles*2/6 + i + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo3miercoles").value = i;
                               document.querySelector(".modulo2miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo2", j);
                               break;
                           }
                       }
                   }
               }
           }
           break;
       default:
           break;
   }
}