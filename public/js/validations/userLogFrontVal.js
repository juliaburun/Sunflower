window.onload = function(){
 
    const form = document.querySelector('#login-form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

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

            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();

            if( emailValue === '') {
                setError(email, 'Debe ingresar un email');
            }else if(!validaEmail(emailValue)) {
                setError(email, 'El e-mail no es válido')
            } else {
                setSuccess(email);
            }
            
            if( passwordValue === '') {
                setError(password, 'Debe ingresar una contraseña');
            } else {
                setSuccess(password);
            }
        };

        validateInputs();
        
    })
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
 }