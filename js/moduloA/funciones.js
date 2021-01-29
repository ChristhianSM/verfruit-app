//Funcion para validar si la celda se pasa del valor del has y tenemos que reducir el valor de la celda

export function validarHasAntes(valorModulo, modulo, terreno, dia, moduloSiguienteDia, hectareaje, anterior = 0, margenError, diaSiguiente ){

    //Parametros
    // valorModulo : valor del modulo que corresponde a dicha celda
    // Modulo : Valor para la caja de texto en la interfaz
    // dia : dia del modulo

    //Validar que el campo cumpla con el has
    let has;
    has = moduloARepetir(moduloSiguienteDia, valorModulo, terreno, has);

    while (has >= hectareaje) {
        valorModulo--;
        console.log(valorModulo);
        has = moduloARepetir(moduloSiguienteDia, valorModulo, terreno, has);
        
        //Llenado de campos
        document.querySelector(`.${modulo}`).value = valorModulo;
        document.querySelector(`.lineastotales${dia}`).value = Math.round(valorModulo*100)/100;
        document.querySelector(`.has${dia}`).value = Math.round(has*100)/100;
        diaSiguiente(`${moduloSiguienteDia}`, valorModulo+anterior, hectareaje, margenError);
    }

}

//Funcion para validar de que modulo se trata y aplicar la formula correspondiente
function moduloARepetir(moduloSiguienteDia , valorModulo, terreno , has){
    switch (moduloSiguienteDia) {
        case 'Modulo1':
            has = Math.round(((valorModulo*1.05)*terreno/10000)*100)/100;
            return has;
            break;
        case 'Modulo2':
            has = Math.round(((valorModulo)*terreno/10000)*100)/100;
            return has;
        case 'Modulo3':
            has = Math.round(((valorModulo)*terreno/10000)*100)/100;
            return has;
        default:
            break;
    }
}

// encontrarValorModulos(20, "Modulo3", "modulo2lunes", "modulo1lunes","lineastotaleslunes", "haslunes", 5.78, 1140, 0.04, calcularSiguienteDia)

//Funcion para calcular la formula general
export function encontrarValorModulos(moduloValor,
                                nombreModulo,
                                nombreModulotxt,
                                nombreModuloOpcionaltxt,
                                nombreModuloOpcionaltxt2,
                                nombreLineasTotalestxt,
                                nombreHastxt, 
                                hectareaje,
                                terreno, 
                                margenError, calcularSiguienteDia){
    switch (nombreModulo) {
        case "Modulo4":
            // const capacidadModuloSiguiente = 52;
            // const celdaSiguiente = "Modulo3";
            // const celdaSiguienteOpcional = "Modulo2";
            calcularValoresModulosSiguientes(52, moduloValor,nombreModulo, nombreModulotxt,nombreModuloOpcionaltxt,nombreModuloOpcionaltxt2,nombreLineasTotalestxt,nombreHastxt,hectareaje, terreno, margenError, calcularSiguienteDia,"Modulo3", "Modulo2", "Modulo1");
            break;
        case "Modulo3":
            // const capacidadModuloSiguiente = 53;
            // const celdaSiguiente = "Modulo2";
            // const celdaSiguienteOpcional = "Modulo1";
            calcularValoresModulosSiguientes(53, moduloValor,nombreModulo, nombreModulotxt,nombreModuloOpcionaltxt,nombreModuloOpcionaltxt2,nombreLineasTotalestxt,nombreHastxt,hectareaje, terreno, margenError, calcularSiguienteDia,"Modulo2", "Modulo1","Modulo4" );
            break;
        case "Modulo2":
            // const capacidadModuloSiguiente = 52;
            // const celdaSiguiente = "Modulo1";
            // const celdaSiguienteOpcional = "Modulo4";
            calcularValoresModulosSiguientes(52, moduloValor,nombreModulo, nombreModulotxt,nombreModuloOpcionaltxt,nombreModuloOpcionaltxt2,nombreLineasTotalestxt,nombreHastxt,hectareaje, terreno, margenError, calcularSiguienteDia,"Modulo1", "Modulo4", "Modulo3" );
        break;
        case "Modulo1":
            // const capacidadModuloSiguiente = 53;
            // const celdaSiguiente = "Modulo4";
            // const celdaSiguienteOpcional = "Modulo1";
            calcularValoresModulosSiguientes(53, moduloValor,nombreModulo, nombreModulotxt,nombreModuloOpcionaltxt,nombreModuloOpcionaltxt2,nombreLineasTotalestxt,nombreHastxt,hectareaje, terreno, margenError, calcularSiguienteDia,"Modulo4", "Modulo3","Modulo2");
        break;
        default:
            break;
    }                                

}

