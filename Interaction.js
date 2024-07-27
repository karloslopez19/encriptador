
let textOriginal = document.getElementById("encriptador").value;

function encriptar(){
    let textoEncriptar = document.getElementById("encriptador").value;
    let vacio = "";
    let textoADesencriptar = textoEncriptar;

    if (textoEncriptar == vacio){
        alert("Debes colocar un texto en minusculas para realizar el encriptado")
    } else if (textoEncriptar.includes("!")  == true) {
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("@") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("·") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("#") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("&") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("/") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("(") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes(")") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("=") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("?") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("¿") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("¡") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("-") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("*") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("+") == true){
        alert("No se permiten caracteres especiales")
     }else if (textoEncriptar.includes("`") == true){
        alert("No se permiten caracteres especiales")
    } else if (textoEncriptar.includes("´") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("^") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("{") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("}") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("[") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("]") == true){
        alert("No se permiten caracteres especiales")
    }else if (textoEncriptar.includes("ç") == true){
        alert("No se permiten caracteres especiales") 
    } else if (textoEncriptar.includes("0") == true){
        alert("No se permiten numeros") 
    } else if (textoEncriptar.includes("1") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("2") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("3") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("4") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("5") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("6") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("7") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("8") == true){
        alert("No se permiten numeros")
    } else if (textoEncriptar.includes("9") == true){
        alert("No se permiten numeros")
    } else {
        let textoEncriptado = textoEncriptar
        .replaceAll(/a/gi, "ai")
        .replaceAll(/e/gi, "enter")
        .replaceAll(/i/gi, "imes") 
        .replaceAll(/o/gi, "ober")
        .replaceAll(/u/gi, "ufat");
    
        document.getElementById("container_muñeco_mensaje").innerHTML = textoEncriptado;

    }
        
        
}

function desencriptar(){
    let textoDesencriptar = document.getElementById("encriptador").value

    document.getElementById("container_muñeco_mensaje").innerHTML = textoDesencriptar;
}






   


