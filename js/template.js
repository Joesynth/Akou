const template = document.createElement('template');

template.innerHTML = `
	<aside id="btEs">
		<a href="newA.html"><div id="#" class="bt"><span>🌺️</span></div></a>
		<a href="roPr.html"><div id="#" class="bt"><span>🎛️</span></div></a>
		<a href="smoo.html"><div id="#" class="bt"><span>🎷️</span></div></a>
		<a href="cont.html"><div id="#" class="bt"><span>⚡</span></div></a>
		<a href="elet.html"><div id="#" class="bt"><span>💡️</span></div></a>
		<a href="viol.html"><div id="#" class="bt"><span>🎸️</span></div></a>
	</aside>
	<aside id="btE">
		<a href="clas.html"><div id="#" class="bt"><span>🎻️</span></div></a>	
		<a href="blue.html"><div id="#" class="bt"><span>🎺️</span></div></a>
		<a href="pian.html"><div id="#" class="bt"><span>🎹</span></div></a>
		<a href="chor.html"><div id="#" class="bt"><span id="bt2">🏖️</span></div></a>
		<a href="funk.html"><div id="#" class="bt"><span id="bt2">🔌️</span></div></a>
		<a href="game.html"><div id="#" class="bt"><span id="bt2">🎮️</span></div></a>
		<a href="soun.html"><div id="#" class="bt"><span id="bt2" class="teste">📺️</span></div></a>
	</aside>
	<details>
		<summary><img src="icon.png" class="bt"></summary>
		<div id="about">
				<br>			
				Akou é voltado a músicos e aqueles que, de fato, apreciam música. Portanto, Akou visa alguns princípios: <br>
				<br>			
				- Audição musical sem se deixar influenciar por imagens ou apelos visuais.<br>
				- Zero de propaganda!<br>
				- Funcionar em segundo plano, daí permitindo ao usuário ouvir músicas e ainda sim usar outros apps.<br>
				<br>			
				<br>
				- Construção no formato SL (software livre).<br>
				- Baixíssimo consumo da rede, dados.<br>
				- Seguro, Akou não coleta nem negocia dados do usuário.<br>
				<br>
				<br>
				Akou - 2022
				<br>
				<br>
		</div>
	</details>
`;

document.body.appendChild(template.content);
