import * as db from ./db.js

function formsValidation(){
  var usr = document.getElementById('newUser_id').value;
  var pass = document.getElementById('newPass_id').value;
  var mail = document.getElementById('newMail_id').value;
  var phone = document.getElementById('newTlfn_id').value;

  //usr validation
  // ** Validar que no exista ya

  //pass validation
  // ** Validar que es segura

  //mail validation, regexp taken from
  //URL:

  if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      alert("You have entered an invalid email address!");
      return false;
  }

  //phone validation
  // ** Validar que es un numero

  if(! phone == null && ! /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))
  {
    alert("Numero no válido");
    return false;
  }

  console.log('Avocado:');
  console.log(mail);
  console.log(pass);

  //Si todos los datos tienen formato correcto se procede al registrado
  signUp(mail, pass)
}
