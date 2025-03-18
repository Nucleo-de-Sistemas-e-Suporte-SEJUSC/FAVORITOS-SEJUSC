const linkContainer = document.getElementById("links");
const inputFiltro = document.getElementById("filtro");
const botaoFiltro = document.getElementById("button");
const mensagemErro = document.getElementById("messagem-erro");

const links = [
    {
        nome: ["SEJUSC", "Secretaria de Justiça, Direitos Humanos, Cidania"],
        link: "https://www.sejusc.am.gov.br",
        logo: "SEJUSC",
    },
    {
        nome: ["SEFAZ", "Dinheiro", "Fazenda", "fazenda"],
        link: "https://www.sefaz.am.gov.br",
        logo: "SEFAZ",
    },
    {
        nome: ["Ajuri", "patrimônio", "patrimonio", "inventário", "inventario"],
        link: "http://www.ajuri.am.gov.br/",
        logo: "AJURI",
    },
    {
        nome: ["Protocolo Virtual"],
        link: "https://protocolovirtual.amazonas.am.gov.br/",
        logo: "PROTOCOLO VIRTUAL",
    },
    {
        nome: ["Sistema de Gestão de Contratos - SGC", "SGC", "Tes"],
        link: "https://sistemas.sefaz.am.gov.br/sgc-am/login.do",
        logo: "SGC",
    },
    {
        nome: ["Diário Oficial do Estado", "Jornal", "Publicação", "Doe", "imprensa", "Diario"],
        link: "https://diario.imprensaoficial.am.gov.br/",
        logo: "DOE",   
    },
    {
        nome: ["E-compras"],
        link: "https://www.e-compras.am.gov.br/publico/",
        logo: "E-COMPRAS"
    },
    {
        nome: ["Portal integra"],
        link: "https://login.microsoftonline.com/?whr=integra.am.gov.br",
        logo: "PORTAL INTEGRA",
    },
    {
        nome: ["Portal do Servidor"],
        link: "https://servicos.portaldoservidor.am.gov.br/",
        logo: "portal-servidor",
    },
    {
        nome: ["Siged"],
        link: "https://siged.amazonas.am.gov.br/siged/login",
        logo: "SIGED",
    },
    {
        nome: ["Sistema de Controle de Diárias e Passagens - SCDP","SCDP"],
        link: "http://servicos.sead.am.gov.br/scdp/",
        logo: "SCDP",
    },
    {
        nome: ["AFEAM"],
        link: "https://www.afeam.am.gov.br/",
        logo: "AFEAM"
    },
    {
        nome: ["Governo do Amazonas"],
        link: "https://www.amazonas.am.gov.br/",
        logo: "favicon",
    },
    {
        nome: ["Legislação Estadual", "legislaam"],
        link: "https://legisla.imprensaoficial.am.gov.br/diario_am",
        logo: "LEGISLAÇÃO ESTADUAL",
    },
    {
        nome: ["Suporte Remoto GTI","helpdesk", "help desk"],
        link: "WhatsApp.html",
        logo: "WHATSAPP",
    },
    {
        nome: ["admistração financeira integrada - AFI","AFI", "SEFAZ"],
        link: "https://sistemas.sefaz.am.gov.br/AfiPrd2025/",
        logo: "afi",
    },
    { 
        nome: ["SISCONV", "Sistema de Controle de Convênios", "SEFAZ", "Convênios", "Convenios", "Fomentos", "Transferências Voluntárias", "Transferencias Voluntarias"],
        link: "https://sistemas.sefaz.am.gov.br/sisconv/loginSisConv.do",
        logo: "sistema-de-convenios"
    },
    {
        nome: ["Portal e-Contas", "TCE"],
        link: "https://econtas.tce.am.gov.br/eContas/login.jsf",
        logo: "martelo"
    },
    {
        nome: ["Sistema de Atendimento à Mulher", "SAM"],
        link: "http://www.sam.am.gov.br/sam/",
        logo: "sistema-de-apoio-a-mulher" // Nome do arquivo sem espaços
    },
    {
        nome: ["Sistema de Gestão de Chamados - GLPI", "Sistema de Gestão de Chamados"],
        link: "em-breve.html",
        logo: "glpi"
    },
    {
        nome: ["Power BI", "Business Inteligence"],
        link: "em-breve.html",
        logo: "powerbi"
    },
    {
        nome: ["Gmail", "email", "google"],
        link: "https://workspace.google.com/intl/pt-BR/gmail/",
        logo: "gmail-logo"
    },
]

const listaDeLinksOrdenada = links.sort((a, b) => a.nome[0].localeCompare(b.nome[0]));

function exibirLinks(lista) {
    linkContainer.innerHTML = "";

    lista.forEach(({ nome, link, logo }) => {
        const linkElement = document.createElement('a');
        const img = document.createElement('img');
        const span = document.createElement('span');

        // Normaliza o valor de `logo` para ser compatível com classes CSS
        const normalizedLogo = logo.toLowerCase().replace(/ /g, '-');

        img.src = `assets/icons/${logo}.svg`;
        img.className = `urls__image logo-${normalizedLogo}`; // Usa o valor normalizado

        img.onerror = () => {
            img.src = `assets/icons/${logo}.png`;
        };

        span.textContent = nome[0];
        span.className = "urls__text";

        linkElement.href = link;
        linkElement.target = "_blank";
        linkElement.className = "urls__link";

        linkElement.appendChild(img);
        linkElement.appendChild(span);
        linkContainer.appendChild(linkElement);
    });
}
exibirLinks(links);

botaoFiltro.addEventListener('click', (e) => {
    e.preventDefault();
    mensagemErro.innerHTML = ""
    const inputValue = inputFiltro.value.toLowerCase();

    const linksFiltrados = listaDeLinksOrdenada.filter(({ nome }) => {
        return nome.some(n => n.toLowerCase().includes(inputValue));
    });

    if(linksFiltrados.length !== 0) {
        exibirLinks(linksFiltrados);
    } else {
        linkContainer.innerHTML = ""
        mensagemErro.innerHTML = "Nenhum Link encontrado"
    }

});

inputFiltro.addEventListener("input", () => {

    const inputValue = inputFiltro.value.toLowerCase();
    const linksFiltrados = listaDeLinksOrdenada.filter(({ nome }) => {
        return nome.some(n => n.toLowerCase().includes(inputValue));
    })

    if (linksFiltrados.length > 0) {
        exibirLinks(linksFiltrados);
    } else {
        linkContainer.innerHTML = "";
        mensagemErro.innerHTML = "Nenhum Link encontrado";
    }
});