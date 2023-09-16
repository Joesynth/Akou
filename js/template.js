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
conteudo.innerHTML = "<br><h3>Akou é <br>música como alimento e não entretenimento</h3>✔️ Grátis<br>✔️ Sem propaganda<br>✔️ Baixíssimo consumo da sua rede<br>✔️ Software livre!<br>✔️ Educativo<br><h3>Música em 1º Lugar</h3>Akou é voltado a músicos e aqueles que, de fato, apreciam música. Priorizando qualidade ao invés da quantidade, Akou oferece exemplos musicais (ou sonoros) úteis para construir e estimular a audição do indivíduo, e assim dando referências. Akou é música como conhecimento e não mero lazer.<br><br>A audição é neutra. Isto é, sem lhe influenciar com imagens, publicidade ou apelos visuais. Ainda sim Akou funciona em segundo plano, permitindo você ouvir músicas e usar outros apps.<br><br><small>• Pela tecnologia FFmpeg uma música tem quase 10x menos dados que um mp3, resultando em baixíssimo consumo da rede.<br>• Sendo um software livre, público, você mesmo pode ver (e ler) o código no GitHub.<br>• Seguro, Akou não coleta dados do usuário e nem negocia (inclusive porque não coleta).</small><br><br>Akou | 2022-2023 | Joe S<br>";


