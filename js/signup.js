import * from "./db.js"

const form = document.getElementById('newUserForm_id')

form.addEventListener('submit', (e) => {

  var usr = document.getElementById('newUser_id').value;
  var pass = document.getElementById('newPass_id').value;
  var mail = document.getElementById('newMail_id').value;
  var phone = document.getElementById('newTlfn_id').value;

  if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      document.getElementById('newMail_error').innerHTML += '<p>Formato de email incorrecto</p>';
      e.preventDefault()
  }else {
    document.getElementById('newMail_error').innerHTML += '';
  }

  if(! /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone) && phone != "")
  {
    document.getElementById('newTlfn_error').innerHTML += '<p>Numero de telefono incorrrecto</p>';
    e.preventDefault()
  }else {
    document.getElementById('newTlfn_error').innerHTML += '';
  }
})
