window.onload = function () {
	ckb = chrome.extension.getBackgroundPage().entries;
	var list = document.getElementById("menu");
	for(i = 0; i < ckb.length; i++){
		console.log(ckb[i]["active"]);
		if(ckb[i]["active"] == 1){
			var li = document.createElement("li");
				cbox = document.createElement("input");
				cbox.type = "checkbox";
				cbox.setAttribute("class","butt");
				cbox.checked = true;
				cbox.value = ckb[i]["menu"];
				var txtspan = document.createElement("span");
				txtspan.setAttribute("class","green");
				var mtxt = document.createTextNode(ckb[i]["menu"]);
				txtspan.appendChild(mtxt);
				li.appendChild(cbox);
				li.appendChild(txtspan);
				list.appendChild(li);
		}else{
			var li = document.createElement("li");
				cbox = document.createElement("input");
				cbox.type = "checkbox";
				cbox.setAttribute("class","butt");
				cbox.checked = false;
				cbox.value = ckb[i]["menu"];
				var txtspan = document.createElement("span");
				txtspan.setAttribute("class","red");
				var mtxt = document.createTextNode(ckb[i]["menu"]);
				txtspan.appendChild(mtxt);
				li.appendChild(cbox);
				li.appendChild(txtspan);
				list.appendChild(li);
			
		}
	}
	as = document.getElementsByClassName("butt");
	for(i=0;i<as.length;i++){
		as[i].addEventListener("click",function(evt){
			if(evt.target.checked == true){
				chrome.extension.getBackgroundPage().setActive(evt.target.value);
			}else{
				chrome.extension.getBackgroundPage().setInactive(evt.target.value);
			}
		},false)
	}
	extensions = document.getElementsByClassName("extensions");
	for(i=0;i<extensions.length;i++){
		extensions.addEventListener("click",function(evt){
			chrome.extension.getBackgroundPage().openextensions();
		},false)
	}
}