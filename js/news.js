



let news = [
	{
			src: 'https://s2-g1.glbimg.com/lOYbLN5s_Uex4dCrxv8tRjBcw_A=/0x0:1024x674/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/j/7/rHWNqBSmepNiIfMLktqQ/bfc44e89-55e7-408d-b92c-057501c743c2.jpg',
			no: 'Tudo é Jazz | MG',
			des: 'O Festival Internacional de Jazz de Ouro Preto, apresentado pela Gerdau e tem o patrocínio do Instituto Cultural Vale.',
	},
	{
			src: 'https://ibahia.com/wp-content/uploads/fileadmin/user_upload/ibahia/2020/marco/05/concha2.PNG',
			no: 'Rock Concha | BA',
			des: 'Localizado em Salvador o evento já contou com uma feira de CDs e vinis.',
	},
	{
			src: 'https://s2-g1.glbimg.com/KAX5DApdZLuT6Z5vPSNK85xTp0k=/0x0:799x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/M/q/0xeA4tT9O0Ls6sEdf6Eg/52241590744-4f28e5659b-c.jpg',
			no: 'Festa Nacional do Fandango Caiçara | PR',
			des: 'Situada no Paranaguá, Curitiba.',
	},
	{
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrz2mtJaGsh5-tcQss53DUKTSDkrG3zWTf7g&usqp=CAU',
			no: 'Fúria Hip Hop | RJ',
			des: 'Aos cuidados do DJ Marcelinho MG, é um evento com a cara da Lapa, na cidade do Rio de Janeiro.',
	},
	{
		src: 'https://www.saquarema.rj.gov.br/wp-content/uploads/2022/06/Moto-Rock-12-e1685385014898-1536x1053.jpg',
		no: 'Saquá Moto Rock | RJ',
		des: 'A edição 2022 deste evento teve uma média de 5 mil pessoas por dia, ao som de várias bandas de rock.',
	},
	{
		src: 'https://portal.diadema.sp.gov.br/wp-content/uploads/2023/08/240823_Cultura_Encontro_Cordelista_Dino_Santos.jpg',
		no: 'Encontro de Cantadores Repentistas do Nordeste | SP',
		des: 'Realizada no Teatro Clara Nunes, exalta a cultura nordestina e reúne grandes nomes do repente.',
	},
	{
		src: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/incoming/24732164-35c-39a/w640h360-PROP/feirasaocristovao_alexandremacieira_riotur-450x299.jpg',
		no: 'Feira de São Cristóvão | RJ',
		des: 'Quem ainda pensa que o Rio de Janeiro é só samba, certamente não conhece a Feira...',
	},
	{
		src: 'https://noticiapreta.com.br/wp-content/uploads/2022/10/IMG_4997-Lazir-e-Deli-768x434.jpg',
		no: 'Jongo da Serrinha | RJ',
		des: 'Com mais de meio século o Jongo é uma tradição em Madureira.',
	},
	{
		src: 'thumb320x180.png',
		no: 'Festival de Música Erudita do Espírito Santo | ES',
		des: 'Embora atuando como intercâmbio entre Brasil e Portugal, não se limita a isso e abrange o latino-americano, compositoras, etc. É dirigido por Tarcísio Santório e Natércia Lopes, com direção artística de Livia Sabag, que também integra o núcleo de curadoria ao lado de Gabriel Rhein-Schirato, Guilhermina Lopes, Fabio Bezuti e Helder Trefzge.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivete_no_Festival_de_Ver%C3%A3o_2010.jpg/1200px-Ivete_no_Festival_de_Ver%C3%A3o_2010.jpg',
		no: 'FV: Festival de Verão Salvador | BA',
		des: 'Evento com rock, MPB, sertanejo, arrocha, forró, pagode, axé e muito mais; o que inclui Frejat, Ivete, Maria Gadú, Aviões e The Wailers.',
	},
	{
		src: 'https://s2-g1.glbimg.com/VSiT9p3s-8Yn7eE99qvVsuwWfHQ=/0x0:800x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/w/s/wYFSC4RwewjNwDSzOifw/20161107-01-usp-filarmonica.jpg',
		no: 'FMN: Festival Música Nova | SP',
		des: 'Com apresentações no Teatro Pedro II e Sala de Concertos da USP, tem a participação da Academia Livre de Música e Artes (Alma).',
	},
	{
		src: 'https://s2.glbimg.com/XxUB4tiGfCaz6o0tMkmo8pAI0Hc=/1200x630/s.glbimg.com/jo/g1/f/original/2015/06/14/mg_1679.jpg',
		no: 'Festival Mundo de música independente | PB',
		des: 'Shows, exposição de artes visuais, encenações teatrais, debates, dança e muito mais. O evento ocorre na Fundação Espaço Cultural da Paraíba (Funesc), em João Pessoa.',
	},

		/* Genres - Dicionário de estilos */

	{
		src: 'thumb320x180.png',
		no: 'Gospel music | início séc. XX 🇺🇸',
		des: 'A palavra gospel derivada de "god-spell". Música escrita e executada tendo como tema o louvor, adoração ou graças a Deus, portanto tem motivo religioso ou cerimonial _embora também ocorre como um produto de entretenimento para o mercado comercial.',
	},
	{
		src: 'thumb320x180.png',
		no: 'Ska (bluebeat) | final déc. 50 🇯🇲️',
		des: 'Um estilo de música e dança popular urbano, da jamaica. Lá, foi o estilo de música popular nativa predominante, até ser suplantado, em meados dos anos 60, pelo "rock steady", um precursor do reggae. Teve aceitação fugaz na América do Norte e na Grã-Bretanha. [ft:gro]',
	},
	{
		src: 'thumb320x180.png',
		no: 'Soul | déc. 50 🇺🇸',
		des: 'Combina elementos da música gospel, rhythm and blues e jazz. A soul music tornou-se popular para dançar e ouvir nos Estados Unidos, onde gravadoras como Motown, Atlantic e Stax foram influentes durante o Movimento dos Direitos Civis. [ft:wi.pt]',
	},
	{
		src: 'thumb320x180.png',
		no: 'Soul',
		des: '🇺🇸 Segundo AllMusic, "a soul music foi o resultado da urbanização e comercialização do ritmo e blues nos anos 60". O próprio termo "soul music", referindo-se à música de estilo gospel com letras seculares, foi atestada pela primeira vez em 1961.',
	},
	{
		src: 'thumb320x180.png',
		no: 'Soul',
		des: '🇺🇸 O termo "soul" na linguagem afro-americana tem conotações de orgulho e cultura afro-americana. Grupos gospel nas décadas de 1940 e 1950 ocasionalmente usavam o termo como parte de seus nomes.',
	},





	// Data Comemorativa, pessoa, profissão

	{
		src: 'https://musica.ufmg.br/wp-content/uploads/2021/11/Dia-do-Mu%CC%81sico-768x403.jpg',
		no: 'Dia do Músico | 22 de Nov',
		des: 'Adota-se o termo músico quando nos referimos a qualquer pessoa ligada diretamente à música, em caráter profissional ou amador, exercendo alguma função no campo de música, como a de tocar  um instrumento musical, cantando, escrevendo arranjos, compondo, regendo, ou dirigindo um grupo coral ou algum grupo de músicos, como orquestras, bandas, big band de jazz, ou ainda lecionando, trabalhando no campo de educação, em terapia musical.',
	},
	{
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTQxsacZxTF39VRUk2oHYLCLxW3M9EPOa3C222XxdYcEh705z1sDbaUCroKFmF6Bqndg&usqp=CAU',
		no: 'Dia Mundial do DJ | 9 de Março',
		des: 'O dia foi criado pela iniciativa de duas instituições de caridade: World DJ Fund Foundation e a  Nordoff Robbins Music Therapy, que se utiliza da música para tratar as pessoas enfermas.',
	},
	{
		src: 'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/09/15/907052/20220915124844291153u.jpg',
		no: 'Dia do musicoterapeuta | 15 de setembro',
		des: 'Uma profissão de pouca visibilidade e grande importância.',
	},

	// Data Comemorativa, genre, estilo musical


	{
		src: 'https://s2-g1.glbimg.com/3tJb7GKTtTWKXglN8ctk7k4p0KY=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/O/c/Hgieb6Qu6VJ0UIQaBEHg/passista-de-frevo.jpg',
		no: 'Dia do Frevo | 9 de fevereiro e 14 de setembro',
		des: 'O frevo é um Patrimônio Cultural Imaterial da Humanidade. O historiador Luiz Vinícius explicou que, em 9 de fevereiro de 1907, o frevo foi citado pela primeira vez pela imprensa _algo feito no "Jornal Pequeno", do Recife. Já 14 é o Dia Nacional do Frevo.',
	},
	{
		src: 'https://piaui.folha.uol.com.br/wp-content/uploads/2012/10/PH1349453032x7089.jpg',
		no: 'Dia do Choro | 23 de abril',
		des: 'Por que 23? Simples: dia do nascimento de... Pixinguinha!',
	},
	{
		src: 'https://cdn.brasildefato.com.br/media/41401da311fbe4072001b899dce77873.jpg',
		no: 'Dia do Forró | 13 de dezembro',
		des: 'A data escolhida faz referência ao nascimento do seu principal representante: Luiz Gonzaga, o cantor, compositor e sanfoneiro.',
	},
	{
		src: 'https://www12.senado.leg.br/radio/1/noticia/2021/12/02/2-de-dezembro-e-o-dia-nacional-do-samba/@@images/35fa383a-6668-49ef-b3ee-2837893625a7.jpeg',
		no: 'Dia Nacional do Samba | 2 de dezembro',
		des: 'O Brasil é conhecido internacionalmente pelo samba, e nada mais justo que uma data tão especial.',
	},

	// Data Comemorativa, instrumento musical


	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steinway_Vienna_011.JPG/200px-Steinway_Vienna_011.JPG',
		no: 'Dia Mundial do Piano | 28 ou 29 de março',
		des: 'A data está associada a quantidade de teclas no instrumento, oitenta e oito. Ou seja, é o octogésimo dia do ano.',
	},
	{
		src: 'https://www.jornaldocomercio.com/_midias/jpg/2019/03/29/800x600/1_pan_baterista_biba_meira_lanca_seu_primeiro_disco_solo_foto_fernanda_chemale-8673567.jpg',
		no: 'Dia do baterista | 20 de setembro',
		des: 'Essa data especial nos faz lembrar Chico Batera, Wilson das Neves e muitos outros grandes nomes, mas também o menino ou qualquer pessoa simples que se maravilha com esse instrumento.',
	},

	// Blog Joesynth, synths
	//	ft: 'JoeSynth WordPress',

	{
		src: 'https://joesynth.files.wordpress.com/2021/10/f1b3d-1.jpg',
		no: 'Sampler',
		des: 'O sampler nasce em 1979 com o CMI, um equipamento que era literalmente um computador, utilizando processador da marca Motorola. Tanto ele quanto outros de sua ápoca eram bem caros _em suma modelos australianos, norte-americanos, alemães. Até que na segunda metade dos anos 80 entra em cena a indústria japonesa com preços mais acessíveis. Anos 90 podia-se ver máquinas espataculares (como o S6000, foto) _embora os softwares de computador foram se tornando mais conhecidos também nesta época.',
	},
	{
		src: 'https://joesynth.files.wordpress.com/2021/06/minimoog.png',
		no: 'Minimoog',
		des: 'O Moog nasceu analógico, ou seja, nada de bits, bytes… Ele tem natureza diferente de um synth em VST, que em suma é um software. O Minimoog foi um grande passo na música tecnológica, afinal, foi o 1º synth de fato "acessível" a músicos.',
	},
	{
		src: 'https://dailyanalog.com/wp-content/uploads/2018/12/Sequential-Circuits-Prophet-5-728x316.jpg',
		no: '🇺🇸 Sequential Prophet-5 [78]',
		des: '1º polifônico de cinco notas e memória para timbre. Ainda vale citar Korg MS20 e o Poly-800.',
	},
	{
		src: 'https://joesynth.files.wordpress.com/2021/10/mixer_sampler.jpeg',
		no: 'Funk 12 bits!',
		des: 'As chamadas montagens são a mãe do Funk Carioca; e no que tange equipamento, foram popularizadas graças ao Gemini 7008. Esse mixer de DJ era barato _se comparado a outras ferramentas_ e tinha o recurso desejado por qualquer garoto que simpatizava com os DJ de baile funk ou de programas de rádio: o sampler.',
	},
];



