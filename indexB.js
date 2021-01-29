import { calcularDiaMartes } from "./js/moduloB/martes.js";
import { validarHasAntes, encontrarValorModulos, validarMargenError,limpiarCampos } from "./js/moduloB/funciones.js";

//Constantes
// export let hectareaje = 10;
// export let margenError = 0.06;
export const terreno = 1170;

// document.querySelector(".hectareaje").value = hectareaje;

bloquearCampos();

document.querySelector("#calcularB").addEventListener("click", calcularProgramacionB);
document.querySelector("#limpiarB").addEventListener("click", limpiarCampos);

function calcularProgramacionB(e){
    e.preventDefault();

    //Variables de las cajas de texto
    const hectareaje = Number(document.querySelector(".hectareajeB").value);
    const margenError = Number(document.querySelector(".margenErrorB").value);

    if (!hectareaje || !margenError) {
        document.querySelector(".alert-info").classList.remove("hide");
        setTimeout(() => {
            document.querySelector(".alert-info").classList.add("hide");
        }, 4000); 
    }

    //Variables de los campos
    const modulo4lunes = parseInt(document.querySelector(".modulo4lunesB").value);
    const modulo3lunes = parseInt(document.querySelector(".modulo3lunesB").value);
    const modulo2lunes = parseInt(document.querySelector(".modulo2lunesB").value);
    const modulo1lunes = parseInt(document.querySelector(".modulo1lunesB").value);

    if (modulo4lunes) {
        //Deshabilitar los campos
        document.querySelector(".modulo3lunesB").disabled = true;
        document.querySelector(".modulo2lunesB").disabled = true;
        document.querySelector(".modulo1lunesB").disabled = true;

        const modulo4valor = modulo4lunes;
        
        //Funcion que encuentra los valores de las siguientes celdas
        encontrarValorModulos(modulo4valor, "Modulo4","modulo3lunesB","modulo2lunesB","modulo1lunesB","lineastotaleslunesB", "haslunesB", hectareaje, terreno, margenError, calcularDiaMartes);

         //Validar si tenemos que aumentar el margen de error
         validarMargenError(document.querySelector(".modulo3lunesB").value);

    }else 
        if (modulo3lunes) {
        //Deshabilitar los campos
        document.querySelector(".modulo4lunesB").disabled = true;
        document.querySelector(".modulo2lunesB").disabled = true;
        document.querySelector(".modulo1lunesB").disabled = true;

        const modulo3valor = modulo3lunes;

        //Validar que el campo cumpla con el has
        validarHasAntes(modulo3valor,"modulo3lunesB", terreno, "lunes", "Modulo3", hectareaje, 0, margenError, calcularDiaMartes);
        
        //Funcion que encuentra los valores de las siguientes celdas
        encontrarValorModulos(modulo3valor, "Modulo3","modulo2lunesB","modulo1lunesB","modulo4lunesB","lineastotaleslunesB", "haslunesB", hectareaje, terreno, margenError, calcularDiaMartes);

        //Validar si tenemos que aumentar el margen de error
        validarMargenError(document.querySelector(".modulo2lunesB").value);

    }else
        if (modulo2lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunesB").disabled = true;
            document.querySelector(".modulo3lunesB").disabled = true;
            document.querySelector(".modulo1lunesB").disabled = true;

            const modulo2valor = modulo2lunes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo2valor,"modulo2lunesB", terreno, "lunes", "Modulo2", hectareaje, 0, margenError, calcularDiaMartes);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo2valor, "Modulo2","modulo1lunesB","modulo4lunesB","modulo3lunesB","lineastotaleslunesB", "haslunesB", hectareaje, terreno, margenError, calcularDiaMartes);

            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo1lunesB").value);
        }
    else
        if (modulo1lunes) {
            //Deshabilitar los campos
            document.querySelector(".modulo4lunesB").disabled = true;
            document.querySelector(".modulo3lunesB").disabled = true;
            document.querySelector(".modulo2lunesB").disabled = true;
            
            const modulo1valor = modulo1lunes;

            //Validar que el campo cumpla con el has
            validarHasAntes(modulo1valor,"modulo1lunesB", terreno, "lunes", "Modulo1", hectareaje, 0, margenError, calcularDiaMartes);

            //Funcion que encuentra los valores de las siguientes celdas
            encontrarValorModulos(modulo1valor, "Modulo1","modulo4lunesB","modulo3lunesB","modulo2lunesB","lineastotaleslunesB", "haslunesB", hectareaje, terreno, margenError, calcularDiaMartes);    
            
            //Validar si tenemos que aumentar el margen de error
            validarMargenError(document.querySelector(".modulo4lunesB").value);
        }else{
            document.querySelector(".alert-warning").classList.remove("hide");
            setTimeout(() => {
                document.querySelector(".alert-warning").classList.add("hide");
            }, 4000); 
        }
}

function bloquearCampos(){
    document.querySelector(".modulo1martesB").disabled = true;
    document.querySelector(".modulo2martesB").disabled = true;
    document.querySelector(".modulo3martesB").disabled = true;
    document.querySelector(".modulo4martesB").disabled = true;
    document.querySelector(".modulo1miercolesB").disabled = true;
    document.querySelector(".modulo2miercolesB").disabled = true;
    document.querySelector(".modulo3miercolesB").disabled = true;
    document.querySelector(".modulo4miercolesB").disabled = true;
    document.querySelector(".modulo1juevesB").disabled = true;
    document.querySelector(".modulo2juevesB").disabled = true;
    document.querySelector(".modulo3juevesB").disabled = true;
    document.querySelector(".modulo4juevesB").disabled = true;
    document.querySelector(".modulo1viernesB").disabled = true;
    document.querySelector(".modulo2viernesB").disabled = true;
    document.querySelector(".modulo3viernesB").disabled = true;
    document.querySelector(".modulo4viernesB").disabled = true;
    document.querySelector(".modulo1sabadoB").disabled = true;
    document.querySelector(".modulo2sabadoB").disabled = true;
    document.querySelector(".modulo3sabadoB").disabled = true;
    document.querySelector(".modulo4sabadoB").disabled = true;

    document.querySelector(".lineastotaleslunesB").disabled = true;
    document.querySelector(".lineastotalesmartesB").disabled = true;
    document.querySelector(".lineastotalesmiercolesB").disabled = true;
    document.querySelector(".lineastotalesjuevesB").disabled = true;
    document.querySelector(".lineastotalesviernesB").disabled = true;
    document.querySelector(".lineastotalessabadoB").disabled = true;

    document.querySelector(".haslunesB").disabled = true;
    document.querySelector(".hasmartesB").disabled = true;
    document.querySelector(".hasmiercolesB").disabled = true;
    document.querySelector(".hasjuevesB").disabled = true;
    document.querySelector(".hasviernesB").disabled = true;
    document.querySelector(".hassabadoB").disabled = true;
}
