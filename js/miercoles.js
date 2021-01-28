import { terreno } from "../index.js";
import { validarHasAntes } from "./funciones.js";
import { calcularDiaJueves } from "./jueves.js";
 
export function calcularDiaMiercoles(modulo, anterior, hectareaje, margenError){
   switch (modulo) {
       case "Modulo3":
           let modulo3valorMiercoles = 52 - anterior;
           document.querySelector(".modulo3miercoles").value = modulo3valorMiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo3valorMiercoles,"modulo3miercoles", terreno, "martes", "Modulo3", hectareaje, anterior, margenError, calcularDiaJueves);

        //    //Validar que el campo cumpla con el has
        //    let has = Math.round((modulo3valorMiercoles*terreno/10000)*100)/100;
        //    while (has >= hectareaje) {
        //         modulo3valorMiercoles--;
        //         has = Math.round((modulo3valorMiercoles*terreno/10000)*100)/100;
                
        //         //Llenado de campos
        //         document.querySelector(".modulo3Miercoles").value = modulo3valorMiercoles;
        //         document.querySelector(".lineastotalesMiercoles").value = Math.round(modulo3valorMiercoles*100)/100;
        //         document.querySelector(".hasMiercoles").value = Math.round(has*100)/100;
        //         calcularDiaJueves("Modulo3", modulo3valorMiercoles+anterior, hectareaje, margenError);
        //         break
        //    }

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo3valorMiercoles + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo2miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo2",i, hectareaje, margenError)
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo3valorMiercoles + i + j*1.05;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                        //    console.log(hectareaje, has, margenError)

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo2miercoles").value = i;
                               document.querySelector(".modulo1miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo1", j, hectareaje, margenError);
                               break;
                           }
                       }
                   }
               }
           }

           break;
       case "Modulo2":
           let modulo2valormiercoles = 53 - anterior;
           console.log(modulo2valormiercoles)
           document.querySelector(".modulo2miercoles").value = modulo2valormiercoles;

           //Validar que el campo cumpla con el has
           validarHasAntes(modulo2valormiercoles,"modulo2miercoles", terreno, "martes", "Modulo2", hectareaje, anterior, margenError, calcularDiaJueves);

        //    let hasmodulo2 = Math.round((modulo2valormiercoles*terreno/10000)*100)/100;
        //    while (hasmodulo2 >= hectareaje) {
        //         modulo2valormiercoles--;
        //         hasmodulo2 = Math.round((modulo2valormiercoles*terreno/10000)*100)/100;
                
        //         //Llenado de campos
        //         document.querySelector(".modulo2Miercoles").value = modulo2valormiercoles;
        //         document.querySelector(".lineastotalesMiercoles").value = Math.round(modulo2valormiercoles*100)/100;
        //         document.querySelector(".hasMiercoles").value = Math.round(hasmodulo2*100)/100;
        //         calcularDiaJueves("Modulo2", modulo2valormiercoles+anterior, hectareaje, margenError);
        //         break
        //    }
           
           //For que comprueba los valores
           for (let i = 1; i <= 52; i++) {
               const lineasTotales = modulo2valormiercoles + i*1.05;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo1miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo1", i, hectareaje, margenError);
                       break;
               }else {
                   if (i === 52) {
                       for (let j = 1; j <= 53; j++) {
                           const lineasTotales =  modulo2valormiercoles + i*1.05 + j*2/6;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo1miercoles").value = i;
                               document.querySelector(".modulo4miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo4", j, hectareaje, margenError);
                               break;
                           }else{
                            if(j ===53){
                                for (let k = 1; k <= 52; k++) {
                                 const lineasTotales =  modulo2valormiercoles + i*1.05 + j*2/6 + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo1miercoles").value = i;
                                     document.querySelector(".modulo4miercoles").value = j;
                                     document.querySelector(".modulo3miercoles").value = k;
                                     document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                                     calcularDiaJueves("Modulo3",k, hectareaje, margenError)
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
           const modulo1valormiercoles = 52 - anterior;
           document.querySelector(".modulo1miercoles").value = modulo1valormiercoles;

           validarHasAntes(modulo1valormiercoles,"modulo1miercoles", terreno, "miercoles", "Modulo1", hectareaje, anterior, margenError, calcularDiaJueves);

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo1valormiercoles*1.05 + i*2/6;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo4miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo4", i, hectareaje, margenError);
                       break;
               }else {
                   if (i === 53) {
                       for (let j = 1; j <= 52; j++) {
                           const lineasTotales =  modulo1valormiercoles*1.05 + i*2/6 + j;
                           const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                           if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                               //Llenando campos
                               document.querySelector(".modulo4miercoles").value = i;
                               document.querySelector(".modulo3miercoles").value = j;
                               document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                               document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                               calcularDiaJueves("Modulo3", j, hectareaje, margenError);
                               break;
                           }else{
                            if(j ===52){
                                for (let k = 1; k <= 53; k++) {
                                 const lineasTotales =  modulo1valormiercoles*1.05 + i*2/6 + j + k;
                                 const has = Math.round((lineasTotales*terreno/10000)*100)/100;
      
                                 if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                     //Llenando campos
                                     document.querySelector(".modulo4miercoles").value = i;
                                     document.querySelector(".modulo3miercoles").value = j;
                                     document.querySelector(".modulo2miercoles").value = k;
                                     document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                                     document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                                     calcularDiaJueves("Modulo2",k, hectareaje, margenError)
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
           const modulo4valormiercoles = 53 - anterior;
           document.querySelector(".modulo4miercoles").value = modulo4valormiercoles;

           //For que comprueba los valores
           for (let i = 1; i <= 53; i++) {
               const lineasTotales = modulo4valormiercoles*2/6 + i;
               const has = Math.round((lineasTotales*terreno/10000)*100)/100;

               if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                       //Llenando campos
                       document.querySelector(".modulo3miercoles").value = i;
                       document.querySelector(".lineastotalesmiercoles").value = Math.round(lineasTotales*100)/100;
                       document.querySelector(".hasmiercoles").value = Math.round(has*100)/100;
                       calcularDiaJueves("Modulo3", i, hectareaje, margenError);
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
                               calcularDiaJueves("Modulo2", j, hectareaje, margenError);
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


