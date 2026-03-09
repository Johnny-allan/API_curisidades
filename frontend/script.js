// URL da API - ajuste conforme necessário
const API_URL = "http://localhost:3000/curiosidades";

async function carregarCuriosidades() {
  try {
    const response = await fetch(API_URL);
    const curiosidades = await response.json();

    const container = document.getElementById("curiosidades-container");

    curiosidades.forEach(item => {
      const div = document.createElement("div");
      div.className = "curiosidade-item";

      div.innerHTML = `
                <img src="${item.foto_url}" alt="${item.titulo}">
                <div class="curiosidade-info">
                    <h2>${item.titulo}</h2>
                    <p>${item.descricao}</p>
                </div>
            `;

      container.appendChild(div);
    });
  } catch (erro) {
    console.log("Erro ao carregar curiosidades:", erro);
    // Mostra dados de exemplo se a API não estiver disponível
    mostrarDadosExemplo();
  }
}

function mostrarDadosExemplo() {
  const container = document.getElementById("curiosidades-container");
  const exemplos = [
    {
      id: 1,
      titulo: "Dedo de Deus",
      descricao:
        "O Dedo de Deus é o cartão postal mais famoso de Teresópolis. Com 1.692 metros de altitude, essa formação rochosa impressiona visitantes do mundo todo.",
      foto_url:
        "https://images.pexels.com/photos/29820135/pexels-photo-29820135.jpeg",
    },
    {
      id: 2,
      titulo: "Palacete Granado",
      descricao:
        "O Palacete Granado, em Teresópolis, foi construído em 1913 pelo comendador José Antônio Coxito Granado, fundador da famosa botica Granado. Localizado na Várzea, o casarão em estilo francês servia de residência de veraneio e chácara-modelo para cultivo de ervas medicinais, hoje abrigando a sede cultural do Sesc",
      foto_url:
        "https://odia.ig.com.br/_midias/jpg/2024/05/15/1200x750/1_palacio_granado_sesc_teresopolis-32849986.jpg",
    },
    {
      id: 3,
      titulo: "Cachoeira dos Frades",
      descricao:
        "A Cachoeira dos Frades, no Vale dos Frades em Teresópolis, é um refúgio natural com cerca de 10 metros de altura, famosa por sua ampla piscina natural, águas cristalinas e uma pequena prainha. Localizada dentro da APA da bacia dos Frades e próxima ao Parque Estadual dos Três Picos, oferece fácil acesso, ambiente tranquilo e áreas de sombra ideais para banhos, sem estrutura comercial",
      foto_url:
        "https://hotelfazendajecava.com.br/wp-content/uploads/2024/04/Cachoeira_dos_Frades_HDR_1-455d4894-2880w-1.jpeg",
    },
    {
      id: 5,
      titulo: "Fonte Judith",
      descricao:
        "Construída em 1920 pelo pedreiro Manoel Guedes da Costa, seu nome tem origem em Judith, filha de Luiz de Oliveira, antigo proprietário das terras, que teria sido curada de uma grave enfermidade através das propriedades medicinais da água da fonte.",
      foto_url:
        "https://pousadaoasisteresopolis.com.br/wp-content/uploads/2021/03/fonte.jpg",
    },
    {
      id: 6,
      titulo: "Torres de Bonsucesso",
      descricao:
        "Com visual icônico e paredões verticais impressionantes, o complexo das Torres de Bonsucesso em Teresópolis abriga formações marcantes como a Torre Ferro de Passar (1.630m), Torre Central (1.860m) e Torre Maior (2.000m), além das Torres Ocultas e da Torre Sul.",
      foto_url:
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAweozwHxo5uUeG0OcPoEgT07wFpkib_8tw4my_Wa324IHEv05h_FvT1K4VilXIc4RLLF5YgQWCtSG1MhVorTflgmk81C0fUPtfddfBmGytrb5p5rIUkm1rZG7IOKdlHSBE0kuUf52=s1360-w1360-h1020-rw",
    },

    {
      id: 10,
      titulo: "Igreja Matriz de Santa Teresa",
      descricao:
        "A Igreja Matriz de Santa Teresa, marco histórico de Teresópolis fundado em 1855, foi reconstruída em estilo gótico na década de 1930. Conhecida popularmente como Catedral, o local destaca-se pelos vitrais tchecos e por ter sido o local de batismo de Santos Dumont. Para mais detalhes, visite o site oficial de turismo de Teresópolis.",
      foto_url:
        "https://www.meiahora.com.br/_midias/jpg/2021/10/15/764x428/1_51119721723_cc962129c4_o-23312494.jpg",
    },
  ];

  exemplos.forEach(item => {
    const div = document.createElement("div");
    div.className = "curiosidade-item";

    div.innerHTML = `
            <img src="${item.foto_url}" alt="${item.titulo}">
            <div class="curiosidade-info">
                <h2>${item.titulo}</h2>
                <p>${item.descricao}</p>
            </div>
        `;

    container.appendChild(div);
  });
}

// Carrega as curiosidades quando a página carregar
document.addEventListener("DOMContentLoaded", carregarCuriosidades);
