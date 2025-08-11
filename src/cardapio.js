const form = document.getElementById('button-modal');

  form.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    console.log(nome); // Exibe os dados como objeto
     console.log(email);
  });










