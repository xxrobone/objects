let sidebarMenu = document.querySelector('.sidebar-menu');
let image = document.querySelector('.image');
let name = document.querySelector('.animal-name');
let desc = document.querySelector('.animal-desc');

image.src = '../assets/images/reptiles/croc.webp';
name.textContent = 'Animal name';
desc.textContent = 'Description will be shown here';

let animalArray = [
  {
    name: 'Thorny-Devil',
    food: 'Insects',
    desc: 'The thorny devil grows up to 21 cm (8.3 in) in total length (including tail), and can live for 15 to 20 years. The females are larger than the males. Most specimens are coloured in camouflaging shades of desert browns and tans. These colours change from pale colours during warm weather to darker colours during cold weather. The thorny devil is covered entirely with conical spines that are mostly uncalcified. A thorny devil in Western Australia An intimidating array of spikes covers the entire upper side of the body of the thorny devil. These thorny scales also help to defend it from predators. Camouflage and deception may also be used to evade predation. This lizards unusual gait involves freezing and rocking as it moves about slowly in search of food, water, and mates.The thorny devil also features a spiny false head on the back of its neck, and the lizard presents this to potential predators by dipping its real head. The false head is made of soft tissue. The thorny devils scales are ridged, enabling the animal to collect water by simply touching it with any part of the body, usually the limbs; the capillary principle allows the water to be transported to the mouth through the skin.',
    imgURL: '../assets/images/reptiles/thorny.jpg',
  },
  {
    name: 'Frilled-neck',
    food: 'Insects',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus debitis architecto iste dignissimos tempora nulla ratione! Doloremque aperiam beatae aut natus voluptatum enim obcaecati ipsam suscipit tenetur consequatur, perspiciatis architecto rem veniam quis, quod aliquid magnam similique reiciendis dicta. Quas dolor vitae nam molestiae aliquam iste velit. Doloribus nobis, facilis adipisci voluptate reiciendis tempore officia culpa asperiores expedita esse omnis.',
    imgURL: '../assets/images/reptiles/frilled.jpg',
  },
];

/* Click on desc to read more */
desc.addEventListener('click', () => {
  desc.classList.toggle('p-show');
});

function sidebarUI(array) {
  array.forEach((i) => {
    let item = document.createElement('li');
    item.classList.add('sidebar-item', i.name);
    item.textContent = i.name;
    sidebarMenu.append(item);
  });
}
sidebarUI(animalArray);

let menuBtns = Array.from(document.getElementsByClassName('sidebar-item'));

menuBtns.forEach(function (btn) {
  btn.addEventListener('click', displayAnimal);
});

function displayAnimal() {
  let animalName = this.classList[1];
  this.classList.add('active');

  menuBtns.forEach(function (btn) {
    if (btn.classList.contains(animalName)) {
      animalArray.forEach((i) => {
        if (animalName === i.name) {
          image.src = i.imgURL;
          name.textContent = i.name;
          desc.textContent = i.desc;
        } else {
        }
      });
    } else {
      console.log('Error in code');
    }
  });
}
