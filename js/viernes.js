import { terreno } from "../index.js";
import { validarHasAntes } from "./funciones.js";
import { calcularDiaSabado } from "./sabado.js";
 
export function calcularDiaViernes(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorviernes = 52 - anterior;
           document.querySelector(".modulo3viernes").value = modulo3valorviernes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo3valorviernes,"modulo3viernes", terreno, "viernes", "Modulo3", hectareaje, anterior, margenError, calcularDiaSabado);

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorviernes + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2viernes").value = i;
                       document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                       calcularDiaSabado("Modulo2", i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorviernes + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2viernes").value = i;
                               document.querySelector(".modulo1viernes").value = j;
                               document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                               calcularDiaSabado("Modulo1", j, hectareaje, margenError)
                               break;
                           }
                       }
                   }
               }
           }

           break;
       case "Modulo2":
           const modulo2valorviernes = 53 - anterior;
           document.querySelector(".modulo2viernes").value = modulo2valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valorviernes,"modulo2viernes", terreno, "viernes", "Modulo2", hectareaje, anterior, margenError, calcularDiaSabado);

           //For que comprueba los valores
           for (let i = 1; i <= 52; i++) {
               const lineasTotales = modulo2valorviernes + i*1.05;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1viernes").value = i;
                       document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                       calcularDiaSabado("Modulo1", i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valorviernes + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1viernes").value = i;
                               document.querySelector(".modulo4viernes").value = j;
                               document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                               calcularDiaSabado("Modulo4", j, hectareaje, margenError)
                               break;
                           }else{
                            if(j ===53){
                                for (let k = 1; k <= 52; k++) {
                                 const lineasTotales =  modulo2valorviernes + i*1.05 + j*2/6 + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo1viernes").value = i;
                                     document.querySelector(".modulo4viernes").value = j;
                                     document.querySelector(".modulo3viernes").value = k;
                                     document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                                     calcularDiaSabado("Modulo3", k, hectareaje, margenError)
                                     break;
                                 }
                                }
                            }
                        }
                       }
                   }
               }
           }
           
           break;
       case "Modulo1":
           const modulo1valorviernes = 52 - anterior;
           console.log("valorviernes : "+ modulo1valorviernes+" Anterior : " + anterior)
           document.querySelector(".modulo1viernes").value = modulo1valorviernes;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo1valorviernes,"modulo1viernes", terreno, "viernes", "Modulo1", hectareaje, anterior, margenError, calcularDiaSabado);
           
           //For que comprueba los valores
           for (let i = 0; i <= 53; i++) {
               const lineasTotales = modulo1valorviernes*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4viernes").value = i;
                       document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                       calcularDiaSabado("Modulo4", i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valorviernes*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4viernes").value = i;
                               document.querySelector(".modulo3viernes").value = j;
                               document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                               calcularDiaSabado("Modulo3", j, hectareaje, margenError)
                               break;
                           }else{
                            if(j ===52){
                                for (let k = 1; k <= 53; k++) {
                                 const lineasTotales =  modulo1valorviernes*1.05 + i*2/6 + j + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo4viernes").value = i;
                                     document.querySelector(".modulo3viernes").value = j;
                                     document.querySelector(".modulo2viernes").value = k;
                                     document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                                     calcularDiaSabado("Modulo2",k, hectareaje, margenError)
                                     break;
                                 }
                                }
                            }
                        }
                       }
                   }
               }
           }
           break;
       case "Modulo4":
           const modulo4valorviernes = 53 - anterior;
           document.querySelector(".modulo4viernes").value = modulo4valorviernes;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valorviernes*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3viernes").value = i;
                       document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                       calcularDiaSabado("Modulo3", i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo4valorviernes*2/6 + i + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo3viernes").value = i;
                               document.querySelector(".modulo2viernes").value = j;
                               document.querySelector(".lineastotalesviernes").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasviernes").value = Math.round(has*100)/100;
                               calcularDiaSabado("Modulo2", j, hectareaje, margenError)
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