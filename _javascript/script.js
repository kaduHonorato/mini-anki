// Variáveis criadas a partir de TAGS HTML

var btRadio = document.querySelectorAll("input[type=radio][name=selCol]"); // Armazena dois elementos input do tipo rádio;   
var selAllCol = document.querySelectorAll("span input[type=checkbox][name=selAll]"); // Armazena dois elementos input do tipo checkbox;  
var controleVel = document.querySelector("#controleVel"); // Armazena o tempo em milisegundos em que a carta será virada;  
var carta = document.querySelector("#carta"); // Uma div que corresponde a "carta";
var btViraCarta = document.querySelector("#btViraCarta"); // Botão que vira a carta;
var btTrocaCarta = document.querySelector("#btTrocaCarta"); // Botão que 'sorteia' outra carta;  
var caixasColuna = document.querySelectorAll("label li input[type=checkbox]"); // colunas de letras 
var txtMudaVel = document.querySelector("#txtMudaVel"); // Texto do elemento legend #txtMudaVel;



// =====================================================================

// Variáveis Auxiliares 

var vel; // Armazena o tempo em segundos em que a carta será virada; 
var pos = 0;
var colunaEscolhida = 0;
var colunasSelecionadas = [];
var letraSorteada;
var cartaAtual;
var msgSelCol = "Por favor, selecione ao menos uma coluna.";  







