
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
let tag = document.getElementsByTagName('input')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let warnings = "";
    alerta.innerHTML = "";
    let entrar = false;
    let regex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    let regexage = /^[0-9]+$/;
    let regexF = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)(19|20)\d{2}$/;
    let regexIdd = /^[0-9]+$/;
    let regexdIp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let regexdMc = /^[a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}$/;
    let regexPhone = /\d{4}\-\d{3}\-\d{2}\-\d{2}/
    let regexArray =[ regex,regex,regexage,regexF,regexIdd,regexdIp,regexdMc,regexPhone ]
    let array1 = ["nombre", "apellido", "edad", "fecha de nacimiento", "cedula", "ip", "mac","Telefono" ]
    for ( let i = 0; i < tag.length; i++){
        if(tag[i].value ==0 || regexArray[i].test(tag[i].value) == false){
            warnings += `Introduzca el ${array1[i]} correctamente <br>`;
            entrar = true;
        };
        if(entrar){
            alerta.innerHTML = warnings
        }else{
            alerta.innerHTML = "Enviado"
        };
    }
})