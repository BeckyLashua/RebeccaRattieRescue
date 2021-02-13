
class Rat {
    constructor(name,image,age,sex,favTreat) {
        this.name = name;
        this.image = image;
        this.age = age;
        this.sex = sex;
        this.favTreat = favTreat;
        this.description = '';
    }
}

// Put together rattie list
const ratties = [];

const prishe = new Rat('Prishe', 'images/Prishe.img', 19, 'female', 'Grapes');
ratties.push(prishe);
const crinkles = new Rat('Crinkles', 'images/Crinkles.img', 19, 'female', 'Yogurt drops');
ratties.push(crinkles);
const bismarck = new Rat('Bismarck', 'images/Bismarck.img', 25, 'male', 'British tea biscuits');
ratties.push(bismarck);
const omar = new Rat('Omar', 'images/Omar.jpg', 14, 'male', 'Dry Pasta');
ratties.push(omar);
const puttputt = new Rat('Putt-Putt', 'images/puttputt.jpg', 12, 'male', 'Cheerios');
ratties.push(puttputt);
const higgens = new Rat('Higgens', 'images/Higgens.jpg', 6, 'male', 'Pretzels');
ratties.push(higgens);

// Add event listener for carousel clicks
document.getElementById('ratPic').addEventListener('click', () => {
    let scrollBox = document.getElementById('scrollBox');
    scrollBox.innerHTML = "New text!";
});




