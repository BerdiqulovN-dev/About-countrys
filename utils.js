

let users = [];
let elList = document.querySelector(".cards");
function renderUi(array) {
	array.forEach((item) => {
		let elCard = document.createElement("li");
		// console.log(item);
		elCard.className = "card";
		elCard.innerHTML = `
                <img src="${item.flags.png}" class="img">
                <p class=""> ${item.name.official}</p>
                <p class="">population: ${item.population}</p>
                <p class="">region : ${item.region}</p>
                </li>
             `;
		elList.appendChild(elCard);
	});
}



let elSearch = document.querySelector(".search");
function search(array) {
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