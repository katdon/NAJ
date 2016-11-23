function getCarTemplate(birthdayObj) {
    return  "<div class='car-data'>" +
                "<div class='car-row'>" + 
                    "Model: " + birthdayObj.model + ". Marka: " + birthdayObj.marka + "." +
                "</div>" +
            "</div>" + 
            "<button class='car-remove'>Usuń</div>";
}