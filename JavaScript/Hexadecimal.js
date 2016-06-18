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