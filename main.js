
let nombre = document.getElementById("name");
let apellido = document.getElementById("apellido");
let age = document.getElementById("age");
let fAge = document.getElementById("fAge");
let idd = document.getElementById("idd");
let dIp = document.getElementById("dIp");
let dMc = document.getElementById("dMc");
let phone = document.getElementById("phone");
let form = document.getElementById("form")
let alerta = document.getElementById("alerta");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let warnings = "";
    alerta.innerHTML = "";
    let entrar = false;
    let regex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    let regexage = /^[0-9]+$/;
    let regexF = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    let regexIdd = /^[0-9]+$/;
    let regexdIp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let regexdMc = /^[a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}$/;
    let regexPn = /\d{4}\-\d{3}\-\d{2}\-\d{2}/
    
    if (nombre.value.length == 0 || regex.test(nombre.value) == false) {
        warnings += `Introduzca el nombre correctamente <br>`;
        entrar = true;
    };
    if (apellido.value.length == 0 || regex.test(apellido.value) == false) {
        warnings += `Introduzca el apellido correctamente <br>`;
        entrar = true;
    };
    if (age.value.length == 0 || regexage.test(age.value) == false) {
        warnings += `Introduzca la edad correctamente <br>`;
        entrar = true;
    };
    if (fAge.value.length == 0 || regexF.test(fAge.value) == false) {
        warnings += `Introduzca la Fecha de Nacimiento correctamente <br>`;
        entrar = true;
    };
    
    if (idd.value.length == 0 || regexIdd.test(idd.value) == false) {
        warnings += `Introduzca la Cedula correctamente <br>`;
        entrar = true;
    };
    if (dIp.value.length == 0 || regexdIp.test(dIp.value) == false) {
        warnings += `Introduzca el Ipv-4 correctamente <br>`;
        entrar = true;
    };
    if (dMc.value.length == 0 || regexdMc.test(dMc.value) == false) {
        warnings += `Introduzca la Direccion Mac correctamente <br>`;
        entrar = true;
    };
    if (phone.value.length == 0 || regexPn.test(phone.value) == false) {
        warnings += `Introduzca el numero de telefono correctamente <br>`;
        entrar = true;
    };
    if(entrar){
        alerta.innerHTML = warnings
    }else{
        alerta.innerHTML = "Enviado"
    }
    /*
    console.log(warnings)
    console.log(phone.value.length == 0)
    console.log(regexage.test(phone.value) == false)
    */
})


