document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const submit = document.getElementById("submit");

    submit.addEventListener("click", function () {
        if (email.value && password.value) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(function (data) {
            const user = firebase.auth().currentUser;
            console.log('User logged in')

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    window.location = "index.html";
                }
            });

            })

            .catch(function (error) {
                console.error(error);
            });
        }
    });
            
        });
