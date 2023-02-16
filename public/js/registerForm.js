
window.onload = ()=>{
let acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
let acceptedEmails = ['gmail.com', 'hotmail.com', 'outlock.com'];
const name = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const confPass = document.getElementById("confPassErrors");
const form = document.getElementById("form");
const nameErrors = document.getElementById("nameErrors");
const imageErrors = document.getElementById("imageErrors");
const lastNameErrors = document.getElementById("lastNameErrors");
const emailErrors = document.getElementById("emailErrors");
const addressErrors = document.getElementById("addressErrors");
const passwordErrors = document.getElementById("passwordErrors");
const confPassErrors = document.getElementById("confPassErrors");
const categoryErrors = document.getElementById("categoryErrors");




    form.addEventListener("submit", (e)=>{
        e.preventDefault()
    
        let errors=0;

        lastNameErrors.innerHTML =""
        nameErrors.innerHTML =""
        passwordErrors.innerHTML =""
        emailErrors.innerHTML = ""
        imageErrors.innerHTML =""
        confPassErrors.innerHTML =""
        categoryErrors.innerHTML = ""
        addressErrors.innerHTML = ""


        //Verificación nombre, apellido y direccion
        if(name.value === ""){
            errors ++
            nameErrors.innerHTML = `<li style="color: red"> El campo nombre es obligatorio</li>`;
        } else if(!validator.isLength(name.value.trim(), { min: 2, max: 50 })){
            errors++
            nameErrors.innerHTML = `<li style="color: red">Debe tener al menos 2 caracteres </li>`
        };
        if(lastName.value === ""){
            errors ++
            lastNameErrors.innerHTML = `<li style="color: red"> El campo apellido es obligatorio</li>`
        } else if(!validator.isLength(lastName.value.trim(), { min: 2, max: 50 })){
            errors++
            lastNameErrors.innerHTML = `<li style="color: red">Debe tener al menos 2 caracteres </li>`
        };
        if(form.address.value===""){
            errors++
            addressErrors.innerHTML= `<li style="color: red"> El campo dirección es obligatorio </li>`
        }else if (!validator.isLength(form.address.value.trim(), { min: 10 })){
            errors++
            addressErrors.innerHTML = `<li style="color: red"> Ingrese una dirección valida </li>`
        }


        //Verificación email y contraseña 
        if(form.email.value === ""){
            errors ++
            emailErrors.innerHTML = `<li style="color: red"> El campo email es obligatorio</li>`
        } else if(!acceptedEmails.includes(form.email.value)){
            errors++
            emailErrors.innerHTML = `<li style="color: red"> Ingrese un email valido </li>`
        };
        if(form.password.value == ""){
            errors++
            passwordErrors.innerHTML = `<li style="color: red"> El campo Contraseña es obligatorio </li>`
        } else if(!validator.isLength(form.password.value.trim(), { min:8, max:15 })){
            errors++
            passwordErrors.innerHTML = `<li style="color: red"> Debe tener entre 8 y 15 caracteres </li>`
        };
        if(confPass.value!== form.password.value){
            errors++
            confPassErrors.innerHTML =  `<li style="color: red"> Las contraseñas no coinciden, intentelo de nuevo </li>`
        }

        

        //Verificación imagen y categoria 
        if(form.image.value.trim() === ""){
            errors++
            imageErrors.innerHTML = `<li style="color: red"> Imagen de perfil es campo obligatorio </li>`
        } else if(!acceptedExtensions.includes(form.image.value.split('.').pop())){
            errors++
            imageErrors.innerHTML = `<li style="color: red"> Archivos perimitidos .jpg, .png, .gif. jpeg </li>`
        };
        if(form.category.value === ""){
            errors++
            categoryErrors.innerHTML = `<li style="color: red"> Seleccione una categoría </li>`
        }

    
       
       if(errors==0) form.submit();

    });
}
