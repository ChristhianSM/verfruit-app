import { hectareaje, margenError, terreno } from "../index.js";
import { calcularDiaViernes } from "./viernes.js";
 
export function calcularDiaJueves(modulo, anterior){
   switch (modulo) {
       case "Modulo3":
           const modulo3valorjueves = 52 - anterior;
           document.querySelector(".modulo3jueves").value = modulo3valorjueves;
       
           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorjueves + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo2",i)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorjueves + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2jueves").value = i;
                               document.querySelector(".modulo1jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo1",j)
                               break;
                           }
                       }
                   }
               }
           }

           break;
       case "Modulo2":
           const modulo2valorjueves = 53 - anterior;
           document.querySelector(".modulo2jueves").value = modulo2valorjueves;

           //For que comprueba los valores
           for (let i = 1; i <= 52; i++) {
               const lineasTotales = modulo2valorjueves + i*1.05;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo1",i)
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valorjueves + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1jueves").value = i;
                               document.querySelector(".modulo4jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo4",j)
                               break;
                           }
                       }
                   }
               }
           }
           
           break;
       case "Modulo1":
           const modulo1valorjueves = 52 - anterior;
           document.querySelector(".modulo1jueves").value = modulo1valorjueves;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo1valorjueves*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo4",i)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valorjueves*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4jueves").value = i;
                               document.querySelector(".modulo2jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo3",j)
                               break;
                           }
                       }
                   }
               }
           }
           break;
       case "Modulo4":
           const modulo4valorjueves = 53 - anterior;
           document.querySelector(".modulo4jueves").value = modulo4valorjueves;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valorjueves*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo3",i)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo4valorjueves*2/6 + i + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo3jueves").value = i;
                               document.querySelector(".modulo2jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo2",j)
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