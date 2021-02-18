var firebaseConfig = {
    apiKey: "AIzaSyBTJqcRNi-OMqWVNTx2UPD5vjmzgaK--W0",
    authDomain: "p0-daw2.firebaseapp.com",
    projectId: "p0-daw2",
    storageBucket: "p0-daw2.appspot.com",
    messagingSenderId: "824089204149",
    appId: "1:824089204149:web:181eccc5e6202fc1ca75fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(mail, pass){

    //var usr = document.getElementsById('logUser').value;
    //var pass = document.getElementsById('logPass').value;

    console.log('Poteto:')
    console.log(mail)
    console.log(pass)

    const promise = auth.createUserWithEmailAndPassword(mail, pass)
    promise.catch(e => alert(e.message));
  }

  function logIn(){
    var usr = document.getElementsById('logUser').value;
    var pass = document.getElementsById('logPass').value;

    const promise = auth.signInWithEmailAndPassword(usr, pass)
    promise.catch(e => alert(e.message));

  }

    function signOut(){
      auth.signOut()

    }
