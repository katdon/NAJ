function readCar() {
    var modelInput = document.querySelector('#model');
    var markaInput = document.querySelector('#marki');

    
    return {
        model: modelInput.value,
        marka: markaInput.value
    };
}
function readCheckCarMarka() {
    var markaCheckSelect = document.querySelector('#markiForCheck');
    return markaCheckSelect.value;
}