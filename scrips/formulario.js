function validacion_envio_datos(){
            
	var n = document.getElementById('nombre').value;
	var t = document.getElementById('telefono').value;
	var e = document.getElementById('email').value;
	var tx = document.getElementById('texto').value;
	
	console.log(nombre, telefono, email, texto)
	// VALIDACION DE DATOS
	var emailValido =  /@/;
	var phoneValido =  /[0-9]/;
	if (e.length != 0 && t.length != 0 && n.length != 0 && tx.length != 0)
	{
		if(!emailValido.test(e)){
			alert('El formato del email es inválido!');
			return true;
		}		
		if (!phoneValido.test(t)){
			alert('El formato del teléfono es inválido, debe ser numerico!');
			return true;
		} 
	} else {
		alert('Falta información en el formulario');
	}
	// alert("Envío exito!")

	// ENVIO DE DATOS A LA BASE DE DATOS
	let cliente = {
        nombre: n,
        telefono: t,
        email: e,
        texto: tx
    }

    let url = "http://127.0.0.1:5000/clientes"
   
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
			console.error(err);
            alert("Error al grabar" )
        })

	console.log(cliente)

	// alert("Detener?")
} 

