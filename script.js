document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let nom = document.getElementById("nom");
        let email = document.getElementById("email").value
        let div1 = document.getElementById("dv1")
        let div2 = document.getElementById("dv2")
        let status = true;
        let resultat = document.getElementById("dv3")


        if (nom.value.length < 3) {
            div1.innerHTML = "veuillez entrer un nom d'au moins 3 caractéres";
            status = false;
        } else {
            div1.innerHTML = "";
            status = true;
        }


        if (!/[a-zA_Z0-9]@[a-z]+\.[a-z]{3,}/.test(email)) {
            div2.innerHTML = "veuillez entrer une adresse email valide";
            status = false;
        } else {
            div2.innerHTML = "";
            status = true;
        } if (status) {
            resultat.innerHTML = "Bienvenu " + nom.value + "votre email est " + email;
        }

    })


})
