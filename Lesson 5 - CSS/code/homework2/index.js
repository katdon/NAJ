window.addEventListener('DOMContentLoaded', function () {
	var elty = [];
	var addElBtn = document.querySelector('#addEl');
    var listaEl = document.querySelector('#listaEl');
	function readEl() {
		var nowyElInput = document.querySelector('#nowyEl');
		var dlugoscInput = nowyElInput.value.length
		return {
			nowyEl: nowyElInput.value,
			dlugosc: dlugoscInput
		};
		
	}
	function getElTemplate(elObj) {
    return  "<div class='el-data'>" +
                "<div class='el-row'>" + elObj.nowyEl + "</div>" +
            "</div>" + 
            "<button class='el-remove'>-</div>";
}
	addElBtn.addEventListener('click', function() {
        var newEl = readEl();
		if (newEl.dlugosc > 0) {
			var template = getElTemplate(newEl);
			var elDomElement = document.createElement('li');
			elty.push(newEl);
			elDomElement.innerHTML = template;
			listaEl.appendChild(elDomElement);
			
			var removeBtn = elDomElement.querySelector('.el-remove');
			removeBtn.addEventListener('click', function() {
				var index = elty.indexOf(newEl);
				if (index >= 0) {
					elty.splice(index, 1);
				}
				
				listaEl.removeChild(elDomElement);
			});
		}
    });
});