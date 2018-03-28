// $(document).ready(function starting() {
// 	var ref = firebase.database().ref();
// 	var semester = ref.child("semester/_11");
// 	semester.orderByKey().once("value",e=>{
// 		for(var cid in e.val())
// 			console.log(cid+" "+e.val()[cid]);
// 	});
// });
	var ref = firebase.database().ref();
	var semester = ref.child("semester/_11");
	semester.orderByKey().once("value",e=>{
		for(var cid in e.val())
			console.log(cid+" "+e.val()[cid]);
	});
	var i;
	for(i=0;i<5;i++){
		var ul = document.getElementById("status");
		var li = document.createElement("li");
		var download = document.createElement("a");
		download.setAttribute("href","#");
		download.innerHTML = "Download";
		var like = document.createElement("a");
		like.setAttribute("href","#");
		like.innerHTML = "like";
		var p = document.createElement("p");
		var node = document.createTextNode("Hi! I am from javaScript");
		p.appendChild(node);
		p.appendChild(document.createTextNode("Do you have any query"));
		li.appendChild(p);
		li.appendChild(download);
		li.appendChild(like);
		ul.appendChild(li);
	}
// var test = document.createElement("p");
// p.innerHTML = "hi";
// ul.appendChild(test);
// Height of the page is detected here
var body = document.body,
html = document.documentElement;

var height;
function myfun(){
// window.alert((height-200).toString()+"px");
height = Math.max( body.scrollHeight, body.offsetHeight, 
	html.clientHeight, html.scrollHeight, html.offsetHeight );
var footer = document.getElementById("footer");
footer.style.marginTop = (height-200).toString()+"px";
document.getElementById("text_area").autofocus="false";
document.getElementById("file").multiple="true";
}
// $(".dropdown-content").click(e=>{
// 	console.log(typeof e);
// 	console.log(e.target.id);
// });
body.addEventListener("wheel",function(){
	if(window.pageYOffset > window.height-500)
	{
		for(i=0;i<5;i++){
			var ul = document.getElementById("status");
			var li = document.createElement("li");
			var download = document.createElement("a");
			download.setAttribute("href","#");
			download.innerHTML = "Download";
			var like = document.createElement("a");
			like.setAttribute("href","");
			like.innerHTML = "like";
			var p = document.createElement("p");
			var node = document.createTextNode("Hi! I am from javaScript");
			p.appendChild(node);
			p.appendChild(document.createTextNode("Do you have any query"));
			li.appendChild(p);
			li.appendChild(download);
			li.appendChild(like);
			ul.appendChild(li);
		}
		alert(html.scrollHeight+" "+window.height+" "+screen.availHeight+"   "+window.pageYOffset);
		myfun();
	}
});

	// testing.........
	// var iframe = document.createElement("iframe");
	// iframe.src="signup.html";
	var signup= document.getElementById("test");
	var container = document.getElementById("container");
	signup.addEventListener("click",e=>{
		while(container.firstChild){
			container.removeChild(container.firstChild);
		}
		var x = document.createElement("OBJECT");
		x.setAttribute("data","signtest.html");
		container.appendChild(x);
		x.style.width="100%";
		x.style.height="550px";
		x.style.overflow="hidden";
		x.style.scrolling="no";
		x.style.borderStyle="none";
		// these below are for iframe
		
		// container.appendChild(iframe);
		// iframe.style.display="block";
		// iframe.style.width="100%";
		// iframe.style.height="150%";
		// iframe.style.scrolling="no";
		// iframe.style.border="0px";
		// iframe.style.overflow="hidden";
	});