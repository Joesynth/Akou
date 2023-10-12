

/* Conteúdos HTML: o que inclui botões, mkt, etc
*/



const template = document.createElement('template');

template.innerHTML = `
	<aside id="btD">
		<a href="surf.html"><div id="#" class="bt btBase"><span>🎸️</span></div></a>
		<a href="roPr.html"><div id="#" class="bt btBase"><span>🎛️</span></div></a>
		<a href="smoo.html"><div id="#" class="bt btBase"><span>🎷️</span></div></a>
		<a href="cont.html"><div id="#" class="bt btBase"><span>⚡</span></div></a>
		<a href="elet.html"><div id="#" class="bt btBase"><span>💡️</span></div></a>
		<a href="game.html"><div id="#" class="bt btBase"><span>🎮️</span></div></a>
		<a href="conc.html"><div id="#" class="bt btBase"><span>📼️</span></div></a>
	</aside>
	<aside id="btD2">
		<a href="gosp.html"><div id="#" class="btLa	btBase"><span class="mar" >✝</span></div></a>
		<a href="infa.html"><div id="#" class="btLa btBase"><span>☺</span></div></a>
		<a href="newA.html"><div id="#" class="btLa btBase"><span>♧</span></div></a>
		<a href="jewi.html"><div id="#" class="btLa btBase"><span class="mar">✡</span></div></a>
		<br><br><br>
		<a href="voca.html"><div id="#" class="bt btBase"><span>👤️</span></div></a>
	</aside>
	<aside id="btE">
		<a href="clas.html"><div id="#" class="bt btBase"><span class="">🎻️</span></div></a>	
		<a href="blue.html"><div id="#" class="bt btBase"><span class="">🎺️</span></div></a>
		<a href="pian.html"><div id="#" class="bt btBase"><span class="">🎹</span></div></a>
		<a href="chor.html"><div id="#" class="bt btBase"><span class="">🏖️</span></div></a>
		<a href="viol.html"><div id="#" class="bt btBase"><span class="">🎸️</span></div></a>
		<a href="funk.html"><div id="#" class="bt btBase"><span class="inver">🔌️</span></div></a>
		<a href="soun.html"><div id="#" class="bt btBase"><span class="">📺️</span></div></a>
	</aside>
	<aside id="btE2">
		<a href="bras.html"><div id="#" class="bt btBase"><span>🇧🇷️</span></div></a>
		<a href="regg.html"><div id="#" class="bt btBase"><span>🇯🇲️</span></div></a>
		<a href="bra2.html"><div id="#" class="bt btBase"><span>🇧🇷️</span></div></a>
		<a href="coro.html"><div id="#" class="bt btBase"><span>👥</span></div></a>
		<br><br><br><br>
		<a href="soul.html"><div id="#" class="bt btBase"><span>🎙️</span></div></a>
	</aside>
	<main>
		<details>
			<summary></summary>
			<div id="about">
			</div>
		</details>
			<div id="baseDisco">
		  		<button id="disco" onclick=""><div id="emoji">💿️</div></button>
		  		<samp>Akou</samp>
				<div class="progress">
				  <span id="progress-amount"></span>
				</div>
				<div class="buffered">
				  <span id="buffered-amount"></span>
				</div>
		  		<progress id="progress-bar" value="0" min="0"></progress>
		  		<pre>Play ON / OFF</pre>
			</div>
			<div id="display">
		  		<div id="#" class="btt"><span id="tri">ᐅ</span></div>
			</div>	  	
			<section>
			  <button id="pla" onclick=""><span id="emPl">🎵️</span></button>
				<div id="cima">
					<a href="index.html"><div id="aa" class="estilo">A</div></a>
					<div id="bb" class="volume" onclick="">+</div>
				</div>
				<div id="baixo">
					<a href="b.html"><div id="cc" class="estilo"><br><br>B</div></a>
					<div id="dd" class="volume" onclick=""><br><br>-</div>
				</div>
			</section>
	</main>
`;

document.body.appendChild(template.content);




