



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



let elSearch = document.querySelector(".search");
function search(array=users) {
	elSearch.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		elList.innerHTML = "";
		const newItem = array.filter((item) => {
			return item.name.official.includes(value);
		});
		renderUi(newItem);
	});
}




/*------------------------------------------dark mode--------------- */
let body=document.querySelector(".body");
let mode=document.getElementById(".mode");
function dark() {
body.classList.toggle("dark");
}
/*------------------------------------------dark mode--------------- */
