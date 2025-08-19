const buttonModal = document.getElementById('button-modal');
const form = document.getElementById('container-form');
const card_adicionar = document.querySelector("#card-adicionar");





// Função para carregar os dados do localStorage ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
  // Recupera os dados salvos no localStorage
  const savedData = JSON.parse(localStorage.getItem('frutas')) || ["Dados vaziu"];

 
  for (const item of savedData) {
    card_adicionar.innerHTML += `

      Seu id único: ${item.id}
      <h6>${item.nomeespecie}</h6>
      <h6>${item.nomecietifico}</h6>
      <h6>${item.producao}</h6>
      <h6>${item.dataPlantio}</h6>

    `;
  }
});



buttonModal.addEventListener('click', () => {
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);



  
  //Gerar id unico para cada listagem de fruta
  const id = Date.now();

  card_adicionar.innerHTML += `

        Seu id único: ${id}
        <h6>${formValues.nomeespecie}</h6>
        <h6>${formValues.nomecietifico}</h6>
        <h6>${formValues.producao}</h6>
        <h6>${formValues.dataPlantio}</h6>
        
    
  `;

  
  // Criar objeto com os dados do formulário
  const fruta = {
    id,
    nomeespecie: formValues.nomeespecie,
    nomecietifico: formValues.nomecietifico,
    producao: formValues.producao,
    dataPlantio: formValues.dataPlantio
  };
  
  form.reset();



//Fechar Modal
const modal = bootstrap.Modal.getInstance(document.getElementById('exibirmodal'));
  modal.hide();

  
  // Vai Salvar no localStorage as infomacoes do Campos
  const savedData = JSON.parse(localStorage.getItem('frutas')) || ["Dados vaziu"];
  savedData.push(fruta);
  localStorage.setItem('frutas', JSON.stringify(savedData));

  
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