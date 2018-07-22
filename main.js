
	function addElement() {
		let c=localStorage.getItem("mylist");
		if (c) {
			let niz = JSON.parse(localStorage['mylist']);

			let li = document.createElement("li");
		  	let valueOfInput = document.getElementById("new_task").value;
		  	let text = document.createTextNode(valueOfInput);
		  	li.appendChild(text);
		  	if (valueOfInput === '') {
		    	alert("You must write something!");
		  	} else {
		    document.getElementById("lista").appendChild(li);
		  	}
		  	document.getElementById("new_task").value = "";

		  	let span = document.createElement("SPAN");
		  	let txt = document.createTextNode("x");
		  	span.className = "close";
		  	span.appendChild(txt);
		  	li.appendChild(span);
		  	let close = document.getElementsByClassName("close");
		  	for (let z = 0; z < close.length; z++) {
		    close[z].onclick = function() {
		    let div = this.parentElement;
		    div.remove();
			}
		  }
		  niz.push(valueOfInput);
		  localStorage.clear();
		  localStorage['mylist'] = JSON.stringify(niz);
		}else{
		let niz=[];
		  let li = document.createElement("li");
		  let valueOfInput = document.getElementById("new_task").value;
		  let text = document.createTextNode(valueOfInput);
		  li.appendChild(text);
		  if (valueOfInput === '') {
		    alert("You must write something!");
		  } else {
		    document.getElementById("lista").appendChild(li);
		  }
		  document.getElementById("new_task").value = "";

		  let span = document.createElement("SPAN");
		  let txt = document.createTextNode("x");
		  span.className = "close";
		  span.appendChild(txt);
		  li.appendChild(span);

		  for (let z = 0; z < close.length; z++) {
		    close[z].onclick = function() {
		      let div = this.parentElement;
		       div.remove();

		    }
		  }
		  niz.push(valueOfInput);
		  localStorage.clear();
		localStorage['mylist'] = JSON.stringify(niz);
		}

	}
	
	 
	let c=localStorage.getItem("mylist");
	if (c) {
		let objekat = JSON.parse(localStorage['mylist']);
		console.log(objekat);
		var str = '';

		objekat.forEach(function(slide) {
  		str += '<li>'+ slide + '<span class="close">x</span></li>';
		}); 

		let ul=document.getElementById('lista');
		console.log(ul);
		ul.innerHTML=str;
		
		let close = document.getElementsByClassName("close");

		for (let k = 0; k < close.length; k++) {
			close[k].onclick = function() {
	    	let div = this.parentElement;
	     	div.remove();
	     	console.log (k);
	      	var index = k;
	      	console.log(index);
				if (index > -1) {
		  			objekat.splice(index, 1);
		  			console.log(objekat);
		  			localStorage.clear();
					localStorage['mylist'] = JSON.stringify(objekat);
				}	

			}
			
	  	}
	}
	function deleteAll(){
		let ul=document.getElementById('lista');
		let li=document.getElementsByTagName('li');
		while( ul.firstChild ){
  			ul.removeChild( ul.firstChild );
		}
		localStorage.clear();
	}
	function filtriranje() {
	    var input, filter, ul, li, i;
	    input = document.getElementById("filter_tasks");
	    filter = input.value.toUpperCase();
	    ul = document.getElementById("lista");
	    li = ul.getElementsByTagName("li");
	    for (i = 0; i < li.length; i++) {
	        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
	            li[i].style.display = "";
	        } else {
	            li[i].style.display = "none";
	        }
	    }
	}
	

		 



