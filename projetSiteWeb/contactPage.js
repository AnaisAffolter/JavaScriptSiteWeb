let darkMode = document.querySelector('.darkMode')
darkMode.addEventListener('click', () => {
    let body = document.querySelector('body')
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
    }
})


let form = document.querySelector('form')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Envoi du form detecté !')

    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    errorList.innerHTML = ""
    errorList.classList.remove('visible')
    errorContainer.classList.remove('visible')
    let email = document.querySelector('#email')
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    let pseudo = document.querySelector('#pseudo')

    if (pseudo.value.length < 6) {
        console.log("invalide")
        pseudo.classList.remove('success')
        pseudo.classList.add('invalid')
        errorContainer.classList.add('visible')
        errorList.classList.add('visible')
        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir plus de 6 charactères"
        errorList.appendChild(err)
    } else {
        console.log('valide')
        pseudo.classList.remove('invalid')
        pseudo.classList.add('success')
    }

    if (email.value == '') {
        console.log("invalide")
        email.classList.remove('success')
        email.classList.add('invalid')
        errorContainer.classList.add('visible')
        errorList.classList.add('visible')
        let err = document.createElement('li')
        err.innerText = "Le champ email doit contenir un email valide"
        errorList.appendChild(err)
    } else {
        console.log('valide')
        email.classList.remove('invalid')
        email.classList.add('success')
    }


    let password = document.querySelector('#password')
    let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")

    if (password.value.length < 10 || passCheck.test(password.value) == false) {
        console.log("invalide")
        password.classList.remove('success')
        password.classList.add('invalid')
        errorContainer.classList.add('visible')
        errorList.classList.add('visible')
        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule. chiffre, caractères spéciaux"
        errorList.appendChild(err)
    } else {
        console.log('valide')
        password.classList.remove('invalid')
        password.classList.add('success')
    }

    let password2 = document.querySelector('#password2')

    if (password.value != password2.value) {
        console.log("invalide")
        password2.classList.remove('success')
        password2.classList.add('invalid')
        errorContainer.classList.add('visible')
        errorList.classList.add('visible')
        let err = document.createElement('li')
        err.innerText = "Le champ mot de passe vérification est incorrect"
        errorList.appendChild(err)
    } else {
        console.log('valide')
        password2.classList.remove('invalid')
        password2.classList.add('success')
    }


    if (
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        password2.classList.contains('success')
    ) {
        successContainer.classList.add('visible')
    }
})