function calcularValoresModulosSiguientes(capacidadModuloSiguiente, 
                                            moduloValor,nombreModulo,
                                            nombreModulotxt, 
                                            nombreModuloOpcionaltxt,
                                            nombreModuloOpcionaltxt2,
                                            nombreLineasTotalestxt,
                                            nombreHastxt,
                                            hectareaje, 
                                            terreno, 
                                            margenError, calcularSiguienteDia, celdaSiguiente, celdaSiguienteOpcional, celdaSiguienteOpcional2){
    //For que comprueba los valores
    for (let i = 0; i <= capacidadModuloSiguiente; i++) {

        let lineasTotales;
       
        switch (nombreModulo) {
            case "Modulo4":
                lineasTotales = moduloValor*2/6 + i;
                break;
            case "Modulo3":
                lineasTotales = moduloValor + i;
                break;
            case "Modulo2":
                lineasTotales = moduloValor + i*1.05;
                break;
            case "Modulo1":
                lineasTotales = moduloValor*1.05 + i*2/6;
                break;
            default:
                break;
        }
        const has = Math.round((lineasTotales*terreno/10000)*100)/100;

        // 9.94  - 10 -  10.06 
        if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)) {

                //Llenando campos
                document.querySelector(`.${nombreModulotxt}`).value = i;
                console.log(i)
                document.querySelector(`.${nombreLineasTotalestxt}`).value = Math.round(lineasTotales*100)/100;
                document.querySelector(`.${nombreHastxt}`).value = Math.round(has*100)/100;
                calcularSiguienteDia(`${celdaSiguiente}`,i, hectareaje , margenError);
                break;
        }else {
            if (i === capacidadModuloSiguiente) {

                //Cambiar la capacidad del siguiente modulo
                const capacidad =  capacidadModuloSiguiente == 53 ? 52 : 53;

                for (let j = 1; j <= capacidad ; j++) {
                    switch (nombreModulo) {
                        case "Modulo4":
                            lineasTotales =  moduloValor*2/6 + i + j;
                            break;
                        case "Modulo3":
                            lineasTotales =  moduloValor + i + j*1.05;
                            break;
                        case "Modulo2":
                            lineasTotales =  moduloValor + i*1.05 + j*2/6 ;
                            break;
                        case "Modulo1":
                            lineasTotales =  moduloValor*1.05 + i*2/6 + j;
                            break;
                        default:
                            break;
                    }
                    const has = Math.round((lineasTotales*terreno/10000)*100)/100;

                    if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){
                         //Llenando campos
                        document.querySelector(`.${nombreModulotxt}`).value = i;
                        document.querySelector(`.${nombreModuloOpcionaltxt}`).value = j;
                        console.log("j : " + j)
                        document.querySelector(`.${nombreLineasTotalestxt}`).value = Math.round(lineasTotales*100)/100;
                        document.querySelector(`.${nombreHastxt}`).value = Math.round(has*100)/100;
                        calcularSiguienteDia(`${celdaSiguienteOpcional}`,j, hectareaje, margenError);
                        break;
                    }else{
                        if(j ===capacidad){
                            const capacidad =  capacidadModuloSiguiente == 53 ? 52 : 53;
                            for (let k = 1; k <= capacidad; k++) {

                                switch (nombreModulo) {
                                    case "Modulo4":
                                        lineasTotales = moduloValor*2/6 + i + j + k*1.05
                                        break;
                                    case "Modulo3":
                                        lineasTotales = moduloValor + i + j*1.05 + k*2/6
                                        break;
                                    case "Modulo2":
                                        lineasTotales = moduloValor + i*1.05 + j*2/6 + k
                                        break;
                                    case "Modulo1":
                                        lineasTotales = moduloValor + i*2/6 + j + k
                                        break;
                                    default:
                                        break;
                                }
                        
                             const has = Math.round((lineasTotales*terreno/10000)*100)/100;
  
                             if (has >= (hectareaje - margenError) && has <= (hectareaje + margenError)){

                                 //Llenando campos
                                 document.querySelector(`.${nombreModulotxt}`).value = i;
                                 document.querySelector(`.${nombreModuloOpcionaltxt}`).value = j;
                                 document.querySelector(`.${nombreModuloOpcionaltxt2}`).value = k;
                                 document.querySelector(`.${nombreLineasTotalestxt}`).value = Math.round(lineasTotales*100)/100;
                                 document.querySelector(`.${nombreHastxt}`).value = Math.round(has*100)/100;
                                 calcularSiguienteDia(`${celdaSiguienteOpcional2}`,k, hectareaje, margenError)
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


//Funcion para validar el margen de error
export function validarMargenError(moduloSiguientetxt ) {
    if(moduloSiguientetxt === "" ){
        document.querySelector(".alert").classList.remove("hide");
        setTimeout(() => {
            document.querySelector(".alert").classList.add("hide");
        }, 4000); 
    }
}

//Funcion de limpiar campos 
export function limpiarCampos(e){
    e.preventDefault();

    //Desbloqueando campos
    document.querySelector(".modulo1lunes").disabled = false;
    document.querySelector(".modulo2lunes").disabled = false;
    document.querySelector(".modulo3lunes").disabled = false;
    document.querySelector(".modulo4lunes").disabled = false;
    document.querySelector(".hectareaje").disabled = false;
    document.querySelector(".margenError").disabled = false;

    //Limpiando Campos
    document.querySelector(".modulo1lunes").value = "";
    document.querySelector(".modulo2lunes").value = "";
    document.querySelector(".modulo3lunes").value = "";
    document.querySelector(".modulo4lunes").value = "";

    document.querySelector(".modulo1martes").value = "";
    document.querySelector(".modulo2martes").value = "";
    document.querySelector(".modulo3martes").value = "";
    document.querySelector(".modulo4martes").value = "";

    document.querySelector(".modulo1miercoles").value = "";
    document.querySelector(".modulo2miercoles").value = "";
    document.querySelector(".modulo3miercoles").value = "";
    document.querySelector(".modulo4miercoles").value = "";

    document.querySelector(".modulo1jueves").value = "";
    document.querySelector(".modulo2jueves").value = "";
    document.querySelector(".modulo3jueves").value = "";
    document.querySelector(".modulo4jueves").value = "";

    document.querySelector(".modulo1viernes").value = "";
    document.querySelector(".modulo2viernes").value = "";
    document.querySelector(".modulo3viernes").value = "";
    document.querySelector(".modulo4viernes").value = "";

    document.querySelector(".modulo1sabado").value = "";
    document.querySelector(".modulo2sabado").value = "";
    document.querySelector(".modulo3sabado").value = "";
    document.querySelector(".modulo4sabado").value = "";

    document.querySelector(".lineastotaleslunes").value = "";
    document.querySelector(".lineastotalesmartes").value = "";
    document.querySelector(".lineastotalesmiercoles").value = "";
    document.querySelector(".lineastotalesjueves").value = "";
    document.querySelector(".lineastotalesviernes").value = "";
    document.querySelector(".lineastotalessabado").value = "";

    document.querySelector(".haslunes").value = "";
    document.querySelector(".hasmartes").value = "";
    document.querySelector(".hasmiercoles").value = "";
    document.querySelector(".hasjueves").value = "";
    document.querySelector(".hasviernes").value = "";
    document.querySelector(".hassabado").value = "";

    document.querySelector(".hectareaje").value = "";
    document.querySelector(".margenError").value = "";

    //Habilitamos Boton 
    document.querySelector("#calcular").disabled = false;

}