/* Logo Akou no rodapé: conteúdo*/
var conteudo = document.getElementById("about");
conteudo.innerHTML = "<br><h3>Akou é <br>música como alimento e não entretenimento</h3><br>✔️ Grátis<br>✔️ Sem propaganda<br>✔️ Baixíssimo consumo da sua rede<br>✔️ Software livre!<br>✔️ Educativo<br><h3>Música em 1º Lugar</h3>Akou é voltado a músicos e aqueles que, de fato, apreciam música. Priorizando qualidade ao invés da quantidade, Akou oferece exemplos musicais (ou sonoros) úteis para construir e estimular a audição do indivíduo, e assim dando referências. Akou é música como conhecimento e não mero lazer.<br><br>A audição é neutra. Isto é, sem lhe influenciar com imagens, publicidade ou apelos visuais. Ainda sim Akou funciona em segundo plano, permitindo você ouvir músicas e usar outros apps.<br><br><small>• Pela tecnologia FFmpeg uma música tem quase 10x menos dados que um mp3, resultando em baixíssimo consumo da rede.<br>• Sendo um software livre, público, você mesmo pode ver (e ler) o código no GitHub.<br>• Seguro, Akou não coleta dados do usuário e nem negocia (inclusive porque não coleta).</small><br><br>Akou | 2022-2023 | Joe S<br><br>";




/* Logo Akou no rodapé: conteúdo*/
/* note que aki n é aspa e sim crase */
/* conteConfi = conteúdo configuração, tela de configuração para o usuário */
var conteConfi = document.querySelector(".conte")
conteConfi.innerHTML = `
<div class="conf f9">
	<div>
		<span>🎺️ Blu/Jazz </span><input type="checkbox"><br>
		<span>🇧🇷️ Brasil 1 </span><input type="checkbox"><br>
		<span>🇧🇷️ Brasil 2 </span><input type="checkbox"><br>
		<span>🎻️ Clássica </span><input type="checkbox"><br>
		<span>👥 Coro </span><input type="checkbox"><br>
		<span>🏖️ Choro </span><input type="checkbox"><br>
		<span>📼️ Concre. </span><input type="checkbox"><br>
		<span>⚡ Contemp. </span><input type="checkbox"><br>
		<span>💡️ Eletrôn. </span><input type="checkbox"><br>
		<span>🔌️ Funk </span><input type="checkbox"><br>
		<span>🎮️ Game </span><input type="checkbox"><br>
		<span>✝️ Gospel </span><input type="checkbox"><br>
	</div>
	<div>
		<span>😁️ Infantil </span><input type="checkbox"><br>
		<span>🕎️ Judaica </span><input type="checkbox"><br>
		<span>🌺️ New Age </span><input type="checkbox"><br>
		<span>🎹 Piano </span><input type="checkbox"><br>
		<span>🎛️ RoProg </span><input type="checkbox"><br>
		<span>🇯🇲️ Reggae </span><input type="checkbox"><br>
		<span>🎷️ Smooth </span><input type="checkbox"><br>
		<span>🎸️ Surf </span><input type="checkbox"><br>
		<span>🎙️ Soul </span><input type="checkbox"><br>
		<span>📺️ TV </span><input type="checkbox"><br>
		<span>👤️ Vocal </span><input type="checkbox"><br>
		<span>🎸️ Violão </span><input type="checkbox"><br>
	</div>
</div>
`;



