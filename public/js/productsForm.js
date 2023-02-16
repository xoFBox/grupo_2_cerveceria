
let acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];

const categorySelect = document.getElementById('pCategory')
const form = document.getElementById('productCreationForm');
const nameErrors = document.getElementById('nameErrors')
const descriptionErrors = document.getElementById('descriptionErrors')
const categoryErrors = document.getElementById('categoryErrors')
const priceErrors = document.getElementById('priceErrors')
const ibuErrors = document.getElementById('ibuErrors')
const alcErrors = document.getElementById('alcErrors')


const ibuAlcVisibility = () =>{
    if(categorySelect.value === "1") {
        document.querySelector('section').style.display = "flex"
    } else {
        document.querySelector('section').style.display = "none"
        document.getElementById('IBU').value = ""
        document.getElementById('ALC').value = ""
    }
}

ibuAlcVisibility();

categorySelect.addEventListener('change', ibuAlcVisibility)

form.addEventListener('submit', e =>{
    e.preventDefault();

    let errorCount = 0;

    nameErrors.innerHTML = ""
    descriptionErrors.innerHTML = ""
    imageErrors.innerHTML = ""
    categoryErrors.innerHTML = ""
    priceErrors.innerHTML = ""
    ibuErrors.innerHTML = ""
    alcErrors.innerHTML = ""

    // Name input validation
    if (form.name.value === "") {
        errorCount ++
        nameErrors.innerHTML += `<li style="color: red"> Nombre de producto es campo obligatorio </li>`
    } else if (!validator.isLength(form.name.value.trim(), { min: 3, max: 50 })){
        errorCount ++
        nameErrors.innerHTML += `<li style="color: red"> Debe contener entre 5 y 50 caracteres</li>`
    } 


    // Description input validations
    if(form.description.value.trim() === ""){
        errorCount ++
        descriptionErrors.innerHTML += `<li style="color: red"> Descripcion de producto es campo obligatorio </li>`
    } else if(!validator.isLength(form.description.value.trim(), { min: 20, max: 200 })){
        errorCount ++
        descriptionErrors.innerHTML += `<li style="color: red"> Debe contener al menos 20 caracteres</li>`
    }

    // Image input validations
    if(form.image.value.trim() === ""){
        errorCount ++
        imageErrors.innerHTML += `<li style="color: red"> Imagen de producto es campo obligatorio </li>`
    } else if(!acceptedExtensions.includes(form.image.value.split('.').pop())){
        errorCount ++
        imageErrors.innerHTML += `<li style="color: red"> Extension de archivo invalida</li>`
    }

    // Catefgory input validation
    if(form.category.value === "Selecciona la Categoría"){
        errorCount ++
        categoryErrors.innerHTML += `<li style="color: red"> Categoria de producto es campo obligatorio </li>`
    }

    // IBU input validfation

    if (form.category.value = "1"){
        if(form.IBU.value === "") {
            errorCount++
            ibuErrors.innerHTML += `<li style="color: red"> IBU de producto es campo obligatorio en cervezas</li>`
        } else if(!validator.isNumeric(form.IBU.value)){
            errorCount++
            ibuErrors.innerHTML += `<li style="color: red"> IBU debe ser un numero valido</li>`
        }

        if(form.ALC.value === "") {
            errorCount++
            alcErrors.innerHTML += `<li style="color: red"> ALC de producto es campo obligatorio en cervezas</li>`
        } else if(!validator.isNumeric(form.ALC.value)){
            errorCount++
            alcErrors.innerHTML += `<li style="color: red"> ALC debe ser un numero valido</li>`
        }
    }
    
    // Price Input validation
    if(form.price.value === ""){
        errorCount ++
        priceErrors.innerHTML += `<li style="color: red"> Precio de producto es campo obligatorio </li>`
    } else if(!validator.isNumeric(form.price.value)){
        errorCount ++
        priceErrors.innerHTML += `<li style="color: red"> Ingrese un precio valido </li>`
    }

    if (errorCount === 0) form.submit();
})
