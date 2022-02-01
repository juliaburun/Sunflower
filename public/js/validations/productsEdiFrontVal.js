window.onload = function(){

    const form = document.querySelector('#formLabel')
    let nombre = document.querySelector('#name');
    let precio = document.querySelector('#price');
    let descuento = document.querySelector('#discount');
    let descripcion = document.querySelector('#description');
    let imagenUno = document.querySelector('#file-1');

 

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

            const nombreValue = nombre.value.trim();
            const cateoriaValue = categoria.value.trim();
            const precioValue = precio.value.trim();
            const descuentoValue = descuento.value.trim();
            const descripcionValue = descripcion.value.trim();
            const imagenUnoValue = imagenUno.value.trim();

            /**VALIDACION NOMBRE PRODUCTO */
            if( nombreValue === '') {
                setError(nombre, 'Debes ingresar un nombre');
            } else {
                setSuccess(nombre);
            }
            /**VALIDACION CATEGORIA */
            if( cateoriaValue === '') {
                setError(categoria, 'Debes ingresar una categoría');
            } else {
                setSuccess(categoria);
            }
            /**VALIDACION PRECIO */
            if( precioValue === '') {
                setError(precio, 'Debes ingresar un precio');
            } else {
                setSuccess(precio);
            }
            /**VALIDACION DESCUENTO */
            if( descuentoValue === '') {
                setError(descuento, 'Debes ingresar un descuento');
            } else {
                setSuccess(descuento);
            }
            /**VALIDACION DESCRIPCION */
            if( descripcionValue === '') {
                setError(descripcion, 'Debes ingresar una descripción');
            } else {
                setSuccess(descripcion);
            }
        };

        validateInputs();
        
    })
 }