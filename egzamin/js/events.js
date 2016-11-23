window.addEventListener('DOMContentLoaded', function () {
    
    var cars = [];
    
    var addCarBtn = document.querySelector('#addCar');
    var carList = document.querySelector('#carList');
	var checkCarBtn = document.querySelector('#checkCar');
    var carCheckList = document.querySelector('#carCheckList');

    
    addCarBtn.addEventListener('click', function() {
        var newCar = readCar();
        var template = getCarTemplate(newCar);
        var carDomElement = document.createElement('li');
        cars.push(newCar);
        carDomElement.innerHTML = template;
        carList.appendChild(carDomElement);
        
        var removeBtn = carDomElement.querySelector('.car-remove');
        removeBtn.addEventListener('click', function() {
            var index = cars.indexOf(newCar);
            if (index >= 0) {
                cars.splice(index, 1);
            }
            
            carList.removeChild(carDomElement);
        });
    });
    checkCarBtn.addEventListener('click', function() {
        var markaToCheck = readCheckCarMarka();
        while (carCheckList.hasChildNodes()) {
            carCheckList.removeChild(carCheckList.lastChild);
        }
        cars.forEach(function(car) {
            var liElement;
            if (car.marka === markaToCheck) {
                liElement = document.createElement('li');
                liElement.innerText = "Model: " + car.model + ", marka: " + car.marka +".";
                carCheckList.appendChild(liElement);
            }
        });
    });
});
