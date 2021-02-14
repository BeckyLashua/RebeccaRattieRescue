document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");

    let rats = {
        "0": {   
            "name": "Prishe", 
            "imgUrl": "images/Prishe.jpg", 
            "imgAlt": "rat looking around curiously",
            "age": 19, 
            "sex": "female", 
            "favoriteTreat": "Grapes", 
            "description": ""},
        "1": {   
            "name": "Crinkles", 
            "imgUrl": "images/Crinkles.jpg", 
            "imgAlt": "rat in a coconut",
            "age": 20, 
            "sex": "female", 
            "favoriteTreat": "Yogurt Drops", 
            "description": ""},
        "2":{
            "name": "Omar", 
            "imgUrl": "images/Omar.jpg", 
            "imgAlt": "rat in a blanket",
            "age": 15, 
            "sex": "male", 
            "favoriteTreat": "Cheetos", 
            "description": ""},
        "3":{   
            "name": "Putt-Putt", 
            "imgUrl": "images/puttputt.jpg", 
            "imgAlt": "a rat looking at camera",
            "age": 12, 
            "sex": "male", 
            "favoriteTreat": "Cheerios", 
            "description": ""},
        "4":{
            "name": "Higgens", 
            "imgUrl": "images/Higgens.jpg", 
            "imgAlt": "baby rat standing still",
            "age": 6, 
            "sex": "male", 
            "favoriteTreat": "Carrots", 
            "description": ""},
        "5":{
            "name": "Bismarck", 
            "imgUrl": "images/Bismarck.jpg", 
            "imgAlt": "furless rat standing still",
            "age": 26, 
            "sex": "male", 
            "favoriteTreat": "British Tea Biscuits", 
            "description": ""}
        };

    // Display rats in carousel
    for (i in rats) {
        let picSection = document.getElementById('ratCarousel');
        
        // add src, alt attributes, and class and id names
        let ratPic = document.createElement('img');
        ratPic.setAttribute('src', rats[i].imgUrl);
        ratPic.setAttribute('alt', rats[i].imgAlt);
        ratPic.classList = "ratPic";
        /*fnArr[i] = function(x){
            return function(){
                console.log(x);
            };
    	}(i); */
        ratPic.addEventListener('click', ((x) => {
            return function() {
                onclickRat(rats[x]);
            };
        })(i));
        ratPic.style.width = '100px';

        // append it to picSection
        picSection.appendChild(ratPic);
    } 
  

    // Get function for retrieving JSON data for a rat
    function onclickRat(rat) {
        // Update pic in scrollbox
        let ratImage = document.getElementById('ratImg');
        ratImage.setAttribute("src", rat.imgUrl);

        // Update img description
        ratImage.setAttribute("alt", rat.imgAlt);

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

}) 





