import { terreno } from "../../index.js";
// import { validarMargenError } from "./funciones.js";
 
export function calcularDiaSabado(modulo, anterior, hectareaje, margenError){
    //Deshabilitamos los campos de hectareaje y de margen de error
    document.querySelector('.hectareaje').disabled = true;
    document.querySelector('.margenError').disabled = true;
    document.querySelector('#calcular').disabled = true;


   switch (modulo) {
       case "Modulo3":
           const modulo3valorsabado = 52 - anterior;
           document.querySelector(".modulo3sabado").value = modulo3valorsabado;
       
           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorsabado + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2sabado").value = i;
                       document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hassabado").value = Math.round(has*100)/100;
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorsabado + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2sabado").value = i;
                               document.querySelector(".modulo1sabado").value = j;
                               document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hassabado").value = Math.round(has*100)/100;
                               break;
                           }
                       }
                   }
               }
           }

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo2sabado").value);

           break;
       case "Modulo2":
           const modulo2valorsabado = 53 - anterior;
           document.querySelector(".modulo2sabado").value = modulo2valorsabado;

           //For que comprueba los valores
           for (let i = 1; i <= 52; i++) {
               const lineasTotales = modulo2valorsabado + i*1.05;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1sabado").value = i;
                       document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hassabado").value = Math.round(has*100)/100;
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valorsabado + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1sabado").value = i;
                               document.querySelector(".modulo4sabado").value = j;
                               document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hassabado").value = Math.round(has*100)/100;
                               break;
                           }else{
                            if(j ===53){
                                for (let k = 1; k <= 52; k++) {
                                 const lineasTotales =  modulo2valorsabado + i*1.05 + j*2/6 + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo1sabado").value = i;
                                     document.querySelector(".modulo4sabado").value = j;
                                     document.querySelector(".modulo3sabado").value = k;
                                     document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hassabado").value = Math.round(has*100)/100;
                                     break;
                                 }
                                }
                            }
                        }
                       }
                   }
               }
           }   
           
           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo1sabado").value);

           break;
       case "Modulo1":
           const modulo1valorsabado = 52 - anterior;
           document.querySelector(".modulo1sabado").value = modulo1valorsabado;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo1valorsabado*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4sabado").value = i;
                       document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hassabado").value = Math.round(has*100)/100;
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valorsabado*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4sabado").value = i;
                               document.querySelector(".modulo3sabado").value = j;
                               document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hassabado").value = Math.round(has*100)/100;
                               break;
                           }else{
                            if(j ===52){
                                for (let k = 1; k <= 53; k++) {
                                 const lineasTotales =  modulo1valorsabado*1.05 + i*2/6 + j + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo4sabado").value = i;
                                     document.querySelector(".modulo3sabado").value = j;
                                     document.querySelector(".modulo2sabado").value = k;
                                     document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hassabado").value = Math.round(has*100)/100;
                                     break;
                                 }
                                }
                            }
                        }
                       }
                   }
               }
           }

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo4sabado").value);

           break;
       case "Modulo4":
           const modulo4valorsabado = 53 - anterior;
           document.querySelector(".modulo4sabado").value = modulo4valorsabado;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valorsabado*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3sabado").value = i;
                       document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hassabado").value = Math.round(has*100)/100;
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo4valorsabado*2/6 + i + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo3sabado").value = i;
                               document.querySelector(".modulo2sabado").value = j;
                               document.querySelector(".lineastotalessabado").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hassabado").value = Math.round(has*100)/100;
                               break;
                           }
                       }
                   }
               }
           }

           //Validar si tenemos que aumentar el margen de error
           validarMargenError(document.querySelector(".modulo3sabado").value);

           break;
       default:
           break;
   }
}
