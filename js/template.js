const template = document.createElement('template');

template.innerHTML = `
	<aside id="btEs">
		<a href="newA.html"><div id="#" class="bt"><span>🌺️</span></div></a>
		<a href="roPr.html"><div id="#" class="bt"><span>🎛️</span></div></a>
		<a href="smoo.html"><div id="#" class="bt"><span>🎷️</span></div></a>
		<a href="cont.html"><div id="#" class="bt"><span>⚡</span></div></a>
		<a href="elet.html"><div id="#" class="bt"><span>💡️</span></div></a>
		<a href="game.html"><div id="#" class="bt"><span>🎮️</span></div></a>
		<a href="conc.html"><div id="#" class="bt"><span>📼️</span></div></a>
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
	<main>
		<details>
			<summary><img id="logo" src="icon.png" class="bt"></summary>
			<div id="about">
					Akou é voltado a músicos e aqueles que, de fato, apreciam música.<br>
					<h3>✔️ Akou proporciona</h3>
					🙄️ Audição musical sem nos influenciar com imagens ou apelos visuais.<br>
					📖️ Akou não é música como entretenimento, e sim alimento _educação, conhecimento.<br>
					🔀️ Akou funciona em segundo plano, permitindo ao usuário ouvir músicas e ainda sim usar outros apps.<br>
					💸️ Akou tem baixíssimo con$umo da rede, dados.<br>
					💾️ Uma música no Akou consome quase 10x menos que um mp3.<br>
					<h3>❌️ Akou não visa</h3>
					😎️ Propaganda! Akou tem zero de publicidade.<br>
					<h3>Akou é FOSS</h3>
					🎈️ Akou é construído no formato SL (software livre).<br>
					🛡️ Akou é seguro, não coletando dados do usuário.<br>
					🤑️ Akou não negocia dados do usuário, inclusive por não coletar.<br>
					<br>
					Akou - 2022<br>
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
