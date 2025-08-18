const buttonModal = document.getElementById('button-modal');
const form = document.getElementById('container-form');
const tapela = document.querySelector("#table-container tbody");


buttonModal.addEventListener('click', () => {
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  localStorage.setItem("formValues", JSON.stringify(formValues));
  console.log("Dados", formValues)
  
  console.log(localStorage.getItem("formValues"));

  
  tapela.innerHTML = `
        <td>${formValues.quantidade}</td>
        <td>${formValues.cafe}</td>
        <td>${formValues.quantidade}</td>
        <td>${formValues.preco}</td>
  `;
  
  form.reset();
});











/* const form = document.getElementById('button-modal');

  form.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    console.log(nome); // Exibe os dados como objeto
     console.log(email);
  }); */




  /* const form = document.getElementById('button-modal');

  form.onclick =  function () {
   // Impede o comportamento padrão de recarregar a página
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    console.log(nome); // Exibe os dados como objeto
     console.log(email);
  }; */