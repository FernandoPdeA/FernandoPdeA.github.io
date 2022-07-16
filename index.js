//Abria a modal usando javascript logo após o cadastro de usuário

window.onload = function () {

  var modal = document.querySelector('#modal');
  var btn = document.querySelector("#btn");
  var closed = document.querySelector("#close");
  var email = document.querySelector("#email");

  btn.onclick = function (e) {
    e.preventDefault();
    if (email.value != "" && email.value != null) {
      modal.style.display = "block";
    } else {
      alert("Preencha todos os campos corretamente!");
    }

    closed.onclick = function (e) {
      e.preventDefault();
      modal.style.display = "none";
      window.location.reload();
    }
  }
}