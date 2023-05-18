function validarDatos(){
                
	var email = document.getElementById('user-email');
    var phone = document.getElementById('user-phone');
	
	var emailValido =  /@/;

	if( emailValido.test(email.value) ){
		alert('El formato del email es válido!');
		return true;
	}else{
		alert('El formato del email es inválido');
		return false;
	}

    if( isNaN(phone.value) ){
        alert('El formato del teléfono es inválido!');
        return true;
    } else {
        alert('El formato del teléfono es válido!');
        return false;
    }

} 

