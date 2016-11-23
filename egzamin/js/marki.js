window.addEventListener('DOMContentLoaded', function () {
    
    var marki = [
        "skoda",
        "fiat",
        "BMW",
        "mercedes",
        "audi",
        "peugeot",
        "opel",
        "renault",
        "ford",
        "volkswagen"
    ];
    
    function addMarkaToSelect(select, marka) {
        var option = document.createElement('option');
        option.text = marka;
        select.appendChild(option);
    }
    
    var markiSelect = document.querySelector('#marki');
	var markiForCheckSelect = document.querySelector('#markiForCheck');
    marki.forEach(function(marka) {
        addMarkaToSelect(markiSelect, marka);
		addMarkaToSelect(markiForCheckSelect, marka);
    });
});
