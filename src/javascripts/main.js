window.onload = function(){
	document.getElementById('input-name').onkeyup = function(e){
		if(e.keyCode ==13){
			var name = this.value;
			document.getElementById('name').innerHTML = name;
			this.hidden = true;
			document.getElementById('name').hidden = false
		}
	}
	document.getElementById('name').ondblclick = function(){
		this.hidden = true;
		document.getElementById('input-name').hidden = false;
		document.getElementById('input-name').focus()
	}
}


$(function(){
  $(".add-todo").on('change', function(){
    TODO.generateItemBy(this.value).appendTo('.todos');
    this.value = "";
  });
});
