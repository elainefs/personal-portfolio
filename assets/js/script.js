// Validação de Formulário
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Ano atual no Copyright
let anoAtual = document.getElementById('anoAtual');
let anoSistema = new Date();
anoAtual.innerHTML = anoSistema.getFullYear()