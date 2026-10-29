let nom = document.getElementById("nom");
let email = document.getElementById("email")
let div1 = document.getElementById("dv1")
let div2 = document.getElementById("dv2")


if (nom.length < 3) {
    div1.innerHTML = "veuillez entrer un nom d'au moins 3 caractéres"
}

if (!/[a-zA_Z0-9-!]@[a-z]+\.[a-z]{3,}/.test(email)) {
    div2.innerHTML = "veuillez entrer une adresse email valide"
}
