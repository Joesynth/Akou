const template = document.createElement('template');

template.innerHTML = `
	<aside id="btD">
		<a href="newA.html"><div id="#" class="bt"><span>🌺️</span></div></a>
		<a href="roPr.html"><div id="#" class="bt"><span>🎛️</span></div></a>
		<a href="smoo.html"><div id="#" class="bt"><span>🎷️</span></div></a>
		<a href="cont.html"><div id="#" class="bt"><span>⚡</span></div></a>
		<a href="elet.html"><div id="#" class="bt"><span>💡️</span></div></a>
		<a href="game.html"><div id="#" class="bt"><span>🎮️</span></div></a>
		<a href="conc.html"><div id="#" class="bt"><span>📼️</span></div></a>
	</aside>
	<aside id="btD2">
		<a href="surf.html"><div id="#" class="bt"><span>🎸️</span></div></a>
		<a href="soul.html"><div id="#" class="bt"><span>🎙️</span></div></a>
		<a href="regg.html"><div id="#" class="bt"><span>🇯🇲️</span></div></a>
		<a href="voca.html"><div id="#" class="bt"><span>👤️</span></div></a>
		<br><br><br><br>
		<a href="infa.html"><div id="#" class="bt"><span>😁️</span></div></a>
	</aside>
	<aside id="btE">
		<a href="clas.html"><div id="#" class="bt"><span id="bt2">🎻️</span></div></a>	
		<a href="blue.html"><div id="#" class="bt"><span id="bt2">🎺️</span></div></a>
		<a href="pian.html"><div id="#" class="bt"><span id="bt2">🎹</span></div></a>
		<a href="chor.html"><div id="#" class="bt"><span id="bt2">🏖️</span></div></a>
		<a href="viol.html"><div id="#" class="bt"><span id="bt2">🎸️</span></div></a>
		<a href="funk.html"><div id="#" class="bt"><span id="bt2">🔌️</span></div></a>
		<a href="soun.html"><div id="#" class="bt"><span id="bt2">📺️</span></div></a>
	</aside>
	<aside id="btE2">
		<a href="bras.html"><div id="#" class="bt"><span>🇧🇷️</span></div></a>
		<a href="gosp.html"><div id="#" class="bt"><span>✝️</span></div></a>
		<a href="bra2.html"><div id="#" class="bt"><span>🇧🇷️</span></div></a>
		<a href="coro.html"><div id="#" class="bt"><span>👥</span></div></a>
		<br><br><br><br>
		<a href="jewi.html"><div id="#" class="bt"><span>🕎️</span></div></a>
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
		  		<div id="#" class="btt"><span id="tri">▶️</span></div>
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
var conteudo = document.querySelector(".conte")
conteudo.innerHTML = `
<div class="conf">
	<div class="con">
		<div class="config"><p>🎺️ Blu/Jazz</p><input type="checkbox"></div>
		<div class="config"><p>🇧🇷️ Brasil 1</p><input type="checkbox"></div>
		<div class="config"><p>🇧🇷️ Brasil 2</p><input type="checkbox"></div>
		<div class="config"><p>🎻️ Clássica</p><input type="checkbox"></div>
		<div class="config"><p>👥 Coro</p><input type="checkbox"></div>
		<div class="config"><p>🏖️ Choro</p><input type="checkbox"></div>
		<div class="config"><p>📼️ Concre.</p><input type="checkbox"></div>
		<div class="config"><p>⚡ Contemp.</p><input type="checkbox"></div>
		<div class="config"><p>💡️ Eletrôn.</p><input type="checkbox"></div>
		<div class="config"><p>🔌️ Funk</p><input type="checkbox"></div>
		<div class="config"><p>🎮️ Game</p><input type="checkbox"></div>
		<div class="config"><p>✝️ Gospel</p><input type="checkbox"></div>
	</div>
	<div class="con">
		<div class="config"><p>😁️ Infantil</p><input type="checkbox"></div>
		<div class="config"><p>🕎️ Judaica</p><input type="checkbox"></div>
		<div class="config"><p>🌺️ New Age</p><input type="checkbox"></div>
		<div class="config"><p>🎹 Piano</p><input type="checkbox"></div>
		<div class="config"><p>🎛️ RoProg</p><input type="checkbox"></div>
		<div class="config"><p>🇯🇲️ Reggae</p><input type="checkbox"></div>
		<div class="config"><p>🎷️ Smooth</p><input type="checkbox"></div>
		<div class="config"><p>🎸️ Surf</p><input type="checkbox"></div>
		<div class="config"><p>🎙️ Soul</p><input type="checkbox"></div>
		<div class="config"><p>📺️ TV</p><input type="checkbox"></div>
		<div class="config"><p>👤️ Vocal</p><input type="checkbox"></div>
		<div class="config"><p>🎸️ Violão</p><input type="checkbox"></div>
	</div>
</div>
`;



/* referente ao conteúdo HTML colocado por padrão em várias divs. Padrão de tags, n de informação de textos, imagens, etc*/
var conteudo = document.querySelectorAll("#conteP");
for (let i=0; i < conteudo.length ; i++) {
	conteudo[i].innerHTML = `
					<img id="im" class="mmm" src="" alt="">
					<p class="ti" id="ti"></p>				
					<p class="te" id="te"></p>
					<br>
					<img id="im1" class="mmm" src="" alt="">
					<p class="ti" id="ti1"></p>				
					<p class="te" id="te1"></p>
					<br>
					<img id="im2" class="mmm" src="" alt="">
					<p class="ti" id="ti2"></p>				
					<p class="te" id="te2"></p>
					<br>
					<img id="im3" class="mmm" src="" alt="">
					<p class="ti" id="ti3"></p>				
					<p class="te" id="te3"></p>
					<br>
					<img id="im4" class="mmm" src="" alt="">
					<p class="ti" id="ti4"></p>				
					<p class="te" id="te4"></p>
					<br>
					<img id="im5" class="mmm" src="" alt="">
					<p class="ti" id="ti5"></p>				
					<p class="te" id="te5"></p>
					<br>
					<img id="im6" class="mmm" src="" alt="">
					<p class="ti" id="ti6"></p>				
					<p class="te" id="te6"></p>
					<br>
					<img id="im7" class="mmm" src="" alt="">
					<p class="ti" id="ti7"></p>				
					<p class="te" id="te7"></p>
					<br>

					<img id="im8" class="mmm" src="" alt="">
					<p class="ti" id="ti8"></p>				
					<p class="te" id="te8"></p>
					<br>
					<img id="im9" class="mmm" src="" alt="">
					<p class="ti" id="ti9"></p>				
					<p class="te" id="te9"></p>
					<br>
					<img id="im10" class="mmm" src="" alt="">
					<p class="ti" id="ti10"></p>				
					<p class="te" id="te10"></p>
					<br>
					<img id="im11" class="mmm" src="" alt="">
					<p class="ti" id="ti11"></p>				
					<p class="te" id="te11"></p>
					<br>
					<img id="im12" class="mmm" src="" alt="">
					<p class="ti" id="ti12"></p>				
					<p class="te" id="te12"></p>
					<br>
					<img id="im13" class="mmm" src="" alt="">
					<p class="ti" id="ti13"></p>				
					<p class="te" id="te13"></p>
					<br>
					<img id="im14" class="mmm" src="" alt="">
					<p class="ti" id="ti14"></p>				
					<p class="te" id="te14"></p>
					<br>
					<img id="im15" class="mmm" src="" alt="">
					<p class="ti" id="ti15"></p>				
					<p class="te" id="te15"></p>
					<br>
	`;
}






