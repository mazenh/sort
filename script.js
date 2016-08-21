var sort=[];
var sortNum=function(){
	var x=document.getElementById("firstNumber").value;
	var y=document.getElementById("secNumber").value;
	var z=document.getElementById("thirdNumber").value;
	var intx=parseInt(x);
	var inty=parseInt(y);
	var intz=parseInt(z);
	if((intx>inty) && (intx>intz)){
		if(intz>inty){
		sort=[y,z,x];
		document.getElementById("result").innerHTML=sort;
		}
		else{
		sort=[z,y,x];
		document.getElementById("result").innerHTML=sort;	
		}
	}
	else if((inty>intx) && (inty>intz)){
		if(intx>intz){
		sort=[z,x,y];
		document.getElementById("result").innerHTML=sort;
		}
		else{
			sort=[x,z,y];
			document.getElementById("result").innerHTML=sort;
		}
	}
	else if((intz>intx) && (intz>inty)){
		if(intx>inty){
			sort=[y,x,z];
			document.getElementById("result").innerHTML=sort;
		}
		else{
			sotr=[x,y,z];
			document.getElementById("result").innerHTML=sort;
		}
	}
};


