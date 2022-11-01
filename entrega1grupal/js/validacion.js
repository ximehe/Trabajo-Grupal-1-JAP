function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//VALIDAR DATOS

function validacionDatos(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var terminos = document.getElementById("terminos").checked;    
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Ingrese un nombre válido");
        return false;        
    }
    else if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
        alert("Ingrese un apellido válido");
        return false;
    }
    else if(!re.exec(email)){
        alert("Ingrese un email válido(debe contener un arroba '@' y un punto '.'");
        return false;
    }
    else if (password1 == null || password1.length < 6 || /^\s+$/.test(password1)){
        alert("Ingrese una contraseña válida (mínimo 6 carácteres)");
        return false;
    }
    else if (password2 == null || password2.length < 6 || /^\s+$/.test(password2)){
        alert("Vuelva a repetir la contraseña");
        return false;
    }
    else if (!terminos){
        alert("Debe aceptar los términos para continuar");
        return false;
    }
    else if (password1 != password2){
        alert("Las contraseñas no coinciden");
        return false;
    }
    else {
        return true;
    }
}

document.getElementById("regBtn").addEventListener("click", function(){

    if (!validacionDatos()) 
    {
        showAlertError();    
    }
    else {
        showAlertSuccess();   
    }
})