var letras = [
	[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]],					
	[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]],
	[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]],
	[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]],
	[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]],
	[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]],
	[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]],
	[["や","ya"],["ゆ","yu"],["よ ","yo"]],
	[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]],
	[["わ","wa"],["を","wo"],["ん ","n"]],
	[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]],
	[["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]],
	[["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]],
	[["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]],
	[["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]],
	[["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"]],
	[["しゃ","sha"],["しゅ","shu"],["しょ","sho"]],
	[["ちゃ","tcha"],["ちゅ","tchu"],["ちょ","tcho"]],
	[["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"]],
	[["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"]],
	[["みゃ","mya"],["みゅ","myu"],["みょ","myo"]],
	[["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"]],
	[["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"]],
	[["じゃ","ja"],["じゅ","ju"],["じょ","jo"]],
	[["びゃ","bya"],["びゅ","byu"],["びょ","byo"]],
	[["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"]],
	[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]],					
	[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]],
	[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]],
	[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]],
	[["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"]],
	[["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"]],
	[["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"]],
	[["ヤ","ya"],["ユ","yu"],["ヨ","yo"]],
	[["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"]],
	[["ワ","wa"],["ヲ","wo"],["ン","n"]],
	[["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"]],
	[["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"]],
	[["ダ","da"],["ジ","ji"],["ヅ","zu"],["デ","de"],["ド","do"]],
	[["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"]],
	[["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]],
	[["キャ","kya"],["キュ","kyu"],["キョ","kyo"]],
	[["シャ","sha"],["シュ","shu"],["ショ","sho"]],
	[["チャ","tcha"],["チュ","tchu"],["チョ","tcho"]],
	[["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"]],
	[["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"]],
	[["ミャ","mya"],["ミュ","myu"],["ミョ","myo"]],
	[["リャ","rya"],["リュ","ryu"],["リョ","ryo"]],
	[["ギャ","gya"],["ギュ","gyu"],["ギョ","gyo"]],
	[["ジャ","ja"],["ジュ","ju"],["ジョ","jo"]],
	[["ビャ","bya"],["ビュ","byu"],["ビョ","byo"]],
	[["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"]]
];	


var interogacao = ["?","?"];

// ======================================================================

inicio();





// Função Padrão de início de código

function inicio(){

	controleVel.addEventListener("input",salvaVel);	
	btRadio[0].addEventListener("input",mostraDiv);
	btRadio[1].addEventListener("input",mostraDiv);
		


	checaIdiomaNavegador();
	carregaDadosLocalStorage();
	mostraDiv();
	

	var x = 0;
	for(var x = 0; x < caixasColuna.length; x++){

	caixasColuna[x].addEventListener("input",SelecionaColuna);

	}

	btViraCarta.addEventListener("click",viraCarta);
	btTrocaCarta.addEventListener("click",checaColSel);


}

// ===============================================================================

// Função que checa o idioma do navegador


function checaIdiomaNavegador(){


if(navigator.language != "pt-BR" && navigator.language != "pt-PT"){

	msgSelCol = "Please, select at least one column."; 
	txtMudaVel.innerHTML = "Change Speed";
	btTrocaCarta.innerHTML = "Next Card";
	btViraCarta.innerHTML = "Show Back";
	btViraCarta.name = "Show Front";	

}

}

// ===========================================================


// Função que carrega dados salvos no local storage

function carregaDadosLocalStorage(){


	if(localStorage.getItem("colunasSelecionadas") == null){
		
	colunasSelecionadas.push(0); 
			
	}else{
	
	colunasSelecionadas = JSON.parse(localStorage.getItem("colunasSelecionadas"));

	}
		
	for(var i = 0; i < colunasSelecionadas.length; i++){

	var indice = parseInt(colunasSelecionadas[i]);
	
	marcaColunas(indice);
			
	}	

	controleVel.value = (localStorage.getItem("velocidade") != null) ? parseInt( localStorage.getItem("velocidade")) : 1.5; 

	
	defineVel();
	SelecionaColuna();	
	

}

// ===================================================



// Função que define velocidade em que a carta será virada

function defineVel(){

vel = controleVel.value * 1000;	

}

// ========================================================



// Função que muda a velocidade em que a carta é virada; 

function salvaVel(){


localStorage.setItem("velocidade",controleVel.value);
defineVel();

}

// ===============================================================================

// Função que mostra uma coluna de letras e esconde outra;

function mostraDiv(){

	for(var x = 0; x < btRadio.length; x++){
	
		if(btRadio[x].checked){	
			document.querySelector("#" + btRadio[x].value).hidden = false;
			btRadio[x].parentElement.setAttribute("class","fundoSel1");
		
		}else{	
			document.querySelector("#" + btRadio[x].value).hidden = true;
			btRadio[x].parentElement.setAttribute("class","fundoPreto1");
		}
	}	
		
}

// =================================================================

// Função que Seleciona todas as colunas   

function marcaColunas(i){

caixasColuna[i].checked = true;

		
}


// =================================================================


// Função que 'zera' o array de colunas selecionadas e adiciona novos elementos 


function SelecionaColuna(){


	if(colunasSelecionadas.length)
		colunasSelecionadas.splice(0,colunasSelecionadas.length);
		
	var x = 0;
	for(x = 0; x < caixasColuna.length; x++){
	
	if(caixasColuna[x].checked){
		colunasSelecionadas.push(caixasColuna[x].value);
		caixasColuna[x].parentElement.setAttribute("class","fundoSel2");
	}else{
		 if(caixasColuna[x].parentElement.hasAttribute("class"))
			 caixasColuna[x].parentElement.removeAttribute("class");
		
	}
	
	}		
	
	if(colunasSelecionadas.length)
		localStorage.setItem("colunasSelecionadas",JSON.stringify(colunasSelecionadas));
	else
		localStorage.removeItem("colunasSelecionadas");
	
	checaColSel();
	
}

// =============================================================================

// Função que checa se existe alguma coluna selecionada

function checaColSel(){
	
	mudaEstadoEle(btTrocaCarta,true);	
	mudaEstadoEle(btViraCarta,true);


	if(colunasSelecionadas.length)	
		TrocaCarta();
	else
		alertaCol();	
		
	}
	
// ========================================================
	

// Função que alerta que não há nenhuma carta selecionada 

function alertaCol(){
	
	alert(msgSelCol);	
	pos = 0;
	cartaAtual = interogacao;
	carta.innerHTML = cartaAtual[pos];
		
	}

// =======================================================


// Função que vira a carta

function viraCarta(){
	
	mudaTexto(btViraCarta);
	
	if(!pos)
		pos++;
	else 
		pos = 0;	
	
	
	carta.innerHTML = cartaAtual[pos];
	mudaEstadoEle(btTrocaCarta,false);	
	
	}
	

// =======================================

// Função que Sorteia outra letra  

function TrocaCarta(){


	
	if(pos) 
		mudaTexto(btViraCarta);
	
	
	pos = 0;
	
	var colunaSorteada = SorteiaNumero(colunasSelecionadas.length);
	
	
	colunaEscolhida = colunasSelecionadas[colunaSorteada];
	
	letraSorteada = SorteiaNumero(letras[colunaEscolhida].length);
	cartaAtual = letras[colunaEscolhida][letraSorteada]; 
			
	carta.innerHTML = cartaAtual[pos];
	
	
	
	window.setTimeout(finalizaEvento,vel);

}


// =============================================================================


// Função que gera um número aleátorio de acordo com o parâmetro passado;

function SorteiaNumero(quantNums){
	

	var numSorteado = ((Math.random() * (quantNums - 1)).toFixed(0));


	return numSorteado;

}


// ========================================================================



// Fução que muda o texto do botão "Vira carta" 


function mudaTexto(bt){

var guardaTxt = bt.innerHTML;
bt.innerHTML = bt.name;
bt.name = guardaTxt;

}

// ======================================================

// Função que muda o estado 'disabled' do elemento passado como parâmetro

function mudaEstadoEle(ele,chave){

ele.disabled = chave;	

}

// ==========================================================================
	
	

// Função que reativa os botões e vira a carta


function finalizaEvento(){

	viraCarta(btViraCarta);
	
	mudaEstadoEle(btTrocaCarta,false);	
	mudaEstadoEle(btViraCarta,false);


} 

// ==============================================