/* Shorts */



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
var i0 = ran(24, 27);
var i1 = ran(18, 23);
var i2 = ran(12, 17);
var i3 = ran(9, 11);
var i4 = ran(6, 8);
var i5 = ran(4, 5);
var i6 = ran(2, 3);
var i7 = ran(0, 1);

/*
var i0 = Object.keys(news)[Math.floor(Math.random()*Object.keys(news).length)];
var i1 = Object.keys(news)[Math.floor(Math.random()*Object.keys(news).length)];
var i2 = Object.keys(news)[Math.floor(Math.random()*Object.keys(news).length)];
var i3 = Object.keys(news)[Math.floor(Math.random()*Object.keys(news).length)];
*/


	function news0 () { 	
		document.querySelector('.conte1 #im').src = news[i0].src;
		document.querySelector('.conte1 #ti').innerHTML = news[i0].no;
		document.querySelector('.conte1 #te').innerHTML = news[i0].des;
	}

	function news1 () { 	
		document.querySelector('.conte1 #im1').src = news[i1].src;
		document.querySelector('.conte1 #ti1').innerHTML = news[i1].no;
		document.querySelector('.conte1 #te1').innerHTML = news[i1].des;
	}

	function news2 () { 	
		document.querySelector('.conte1 #im2').src = news[i2].src;
		document.querySelector('.conte1 #ti2').innerHTML = news[i2].no;
		document.querySelector('.conte1 #te2').innerHTML = news[i2].des;
	}

	function news3 () { 	
		document.querySelector('.conte1 #im3').src = news[i3].src;
		document.querySelector('.conte1 #ti3').innerHTML = news[i3].no;
		document.querySelector('.conte1 #te3').innerHTML = news[i3].des;
	}



	function news4 () { 	
		document.querySelector('.conte1 #im4').src = news[i4].src;
		document.querySelector('.conte1 #ti4').innerHTML = news[i4].no;
		document.querySelector('.conte1 #te4').innerHTML = news[i4].des;
	}

	function news5 () { 	
		document.querySelector('.conte1 #im5').src = news[i5].src;
		document.querySelector('.conte1 #ti5').innerHTML = news[i5].no;
		document.querySelector('.conte1 #te5').innerHTML = news[i5].des;
	}

	function news6 () { 	
		document.querySelector('.conte1 #im6').src = news[i6].src;
		document.querySelector('.conte1 #ti6').innerHTML = news[i6].no;
		document.querySelector('.conte1 #te6').innerHTML = news[i6].des;
	}

	function news7 () { 	
		document.querySelector('.conte1 #im7').src = news[i7].src;
		document.querySelector('.conte1 #ti7').innerHTML = news[i7].no;
		document.querySelector('.conte1 #te7').innerHTML = news[i7].des;
	}





	news0();
	news1();
	news2();
	news3();
	news4();
	news5();
	news6();
	news7();
	


	
	
	