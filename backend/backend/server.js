const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres', logging: false, dialectOptions: { ssl: { require: true, rejectUnauthorized: false } } })
    : new Sequelize({ dialect: 'sqlite', storage: './banco.sqlite', logging: false });

const Curiosidade = sequelize.define('Curiosidade', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: false },
    foto_url: { type: DataTypes.STRING }
}, { tableName: 'curiosidades', timestamps: false });

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.get('/curiosidades', async (req, res) => {
    try {
        const dados = await Curiosidade.findAll();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar curiosidades' });
    }
});

app.post('/curiosidades', async (req, res) => {
    const { titulo, descricao, foto_url } = req.body;
    try {
        const nova = await Curiosidade.create({ titulo, descricao, foto_url });
        res.status(201).json(nova);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao criar curiosidade' });
    }
});

app.put('/curiosidades/:id', async (req, res) => {
    const { titulo, descricao, foto_url } = req.body;
    try {
        const item = await Curiosidade.findByPk(req.params.id);
        if (!item) return res.status(404).json({ erro: 'Curiosidade não encontrada' });
        await item.update({ titulo, descricao, foto_url });
        res.json(item);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar curiosidade' });
    }
});

app.delete('/curiosidades/:id', async (req, res) => {
    try {
        const item = await Curiosidade.findByPk(req.params.id);
        if (!item) return res.status(404).json({ erro: 'Curiosidade não encontrada' });
        await item.destroy();
        res.json({ mensagem: 'Curiosidade deletada com sucesso' });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao deletar curiosidade' });
    }
});

async function iniciar() {
    await sequelize.sync();

    const total = await Curiosidade.count();
    if (total === 0) {
        await Curiosidade.bulkCreate([
            { titulo: 'Dedo de Deus', descricao: 'O Dedo de Deus é o cartão postal mais famoso de Teresópolis. Com 1.692 metros de altitude, essa formação rochosa impressiona visitantes do mundo todo.', foto_url: 'https://images.pexels.com/photos/29820135/pexels-photo-29820135.jpeg' },
            { titulo: 'Palacete Granado', descricao: 'O Palacete Granado, em Teresópolis, foi construído em 1913 pelo comendador José Antônio Coxito Granado, fundador da famosa botica Granado. Localizado na Várzea, o casarão em estilo francês servia de residência de veraneio e chácara-modelo para cultivo de ervas medicinais, hoje abrigando a sede cultural do Sesc.', foto_url: 'https://odia.ig.com.br/_midias/jpg/2024/05/15/1200x750/1_palacio_granado_sesc_teresopolis-32849986.jpg' },
            { titulo: 'Cachoeira dos Frades', descricao: 'A Cachoeira dos Frades, no Vale dos Frades em Teresópolis, é um refúgio natural com cerca de 10 metros de altura, famosa por sua ampla piscina natural, águas cristalinas e uma pequena prainha.', foto_url: 'https://hotelfazendajecava.com.br/wp-content/uploads/2024/04/Cachoeira_dos_Frades_HDR_1-455d4894-2880w-1.jpeg' },
            { titulo: 'Fonte Judith', descricao: 'Construída em 1920 pelo pedreiro Manoel Guedes da Costa, seu nome tem origem em Judith, filha de Luiz de Oliveira, antigo proprietário das terras, que teria sido curada de uma grave enfermidade através das propriedades medicinais da água da fonte.', foto_url: 'https://pousadaoasisteresopolis.com.br/wp-content/uploads/2021/03/fonte.jpg' },
            { titulo: 'Torres de Bonsucesso', descricao: 'Com visual icônico e paredões verticais impressionantes, o complexo das Torres de Bonsucesso em Teresópolis abriga formações marcantes como a Torre Ferro de Passar (1.630m), Torre Central (1.860m) e Torre Maior (2.000m).', foto_url: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweozwHxo5uUeG0OcPoEgT07wFpkib_8tw4my_Wa324IHEv05h_FvT1K4VilXIc4RLLF5YgQWCtSG1MhVorTflgmk81C0fUPtfddfBmGytrb5p5rIUkm1rZG7IOKdlHSBE0kuUf52=s1360-w1360-h1020-rw' },
            { titulo: 'A Pedra do Sino', descricao: 'A Pedra do Sino, ponto mais alto da Serra dos Órgãos com 2.275 metros, localiza-se no PARNASO em Teresópolis, RJ. A trilha tem cerca de 11 km de extensão (ida) e é considerada de nível difícil/pesado.', foto_url: 'https://www.niteroiurbano.com.br/fotos/sino_e_inferno_3110/slides/p_0129.jpg' },
            { titulo: 'Represa de Varginha', descricao: 'Também conhecida como represinha, ela fica na localidade de mesmo nome, na região de Canoas, em Teresópolis. Está em uma área particular, mas que permite o acesso de visitantes.', foto_url: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQvu1A775pTD46pfERdsYhkxJ9S0IvkwGhPAvCawZV2lmmW2vlaV1aAqcF02HPcJc5UeyYOL3p5bdWMWideNnjYgC4DxlhNnkH1a-qR7B9iAOVzgHZE-BIvuWOposaqeP7FUA7ng=s1360-w1360-h1020-rw' },
            { titulo: 'Feirarte', descricao: 'A Feirarte, conhecida como Feirinha do Alto em Teresópolis, é uma das maiores feiras de artesanato e moda do estado do Rio de Janeiro, funcionando aos sábados, domingos e feriados, das 10h às 18h.', foto_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/4d/f4/photo1jpg.jpg?w=900&h=500&s=1' },
            { titulo: 'Igreja Matriz de Santa Teresa', descricao: 'A Igreja Matriz de Santa Teresa, marco histórico de Teresópolis fundado em 1855, foi reconstruída em estilo gótico na década de 1930. Conhecida popularmente como Catedral, o local destaca-se pelos vitrais tchecos e por ter sido o local de batismo de Santos Dumont.', foto_url: 'https://www.meiahora.com.br/_midias/jpg/2021/10/15/764x428/1_51119721723_cc962129c4_o-23312494.jpg' }
        ]);
    }

    app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
}

iniciar();
