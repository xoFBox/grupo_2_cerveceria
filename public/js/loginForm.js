window.onload= ()=>{
    const form = document.getElementById("loginForm");
    const emailError = document.getElementById("emailError");
    const acceptedEmails = ['gmail.com', 'hotmail.com', 'outloock.com', 'yahoo.com', 'yahoo.com.ar'];
    const passwordError = document.getElementById("passwordError");
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let errors = 0
        emailError.innerHTML = ""
        passwordError.innerHTML = ""

        if(validator.isEmpty(form.email.value)){
            errors++
            emailError.innerHTML = `<li style="color: red"> El campo email es obligatorio</li>`
        } else if(!acceptedEmails.includes(form.email.value.split('@')[1])){
            errors++
            emailError.innerHTML = `<li style="color: red"> Ingrese mail valido</li>`
        };
        if(validator.isEmpty(form.password.value)){
            errors++
            passwordError.innerHTML = `<li style="color: red"> El campo contraseña es obligatorio</li>`
        } else if(!validator.isLength(form.password.value.trim(), { min:8, max:15 })){
            errors++
            passwordError.innerHTML = `<li style="color: red"> Debe tener entre 8 y 15 caracteres </li>`
        };
        if(errors===0) form.submit()

    })
}