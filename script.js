document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");

    let rats = {
        "0": {   
            "name": "Prishe", 
            "imgUrl": "images/Prishe.png", 
            // ADD IMAGE DESCRIPTION
            "age": 19, 
            "sex": "female", 
            "favoriteTreat": "Grapes", 
            "description": ""},
        "1": {   
            "name": "Crinkles", 
            "imgUrl": "images/Crinkles.png", 
            "age": 20, 
            "sex": "female", 
            "favoriteTreat": "Yogurt Drops", 
            "description": ""},
        "2":{
            "name": "Omar", 
            "imgUrl": "images/Omar.png", 
            "age": 15, 
            "sex": "male", 
            "favoriteTreat": "Hummus", 
            "description": ""},
        "3":{   
            "name": "Putt-Putt", 
            "imgUrl": "images/Puttputt.png", 
            "age": 12, 
            "sex": "male", 
            "favoriteTreat": "Cheerios", 
            "description": ""},
        "4":{
            "name": "Higgens", 
            "imgUrl": "images/Higeens.png", 
            "age": 6, 
            "sex": "male", 
            "favoriteTreat": "Carrots", 
            "description": ""},
        "5":{
            "name": "Bismarck", 
            "imgUrl": "images/Crinkles.png", 
            "age": 26, 
            "sex": "male", 
            "favoriteTreat": "British Tea Biscuits", 
            "description": ""}
        };

 

    // Get function for retrieving JSON data for a rat
    function getRat(ratId) {
        // use rat id to retrieve data
        let rat = rats[ratId];

        // Update pic in scrollbox
        let ratImage = document.getElementById('ratImg');
        ratImage.setAttribute("src", rat.ratImg);

        // Update rat name in scrollbox
        let name = document.getElementById("ratName");
        name.textContent = 'Name: ' + rat.name;

        // Update rat age in scrollbox
        let age = document.getElementById('ratAge');
        age.textContent = 'Age: ' + rat.age + ' months';

        // Update rat sex in scrollbox
        let sex = document.getElementById('ratSex');
        sex.textContent = 'Sex ' + rat.sex;

        // Update rat favorite treat in scrollbox
        let favoriteTreat = document.getElementById('ratTreat');
        favoriteTreat.textContent = 'Favorite Treat: ' + rat.favoriteTreat;

        // Update rat description on scrollbox 
        let description = document.getElementById('description');
        description.textContent = rat.description;
        }

    // Add event listener for carousel clicks
    document.getElementById('ratPic').addEventListener('click', getRat("1")); 
}) 





