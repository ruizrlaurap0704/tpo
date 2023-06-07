function validarDatos(){
                
	var email = document.getElementById('user-email').value;
    var phone = document.getElementById('user-phone').value;
	var name = document.getElementById('user-name').value;
	
	var emailValido =  /@/;
	var phoneValido =  /[0-9]/;

	if (email.length != 0 && phone.length != 0 && name.length != 0)
	{
		if(!emailValido.test(email)){
			alert('El formato del email es inválido!');
			return true;
		}
		
		if (!phoneValido.test(phone)){
			alert('El formato del teléfono es inválido, debe ser numerico!');
			return true;
		} 

	} else {
		alert('Falta indicar email, telefono o nombre en el formulario');
	}
} 