/* conteArti = conteúdo artigos: referente ao conteúdo HTML colocado por padrão em várias divs, artigos. Padrão de tags, n de informação de textos, imagens, etc*/
var conteArti = document.querySelectorAll(".conte1");
for (let i=0; i < conteArti.length ; i++) {
	conteArti[i].innerHTML = `
		<div id="arti">
					<img id="im" class="mmm" src="" alt="">
					<p class="ti" id="ti"></p>				
					<p class="te" id="te"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im1" class="mmm" src="" alt="">
					<p class="ti" id="ti1"></p>				
					<p class="te" id="te1"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im2" class="mmm" src="" alt="">
					<p class="ti" id="ti2"></p>				
					<p class="te" id="te2"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im3" class="mmm" src="" alt="">
					<p class="ti" id="ti3"></p>				
					<p class="te" id="te3"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im4" class="mmm" src="" alt="">
					<p class="ti" id="ti4"></p>				
					<p class="te" id="te4"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im5" class="mmm" src="" alt="">
					<p class="ti" id="ti5"></p>				
					<p class="te" id="te5"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im6" class="mmm" src="" alt="">
					<p class="ti" id="ti6"></p>				
					<p class="te" id="te6"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im7" class="mmm" src="" alt="">
					<p class="ti" id="ti7"></p>				
					<p class="te" id="te7"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im8" class="mmm" src="" alt="">
					<p class="ti" id="ti8"></p>				
					<p class="te" id="te8"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im9" class="mmm" src="" alt="">
					<p class="ti" id="ti9"></p>				
					<p class="te" id="te9"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im10" class="mmm" src="" alt="">
					<p class="ti" id="ti10"></p>				
					<p class="te" id="te10"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im11" class="mmm" src="" alt="">
					<p class="ti" id="ti11"></p>				
					<p class="te" id="te11"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im12" class="mmm" src="" alt="">
					<p class="ti" id="ti12"></p>				
					<p class="te" id="te12"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im13" class="mmm" src="" alt="">
					<p class="ti" id="ti13"></p>				
					<p class="te" id="te13"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im14" class="mmm" src="" alt="">
					<p class="ti" id="ti14"></p>				
					<p class="te" id="te14"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im15" class="mmm" src="" alt="">
					<p class="ti" id="ti15"></p>				
					<p class="te" id="te15"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im16" class="mmm" src="" alt="">
					<p class="ti" id="ti16"></p>				
					<p class="te" id="te16"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im17" class="mmm" src="" alt="">
					<p class="ti" id="ti17"></p>				
					<p class="te" id="te17"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im18" class="mmm" src="" alt="">
					<p class="ti" id="ti18"></p>				
					<p class="te" id="te18"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im19" class="mmm" src="" alt="">
					<p class="ti" id="ti19"></p>				
					<p class="te" id="te19"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im20" class="mmm" src="" alt="">
					<p class="ti" id="ti20"></p>				
					<p class="te" id="te20"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im21" class="mmm" src="" alt="">
					<p class="ti" id="ti21"></p>				
					<p class="te" id="te21"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im22" class="mmm" src="" alt="">
					<p class="ti" id="ti22"></p>				
					<p class="te" id="te22"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im23" class="mmm" src="" alt="">
					<p class="ti" id="ti23"></p>				
					<p class="te" id="te23"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im24" class="mmm" src="" alt="">
					<p class="ti" id="ti24"></p>				
					<p class="te" id="te24"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im25" class="mmm" src="" alt="">
					<p class="ti" id="ti25"></p>				
					<p class="te" id="te25"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im26" class="mmm" src="" alt="">
					<p class="ti" id="ti26"></p>				
					<p class="te" id="te26"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im27" class="mmm" src="" alt="">
					<p class="ti" id="ti27"></p>				
					<p class="te" id="te27"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im28" class="mmm" src="" alt="">
					<p class="ti" id="ti28"></p>				
					<p class="te" id="te28"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im29" class="mmm" src="" alt="">
					<p class="ti" id="ti29"></p>				
					<p class="te" id="te29"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im30" class="mmm" src="" alt="">
					<p class="ti" id="ti30"></p>				
					<p class="te" id="te30"></p>
					<br>
		</div>
		<div id="arti">
					<button id="btSli32" class="btSli btBase"><span class="xxx">❯</span></button>
					<img id="im31" class="mmm" src="" alt="">
					<p class="ti" id="ti31"></p>				
					<p class="te" id="te31"></p>
					<br>
		</div>
		<div id="arti">
					<button id="btSli33" class="btSli btBase"><span class="xxx">❯</span></button>
					<img id="im32" class="mmm" src="" alt="">
					<p class="ti" id="ti32"></p>				
					<p class="te" id="te32"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im33" class="mmm" src="" alt="">
					<p class="ti" id="ti33"></p>				
					<p class="te" id="te33"></p>
					<br>
		</div>
	`;
}


/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */
/* FALTA LOCA.JS ! ! ! */

