window.onload = function(){

    const formulario = document.querySelector('.container');
    /* const nombreProducto = document.querySelector=('#name');
    */
 
 //INICIO DE VALIDACIONES
     let form = document.querySelector('#register_form');
     form.first_name.focus();
 
     form.addEventListener('submit', function (e){
         let errors =[];
 
         //SELECCIONAMOS LOS ELEMENTOS
     let nombre = document.querySelector('#first_name');
     let apellido = document.querySelector('#last_name');
     let correo = document.querySelector('#email');
     let telefono = document.querySelector('#phone');
     let contrasena1 = document.querySelector('#password');
     let contrasena2 = document.querySelector('#repassword');
     let avatar = document.querySelector('.image_profile');


 
         //NOMBRE DEL USUARIO
         if (nombre.value == '') {
             errors.push('Debes ingresa un nombre');
             nombre.classList.add('is-invalid');
         }else{
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');     
         };

         //APELLIDO DEL USUARIO
         if (apellido.value == '') {
            errors.push('Debes ingresa un apellido');
            apellido.classList.add('is-invalid');
        }else{
            apellido.classList.add('is-valid');
            apellido.classList.remove('is-invalid');           
        };

         //CORREO DEL USUARIO
         if (correo.value == '') {
            errors.push('Debes ingresa un email');
            correo.classList.add('is-invalid');
        }else{
            correo.classList.add('is-valid');
            correo.classList.remove('is-invalid');           
        };

         //TELEFONO DEL USUARIO
         if (telefono.value == '') {
            errors.push('Debes ingresa un telefono');
            telefono.classList.add('is-invalid');
        }else{
            telefono.classList.add('is-valid');
            telefono.classList.remove('is-invalid');           
        };

         //CONTRASEÑA DEL USUARIO
         if (contrasena1.value == '') {
             errors.push('Debes ingresar una contraseña');
             contrasena1.classList.add('is-invalid');//FALTA AGREGAR MAS SEGURIDAD DE CARACTERES
         }else{
            contrasena1.classList.add('is-valid');
            contrasena1.classList.remove('is-invalid');            
         };

         //REPITE CONTRASEÑA DEL USUARIO
         if (contrasena2.value == '') {
            errors.push('Debes confirmar tu contraseña');
            contrasena2.classList.add('is-invalid');
        }else{
           contrasena2.classList.add('is-valid');
           contrasena2.classList.remove('is-invalid');            
        };

             //AVATAR DEL USUARIO   

                        //FALTA VALIDAR EL AVATAR

                        
 
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