let password = document.querySelector(".pas");
let button = document.querySelector(".reg");
let form = document.querySelector('form');
let text_warning = document.querySelector(".warning");

text_warning.hidden = true;

let my_func = function(event) {
    event.preventDefault();
};

function check_len(){
	res = 0;
	console.log(password.value.length);
	if (password.value.length >= 6) res = 1;

	return res;
}

button.onclick = (e) =>{
	if (check_len()){
		form.onsubmit = event.preventDefault();
	 	form.submit();
	}
	else text_warning.hidden = false;
}