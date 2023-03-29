let users = {};

let elList = document.querySelector(".cards");

fetch("https://fakestoreapi.com/products")
	.then((res) => res.json())
	.then((data) => {
		users = data;
		renderUi(users);
	});

function renderUi(array) {
	array.forEach((item) => {
          let elCard=document.createElement("li");
			console.log(item);
            elCard.className="card";
			elCard.innerHTML = `
                <img src="${item.image}" class="img">
                <p class="">${item.title}</p>
                <p class="">price: ${item.price}</p>
                <p class="">category: ${item.category}</p>
                </li>
             `;
        elList.appendChild(elCard);
	});
}

let elSelect = document.querySelector(".elSelect");
let selectArr = [];

users.forEach((item) => {
	let elOption = document.createElement("option");
	const arr = item.category;
	// console.log(arr);
	arr.forEach((item) => {
		if (!selectArr.includes(item)) {
			selectArr.push(item);
			// console.log(selectArr2);
			for (let i = 0; i < selectArr.length; i++) {
				elOption.textContent = selectArr[i];
				elSelect.append(elOption);
			}
		}
	});
});

