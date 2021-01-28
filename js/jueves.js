import { terreno } from "../index.js";
import { validarHasAntes } from "./funciones.js";
import { calcularDiaViernes } from "./viernes.js";
 
export function calcularDiaJueves(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorjueves = 52 - anterior;
           document.querySelector(".modulo3jueves").value = modulo3valorjueves;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorjueves,"modulo3jueves", terreno, "jueves", "Modulo3", hectareaje, anterior, margenError, calcularDiaViernes);

        //    //Validar que el campo cumpla con el has
        //    let has = Math.round((modulo3valorjueves*terreno/10000)*100)/100;
        //    console.log(has)
        //    while (has >= hectareaje) {
        //         modulo3valorjueves--;
        //         has = Math.round((modulo3valorjueves*terreno/10000)*100)/100;
                
        //         //Llenado de campos
        //         document.querySelector(".modulo3jueves").value = modulo3valorjueves;
        //         document.querySelector(".lineastotalesjueves").value = Math.round(modulo3valorjueves*100)/100;
        //         document.querySelector(".hasjueves").value = Math.round(has*100)/100;
        //         calcularDiaViernes("Modulo3", modulo3valorjueves+anterior, hectareaje, margenError);
        //         break
        //    }

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorjueves + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo2",i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorjueves + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2jueves").value = i;
                               document.querySelector(".modulo1jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo1",j, hectareaje, margenError)
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

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo1",i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valorjueves + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1jueves").value = i;
                               document.querySelector(".modulo4jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo4",j, hectareaje, margenError)
                               break;
                           }else{
                               if(j ===53){
                                   for (let k = 1; k <= 52; k++) {
                                    const lineasTotales =  modulo2valorjueves + i*1.05 + j*2/6 + k;
                                    const has = Math.round((lineasTotales*terreno/10000)*100)/100;
         
                                    if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                        //Llenando campos
                                        document.querySelector(".modulo1jueves").value = i;
                                        document.querySelector(".modulo4jueves").value = j;
                                        document.querySelector(".modulo3jueves").value = k;
                                        document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                                        document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                                        calcularDiaViernes("Modulo3",k, hectareaje, margenError)
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
           const modulo1valorjueves = 52 - anterior;
           document.querySelector(".modulo1jueves").value = modulo1valorjueves;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo1valorjueves,"modulo1jueves", terreno, "jueves", "Modulo1", hectareaje, anterior, margenError, calcularDiaViernes);

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo1valorjueves*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo4",i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valorjueves*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4jueves").value = i;
                               document.querySelector(".modulo3jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo3",j, hectareaje, margenError)
                               break;
                           }else{
                            if(j ===52){
                                for (let k = 1; k <= 53; k++) {
                                 const lineasTotales =  modulo1valorjueves*1.05 + i*2/6 + j + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo4jueves").value = i;
                                     document.querySelector(".modulo3jueves").value = j;
                                     document.querySelector(".modulo2jueves").value = k;
                                     document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                                     calcularDiaViernes("Modulo2",k, hectareaje, margenError)
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
           const modulo4valorjueves = 53 - anterior;
           console.log("anterior"+anterior)
           document.querySelector(".modulo4jueves").value = modulo4valorjueves;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valorjueves*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3jueves").value = i;
                       document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                       calcularDiaViernes("Modulo3",i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo4valorjueves*2/6 + i + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo3jueves").value = i;
                               document.querySelector(".modulo2jueves").value = j;
                               document.querySelector(".lineastotalesjueves").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasjueves").value = Math.round(has*100)/100;
                               calcularDiaViernes("Modulo2",j, hectareaje, margenError)
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