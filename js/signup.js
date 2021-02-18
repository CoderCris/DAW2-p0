import * from db

const form = document.getElementById('newUserForm_id')

form.addEventListener('submit', (e) => {

  var usr = document.getElementById('newUser_id').value;
  var pass = document.getElementById('newPass_id').value;
  var mail = document.getElementById('newMail_id').value;
  var phone = document.getElementById('newTlfn_id').value;
  let messages = []

  if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      messages.push("You have entered an invalid email address!");
      e.preventDefault()
  }

  if(! phone == null && ! /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))
  {
    alert("Numero no válido");
    return false;
  }
})
