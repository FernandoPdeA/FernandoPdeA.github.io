//Abria a modal usando javascript logo após o cadastro de usuário

window.onload = function () {

  var botao_pesquisa = document.getElementById("pesquisa");
  var menu_li_a = document.querySelectorAll('.menu li a');
  var menu = document.getElementById("menu");
  var input_pesquisa = document.querySelector("#input_pesquisa");
  var modal = document.querySelector('#modal');
  var btn = document.querySelector("#btn");
  var closed = document.querySelector("#close");
  var email = document.querySelector("#email");


  input_pesquisa.addEventListener("mouseover", function (e) {
    e.preventDefault();
    menu.style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (e.target.id != "menu") {
      menu.style.display = "none";
    }
  });

  for (var i = 0; i < menu_li_a.length; i++) {
    menu_li_a[i].addEventListener("click", function (e) {
      e.preventDefault();
      input_pesquisa.value = this.innerHTML;
      menu.style.display = "none";
    });
  }

  botao_pesquisa.addEventListener("click", function (e) {
    e.preventDefault();
    //Me levar até o id do elemento que estiver no input de pesquisa
    var elemento = document.getElementById(input_pesquisa.value);
    //Se o elemento existir, ele me leva até ele
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      alert("Ops! Não encontramos o que você procura :(");
    }
  })


  function validaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }


  closed.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "none";


    var email = `pupygreen@gmail.com`;
    var assunto = `Contato sobre o portfolio.`;
    var nome = document.querySelector("#nome");
    var cidade = document.querySelector("#cidade");
    var mensagem = document.querySelector("#mensagem");
    var link = `mailto:${email}?subject=Nome = ${nome.value} / Cidade = ${cidade.value} / ${assunto}&body=${mensagem.value}`;

    window.open(link, '_blank');

    //Limpa os campos do formulário
    nome.value = "";
    mensagem.value = "";
    email.value = "";
    cidade.value = "";

  }
}
