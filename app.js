
// Selecionando o formulário e o container de resultados apenas uma vez
const searchForm = document.querySelector('form');
const resultsContainer = document.querySelector('.resultados-pesquisa');

// Função para criar o card da moto
function createMotoCard(moto) {
  const motoCard = document.createElement('div');
  motoCard.classList.add('moto-card');
  motoCard.innerHTML = `
    <img src="${moto.imagem}" alt="${moto.modelo}"> <h2>${moto.modelo}</h2>
    <p>Marca: ${moto.marca}</p>
    <p>Estilo: ${moto.estilo}</p>
    <p>Cilindrada: ${moto.cilindrada}</p>
    <p>Preço Fipe: ${moto.preco}</p>
    <p>Descrição: ${moto.descricao}</p>
  `;
  return motoCard;
}

// Evento de submit do formulário
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitando o reload da página ao submeter o formulário

  const selectedBrand = document.querySelector('select[name="marca"]').value;
  const selectedStyle = document.querySelector('select[name="estilo"]').value;

  // Filtrando as motos com base nas seleções de marca e estilo
  const filteredMotos = motosMaisVendidas.filter(moto => {
    return (selectedBrand === '' || moto.marca === selectedBrand) &&
           (selectedStyle === '' || moto.estilo === selectedStyle);
  });

  // Limpando o container de resultados antes de exibir novos resultados
  resultsContainer.innerHTML = '';

  // Verificando se houve algum resultado
  if (filteredMotos.length === 0) {
    resultsContainer.innerHTML = '<p>Nenhuma moto encontrada.</p>';
  } else {
    filteredMotos.forEach(moto => {
      resultsContainer.appendChild(createMotoCard(moto));
    });
  }
});
