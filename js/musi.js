

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

		// 32 obj

	{
		src: 'https://aloalobahia.com/images/p/osbapremioprofissionais_alo_alo_bahia.jpg',
		no: 'Orquestra Sinfônica da Bahia (OSBA) | BA',
		des: 'Foi destaque no Prêmio Profissionais da Música. Foi fundada em 1944 pelo Padre Luiz Gonzaga de Mariz, padre jesuíta ligado ao Colégio Antônio Vieira de Salvador. Tem relação com a sala de concerto Teatro Castro Alves e o condutor Carlos Prazeres.',
	},
	{
		src: 'https://cidadedeniteroi.com/wp-content/uploads/2018/08/Johann-Sebastian-Rio-Foto-.jpg',
		no: 'Orquestra Johann Sebastian Rio',
		des: 'Ligada a nomes como Felipe Prazeres, Eduardo Pereira (violinista), Ivan Zandonade (violinista), Vanessa Rocha (poetisa).',
	},
	{
		src: 'https://musica.ufrj.br/images/vinhetas/osufrj_2.webp',
		no: 'Orquestra Sinfônica da UFRJ (OSUFRJ)',
		des: 'É fruto de uma longa história de atividades ininterruptas, iniciada em 1924. Um nome referente à Escola de Música da UFRJ.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Logo_EM_-_UFRJ.png/300px-Logo_EM_-_UFRJ.png',
		no: 'Escola de Música da Universidade Federal do Rio de Janeiro (EMUFRJ)',
		des: 'Fundada em 1841, é a instituição de ensino musical mais antiga em atividade no Brasil. Destina-se ao ensino e à pesquisa, visando principalmente à formação em nível superior, nas atividades de execução, interpretação, criação musical e formação de professores.',
	},
	{
		src: 'https://www.teatroguaira.pr.gov.br/sites/teatro-guaira/arquivos_restritos/files/styles/escala_e_corta_570_390_/public/imagem/2019-11/157131514625_10.jpg?itok=8p49rkRB',
		no: 'Orquestra Sinfônica do Paraná (OSP)',
		des: 'Criada em 1985, seu primeiro maestro titular e emérito foi Alceo Bocchino e o primeiro maestro adjunto, Osvaldo Colarusso. 🖼️ Teatro Guaíra.',
	},
	{
		src: 'https://joesynth.files.wordpress.com/2018/07/20180705_094708.jpg',
		no: 'Montagens: selos',
		des: 'A montagem foi a mãe do funk carioca; imortalizada, em especial, pelos selos M.Funk Records e... 🖼️ Selo Audio Bass.',
	},
	{
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Roberto_Tibiri%C3%A7a_I.jpg/270px-Roberto_Tibiri%C3%A7a_I.jpg',
		no: 'Roberto Tibiriçá | SP',
		des: 'Mestro titular da cadeira de nº 5 da Academia Brasileira de Música, desde de 2003; e Membro Honorário da Academia Nacional de Música, Rio de Janeiro.',
	},
	{
		src: 'https://musica.ufrj.br/images/noticias/salo_leopoldo_miguz.webp',
		no: 'Salão Leopoldo Miguez da UFRJ',
		des: 'Foi construído para proporcionar ao então Instituto Nacional de Música um local para concertos e outras solenidades. O projeto arquitetônico é de autoria do arquiteto Cipriano Lemos e inspirado na Sala Gaveau de Paris.',
	},
	{
		src: 'https://immub-space.nyc3.digitaloceanspaces.com/capas/75309/thumbnails/m_75309ca.jpg',
		no: 'CD Café Brasil',
		des: 'Lançado de forma independente em 2001, é referente ao Conjunto Época de Ouro.',
	},
	{
		src: 'https://classicaltracks.com.br/imagefly/w400-h260-c/media/musicos/Tibor_01.jpg',
		no: 'Tibor Fittel',
		des: 'Jundo com Camila Marlière, são o Duo Querubim; que tem como proposta apresentar um repertório de música de concerto.',
	},
	{
		src: 'https://storage.alboom.ninja/sites/745/albuns/26870/aquila-simoes---fotografia--------------------recital-camila-marliere--10.JPG',
		no: 'Camila Marlière',
		des: 'Jundo com Camila Marlière, são o Duo Querubim; que tem como proposta apresentar um repertório de música de concerto.',
	},
	{
		src: 'https://joesynth.files.wordpress.com/2018/06/peo_1915-hans-j-koellreutter.png',
		no: 'Hans-j-koellreutter | SP',
		des: 'Foi um compositor, professor e musicólogo brasileiro de origem alemã, tendo se mudado para o Brasil em 1937. Tornou-se um dos nomes mais influentes na vida musical no país. | ft:pt.wi',
	},


		/* Genres - Dicionário de estilos */

	{
		src: 'images/gosp.png',
		no: '🇺🇸 Gospel music | início séc. XX',
		des: 'A palavra gospel derivada de "god-spell". Música escrita e executada tendo como tema o louvor, adoração ou graças a Deus, portanto tem motivo religioso ou cerimonial _embora também ocorre como um produto de entretenimento para o mercado comercial.',
	},
	{
		src: 'images/soul.png',
		no: '🇺🇸 Soul | déc. 50',
		des: 'Combina elementos da música gospel, rhythm and blues e jazz. A soul music tornou-se popular para dançar e ouvir nos Estados Unidos, onde gravadoras como Motown, Atlantic e Stax foram influentes durante o Movimento dos Direitos Civis. [ft:wi.pt]',
	},
	{
		src: 'images/soul.png',
		no: '🇺🇸 Soul',
		des: 'Segundo AllMusic, "a soul music foi o resultado da urbanização e comercialização do R&B nos anos 60". O próprio termo "soul music", referindo-se à música de estilo gospel com letras seculares, foi atestada pela primeira vez em 1961.',
	},
	{
		src: 'images/soul.png',
		no: '🇺🇸 Soul',
		des: 'O termo "soul" na linguagem afro-americana tem conotações de orgulho e cultura afro-americana. Grupos gospel nas décadas de 1940 e 1950 ocasionalmente usavam o termo como parte de seus nomes.',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música: canções folclóricas',
		des: 'Não existe nenhum corpo unificado de canções folclóricas judaicas, e sim uma grande variedade de tradições populares que refletem as condições das muitas comunidades dispersas, formadas após a destruição do Segundo Templo e o fenômeno da diáspora. Essas diversas tradições misturam tendências judaicas com formas regionais. | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🇺🇸 Saminsky, Lazare | Compositor norte-americano, de origem russa.',
		des: 'Foi aluno de Liado e Rimsky-Korsakov nos conservatórios de S. Petersburgo e Moscou (1906-10); mudou-se em 1920 para Nova York, onde em 1923 foi fundador da Liga dos Compositores. Foi diretor musical do Templo Emanu-El (1924-56) e autor de vários livros; escreveu música litúrgica judaica e valeu-se de fontes judaicas em suas cinco sinfonias, música coral e canções. | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🇺🇸 Jacobi, Frederick | Compositor',
		des: 'Estudou com Goldmark, Bloch e (em Berlim) Juon. Suas obras cobrem todos os gêneros, às vezes influenciadas pela música indígena norte-americana (p.ex., Indian Dances, 1928), porém mais ainda pela tradição ocidental (p.ex., Concertino para piano e cordas, 1946). | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🇺🇸 Bloch, Ernest | Compositor',
		des: 'Estudou com Dalcroze em Genebra, em Bruxelas (1897-9), e com Knorr em Frankfurt (1900). Em 1916 foi para os EUA, onde desde então passou a maior parte de sua vida (adquiriu a cidadania em 1924). Também ensinou em Cleveland (1920-25), São Francisco (1925-30) e Berkeley (1940-52). Suas primeiras obras são ecléticas: a ópera Macbeth (1910) tem influências de Strauss, Mussorgsky e Debussy. Adveio então um período voltado principalmente para temas judaicos (Schelomo para violoncelo e orquestra, 1916), seguido por um vigoroso neoclassicismo (Quinteto para piano n. 1, 1923; Concerto grosso n. 1 para cordas e piano, 1925). Retornou às composições épicas nos anos 30 com o Serviço religioso (Avodath hakodesh, 1933) e o Concerto para violino (1937). Suas últimas obras representam uma suma de sua carreira e inclinam-se a um estilo menos subjetivo. | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música',
		des: 'A música de sinagoga norte-americana baseava-se originalmente em modelos europeus, apesar de mais recentemente compositores como Ernest Bloch, Frederick Jacobi, Lazare Saminsky e Isadore Freed terem contribuído com peças em idioma hebraico. | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música: sinagogas alemãs',
		des: 'As sinagogas alemãs começaram a fazer uso de coros, órgãos e outros tipos de música instrumental a partir de c.1700, valendo-se de repertório contemporâneo não-judaico, de peças seculares, danças e até mesmo melodias líricas. O séc.XIX viu a crescente assimilação de estilos ocidentais na música de sinagoga, bem como a formação de escolas cantoriais. | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música',
		des: 'Desde a Idade Média, a música esteve ligada ao misticismo judaico, como no movimento chassídico da Europa oriental, com seus niggunim característicos, canções fortemente rítmicas entoadas pelos homens em sílabas não léxicas. O estilo chassídico influenciou a música de sinagoga da Europa oriental. Os precentores desenvolveram estilos virtuosísticos, geralmente valendo-se dos idiomas clássicos locais (p.ex., o sistema magam na diáspora oriental e as técnicas de variação barrocas ocidentais). | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música: música instrumental e vocal',
		des: 'Após a destruição do Templo pelos romanos no ano 70, a música instrumental foi banida; formas vocais, particularmente o canto dos salmos, sobrevivem até hoje, porém, ao que tudo indica, com poucas mudanças, e são as mais antigas formas preservadas de música judaica. Outras formas vocais são a cantilação dos livros em prosa da Bíblia (incluindo o Pentateuco, Profetas e Ruth) e preces e hinos virtuosisticos, improvisatórios, transmitidos oralmente pelos cantores-compositores (chazanim). | Grove',
	},
	{
		src: 'images/jewi.png',
		no: '🕎️ Judaica, música',
		des: 'Os primeiros indícios de uma cultura musical judaica são encontrados no Velho Testamento. A música hebraica teve suas bases estabelecidas pelo rei Davi, entre 1002 e 970 a.C., no Templo de Jerusalém, onde músicos levitas eram encarregados da execução instrumental e vocal. | Grove',
	},
	{
		src: 'https://3.bp.blogspot.com/-gxPkpGRZ28I/V2qq4KYmWII/AAAAAAAATGw/XWm4y-bghxU5Wt6VN2klUcM5EtDVLPhMgCKgB/s1600/Jorge%2BAntunes%2B-%2B17out06%2B-%2BDaiane%2BSouza%2B%25286%2529.jpg',
		no: 'Jorge Antunes: vanguarda eletrônica | RJ',
		des: 'Se o rock é sinônimo de atitude, a música eletrônica brasileira não fica atrás quando se trata do pioneiro Jorge Antunes. Seu comprometimento com a sociedade, a música, a educação é reconhecido internacionalmente. Realizou sua formação musical tradicional na Escola de Música da Universidade do Brasil, atual UFRJ. Em 1962 começou a se interessar pela música eletrônica, ao mesmo tempo em que ingressava no curso de Física da Faculdade Nacional de Filosofia (FNFi).',
	},
	{
		src: 'https://cultura.uol.com.br/upload/radio/discosmarcuspereira/20210831123219_site-uol-2021-08-31t123212.627.png',
		no: 'Marcus Pereira | SP',
		des: 'Publicitário e bacharel em direito, ele criou a Discos Marcus Pereira; um selo independente de música regional e música popular brasileira, fundado em 1973. Desiludido e com outros problemas pessoais, Marcus Pereira tirou a própria vida em 1981; porém, deixando dezenas e dezenas de discos com toda diversidade cultural brasileira _um trabalho espetacular para todos os cidadãos.',
	},
	{
		src: 'https://i0.wp.com/cariridagente.com/wp-content/uploads/2013/11/pinto.jpg',
		no: 'Pinto do Monteiro | PB',
		des: 'Foi um poeta popular, compositor, cantador e improvisador brasileiro. Filho de uma doméstica com um tropeiro, trabalhou como vaqueiro, vendedor, auxiliar de enfermagem e guarda do serviço contra a malária. Foi também soldado no combate aos bandos de cangaceiros. Aprendeu a ler e a escrever já depois de adulto. Foi um dos mais lendários cantadores e repentistas.',
	},
	{
		src: 'thumb320x180.png',
		no: '🇯🇲️ Ska (bluebeat) | final déc. 50',
		des: 'Um estilo de música e dança popular urbano, da jamaica. Lá, foi o estilo de música popular nativa predominante, até ser suplantado, em meados dos anos 60, pelo "rock steady", um precursor do reggae. Teve aceitação fugaz na América do Norte e na Grã-Bretanha. [ft:gro]',
	},
	{
		src: 'images/funk.png',
		no: '🇺🇸 Lyn Collins',
		des: 'Conhecida por ter trabalhado com James Brown, a cantora "passeou" pelo soul, funk e R&B.',
	},
	{
		src: 'images/soul.png',
		no: '🇺🇸 Aretha Franklin',	
		des: 'Ela foi, ou é, amplamente conhecida como a "Rainha do Soul", enquanto James Brown era conhecido como o "Padrinho do Soul". Aretha Franklin foi a cantora de soul mais importante a surgir; e foi, originalmente, uma cantora gospel que começou a fazer gravações seculares em 1960.',	
	},
	{
		src: 'images/regg.png',
		no: '🇯🇲️ Audrey Hall',	
		des: 'Uma cantora "sinônimo" de reggae tendo vários discos e singles, ainda na época do vinil.',	
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
		des: 'Começou como cantor gospel, na Geórgia, e ganhou destaque em meados da década de 1950 sendo vocalista do Famous Flames, um grupo vocal de R&B. Lançou "Try Me" em 1958, que alcançou o primeiro lugar nas paradas de R&B no início de 1959. James Brown, the Flames e toda a sua banda estrearam no Apollo Theatre em 1959, abrindo para o ídolo de Brown: Little Willie John. O primeiro funk de James Brown? Alguns críticos citaram  "Cold Sweat" como a primeira verdadeira música funk, que alcançou o primeiro lugar na parada de R&B.',	
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
		no: '🇺🇸 Chick Corea 🎹 🥁️',	
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
		des: 'Gravou para a Atlantic na década de 1960. Peter Guralnick está entre os que identificaram Solomon Burke como uma figura chave no surgimento da música soul, e a Atlantic Records como a principal gravadora.',
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
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Waldir_Azevedo.jpg/200px-Waldir_Azevedo.jpg',
		no: 'Waldir Azevedo | RJ',
		des: 'Foi músico e compositor, mestre do cavaquinho e autor dos choros "Brasileirinho", "Delicado" e "Pedacinhos do Ceu". | pt.wi',
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
		des: 'Voltado ao R&B e soul, foi o grupo que teve James Brown em seu início de carreira. Lançou uma versão de "Please, Please, Please" em 1956. A canção se tornou o primeiro hit de R&B do grupo.',
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
var i0 = ran(62, 63);
var i1 = ran(60, 61);
var i2 = ran(58, 59);
var i3 = ran(56, 57);
var i4 = ran(54, 55);
var i5 = ran(52, 53);
var i6 = ran(50, 51);
var i7 = ran(48, 49);
var i8 = ran(46, 47);
var i9 = ran(44, 45);
var i10 = ran(42, 43);
var i11 = ran(40, 41);
var i12 = ran(38, 39);
var i13 = ran(36, 37);
var i14 = ran(34, 35);
var i15 = ran(32, 33);

var i16 = ran(30, 31);
var i17 = ran(28, 29);
var i18 = ran(26, 27);
var i19 = ran(24, 25);
var i20 = ran(22, 23);
var i21 = ran(20, 21);
var i22 = ran(18, 19);
var i23 = ran(16, 17);
var i24 = ran(14, 15);
var i25 = ran(12, 13);
var i26 = ran(10, 11);
var i27 = ran(8, 9);
var i28 = ran(6, 7);
var i29 = ran(4, 5);
var i30 = ran(2, 3);
var i31 = ran(0, 1);

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






	function sor16 () { 	/*  Coloca os respectivos conteúdos conforme índice, i */ 
		document.querySelector('.conte3 #im16').src = mus[i16].src;
		document.querySelector('.conte3 #ti16').innerHTML = mus[i16].no;
		document.querySelector('.conte3 #te16').innerHTML = mus[i16].des;
	}

	function sor17 () {
		document.querySelector('.conte3 #im17').src = mus[i17].src;
		document.querySelector('.conte3 #ti17').innerHTML = mus[i17].no;
		document.querySelector('.conte3 #te17').innerHTML = mus[i17].des;
	}

	function sor18 () {
		document.querySelector('.conte3 #im18').src = mus[i18].src;
		document.querySelector('.conte3 #ti18').innerHTML = mus[i18].no;
		document.querySelector('.conte3 #te18').innerHTML = mus[i18].des;
	}

	function sor19 () {
		document.querySelector('.conte3 #im19').src = mus[i19].src;
		document.querySelector('.conte3 #ti19').innerHTML = mus[i19].no;
		document.querySelector('.conte3 #te19').innerHTML = mus[i19].des;
	}

	function sor20 () {
		document.querySelector('.conte3 #im20').src = mus[i20].src;
		document.querySelector('.conte3 #ti20').innerHTML = mus[i20].no;
		document.querySelector('.conte3 #te20').innerHTML = mus[i20].des;
	}
	function sor21 () {
		document.querySelector('.conte3 #im21').src = mus[i21].src;
		document.querySelector('.conte3 #ti21').innerHTML = mus[i21].no;
		document.querySelector('.conte3 #te21').innerHTML = mus[i21].des;
	}
	function sor22 () {
		document.querySelector('.conte3 #im22').src = mus[i22].src;
		document.querySelector('.conte3 #ti22').innerHTML = mus[i22].no;
		document.querySelector('.conte3 #te22').innerHTML = mus[i22].des;
	}
	function sor23 () {
		document.querySelector('.conte3 #im23').src = mus[i23].src;
		document.querySelector('.conte3 #ti23').innerHTML = mus[i23].no;
		document.querySelector('.conte3 #te23').innerHTML = mus[i23].des;
	}

	function sor24 () { 	/*  Coloca os respectivos conteúdos conforme índice, i */ 
		document.querySelector('.conte3 #im24').src = mus[i24].src;
		document.querySelector('.conte3 #ti24').innerHTML = mus[i24].no;
		document.querySelector('.conte3 #te24').innerHTML = mus[i24].des;
	}

	function sor25 () {
		document.querySelector('.conte3 #im25').src = mus[i25].src;
		document.querySelector('.conte3 #ti25').innerHTML = mus[i25].no;
		document.querySelector('.conte3 #te25').innerHTML = mus[i25].des;
	}

	function sor26 () {
		document.querySelector('.conte3 #im26').src = mus[i26].src;
		document.querySelector('.conte3 #ti26').innerHTML = mus[i26].no;
		document.querySelector('.conte3 #te26').innerHTML = mus[i26].des;
	}

	function sor27 () {
		document.querySelector('.conte3 #im27').src = mus[i27].src;
		document.querySelector('.conte3 #ti27').innerHTML = mus[i27].no;
		document.querySelector('.conte3 #te27').innerHTML = mus[i27].des;
	}

	function sor28 () {
		document.querySelector('.conte3 #im28').src = mus[i28].src;
		document.querySelector('.conte3 #ti28').innerHTML = mus[i28].no;
		document.querySelector('.conte3 #te28').innerHTML = mus[i28].des;
	}
	function sor29 () {
		document.querySelector('.conte3 #im29').src = mus[i29].src;
		document.querySelector('.conte3 #ti29').innerHTML = mus[i29].no;
		document.querySelector('.conte3 #te29').innerHTML = mus[i29].des;
	}
	function sor30 () {
		document.querySelector('.conte3 #im30').src = mus[i30].src;
		document.querySelector('.conte3 #ti30').innerHTML = mus[i30].no;
		document.querySelector('.conte3 #te30').innerHTML = mus[i30].des;
	}
	function sor31 () {
		document.querySelector('.conte3 #im31').src = mus[i31].src;
		document.querySelector('.conte3 #ti31').innerHTML = mus[i31].no;
		document.querySelector('.conte3 #te31').innerHTML = mus[i31].des;
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

	sor16();
	sor17();
	sor18();
	sor19();
	sor20();
	sor21();
	sor22();
	sor23();
	sor24();
	sor25();
	sor26();
	sor27();
	sor28();
	sor29();
	sor30();
	sor31();


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


