

function tablebuild(data) {

	var table = document.createElement("table");
	var fields = Object.keys(data[0]);
	var headRow = document.createElement("tr");

	fields.forEach(function(field) {
		var headCell = document.createElement("th");
		headCell.textContent = field;
		headRow.appendChild(headCell);

	});

}
