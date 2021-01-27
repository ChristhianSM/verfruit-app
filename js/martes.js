 import { hectareaje, margenError, terreno } from "../index.js";
 import { calcularDiaMiercoles } from "./miercoles.js";
 
 export function calcularDiaMartes(modulo, anterior){
    switch (modulo) {
        case "Modulo3":
            const modulo3valorMartes = 52 - anterior;
            document.querySelector(".modulo3martes").value = modulo3valorMartes;

            //Deshabilitar los campos
            document.querySelector(".modulo4martes").disabled = true;
            document.querySelector(".modulo2martes").disabled = true;
            document.querySelector(".modulo1martes").disabled = true;
        
            //For que comprueba los valores
            for (let i = 1; i <= 53; i++) {
                const lineasTotales = modulo3valorMartes + i;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo2martes").value = i;
                        document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                        calcularDiaMiercoles("Modulo2", i);
                        break;
                }else {
                    if (i === 53) {
                        for (let j = 1; j <= 52; j++) {
                            const lineasTotales =  modulo3valorMartes + i + j*1.05;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                            console.log(hectareaje, has, margenError)

                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                //Llenando campos
                                document.querySelector(".modulo2martes").value = i;
                                document.querySelector(".modulo1martes").value = j;
                                document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                                calcularDiaMiercoles("Modulo1", j);
                                break;
                            }
                        }
                    }
                }
            }

            break;
        case "Modulo2":
            const modulo2valorMartes = 53 - anterior;
            document.querySelector(".modulo2martes").value = modulo2valorMartes;

            //For que comprueba los valores
            for (let i = 1; i <= 52; i++) {
                const lineasTotales = modulo2valorMartes + i*1.05;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo1martes").value = i;
                        document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                        calcularDiaMiercoles("Modulo1", i);
                        break;
                }else {
                    if (i === 52) {
                        for (let j = 1; j <= 53; j++) {
                            const lineasTotales =  modulo2valorMartes + i*1.05 + j*2/6;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                //Llenando campos
                                document.querySelector(".modulo1martes").value = i;
                                document.querySelector(".modulo4martes").value = j;
                                document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                                calcularDiaMiercoles("Modulo4", j);
                                break;
                            }
                        }
                    }
                }
            }
            
            break;
        case "Modulo1":
            const modulo1valorMartes = 52 - anterior;
            document.querySelector(".modulo1martes").value = modulo1valorMartes;

            //For que comprueba los valores
            for (let i = 1; i <= 53; i++) {
                const lineasTotales = modulo1valorMartes*1.05 + i*2/6;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo4martes").value = i;
                        document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                        calcularDiaMiercoles("Modulo2", i);
                        break;
                }else {
                    if (i === 53) {
                        for (let j = 1; j <= 52; j++) {
                            const lineasTotales =  modulo1valorMartes*1.05 + i*2/6 + j;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                            console.log(hectareaje, has, margenError)

                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                //Llenando campos
                                document.querySelector(".modulo4martes").value = i;
                                document.querySelector(".modulo2martes").value = j;
                                document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                                calcularDiaMiercoles("Modulo3", j);
                                break;
                            }
                        }
                    }
                }
            }
            break;
        case "Modulo4":
            const modulo4valorMartes = 53 - anterior;
            document.querySelector(".modulo4martes").value = modulo4valorMartes;

            //For que comprueba los valores
            for (let i = 1; i <= 53; i++) {
                const lineasTotales = modulo4valorMartes*2/6 + i;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                if (has >= (hectareaje - margenError - 0.01) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo3martes").value = i;
                        document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                        calcularDiaMiercoles("Modulo3", i);
                        break;
                }else {
                    if (i === 53) {
                        for (let j = 1; j <= 52; j++) {
                            const lineasTotales =  modulo4valorMartes*2/6 + i + j;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                            console.log(hectareaje, has, margenError)

                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                //Llenando campos
                                document.querySelector(".modulo3martes").value = i;
                                document.querySelector(".modulo2martes").value = j;
                                document.querySelector(".lineastotalesmartes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".hasmartes").value = Math.round(has*100)/100;
                                calcularDiaMiercoles("Modulo2", i);
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