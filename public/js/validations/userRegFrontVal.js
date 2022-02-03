window.onload = function(){
 
    const form = document.querySelector('#register_form'); 
    const name = document.querySelector('#first_name');
    const surname = document.querySelector('#last_name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#repassword');
    const avatar = document.querySelector('#file-1')
    
    form.addEventListener('submit', e => {

        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            e.preventDefault();
            errorDisplay.innerText = message;
            inputControl.classList.add('is-invalid');
            inputControl.classList.remove('.is-valid')
        }

        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = '';
            inputControl.classList.add('.is-valid');
            inputControl.classList.remove('is-invalid');
        };


        const validateInputs = () => {
            /*CAPTURA VALORES DE INPUT */
            const nameValue = name.value.trim();
            const surNameValue = surname.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();
            let avatarValue = avatar.value.trim();
            
            /*VALIDACION NAME */
            if(nameValue === '') {
                setError(name, 'Debe ingresar un nombre')
            }else if(nameValue.length < 2){
                setError(name, 'El nombre debe tener al menos 2 caracteres')
            }else{
                setSuccess(name);
            }
            /*VALIDACION SURNAME */
            if(surNameValue === '') {
                setError(surname, 'Debe ingresar un apellido')
            }else if(surNameValue.length < 2){
                setError(surname, 'El apellido debe tener al menos 2 caracteres')
            }else{
                setSuccess(surname);
            }
            /*VALIDACION EMAIL */            
            if( emailValue === '') {
                setError(email, 'Debe ingresar un email');
            }else if(!validaEmail(emailValue)) {
                setError(email, 'El e-mail no es válido')
            } else {
                setSuccess(email);
            }
            /*VALIDACION PHONE */            
            if( phoneValue === '') {
                setError(phone, 'Debe ingresar un teléfono');    
            } else {
                setSuccess(phone);
            }
            /*VALIDACION PASSWORD */            
            if( passwordValue === '') {
                setError(password, 'Debe ingresar una contraseña');
            }else if(passwordValue.length < 8){
                setError(password, 'La contraseña debe tener al menos 8 caracteres')
            } else {
                setSuccess(password);
            }
            /*VALIDACION PASSWORD DOS */
            if( password2Value === '') {
                setError(password, 'Debe ingresar una contraseña');
            }else if(password2Value !== passwordValue){
                setError(password2, 'Las contraseñas no coinciden')
            } else {
                setSuccess(password2);
            }
            /*VALIDACION AVATAR */
            let validExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (avatarValue != ''){
                if(!validExtensions.exec(avatarValue)) {
                    console.log('error archivo')
                    avatarValue = '';
                    setError(avatar, 'las extenciones permitidas son jpg, jpeg, png y gif' )
                }else {
                    setSuccess(avatar);
                }
            }
        };

        validateInputs();
        
    })
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }




 }