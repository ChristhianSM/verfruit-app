import { calcularDiaMartes } from "./js/moduloA/martes.js";
import { validarHasAntes, encontrarValorModulos, validarMargenError ,limpiarCampos } from "./js/moduloA/funciones.js";

//Constantes
// export let hectareaje = 10;
// export let margenError = 0.06;
export const terreno = 1170;

// document.querySelector(".hectareaje").value = hectareaje;

bloquearCampos();

document.querySelector("#calcular").addEventListener("click", calcularProgramacion);
document.querySelector("#limpiar").addEventListener("click", limpiarCampos);

function calcularProgramacion(e){
    e.preventDefault();

    //Variables de las cajas de texto
    const hectareaje = Number(document.querySelector(".hectareaje").value);
    const margenError = Number(document.querySelector(".margenError").value);

    if (!hectareaje || !margenError) {
        document.querySelector(".alert-info").classList.remove("hide");
        setTimeout(() => {
            document.querySelector(".alert-info").classList.add("hide");
        }, 4000); 
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

        const modulo4valor = modulo4lunes;
        
        //Funcion que encuentra los valores de las siguientes celdas
        encontrarValorModulos(modulo4valor, "Modulo4","modulo3lunes","modulo2lunes","modulo1lunes","lineastotaleslunes", "haslunes", hectareaje, terreno, margenError, calcularDiaMartes);

        //Validar si tenemos que aumentar el margen de error
        validarMargenError(document.querySelector(".modulo3lunes").value);
        
    }else 
        if (modulo3lunes) {
        //Deshabilitar los campos
        document.querySelector(".modulo4lunes").disabled = true;
        document.querySelector(".modulo2lunes").disabled = true;
        document.querySelector(".modulo1lunes").disabled = true;

        const modulo3valor = modulo3lunes;

        //Validar que el campo cumpla con el has
        validarHasAntes(modulo3valor,"modulo3lunes", terreno, "lunes", "Modulo3", hectareaje, 0, margenError, calcularDiaMartes);
        
        //Funcion que encuentra los valores de las siguientes celdas
        encontrarValorModulos(modulo3valor, "Modulo3","modulo2lunes","modulo1lunes","modulo4lunes","lineastotaleslunes", "haslunes", hectareaje, terreno, margenError, calcularDiaMartes);
        
        //Validar si tenemos que aumentar el margen de error
        validarMargenError(document.querySelector(".modulo2lunes").value);

    }else
        if (modulo2lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunes").disabled = true;
            document.querySelector(".modulo3lunes").disabled = true;
            document.querySelector(".modulo1lunes").disabled = true;

            const modulo2valor = modulo2lunes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo2valor,"modulo2lunes", terreno, "lunes", "Modulo2", hectareaje, 0, margenError, calcularDiaMartes);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo2valor, "Modulo2","modulo1lunes","modulo4lunes","modulo3lunes","lineastotaleslunes", "haslunes", hectareaje, terreno, margenError, calcularDiaMartes);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo1lunes").value);
        }
    else
        if (modulo1lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunes").disabled = true;
            document.querySelector(".modulo3lunes").disabled = true;
            document.querySelector(".modulo2lunes").disabled = true;
            
            const modulo1valor = modulo1lunes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo1valor,"modulo1lunes", terreno, "lunes", "Modulo1", hectareaje, 0, margenError, calcularDiaMartes);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo1valor, "Modulo1","modulo4lunes","modulo3lunes","modulo2lunes","lineastotaleslunes", "haslunes", hectareaje, terreno, margenError, calcularDiaMartes);       
            
            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo4lunes").value);
        }else{
            document.querySelector(".alert-warning").classList.remove("hide");
            setTimeout(() => {
                document.querySelector(".alert-warning").classList.add("hide");
            }, 4000); 
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
