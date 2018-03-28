var ref = firebase.database().ref("semester");
var _11 = [""],_21 = [""],_31 = [""],_41 = [""];
var _12 = [""],_22 = [""],_32 = [""],_42 = [""];
ref.once("value",e=>{
	for(var semester in e.val()){
		// $(".dropdown-content").empty();
		var dropdown_content = $("<div class='dropdown-content' id="+semester+"1></div>");
		$(".menu ul li #"+semester).after(dropdown_content);
		for(var cid in e.val()[semester]){
			var button = $("<button id="+cid+">"+cid.substr(0,3).toUpperCase()+"-"+cid.substr(3,cid.length).toUpperCase()+": "+e.val()[semester][cid]+"</button>");
				$("#"+semester+"1").append(button);
				switch(semester){
					case "_11": _11.push(cid);
						break;
					case "_12": _12.push(cid);
						break;
					case "_21": _21.push(cid);
						break;
					case "_22": _22.push(cid);
						break;
					case "_31": _31.push(cid);
						break;
					case "_32": _32.push(cid);
						break;
					case "_41": _41.push(cid);
						break;
					case "_42": _42.push(cid);
						break;
				}
		}
	}
	getClick();
});
function getClick() {
	$(".dropdown-content").click(e=>{
	console.log(e.target.id);
	for(var i=0;i<_11.length;i++)
		console.log(_11[i]);
	// for(var i in semester_array)
	// 	console.log(i+" "+semester_array[i]);
})
}
// $("#semester").change(e=>{
// 	console.log(this.options[selectedIndex].text);
// });
// $(".menu ul li #oneone").html("<div class='dropdown-content'><button id='names'>Ripper</button><button id='janina'>Sacred Viper</button></div>");
// var dropdown_content = $("<div class='dropdown-content'><button id='names'>Ripper</button><button id='janina'>Sacred Viper</button></div>");
// $(".menu ul li #oneone").after(dropdown_content);
