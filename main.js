let form = document.querySelector('form')
let contain = document.querySelectorAll('.general_con')
let inputs = document.querySelectorAll('input')

let inputWrap = document.querySelectorAll('.input_container')


form.addEventListener('submit', e => {
    e.preventDefault()

    let firstName = inputs['0'].value
    let lastName = inputs[1].value
    let email = inputs[2].value
    let password = inputs[3].value

    if (firstName.trim() === '') {
       addErro('0', 'First Name cannot be empty')
    } else {
        removeErro('0')
    }

    if (lastName.trim() === '') {
        addErro('1', 'Last Name cannot be empty')
     } else {
         removeErro('1')
     }

     if (email.trim() === '') {
        addErro('2', 'Email cannot be empty')
     } else if (!valid(email)) {
        addErro('2', 'Looks like this is not an email')
     } else {
         removeErro('2')
     }

     if (password.trim() === '') {
        addErro('3', 'Password cannot be empty')
     } else {
         removeErro('3')
     }
})

function addErro(field, message) {
    let formControl = inputWrap[field].parentNode
    formControl.classList.add('erro')
    let small = inputWrap[field].parentNode.querySelector('span')
    small.innerHTML = message
}

function removeErro(field) {
    let formControl = inputWrap[field].parentNode
    formControl.classList.remove('erro')
}

function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}
