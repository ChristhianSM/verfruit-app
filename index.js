import { calcularDiaMartes } from "./js/martes.js";

//Constantes
// export let hectareaje = 10;
// export let margenError = 0.06;
export const terreno = 1170;

// document.querySelector(".hectareaje").value = hectareaje;

bloquearCampos();

document.querySelector("#calcular").addEventListener("click", calcularProgramacion)

function calcularProgramacion(e){
    e.preventDefault();

    //Variables de las cajas de texto
    const hectareaje = Number(document.querySelector(".hectareaje").value);
    const margenError = Number(document.querySelector(".margenError").value);

    if (!hectareaje || !margenError) {
        alert("Por favor ingresar el hectareaje y margen de error")
    }

    //Variables de los campos
    const modulo4lunes = parseInt(document.querySelector(".modulo4lunes").value);
    const modulo3lunes = parseInt(document.querySelector(".modulo3lunes").value);
    const modulo2lunes = parseInt(document.querySelector(".modulo2lunes").value);
    const modulo1lunes = parseInt(document.querySelector(".modulo1lunes").value);

    if (modulo4lunes) {
        //Deshabilitar los campos
        document.querySelector(".modulo3lunes").disabled = true;
        document.querySelector(".modulo2lunes").disabled = true;
        document.querySelector(".modulo1lunes").disabled = true;

        const modulo4valor = Math.round((modulo4lunes*2/6)*100)/100;
    
        //For que comprueba los valores
        for (let i = 1; i <= 52; i++) {
            const lineasTotales = modulo4valor + i;
            const has = Math.round((lineasTotales*terreno/10000)*100)/100;
            
            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                    //Llenando campos
                    document.querySelector(".modulo3lunes").value = i;
                    document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                    document.querySelector(".haslunes").value = Math.round(has*100)/100;
                    calcularDiaMartes("Modulo3",i, hectareaje , margenError);
                    break;
            }else {
                if (i === 52) {
                    for (let j = 1; j <= 53; j++) {
                        
                        const lineasTotales =  modulo4valor + i + j;
                        const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                        if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                             //Llenando campos
                            document.querySelector(".modulo3lunes").value = i;
                            document.querySelector(".modulo2lunes").value = j;
                            document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                            document.querySelector(".haslunes").value = Math.round(has*100)/100;
                            calcularDiaMartes("Modulo2",j, hectareaje, margenError);
                            break;
                        }
                    }
                }
            }
        }
    }else if (modulo3lunes) {
        //Deshabilitar los campos
        document.querySelector(".modulo4lunes").disabled = true;
        document.querySelector(".modulo2lunes").disabled = true;
        document.querySelector(".modulo1lunes").disabled = true;

        const modulo3valor = modulo3lunes;
    
        //For que comprueba los valores
        for (let i = 1; i <= 53; i++) {
            const lineasTotales = modulo3valor + i;
            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {
                    //Llenando campos
                    document.querySelector(".modulo2lunes").value = i;
                    document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                    document.querySelector(".haslunes").value = Math.round(has*100)/100;
                    calcularDiaMartes("Modulo2", i, hectareaje, margenError);
                    break;
            }else {
                if (i === 53) {
                    for (let j = 1; j <= 52; j++) {
                        const lineasTotales =  modulo3valor + i + j*1.05;
                        const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                        if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                             //Llenando campos
                            document.querySelector(".modulo2lunes").value = i;
                            document.querySelector(".modulo1lunes").value = j;
                            document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                            document.querySelector(".haslunes").value = Math.round(has*100)/100;
                            calcularDiaMartes("Modulo1", j, hectareaje, margenError);
                            break;
                        }
                    }
                }
            }
        }
    }
    else{
        if (modulo2lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunes").disabled = true;
            document.querySelector(".modulo3lunes").disabled = true;
            document.querySelector(".modulo1lunes").disabled = true;

            const modulo2valor = modulo2lunes;
        
            //For que comprueba los valores
            for (let i = 1; i <= 52; i++) {
                const lineasTotales = modulo2valor + i*1.05;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;
    
                if (has >= (hectareaje - margenError ) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo1lunes").value = i;
                        document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".haslunes").value = Math.round(has*100)/100;
                        calcularDiaMartes("Modulo1", i, hectareaje, margenError);
                        break;
                }else {
                    if (i === 52) {
                        for (let j = 1; j <= 53; j++) {
                            const lineasTotales =  modulo2valor + i*1.05 + j*2/6;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                 //Llenando campos
                                document.querySelector(".modulo1lunes").value = i;
                                document.querySelector(".modulo4lunes").value = j;
                                document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".haslunes").value = Math.round(has*100)/100;
                                calcularDiaMartes("Modulo4", j, hectareaje, margenError);
                                break;
                            }else{
                                if(j ===53){
                                    for (let k = 1; k <= 52; k++) {
                                     const lineasTotales =  modulo2valor + i*1.05 + j*2/6 + k;
                                     const has = Math.round((lineasTotales*terreno/10000)*100)/100;
          
                                     if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                         //Llenando campos
                                         document.querySelector(".modulo1lunes").value = i;
                                         document.querySelector(".modulo4lunes").value = j;
                                         document.querySelector(".modulo3lunes").value = k;
                                         document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                                         document.querySelector(".haslunes").value = Math.round(has*100)/100;
                                         calcularDiaMartes("Modulo3",k, hectareaje, margenError)
                                         break;
                                     }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    else{
        if (modulo1lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunes").disabled = true;
            document.querySelector(".modulo3lunes").disabled = true;
            document.querySelector(".modulo2lunes").disabled = true;
            
            const modulo1valor = modulo1lunes;
        
            //For que comprueba los valores
            for (let i = 1; i <= 53; i++) {
                const lineasTotales = modulo1valor*1.05 + i*2/6;
                const has = Math.round((lineasTotales*terreno/10000)*100)/100;
    
                if (has >= (hectareaje - margenError ) && has <= (hectareaje + margenError)) {
                        //Llenando campos
                        document.querySelector(".modulo4lunes").value = i;
                        document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                        document.querySelector(".haslunes").value = Math.round(has*100)/100;
                        calcularDiaMartes("Modulo4", i, hectareaje, margenError);
                        break;
                }else {
                    if (i === 53) {
                        for (let j = 1; j <= 52; j++) {
                            const lineasTotales =  modulo1valor*1.05 + i*2/6 + j;
                            const has = Math.round((lineasTotales*terreno/10000)*100)/100;
    
                            if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                 //Llenando campos
                                document.querySelector(".modulo4lunes").value = i;
                                document.querySelector(".modulo3lunes").value = j;
                                document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                                document.querySelector(".haslunes").value = Math.round(has*100)/100;
                                calcularDiaMartes("Modulo3", j, hectareaje, margenError);
                                break;
                            }else{
                                if(j ===52){
                                    for (let k = 1; k <= 53; k++) {
                                     const lineasTotales =  modulo1valor*1.05 + i*2/6 + j + k;
                                     const has = Math.round((lineasTotales*terreno/10000)*100)/100;
          
                                     if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                                         //Llenando campos
                                         document.querySelector(".modulo4lunes").value = i;
                                         document.querySelector(".modulo3lunes").value = j;
                                         document.querySelector(".modulo2lunes").value = k;
                                         document.querySelector(".lineastotaleslunes").value = Math.round(lineasTotales*100)/100;
                                         document.querySelector(".haslunes").value = Math.round(has*100)/100;
                                         calcularDiaMartes("Modulo2",k, hectareaje, margenError)
                                         break;
                                     }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}

function bloquearCampos(){
    document.querySelector(".modulo1martes").disabled = true;
    document.querySelector(".modulo2martes").disabled = true;
    document.querySelector(".modulo3martes").disabled = true;
    document.querySelector(".modulo4martes").disabled = true;
    document.querySelector(".modulo1miercoles").disabled = true;
    document.querySelector(".modulo2miercoles").disabled = true;
    document.querySelector(".modulo3miercoles").disabled = true;
    document.querySelector(".modulo4miercoles").disabled = true;
    document.querySelector(".modulo1jueves").disabled = true;
    document.querySelector(".modulo2jueves").disabled = true;
    document.querySelector(".modulo3jueves").disabled = true;
    document.querySelector(".modulo4jueves").disabled = true;
    document.querySelector(".modulo1viernes").disabled = true;
    document.querySelector(".modulo2viernes").disabled = true;
    document.querySelector(".modulo3viernes").disabled = true;
    document.querySelector(".modulo4viernes").disabled = true;
    document.querySelector(".modulo1sabado").disabled = true;
    document.querySelector(".modulo2sabado").disabled = true;
    document.querySelector(".modulo3sabado").disabled = true;
    document.querySelector(".modulo4sabado").disabled = true;

    document.querySelector(".lineastotaleslunes").disabled = true;
    document.querySelector(".lineastotalesmartes").disabled = true;
    document.querySelector(".lineastotalesmiercoles").disabled = true;
    document.querySelector(".lineastotalesjueves").disabled = true;
    document.querySelector(".lineastotalesviernes").disabled = true;
    document.querySelector(".lineastotalessabado").disabled = true;

    document.querySelector(".haslunes").disabled = true;
    document.querySelector(".hasmartes").disabled = true;
    document.querySelector(".hasmiercoles").disabled = true;
    document.querySelector(".hasjueves").disabled = true;
    document.querySelector(".hasviernes").disabled = true;
    document.querySelector(".hassabado").disabled = true;
}
