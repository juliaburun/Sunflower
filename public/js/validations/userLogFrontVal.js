window.onload = function(){
 
/* const form = document.querySelector('#login-form'); */
const inputs = document.querySelectorAll('#login-form input');
const submitButton = document.querySelector('.boton-enviar');
const pParaError = document.querySelector('input_error')

let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


/* const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "email":
            if (!emailExp.test(e.target.value)){
                document.getElementById('email').classList.add('is-invalid')
                document.querySelector('p.input_error').innerText += 'no es valido el formato'
            }else{
                passUsuario.classList.add('is-valid');
                passUsuario.classList.remove('is-invalid');
            }

        break;

        case "password":
        
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
        
    });


form.addEventListener('submit', (e) => {
    e.preventDefault();
}); */



 //INICIO DE VALIDACIONES
     let form = document.querySelector('#login-form');
     form.email.focus();
 
     form.addEventListener('submit', function (e){
         let errors =[];
 
         //SELECCIONAMOS LOS ELEMENTOS
     let mailUsuario = document.querySelector('#email');
     let passUsuario = document.querySelector('#password');

 
         //NOMBRE DEL USUARIO
         let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (mailUsuario.value == '') {
             errors.push('Debes ingresar un email de usuario');
             mailUsuario.classList.add('is-invalid');
            }else if (!emailExp.test(mailUsuario.value)){
                errors.push('Debes ingresar un email de usuario valido');
         }else{
            mailUsuario.classList.add('is-valid');
            mailUsuario.classList.remove('is-invalid');
             
         };
 
         //CONTRASEÑA DEL USUARIO
         if (passUsuario.value == '') {
             errors.push('Debes ingresar una contraseña');
             passUsuario.classList.add('is-invalid');
         }else{
            passUsuario.classList.add('is-valid');
            passUsuario.classList.remove('is-invalid');
             
         };
        
 
 
 if(errors.length > 0) {
 e.preventDefault();
 let ulErrors = document.querySelector('.errores');
 ulErrors.classList.add('warning');
 ulErrors.innerHTML = '';
     for(let i = 0; i < errors.length; i++){
         ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
     }
 }else{
         form.submit();
     }
 });
 
 }