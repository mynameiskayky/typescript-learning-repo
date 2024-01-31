async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Company {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Company;
  empresaMontadora: Company;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
  <div class="container">
    <h2>${data.nome}</h2>
    <p><strong>Preço:</strong> R$${data.preco}</p>
    <p><strong>Descrição:</strong> ${data.descricao}</p>
    <p><strong>Garantia:</strong> ${data.garantia} anos</p>
    <p><strong>Tem seguro?</strong> ${data.seguroAcidentes ? "Sim" : "Não"}</p>

    <div class="manufacturer">
      <h3>Fabricante</h3>
      <p><strong>Nome:</strong> ${data.empresaFabricante.nome}</p>
      <p><strong>Fundação:</strong> ${data.empresaFabricante.fundacao}</p>
      <p><strong>País:</strong> ${data.empresaFabricante.pais}</p>
    </div>

    <div class="assembler">
      <h3>Montadora</h3>
      <p><strong>Nome:</strong> ${data.empresaMontadora.nome}</p>
      <p><strong>Fundação:</strong> ${data.empresaMontadora.fundacao}</p>
      <p><strong>País:</strong> ${data.empresaMontadora.pais}</p>
    </div>
  </div>
  `;
}