/*  Idem comentário acima */
var conteArti2 = document.querySelectorAll(".conte2");
for (let i=0; i < conteArti2.length ; i++) {
	conteArti2[i].innerHTML = `
		<div id="arti">
					<img id="im" class="mmm" src="" alt="">
					<p class="ti" id="ti"></p>				
					<p class="te" id="te"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im1" class="mmm" src="" alt="">
					<p class="ti" id="ti1"></p>				
					<p class="te" id="te1"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im2" class="mmm" src="" alt="">
					<p class="ti" id="ti2"></p>				
					<p class="te" id="te2"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im3" class="mmm" src="" alt="">
					<p class="ti" id="ti3"></p>				
					<p class="te" id="te3"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im4" class="mmm" src="" alt="">
					<p class="ti" id="ti4"></p>				
					<p class="te" id="te4"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im5" class="mmm" src="" alt="">
					<p class="ti" id="ti5"></p>				
					<p class="te" id="te5"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im6" class="mmm" src="" alt="">
					<p class="ti" id="ti6"></p>				
					<p class="te" id="te6"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im7" class="mmm" src="" alt="">
					<p class="ti" id="ti7"></p>				
					<p class="te" id="te7"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im8" class="mmm" src="" alt="">
					<p class="ti" id="ti8"></p>				
					<p class="te" id="te8"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im9" class="mmm" src="" alt="">
					<p class="ti" id="ti9"></p>				
					<p class="te" id="te9"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im10" class="mmm" src="" alt="">
					<p class="ti" id="ti10"></p>				
					<p class="te" id="te10"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im11" class="mmm" src="" alt="">
					<p class="ti" id="ti11"></p>				
					<p class="te" id="te11"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im12" class="mmm" src="" alt="">
					<p class="ti" id="ti12"></p>				
					<p class="te" id="te12"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im13" class="mmm" src="" alt="">
					<p class="ti" id="ti13"></p>				
					<p class="te" id="te13"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im14" class="mmm" src="" alt="">
					<p class="ti" id="ti14"></p>				
					<p class="te" id="te14"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im15" class="mmm" src="" alt="">
					<p class="ti" id="ti15"></p>				
					<p class="te" id="te15"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im16" class="mmm" src="" alt="">
					<p class="ti" id="ti16"></p>				
					<p class="te" id="te16"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im17" class="mmm" src="" alt="">
					<p class="ti" id="ti17"></p>				
					<p class="te" id="te17"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im18" class="mmm" src="" alt="">
					<p class="ti" id="ti18"></p>				
					<p class="te" id="te18"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im19" class="mmm" src="" alt="">
					<p class="ti" id="ti19"></p>				
					<p class="te" id="te19"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im20" class="mmm" src="" alt="">
					<p class="ti" id="ti20"></p>				
					<p class="te" id="te20"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im21" class="mmm" src="" alt="">
					<p class="ti" id="ti21"></p>				
					<p class="te" id="te21"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im22" class="mmm" src="" alt="">
					<p class="ti" id="ti22"></p>				
					<p class="te" id="te22"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im23" class="mmm" src="" alt="">
					<p class="ti" id="ti23"></p>				
					<p class="te" id="te23"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im24" class="mmm" src="" alt="">
					<p class="ti" id="ti24"></p>				
					<p class="te" id="te24"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im25" class="mmm" src="" alt="">
					<p class="ti" id="ti25"></p>				
					<p class="te" id="te25"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im26" class="mmm" src="" alt="">
					<p class="ti" id="ti26"></p>				
					<p class="te" id="te26"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im27" class="mmm" src="" alt="">
					<p class="ti" id="ti27"></p>				
					<p class="te" id="te27"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im28" class="mmm" src="" alt="">
					<p class="ti" id="ti28"></p>				
					<p class="te" id="te28"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im29" class="mmm" src="" alt="">
					<p class="ti" id="ti29"></p>				
					<p class="te" id="te29"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im30" class="mmm" src="" alt="">
					<p class="ti" id="ti30"></p>				
					<p class="te" id="te30"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im31" class="mmm" src="" alt="">
					<p class="ti" id="ti31"></p>				
					<p class="te" id="te31"></p>
					<br>
		</div>
	`;
}




