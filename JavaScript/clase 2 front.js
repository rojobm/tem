

GATO
var jugOV="si";
while(jugOV=="si"){
var jug1=prompt("Jugador 1");
var jug2=prompt("Jugador 2");
jug1=jug1.toLowerCase();
jug2=jug2.toLowerCase();
if(jug1==jug2) console.log("empate")
else
{
	if(jug1=="piedra" && jug2=="tijera") console.log("Gana Jug 1");
	if(jug1=="papel" && jug2=="piedra") console.log("Gana Jug 1");
	if(jug1=="tijera" && jug2=="papel") console.log("Gana Jug 1");
	if(jug2=="piedra" && jug1=="tijera") console.log("Gana Jug 2");
	if(jug2=="papel" && jug1=="piedra") console.log("Gana Jug 2");
	if(jug2=="tijera" && jug1=="papel") console.log("Gana Jug 2");

};
jugOV=prompt("Quieres jugar otra vez?");
jugOV=jugOV.toLowerCase();
};


PALINDROMO SOLUCION
function minusculas(texto){
	var abe = {A:"a", B:"b"};
	texto_ok="";
    var i=1;
	for(var i in texto){
		console.log(texto[i]);
	  if(texto[i] in abe){
	    texto_ok += abe[texto[i]];
	  }
	  else {
	  	texto_ok += texto[i];
	  }
	  
	}
	  return(texto_ok);
}
var x="ABAB";
console.log(minusculas(x));



HOTDOGS
function hotdogs(n){
return n<5 ? precio=100 : n<10 ? precio=95: precio=90;
}
var n=9;
console.log(hotdogs(n));

HEXADECIMAL
function uni_hexa(x){
   if(x<10) return x;
   switch(x){
   	case 10: return "A"; break;
   	case 11: return "B"; break;
   	case 12: return "C"; break;
   	case 13: return "D"; break;
   	case 14: return "E"; break;
   	case 15: return "F"; break;
   }
}

function dec_hexa(x){
   var hexa_dec=0;
   var resul_div=x/16;
   while(resul_div >= 1){
      hexa_dec+=1;
      resul_div-=1;
   };
   return(hexa_dec);
}

function conv_hexa(r,g,b){
	var res="";
	var unidades=r-(dec_hexa(r)*16);
	var dec_num = uni_hexa(dec_hexa(r));
	var uni_num = uni_hexa(unidades);
	res="#"+dec_num+uni_num;

	unidades=g-(dec_hexa(g)*16);
	dec_num = uni_hexa(dec_hexa(g));
	uni_num = uni_hexa(unidades);
    res+=dec_num+uni_num;

	unidades=b-(dec_hexa(b)*16);
	dec_num = uni_hexa(dec_hexa(b));
	uni_num = uni_hexa(unidades);
    res+=dec_num+uni_num;
	
	console.log(res);
}

conv_hexa(240,10,90);

IDENTIFICA PAR O NON
function parnon(x){
	if (x==0) return ("par");
	
	if (x==1) return ("non"); 
	else return(parnon(x-2);
}
console.log(parnon(2));