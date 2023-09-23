

/*

var musi = [		/* musi = músicos, pessoa
// Pessoa, dupla, grupo, orquestra, orquestra militar, banda, antigos 

//Shorts

// Pessoa / grupo / novos
"🇧🇷️ Roberto Barata, finalista Radio Mec 100 Anos",
"",
];

*/



/* Array de Objetos: no = nome, des = descrição */
let mus = [
	{
		src: 'images/funk.png',
		no: 'Lyn Collins',
		des: '🇺🇸 Conhecida por ter trabalhado com James Brown, a cantora "passeou" pelo soul, funk e R&B.',
	},
	{
		src: 'images/soul.png',
		no: 'Aretha Franklin',	
		des: '🇺🇸 Ela foi, ou é, amplamente conhecida como a "Rainha do Soul", enquanto James Brown era conhecido como o "Padrinho do Soul". Aretha Franklin foi a cantora de soul mais importante a surgir; e foi, originalmente, uma cantora gospel que começou a fazer gravações seculares em 1960.',	
	},
	{
		src: 'images/regg.png',
		no: 'Audrey Hall',	
		des: '🇯🇲️ Uma cantora "sinônimo" de reggae tendo vários discos e singles, ainda na época do vinil.',	
	},



		// 32 objetos


	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ben-e-king1.webp/220px-Ben-e-king1.webp.png',
		no: '🇺🇸 Ben E. King',
		des: 'Teve sucesso em 1961 com "Stand By Me", uma música baseada diretamente num hino gospel.',
	},
	{
		src: 'https://images6.fanpop.com/image/photos/36800000/Samuel-Cook-A-K-A-Sam-Cooke-celebrities-who-died-young-36852637-642-855.jpg',
		no: '🇺🇸 Sam Cooke',
		des: 'Tornou-se popular como vocalista do grupo gospel Soul Stirrers, antes de passar para a música secular. Sua gravação de "You Send Me" em 1957 lançou uma carreira de sucesso na música pop.',
	},
	{
		src: 'images/voca.png',
		no: 'Elza Soares',	
		des: 'O samba, a bossa nova e a MPB não seriam os mesmos sem ela. Foi nomeada Cantora do Milênio pela Rádio BBC, junto com Tina Turner.',	
	},
	{
		src: 'https://rollingstone.uol.com.br/media/uploads/jamesbrown-gettyimages.jpg',
		no: '🇺🇸 James Brown',	
		des: 'Começou como cantor gospel, na Geórgia, e ganhou destaque em meados da década de 1950 sendo vocalista do Famous Flames, um grupo vocal de ritmo e blues. Lançou "Try Me" em 1958, que alcançou o primeiro lugar nas paradas de R&B no início de 1959. James Brown, the Flames e toda a sua banda estrearam no Apollo Theatre em 1959, abrindo para o ídolo de Brown: Little Willie John. O primeiro funk de James Brown? Alguns críticos citaram  "Cold Sweat" como a primeira verdadeira música funk, que alcançou o primeiro lugar na parada de R&B.',	
	},
	{
		src: 'http://arquivos.tribunadonorte.com.br/fotos/158499.jpg',
		no: 'Carlos Zens',	
		des: 'De mãos dadas com o erudito e o popular, Zens promove uma ciranda de ritmos e melodias.',	
	},
	{
		src: 'https://mid.curitiba.pr.gov.br/2022/capa/00348506.jpg',
		no: 'Renato Borghetti | RS',	
		des: 'Acordeonista que caminha por vários gêneros e ainda sim preserva os estilos tradicionais. Tem vários discos lançados, a começar ainda nos anos 80. Ganhou o Grammy Latino em 2005.',	
	},
	{
		src: 'https://www.concerto.com.br/sites/default/files/l-foto%20Lucas%20Thomazinho%20%C2%A9Deny%20Naka%2002.jpg',
		no: 'Lucas Thomazinho 🎹',	
		des: 'Bacharel em piano pela Universidade de São Paulo (USP), estudou sob orientação de Eduardo Monteiro.',	
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chick_Corea_Kongsberg_Jazzfestival_2018_%28170650%29.jpg/200px-Chick_Corea_Kongsberg_Jazzfestival_2018_%28170650%29.jpg',
		no: 'Chick Corea 🎹 🥁️ 🇺🇸',	
		des: 'Pianista e tecladista de jazz, também baterista.',	
	},
	{
		src: 'https://ogimg.infoglobo.com.br/in/3316197-d64-c41/FT1086A/760/Tim-Rescala.jpg',
		no: 'Tim Rescala 🎹 RJ',	
		des: 'Além do piano, lhe acompanha a composição, a produção musical... e o humor.',	
  },
  {
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Solomon_Burke.jpg/300px-Solomon_Burke.jpg',
		no: '🇺🇸 Solomon Burke',
		des: 'Gravou para a Atlantic na década de 1960. Peter Guralnick está entre os identificaram Solomon Burke como uma figura chave no surgimento da música soul, e a Atlantic Records como a principal gravadora. Burke tem nas canções do início dos anos 1960 que são consideradas clássicos do soul.',
	},
	{
		src: 'https://www.udiscovermusic.com/wp-content/uploads/2022/06/Howlin-GettyImages-98411223.jpg',
		no: '🇺🇸 Howlin Wolf',
		des: 'Foi um o lendário músico de blues, conhecido inclusive por James Brown.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Otis_Redding_%282%29.png/250px-Otis_Redding_%282%29.png',
		no: '🇺🇸 Otis Redding',
		des: 'Entre 1962 e 1964, gravou uma série de baladas soul caracterizadas por letras bem sentimentais, geralmente implorando perdão ou pedindo a uma namorada que voltasse, e logo se tornou o principal intérprete de baladas soul.',
	},
	{
		src: 'https://www.pbs.org/wnet/americanmasters/files/2006/05/640px-Ray_Charles_classic_piano_pose-e1644519462489-640x360.jpg',
		no: '🇺🇸 Ray Charles',
		des: 'Ele, bem como James Brown e o grupo soul Temptations (dentre outros artistas), ganharam popularidade devido ao domínio da música soul nas paradas de R&B.',
	},
	{
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLX4EPtqORNkKspxEBbQZj7aJmxqyqK2TXw&usqp=CAU',
		no: 'Codex Sanctissima',
		des: 'Um dos mais importantes grupos de música antiga, formado por grandes músicos. Dentre eles está Félix Ferrà, que é especialista em canto Gregoriano, professor, organista, produtor e diretor do conjunto. Ele ainda é um premiado diretor musical de dublagens cinematográficas e ligado à Academia Nacional de Música. Outros músicos são André Paiva, Carla Marinho, Doriana Mendes, Pedro Novaes, Rita Cabus.',
	},
	{
		src: 'https://imagens.ebc.com.br/D_Xszre6kpmT6qIbw4y0H4J6bnA=/375x183/smart/https://radios.ebc.com.br/sites/default/files/thumbnails/image/trio-mignone-2.jpg',
		no: 'Trio Mignone',
		des: 'Um grupo que foi criado em 2002 com o objetivo de promover o registro inédito em CD de duas obras de Francisco Mignone.',
	},


	/* GRUPOS */

	{
		src: 'https://opopular.com.br/image/policy%3A1.3063707%3A1694043140%2Fimage.jpg',
		no: 'Orquestra de Goiânia',
		des: 'Já fez, por exemplo, concerto com clássicos do cinema, o que inclui Homem Aranha, Batman ou mesmo Star Wars.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sinfonicabsb_fanfest.jpg/250px-Sinfonicabsb_fanfest.jpg',
		no: 'Orquestra Sinfônica do Teatro Nacional Claudio Santoro | DF',
		des: 'Oficialmente fundada no início de 1980 no Teatro Nacional de Brasília.',
	},
	{
		src: 'http://www.pensario.uff.br/sites/pensario.uff.br/files/image/(99)DSCN3723_web(1).jpg',
		no: 'Chorões dos anos 70',
		des: 'Waldir Azevedo (cavaquinho), Abel Ferreira (clarinete), Paulo Moura (sax), Zé da Velha (trombone), Copinha (flauta) e Joel Nascimento (bandolim).',
	},
	{
		src: 'https://www.diariodepetropolis.com.br/Conteudo/Dados_DRPTR14/acervo/1/202010/fotos/0750_x_0563_20201023084640_TCA7L.jpg',
		no: 'Coral das Meninas dos Canarinhos de Petrópolis | RJ',
		des: 'Em 2014 surge o primeiro CD do conjunto, o conhecido Memorare.',
	},
	{
		src: 'https://www.portaldoholanda.com.br/sites/default/files/portaldoholanda-704457-imagem-foto-amazonas.jpg',
		no: 'Coral do Amazonas | AM',
		des: 'Criado na década de 90, é considerado o grupo mais tradicional do Estado.',
	},
	{
		src: 'https://abraf.org/wp-content/uploads/2018/08/IMG_4940-300x200.jpg',
		no: 'Quinteto de Sopros Camargo Guarnieri | SP',
		des: 'Formado há mais de uma década, é notável pela apresentação de concertos interativos, bem descontraídos.',
	},
	{
		src: 'https://s2.glbimg.com/XandnldajE7wRR9pkewBRW6zD8M=/620x465/s.glbimg.com/jo/g1/f/original/2014/12/11/meninas_cantoras_de_petropolis.jpg',
		no: 'Meninas Cantoras de Petrópolis | RJ',
		des: 'Coral com décadas de história, sendo um bem cultural do país. Teve parcerias com cantores como, por exemplo, Fafá de Belém; além de ter gravado vários CDs. Também fez turnê internacional e já foi até abençoado pelo papa.',
	},
	{
		src: 'https://s2-g1.glbimg.com/BgoQuQ8sscDHe7jt2f_D_oXz46Q=/0x0:800x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/W/P/yevq4fSzap9TWC3AtbMg/up-ag-46500-46d3dbac-9e1b-42da-f1ba-9d4a1d4cee11.jpg',
		no: 'Duo Belém',
		des: 'Composto pelo violonista Maurício Gomes e o tenor Tiago Costa, a dupla oferece uma performance que une a destreza do violão com a emoção da voz.',
	},
	{
		src: 'https://agenciapara.com.br/midias/2015/medias/8352_40714.jpg',
		no: 'Grupo Flautas Doces da Amazônia',
		des: 'Formado a partir de uma atividade de extensão do Instituto Estadual Carlos Gomes (IECG), o grupo se destaca como a única orquestra de flautas doces na América do Sul.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/James_Brown_and_Flames.jpg/260px-James_Brown_and_Flames.jpg',
		no: '🇺🇸 The Famous Flames',
		des: 'Voltado ao ritmo & blues e soul, foi o grupo que teve James Brown em seu início de carreira. Lançou uma versão de "Please, Please, Please" em 1956. A canção se tornou o primeiro hit de R&B do grupo.',
	},



		/* Orquestra Militar */

	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Banda_Sinf%C3%B4nica_da_Pol%C3%ADcia_Militar_do_Paran%C3%A1.jpg/290px-Banda_Sinf%C3%B4nica_da_Pol%C3%ADcia_Militar_do_Paran%C3%A1.jpg',
		no: 'Orquestra Sinfônica da Polícia Militar do Paraná',
		des: 'Criada no século XIX já se apresentou, inclusive, no Teatro Guaíra. É uma instituição de representação da corporação, subordinada à PMPR.',
	},
	{
		src: 'https://www.pmpr.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2019-08/img_6148.jpg',
		no: 'Orquestra Sinfônica do Colégio da PM | PR',
		des: 'Com dezenas de componentes, já chegou a fazer um espetáculo para comemorar os 60 anos da instituição e os 165 anos da Polícia Militar.',
	},
	{
		src: 'https://ufmg.br/thumbor/-UINTq1tea94Tk6VRAJjbmqgSSc=/0x0:1372x915/712x474/https://ufmg.br/storage/1/9/c/1/19c17b19d8eaaaae3ecdea778ed4cd07_16660061559575_1324413538.jpeg',
		no: 'Orquestra Sinfônica da Polícia Militar de Minas Gerais',
		des: 'Fundada em 1948 e uma das principais do Brasil, chegou a celebrar os 100 anos da Semana de Arte Moderna em concerto no Conservatório UFMG.',
	},
	{
		src: 'https://www.fab.mil.br/sis/enoticias/imagens/pub/45257/i2333014140007847.jpg',
		no: 'Orquestra Sinfônica da FAB (OSFAB)',
		des: 'No Dia do Especialista de Aeronáutica, chegou a homenagiá-los com concerto _isso no no Teatro Poupex, em Brasília (DF).',
	},
	{
		src: 'https://paraiba.pb.gov.br/noticias/concerto-da-orquestra-sinfonica-da-paraiba-tera-homenagem-as-festas-juninas-com-musica-armorial/whatsapp-image-2023-05-22-at-15-44-35-1.jpeg/@@images/0934023e-ad99-445c-9bc5-eda0cefe3b5c.jpeg',
		no: 'Orquestra Sinfônica da Paraíba',
		des: 'Já fez uma homenagem à cultura nordestina, especificamente às festas juninas, com a execução de “Terno de Pifes para Orquestra Armorial”, do compositor, pianista e regente pernambucano Clóvis Pereira.',
	},

		/* Banda mMilitar - https://pt.wikipedia.org/wiki/Banda_militar */

	{
		src: 'http://www.cbmerj.rj.gov.br/images/bandacbmerj.jpg',
		no: 'Banda Sinfônica CBMERJ | RJ',
		des: 'Tudo começou ainda no século XIX, pelo Ten. Cel. Eugênio Rodrigues Jardim. Entretanto houve a ressalva de não acarretar "ônus para os Cofres Públicos".',
	},
	{
		src: 'https://agenciabrasilia.df.gov.br/wp-conteudo/uploads/2023/05/WhatsApp-Image-2023-05-13-at-10.02.20-1-1536x1023.jpeg',
		no: 'Banda Sinfônica da PMDF | DF',
		des: 'Instalada em Brasília desde 1967, é uma orquestra que já tocou no Museu da República.',
	},
];


