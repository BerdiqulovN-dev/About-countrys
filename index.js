let users = {};

let elList = document.querySelector(".cards");

fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => {
		users = data;
		renderUi(users);
	});

function renderUi(array) {
	array.forEach((item) => {
		let elCard = document.createElement("li");
		console.log(item);
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

let selectArr = [];

// function select(array) {
// 	array.forEach((item) => {
// 		arr.forEach((item) => {
// 			if (!selectArr.includes(item)) {
// 				selectArr.push(item);
// 				// console.log(selectArr2);
// 			}
// 		});
// 	});
// 	}select(users);

	let elSelect = document.querySelector(".form-select");

	elSelect.addEventListener("change", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		elList.innerHTML = "";
		if (value == "all") {
			renderUi(users);
			search(allMovies);
		} else {
			const newItem = users.filter((item) => {
				return value == item.region;
			});
			renderUi(newItem);
		}
	});