/*  Idem comentário acima */
var conteArti3 = document.querySelectorAll(".conte3");
for (let i=0; i < conteArti3.length ; i++) {
	conteArti3[i].innerHTML = `
		<div id="arti">
					<img id="im" class="mmm" src="" alt="">
					<p class="ti" id="ti"></p>				
					<p class="te" id="te"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im1" class="mmm" src="" alt="">
					<p class="ti" id="ti1"></p>				
					<p class="te" id="te1"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im2" class="mmm" src="" alt="">
					<p class="ti" id="ti2"></p>				
					<p class="te" id="te2"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im3" class="mmm" src="" alt="">
					<p class="ti" id="ti3"></p>				
					<p class="te" id="te3"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im4" class="mmm" src="" alt="">
					<p class="ti" id="ti4"></p>				
					<p class="te" id="te4"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im5" class="mmm" src="" alt="">
					<p class="ti" id="ti5"></p>				
					<p class="te" id="te5"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im6" class="mmm" src="" alt="">
					<p class="ti" id="ti6"></p>				
					<p class="te" id="te6"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im7" class="mmm" src="" alt="">
					<p class="ti" id="ti7"></p>				
					<p class="te" id="te7"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im8" class="mmm" src="" alt="">
					<p class="ti" id="ti8"></p>				
					<p class="te" id="te8"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im9" class="mmm" src="" alt="">
					<p class="ti" id="ti9"></p>				
					<p class="te" id="te9"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im10" class="mmm" src="" alt="">
					<p class="ti" id="ti10"></p>				
					<p class="te" id="te10"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im11" class="mmm" src="" alt="">
					<p class="ti" id="ti11"></p>				
					<p class="te" id="te11"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im12" class="mmm" src="" alt="">
					<p class="ti" id="ti12"></p>				
					<p class="te" id="te12"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im13" class="mmm" src="" alt="">
					<p class="ti" id="ti13"></p>				
					<p class="te" id="te13"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im14" class="mmm" src="" alt="">
					<p class="ti" id="ti14"></p>				
					<p class="te" id="te14"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im15" class="mmm" src="" alt="">
					<p class="ti" id="ti15"></p>				
					<p class="te" id="te15"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im16" class="mmm" src="" alt="">
					<p class="ti" id="ti16"></p>				
					<p class="te" id="te16"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im17" class="mmm" src="" alt="">
					<p class="ti" id="ti17"></p>				
					<p class="te" id="te17"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im18" class="mmm" src="" alt="">
					<p class="ti" id="ti18"></p>				
					<p class="te" id="te18"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im19" class="mmm" src="" alt="">
					<p class="ti" id="ti19"></p>				
					<p class="te" id="te19"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im20" class="mmm" src="" alt="">
					<p class="ti" id="ti20"></p>				
					<p class="te" id="te20"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im21" class="mmm" src="" alt="">
					<p class="ti" id="ti21"></p>				
					<p class="te" id="te21"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im22" class="mmm" src="" alt="">
					<p class="ti" id="ti22"></p>				
					<p class="te" id="te22"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im23" class="mmm" src="" alt="">
					<p class="ti" id="ti23"></p>				
					<p class="te" id="te23"></p>
					<br>
		</div>
		<div id="arti">

					<img id="im24" class="mmm" src="" alt="">
					<p class="ti" id="ti24"></p>				
					<p class="te" id="te24"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im25" class="mmm" src="" alt="">
					<p class="ti" id="ti25"></p>				
					<p class="te" id="te25"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im26" class="mmm" src="" alt="">
					<p class="ti" id="ti26"></p>				
					<p class="te" id="te26"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im27" class="mmm" src="" alt="">
					<p class="ti" id="ti27"></p>				
					<p class="te" id="te27"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im28" class="mmm" src="" alt="">
					<p class="ti" id="ti28"></p>				
					<p class="te" id="te28"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im29" class="mmm" src="" alt="">
					<p class="ti" id="ti29"></p>				
					<p class="te" id="te29"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im30" class="mmm" src="" alt="">
					<p class="ti" id="ti30"></p>				
					<p class="te" id="te30"></p>
					<br>
		</div>
		<div id="arti">
					<img id="im31" class="mmm" src="" alt="">
					<p class="ti" id="ti31"></p>				
					<p class="te" id="te31"></p>
					<br>
		</div>
	`;
}





/*  Idem comentário acima */
var conteArti3 = document.querySelectorAll(".conteL");
for (let i=0; i < conteArti3.length ; i++) {
	conteArti3[i].innerHTML = `
		<div id="arti">
					<img id="im" class="mmm" src="" alt="">
					<p class="ti" id="ti"></p>				
					<p class="te" id="te"></p>
					<br>
		</div>
	`;
}







/* !!!! Crase em vez de aspas. Se usar aspa n será possível haver as quedras de linha no conteúdo da váriavel, o código deixara de funcionar.  */
/* conteMkt = conteúdo de propaganda, marketing*/
var conteMkt = `
<div class="slideshow">
	<div class="slideshow-container slide">
		<img class="sli" src="https://www.cabreuva.sp.gov.br/upload/galeria/0030736001521218112.png"/>
		<img class="sli" src="https://www.retirodosartistas.org.br/wp-content/uploads/2020/04/logo-vetor-retiro-dos-artistas-300x153.png"/>
		<img class="sli" src="https://www.adocaoempauta.com.br/wp-content/uploads/2017/05/logo-principal-adocao-em-pauta-tatiany-schiavinato.png"/>
	</div>
</div>
`;


//document.querySelector(".mkt").innerHTML = conteMkt;
document.querySelector(".mkt1").innerHTML = conteMkt;
document.querySelector(".mkt2").innerHTML = conteMkt;
document.querySelector(".mkt3").innerHTML = conteMkt;