/*
let mus = [
	{
		src: 'x',
		no: 'x',
		des: 'x',
	},
];
*/

// Função ran, variáveis i0, i1, i2, etc servem pra garantir que não haverá repetição de conteúdo exibido na tela.
function ran(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var i0 = ran(31, 34);
var i1 = ran(28, 30);
var i2 = ran(26, 27);
var i3 = ran(24, 25);
var i4 = ran(22, 23);
var i5 = ran(20, 21);
var i6 = ran(18, 19);
var i7 = ran(16, 17);

var i8 = ran(14, 15);
var i9 = ran(12, 13);
var i10 = ran(10, 11);
var i11 = ran(8, 9);
var i12 = ran(6, 7);
var i13 = ran(4, 5);
var i14 = ran(2, 3);
var i15 = ran(0, 1);

/*
var i0 = Object.keys(mus)[Math.floor(Math.random()*Object.keys(mus).length)];
var i1 = Object.keys(mus)[Math.floor(Math.random()*Object.keys(mus).length)];
var i2 = Object.keys(mus)[Math.floor(Math.random()*Object.keys(mus).length)];
var i3 = Object.keys(mus)[Math.floor(Math.random()*Object.keys(mus).length)];
*/

	function sor0 () { 	/*  Coloca os respectivos conteúdos conforme índice, i */ 
		document.querySelector('.conte3 #im').src = mus[i0].src;
		document.querySelector('.conte3 #ti').innerHTML = mus[i0].no;
		document.querySelector('.conte3 #te').innerHTML = mus[i0].des;
	}

	function sor1 () {
		document.querySelector('.conte3 #im1').src = mus[i1].src;
		document.querySelector('.conte3 #ti1').innerHTML = mus[i1].no;
		document.querySelector('.conte3 #te1').innerHTML = mus[i1].des;
	}

	function sor2 () {
		document.querySelector('.conte3 #im2').src = mus[i2].src;
		document.querySelector('.conte3 #ti2').innerHTML = mus[i2].no;
		document.querySelector('.conte3 #te2').innerHTML = mus[i2].des;
	}

	function sor3 () {
		document.querySelector('.conte3 #im3').src = mus[i3].src;
		document.querySelector('.conte3 #ti3').innerHTML = mus[i3].no;
		document.querySelector('.conte3 #te3').innerHTML = mus[i3].des;
	}

	function sor4 () {
		document.querySelector('.conte3 #im4').src = mus[i4].src;
		document.querySelector('.conte3 #ti4').innerHTML = mus[i4].no;
		document.querySelector('.conte3 #te4').innerHTML = mus[i4].des;
	}
	function sor5 () {
		document.querySelector('.conte3 #im5').src = mus[i5].src;
		document.querySelector('.conte3 #ti5').innerHTML = mus[i5].no;
		document.querySelector('.conte3 #te5').innerHTML = mus[i5].des;
	}
	function sor6 () {
		document.querySelector('.conte3 #im6').src = mus[i6].src;
		document.querySelector('.conte3 #ti6').innerHTML = mus[i6].no;
		document.querySelector('.conte3 #te6').innerHTML = mus[i6].des;
	}
	function sor7 () {
		document.querySelector('.conte3 #im7').src = mus[i7].src;
		document.querySelector('.conte3 #ti7').innerHTML = mus[i7].no;
		document.querySelector('.conte3 #te7').innerHTML = mus[i7].des;
	}

	


	function sor8 () { 	/*  Coloca os respectivos conteúdos conforme índice, i */ 
		document.querySelector('.conte3 #im8').src = mus[i8].src;
		document.querySelector('.conte3 #ti8').innerHTML = mus[i8].no;
		document.querySelector('.conte3 #te8').innerHTML = mus[i8].des;
	}

	function sor9 () {
		document.querySelector('.conte3 #im9').src = mus[i9].src;
		document.querySelector('.conte3 #ti9').innerHTML = mus[i9].no;
		document.querySelector('.conte3 #te9').innerHTML = mus[i9].des;
	}

	function sor10 () {
		document.querySelector('.conte3 #im10').src = mus[i10].src;
		document.querySelector('.conte3 #ti10').innerHTML = mus[i10].no;
		document.querySelector('.conte3 #te10').innerHTML = mus[i10].des;
	}

	function sor11 () {
		document.querySelector('.conte3 #im11').src = mus[i11].src;
		document.querySelector('.conte3 #ti11').innerHTML = mus[i11].no;
		document.querySelector('.conte3 #te11').innerHTML = mus[i11].des;
	}

	function sor12 () {
		document.querySelector('.conte3 #im12').src = mus[i12].src;
		document.querySelector('.conte3 #ti12').innerHTML = mus[i12].no;
		document.querySelector('.conte3 #te12').innerHTML = mus[i12].des;
	}
	function sor13 () {
		document.querySelector('.conte3 #im13').src = mus[i13].src;
		document.querySelector('.conte3 #ti13').innerHTML = mus[i13].no;
		document.querySelector('.conte3 #te13').innerHTML = mus[i13].des;
	}
	function sor14 () {
		document.querySelector('.conte3 #im14').src = mus[i14].src;
		document.querySelector('.conte3 #ti14').innerHTML = mus[i14].no;
		document.querySelector('.conte3 #te14').innerHTML = mus[i14].des;
	}
	function sor15 () {
		document.querySelector('.conte3 #im15').src = mus[i15].src;
		document.querySelector('.conte3 #ti15').innerHTML = mus[i15].no;
		document.querySelector('.conte3 #te15').innerHTML = mus[i15].des;
	}


	sor0();
	sor1();
	sor2();
	sor3();
	sor4();
	sor5();
	sor6();
	sor7();


	sor8();
	sor9();
	sor10();
	sor11();
	sor12();
	sor13();
	sor14();
	sor15();

/*
🎺️🎷️🎸️🎻️🎙️🎺️🥁️
FAMOSOS / ARTISTA

Aldair Tomé | violoncelista na orquestra filarmonica de alagoas
Aleyson Scopel 🎹
Alondra de La Parra | regência
Andreyna Dinoá (violoncelo) | solista da OSUFPB
Antonio Vaz Lemes 🎹
Aurélio Melo | maestro
Barry Douglas 🎹
Bruno Barreto | maestro | Artes-Teatro da Universidade Federal do Tocantins,
Cláudio Cruz regência, diretor musical
Clelia Iruzum 🎹
Cristian Budu 🎹
Dmitry Masleev 🎹 
Duo Abdala (flauta e violão).
Erika Ribeiro 🎹
Fabio Martino 🎹
Felícia Coelho, flautista da Universidade Federal de Pernambuco (UFPE)
Gabriel Martins
Gautier Capuçon
Giovanni Tristacci 🗣️ tenor | Coral do Amazonas
Guilherme Mannis
Inbal Segev
Ingrid Barankoski 🎹
Isadora Rezende 🎹
Jean-Guihen Queyras
Jean Louis Steuerman 🎹
João Rocha | maestro e compositor brasileiro radicado nos EUA. 
Julianna Santos
Kalim Campos, violoncelista da Orquestra Sinfônica do Rio Grande do Norte (OSRN).
Kayami Satomi (violoncelista)
Kismara Pezzati 🗣️ mezzo-soprano | Coral do Amazonas
Lilian Barretto 🎹
Lilya Zilberstein 🎹
Linda Bustani 🎹
Luiz Fernando Ventureli
Luiz Gustavo Carvalho 🎹 Festival Artes Vertentes
Luiz-Ottavio Faria 🗣️ baixo | Coral do Amazonas
Maja Bogdanovich violoncelista
Marcelo Bratke 🎹
Marcelo de Jesus | regência | Coral do Amazonas 
Marcelo Vizani | maestro Coral das Meninas dos Canarinhos de Petrópolis
Maria João Pires 🎹
Maria Teresa Madeira 🎹
Marina Martins | Quinteto Osesp
Marina Spoladore 🎹
Michael Gurt 🎹
Miguel Proença 🎹
Nelson Ayres 🎹
Paul Chou | Maestro 
Paulo França, violista da Universidade Federal do Rio Grande do Norte (UFRN)
Priscila Bomfim maestra
Rachel Barton-Pine violinista
Rodrigo Eloy 🎸️ | solista da OSUFPB
Sergio Tiempo 🎹
Sergio Tiempo 🎹
Sheku Khanneh-Mason
Tatiana Carlos 🗣️ soprano | Coral do Amazonas
Zahran | Orquestra Sesc

Roberto Barata 🎹
Rafael Barata 🥁️ 
André Luz | Baixo




*/








/* finalistas do Prêmio Rádio MEC 100 anos 
	const xx = {
			src: 'xx',
			no: 'Ivanov Basso | RS',	
			des: 'xx',	
	}

	const xx = {
			src: 'xx',
			no: 'Vitor Marques | SP',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Newton Schner Jr. | PR',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Jerôme Charlemagne | RJ',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Raphael Almeida | RN',	
			des: 'Raphael Almeida (bandolim)',
	}

	const xx = {
			src: 'xx',
			no: 'Roberto Barata | RJ',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Tereza Saci e Erickson Freitas | SP',	
			des: 'xx',	
	}

	const xx = {
			src: 'xx',
			no: 'Frederico Braga e Vera Nóbrega | PE',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Raphaela Tafuri  e Bruno Zukoff | RJ',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Thiago Pável | MG',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Luiza Pacheco | RJ',	
			des: 'xx',
	}

	const xx = {
			src: 'xx',
			no: 'Roberto Márcio Souza Santos | BA',	
			des: 'xx',
	}
*/




 
/*
 

[MUSICA INFANTIL]
OssoBanda 
Sydney Azeredo
Sintonia Dominó 

CANÇÃO
Pra Demorar
Rafael Valverde
Metáfora

*/


