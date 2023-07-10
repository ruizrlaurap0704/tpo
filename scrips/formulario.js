function validacion_envio_datos(){
            
	var nombre = document.getElementById('nombre').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	var texto = document.getElementById('texto').value;
	
	console.log(nombre, telefono, email, texto)
	// VALIDACION DE DATOS
	var emailValido =  /@/;
	var phoneValido =  /[0-9]/;
	if (email.length != 0 && telefono.length != 0 && nombre.length != 0 && texto.length != 0)
	{
		if(!emailValido.test(email)){
			alert('El formato del email es inválido!');
			return true;
		}		
		if (!phoneValido.test(telefono)){
			alert('El formato del teléfono es inválido, debe ser numerico!');
			return true;
		} 
	} else {
		alert('Falta información en el formulario');
	}
	// alert("Envío exito!")

	// ENVIO DE DATOS A LA BASE DE DATOS
	let cliente = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        texto: texto
    }

    let url = "http://localhost:5000/clientes"
   
	var options = {
        body: JSON.stringify(cliente),
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    }

	// Faltaria agregar async y await
    fetch(url, options)
        .then(res => {
            console.log(res)
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            // window.location.href = "./contacto.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })

		
	console.log(cliente)

	// alert("Detener?")
} 

