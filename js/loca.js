






let loc = [
	{
			src: 'https://s2-g1.glbimg.com/_BQ5bLZCDvKKff36BKXJ-J5sKIE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/q/o/zJNlEoRO2AdaB35IvVHQ/25143443-79908-gd.jpg',
			no: 'Casa da OSPA | RS',
			des: 'É a sede da Fundação Orquestra Sinfônica de Porto Alegre (FOSPA).',
	},
	{
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sala_S%C3%A3o_Paulo_%2816627058179%29.jpg/300px-Sala_S%C3%A3o_Paulo_%2816627058179%29.jpg',
			no: 'Sala São Paulo | SP',
			des: 'É uma sala de concertos onde ocorrem apresentações sinfônicas e de câmara.',
	},
	{
			src: 'https://revistaogrito.com/wp-content/uploads/2023/05/Screenshot_20230511_173603_Instagram-1033x770.jpg',
			no: 'Teatro de Santa Isabel | PE',
			des: 'Seu nome está ligado à bela Orquestra Sinfônica do Recife.',
	},
	{
			src: 'https://tvbrasil.ebc.com.br/sites/default/files/atoms/image/partituras_opes_municipal_grande.jpg',
			no: 'Teatro Municipal | RJ',
			des: 'Utilizado pela Orquestra Sinfônica Petrobras.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Amazon_Theatre_in_Brazil.jpg/300px-Amazon_Theatre_in_Brazil.jpg',
		no: 'Teatro Amazonas | AM',
		des: 'É sede do Festival Amazonas de Ópera anual e da Orquestra Filarmônica do Amazonas, que ensaia e se apresenta regularmente.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Teatro_Guararapes_-_Olinda%2C_Pernambuco%2C_Brasil.jpg/300px-Teatro_Guararapes_-_Olinda%2C_Pernambuco%2C_Brasil.jpg',
		no: 'Teatro Guararapes | PE',
		des: 'Ou ainda Teatro Guararapes Chico Science, é um espaço espetacular com mais de 2000 lugares e décadas de existência.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Escola-de-M%C3%BAsica-UFRN.jpg/800px-Escola-de-M%C3%BAsica-UFRN.jpg',
		no: 'Escola de Música da UFRN',
		des: 'Além de abrigar o Curso Técnico em Música, é um lugar especial devido aos bons (ou ótimos) eventos.',
	},
	{
		src: 'https://belem.com.br/images/noticias/6112/30035725_up_ag_1610.jpg',
		no: 'Fundação Carlos Gomes (FCG) | PA',
		des: 'O lugar ideal para capacitar e aperfeiçoar regentes do interior do Pará.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Belem-TeatroPaz1.jpg/270px-Belem-TeatroPaz1.jpg',
		no: 'Theatro da Paz | PA.',
		des: 'Do final do século XIX, possui quase 800 lugares para os espectadores. Foi tombado como patrimônio histórico pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) em 1963.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Teatro_Municipal_de_S%C3%A3o_Paulo_8.jpg/300px-Teatro_Municipal_de_S%C3%A3o_Paulo_8.jpg',
		no: 'Theatro Municipal (São Paulo) | SP',
		des: 'Do início do século XX, possui aproximadamente 1500 lugares para desfrutar dos mais belos espatáculos.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/TSPedro-PortoAlegre.jpg/250px-TSPedro-PortoAlegre.jpg',
		no: 'Theatro São Pedro | RS',
		des: 'Fundado no século XIX, logo se tornou um centro artístico, social e político do país.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Opera_de_Arame_Interior.jpg/240px-Opera_de_Arame_Interior.jpg',
		no: 'Ópera de Arame | PR',
		des: 'Com uma estrutura tubular e teto transparente, é um dos símbolos emblemáticos de Curitiba, tendo sido inaugurada em 1992.',
	},
	{
		src: 'https://s2-g1.glbimg.com/hXJRof9hi3zHAi6agL277ftQvLo=/0x0:5184x3456/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/u/f/r5fhOmQcu1aeWjbb3gIg/img-6800.jpg',
		no: 'Universidade Federal de Roraima (UFRR) | RR',
		des: 'Nela encontramos o curso de licenciatura em Música.',
	},
	{
		src: 'https://docs.uft.edu.br/share/proxy/alfresco-noauth/api/internal/shared/node/G8ao6LAoRBe5zG-lMHCsFA/content/Divulga%C3%A7%C3%A3o.jpeg',
		no: 'Universidade Federal do Tocantins',
		des: 'O curso de Licenciatura em Artes-Teatro da Universidade Federal do Tocantins foi criado em 2009.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Campus_Darcy_Ribeiro_%2831398447555%29.jpg/240px-Campus_Darcy_Ribeiro_%2831398447555%29.jpg',
		no: 'Universidade de Brasília | DF',
		des: 'Tem o curso de Licenciatura em Música à distância foi criado pela UAB no ano de 2007, visando atender estudantes que moram em lugares distantes e que procuram fazer um curso superior em música.',
	},
	{
		src: 'https://s2.glbimg.com/NZcO9EAq0Ct6yKixb23qcp1iF44=/620x465/s.glbimg.com/jo/g1/f/original/2013/05/06/orquestra_sinfonica_-_bruno_garmatz_43.jpg',
		no: ' Instituto Boa Vista de Música (IBVM) | RR',
		des: 'Tem como principal foco de atuação ações do ensino da música destinadas à inclusão social de crianças e adolescentes.',
	},
	{
		src: 'https://s2-g1.glbimg.com/n1mj9XrJjoQSDthgJznd65JC0Mk=/0x0:900x397/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/Z/i7REwqR4KAEqWFRmjFpA/927f31e4-b693-4496-8d6b-66e696b916f2.jpeg',
		no: 'Universidade Federal do Acre | AC',
		des: 'Tem o Curso de Licenciatura em Música, que foi criado em 2006.',
	},
	{
		src: 'https://s3-sa-east-1.amazonaws.com/img.guiadasartes.com.br/eve/612-theatro-jose-de-alencar-/c4w8ciNw.200x200.jpg',
		no: 'Theatro José de Alencar | CE',
		des: 'Sendo do início do século XX e situado em Fortaleza, é referência artística, turística e arquitetônica no país. É tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Teatro_Gua%C3%ADra_in_2006_1.jpg/300px-Teatro_Gua%C3%ADra_in_2006_1.jpg',
		no: 'Centro Cultural Teatro Guaíra | PR',
		des: 'A história do Teatro Guaíra inicia no século XIX.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Centro_Drag%C3%A3o_do_Mar_de_Arte_e_Cultura_%284%29.jpg/300px-Centro_Drag%C3%A3o_do_Mar_de_Arte_e_Cultura_%284%29.jpg',
		no: 'Centro Dragão do Mar de Arte e Cultura (CDMAC) | CE',
		des: 'É um dos maiores centros culturais do Brasil, e dentre as atrações há o Teatro Dragão do Mar e o Anfiteatro Sérgio Mota. ',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Theatro_S%C3%A3o_Jo%C3%A3o_%28Sobral%29.jpg/300px-Theatro_S%C3%A3o_Jo%C3%A3o_%28Sobral%29.jpg',
		no: 'Teatro São João (Sobral) | CE',
		des: 'É o mais importante espaço cultural da cidade de Sobral, tendo sido inaugurado ainda no século XIX.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Teatro_S%C3%A3o_Jos%C3%A9_em_Fortaleza_04.jpg/300px-Teatro_S%C3%A3o_Jos%C3%A9_em_Fortaleza_04.jpg',
		no: 'Teatro São José | CE',
		des: 'Com mais de cem anos de existência, foi inaugurado no início do século XX. Fica em Fortaleza e tem capacidade para 530 pessoas.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Teatro_Prezewodowski_%28Itaqu%C3%AD%29..jpg/800px-Teatro_Prezewodowski_%28Itaqu%C3%AD%29..jpg',
		no: 'Teatro Prezewodowski | RS',
		des: 'Do século XIX e tendo capacidade para quase 300 pessoas, fica no município de Itaqui. É um dos prédios mais antigos da América Latina, tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheatroGuarany.jpg/150px-TheatroGuarany.jpg',
		no: 'Teatro Guarani | RS',
		des: 'Theatro Guarany, na grafia da época de fundação, é um teatro situado na cidade de Pelotas. Foi inaugurado em abril de 1921, portanto já tendo mais de um século.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Teatro7abril2.jpg/250px-Teatro7abril2.jpg',
		no: 'Teatro Sete de Abril | RS',
		des: 'Com quase 200 anos de existência, fica na cidade de Pelotas. Possui características da linguagem colonial. Em âmbito nacional, seu nome pode ser interpretado como homenagem ao dia da abdicação de D. Pedro I em favor de seu filho, o que alguns liberais mais exaltados consideravam a verdadeira data de Independência do Brasil.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Teatro_Alberto_Maranh%C3%A3o_a_noite.jpg/300px-Teatro_Alberto_Maranh%C3%A3o_a_noite.jpg',
		no: 'Teatro Alberto Maranhão | RN',
		des: 'Estando na cidade de Natal, é um teatro centenário. É um monumento tombado pelo Instituto do Patrimônio Histórico e Artístico do Rio Grande do Norte',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Teatro_Municipal_Dix-Huit_Rosado%2C_Mossor%C3%B3_%28RN%29.jpg/250px-Teatro_Municipal_Dix-Huit_Rosado%2C_Mossor%C3%B3_%28RN%29.jpg',
		no: 'Teatro Municipal Dix-Huit Rosado | RN',
		des: 'Ficando na cidade de Mossoró, foi construído em 2003 pela prefeitura numaa parceria da PETROBRAS. O espaço comporta mais de 700 pessoas para presenciar balé, comédias, danças...',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Teatro_Deodoro_maceio.JPG/300px-Teatro_Deodoro_maceio.JPG',
		no: 'Teatro Deodoro | AL',
		des: 'Situado em Maceió, foi inaugurado em 15 de novembro de 1910 e pertence ao governo do estado de Alagoas.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cine_brasilia_df.jpg/280px-Cine_brasilia_df.jpg',
		no: 'Cine Brasília | DF',
		des: 'Embora uma sala de cinema, além dos filmes, houve apresentação de quatro orquestras: Sinfônica de Belo Horizonte, Teatro Municipal de São Paulo, Teatro Municipal do Rio de Janeiro e Sinfônica Brasileira.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bras%C3%ADlia_-_Teatro_Dulcina_de_Moraes_%284%29.jpg/300px-Bras%C3%ADlia_-_Teatro_Dulcina_de_Moraes_%284%29.jpg',
		no: 'Teatro Dulcina de Moraes | DF',
		des: 'Vinculada a Faculdade de Artes Dulcina de Moraes foi a primeira instituição de ensino a licenciar bacharéis em artes cênicas, plásticas e visuais no país.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Teatro_Nacional_Cl%C3%A1udio_Santoro_-_Brasilia_-_DSC00311.JPG/300px-Teatro_Nacional_Cl%C3%A1udio_Santoro_-_Brasilia_-_DSC00311.JPG',
		no: 'Teatro Nacional Cláudio Santoro | DF',
		des: 'Possui estrutura com forma de pirâmide irregular. No seu interior, destacam-se as salas Martins Pena, Villa-Lobos e Alberto Nepomuceno, onde de realizam, ao longo de todo o ano, numerosos atos e representações culturais.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Teatro_Nacional_S%C3%A3o_Carlos.jpg/300px-Teatro_Nacional_S%C3%A3o_Carlos.jpg',
		no: 'Teatro Nacional de São Carlos | DF',
		des: 'Foi inaugurado em 1793 pelo Príncipe Regente D. João para substituir o Teatro Ópera do Tejo, que foi destruído no Terramoto de 1755,',
	},
	{
		src: 'https://uploads.metropoles.com/wp-content/uploads/2016/03/30153645/6-teatro-eva-herz2.jpg',
		no: 'Teatro Eva Herz | DF, BA...',
		des: 'É uma rede de teatros brasileiros com unidades em Brasília, Curitiba, Recife, Salvador e São Paulo. O Teatro Eva Herz é um desdobramento da Livraria Cultura que teve início quando Eva Herz, mãe do atual presidente da rede que abriu um espaço para alugar livros na sala da casa dela, na capital de São Paulo.',
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
var i0 = ran(24, 33);
var i1 = ran(19, 23);
var i2 = ran(14, 18);
var i3 = ran(9, 13);
var i4 = ran(6, 8);
var i5 = ran(4, 5);
var i6 = ran(2, 3);
var i7 = ran(0, 1);


/*
var i0 = Object.keys(loc)[Math.floor(Math.random()*Object.keys(loc).length)];
var i1 = Object.keys(loc)[Math.floor(Math.random()*Object.keys(loc).length)];
var i2 = Object.keys(loc)[Math.floor(Math.random()*Object.keys(loc).length)];
var i3 = Object.keys(loc)[Math.floor(Math.random()*Object.keys(loc).length)];
*/

	function loc0 () { 	
		document.querySelector('.conte2 #im').src = loc[i0].src;
		document.querySelector('.conte2 #ti').innerHTML = loc[i0].no;
		document.querySelector('.conte2 #te').innerHTML = loc[i0].des;
	}

	function loc1 () { 	
		document.querySelector('.conte2 #im1').src = loc[i1].src;
		document.querySelector('.conte2 #ti1').innerHTML = loc[i1].no;
		document.querySelector('.conte2 #te1').innerHTML = loc[i1].des;
	}

	function loc2 () { 	
		document.querySelector('.conte2 #im2').src = loc[i2].src;
		document.querySelector('.conte2 #ti2').innerHTML = loc[i2].no;
		document.querySelector('.conte2 #te2').innerHTML = loc[i2].des;
	}

	function loc3 () { 	
		document.querySelector('.conte2 #im3').src = loc[i3].src;
		document.querySelector('.conte2 #ti3').innerHTML = loc[i3].no;
		document.querySelector('.conte2 #te3').innerHTML = loc[i3].des;
	}



	function loc4 () { 	
		document.querySelector('.conte2 #im4').src = loc[i4].src;
		document.querySelector('.conte2 #ti4').innerHTML = loc[i4].no;
		document.querySelector('.conte2 #te4').innerHTML = loc[i4].des;
	}

	function loc5 () { 	
		document.querySelector('.conte2 #im5').src = loc[i5].src;
		document.querySelector('.conte2 #ti5').innerHTML = loc[i5].no;
		document.querySelector('.conte2 #te5').innerHTML = loc[i5].des;
	}

	function loc6 () { 	
		document.querySelector('.conte2 #im6').src = loc[i6].src;
		document.querySelector('.conte2 #ti6').innerHTML = loc[i6].no;
		document.querySelector('.conte2 #te6').innerHTML = loc[i6].des;
	}

	function loc7 () { 	
		document.querySelector('.conte2 #im7').src = loc[i7].src;
		document.querySelector('.conte2 #ti7').innerHTML = loc[i7].no;
		document.querySelector('.conte2 #te7').innerHTML = loc[i7].des;
	}

	loc0();
	loc1();
	loc2();
	loc3();
	loc4();
	loc5();
	loc6();
	loc7();









/*
LOC | teatro | escola | universidade
Escola de Música do Acre (Emac), 

Teatro Municipal de Boa Vista
Teatro Goiânia
Teatro Sesc Senac Pelourinho UFBA
Theatro Fernanda Montenegro em Palmas,
Theatro Municipal de São Paulo
Teatro Municipal de Boa Vista




EMPRESA PARTICULAR - AXU
Bip Bip.
Citibank Hall.
Cidade da Música
Sala Baden Powel | Copacabana | RJ
Sala Cecilia Meireles



Clube de Choro de Brasília | DF
https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Clube_do_Choro_-_Brasilia_-_DSC00130.JPG/800px-Clube_do_Choro_-_Brasilia_-_DSC00130.JPG
Uma associação voltada a promoção e difusão deste gênero musical, onde há espetáculos e aulas. 

*/