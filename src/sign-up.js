document.addEventListener("DOMContentLoaded", function () {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const submit = document.getElementById("submit");

    // adding user info to db
    const db = firebase.firestore()

    function addUser(uid, first, last, usrname){
        db.collection("Users").doc(uid).set({
            firstname: first,
            lastname: last,
            username: usrname,
            user: uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(){
            console.log("User added to database!");
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    // submit button function
    submit.addEventListener("click", function() {
        if(email.value && password.value) {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(function(data){
            const user = firebase.auth().currentUser
            addUser(user.uid, firstname.value, lastname.value, username.value);

            // Reset Values
            firstname.value = '';
            lastname.value = '';
            username.value = '';
            email.value = '';
            password.value = '';
            })
        .catch(function(error) {
            console.error(error);
        });

        
var popup = document.getElementById("success-msg");

var submit = document.getElementById("submit");

var span = document.getElementsByClassName("exit")[0];

  submit.onclick =(this.click, function() {
    popup.style.visibility = "visible";
  })
  span.onclick =("click", function() {
    window.location = "login.html";
  }) 
    }
    });
});