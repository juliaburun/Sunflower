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
     let avatar = document.querySelector('#file-1');


 
         //NOMBRE DEL USUARIO OK
        if (nombre.value == '') {
            errors.push('Debes ingresar un nombre');
             nombre.classList.add('is-invalid');
        }else if (nombre.value.length < 2){
            errors.push('El nombre debe tener al menos 2 caracteres')
        }else{
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');     
        };

         //APELLIDO DEL USUARIO OK
        if (apellido.value == '') {
            errors.push('Debes ingresar un apellido');
            apellido.classList.add('is-invalid');
        }else if (nombre.value.length < 2){
            errors.push('El nombre debe tener al menos 2 caracteres')   
        }else{
            apellido.classList.add('is-valid');
            apellido.classList.remove('is-invalid');           
        };

         //CORREO DEL USUARIO OK
         let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (correo.value == '') {
            errors.push('Debes ingresar un email');
            correo.classList.add('is-invalid');
        }else if (!emailExp.test(correo.value)){
            errors.push('Debes ingresar un email valido');
        }else{
            correo.classList.add('is-valid');
            correo.classList.remove('is-invalid');           
        };

         //TELEFONO DEL USUARIO
         if (telefono.value == '') {
            errors.push('Debes ingresar un telefono');
            telefono.classList.add('is-invalid');
        }else{
            telefono.classList.add('is-valid');
            telefono.classList.remove('is-invalid');           
        };

        //CONTRASEÑA DEL USUARIO
         if (contrasena1.value == '') {
             errors.push('Debes ingresar una contraseña');
             contrasena1.classList.add('is-invalid');
        }else if (contrasena1.value.length < 8){
            errors.push('La contraseña debe tener al menos 8 caracteres')
        }else{
            contrasena1.classList.add('is-valid');
            contrasena1.classList.remove('is-invalid');            
        };

        //REPITE CONTRASEÑA DEL USUARIO
        if (contrasena2.value == '') {
            errors.push('Debes confirmar tu contraseña');
            contrasena2.classList.add('is-invalid');
        }else if (contrasena2.value !== contrasena1.value){
            errors.push('Las contraseñas no coinciden')
        }else{
           contrasena2.classList.add('is-valid');
           contrasena2.classList.remove('is-invalid');            
        };

        //AVATAR DEL USUARIO 
        let fileExtensions = '.' + avatar.value.split('.').pop();
        let avatarExp = ['.jpg', '.jpeg', '.png','.gif', '.bmp', '.tiff', '.psd'];
        /* /(\.jpg|\.jpeg|\.png|\.gif)$/i; */
        if (avatar.value.length == 0){
            errors.push('Ingresa una imagen de perfil');
        }else if(fileExtensions != '.'){
        }else{(!avatarExp.includes(fileExtensions)) 
        
        /* if (!avatarExp.test(filepath)) {
            avatar.value = ""
              errors.push('Ingresa un archivo de imagen'); */
        
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