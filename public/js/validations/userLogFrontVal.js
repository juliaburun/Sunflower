window.onload = function(){

    const formulario = document.querySelector('.container');
    /* const nombreProducto = document.querySelector=('#name');
    */
 
 //INICIO DE VALIDACIONES
     let form = document.querySelector('#login-form');
     form.email.focus();
 
     form.addEventListener('submit', function (e){
         let errors =[];
 
         //SELECCIONAMOS LOS ELEMENTOS
     let mailUsuario = document.querySelector('#email');
     let passUsuario = document.querySelector('#password');

 
         //NOMBRE DEL USUARIO
         if (mailUsuario.value == '') {
             errors.push('Debes ingresa un usuario');
             mailUsuario.classList.add('is-invalid');
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