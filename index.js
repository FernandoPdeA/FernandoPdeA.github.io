//Abria a modal usando javascript logo após o cadastro de usuário

window.onload = function () {

  function validaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  var modal = document.querySelector('#modal');
  var btn = document.querySelector("#btn");
  var closed = document.querySelector("#close");
  var email = document.querySelector("#email");

  btn.onclick = function (e) {
    e.preventDefault();
    if (validaEmail(email.value)) {
      modal.style.display = "block";
    } else {
      alert("Preencha todos os campos corretamente, por favor!");
    }

    closed.onclick = function (e) {
      e.preventDefault();
      modal.style.display = "none";
      window.location.reload();
    }
  }
}