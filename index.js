



fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => {
		users = data;
		renderUi(users);
	});



/*---------------------------select option start ------------------*/ 
let elForm = document.querySelector(".form");
elForm.addEventListener("change", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;
	elList.innerHTML = "";
	if (value == "all") {
		renderUi(users);
		search(users);
	} else {
		let newItem = users.filter((item) => {
			return value == item.region;
		});
		renderUi(newItem);
		search(newItem);
	}
});
/*---------------------------select option end ------------------*/ 


let body=document.querySelector(".body");
let mode=document.querySelector(".mode");

mode.addEventListener("click", (evt) => {
body.classList.toggle("mystyle");

console.log(body);
});

