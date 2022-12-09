let sidebarMenu = document.querySelector('.sidebar-menu');
let image = document.querySelector('.image');
let name = document.querySelector('.animal-name');
let desc = document.querySelector('.animal-desc');

image.src = '../assets/images/birds/birds.jpg';
name.textContent = 'Animal name';
desc.textContent = 'Description will be shown here';

let animalArray = [
  {
    name: 'cassowary',
    food: '',
    desc: 'It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida',
    imgURL: '../assets/images/birds/bird1.webp',
    info: [
      {
        food: 'Small insects & spiders',
      },
      {
        lifespan: '20 years',
      },
      {
        group: 'bird',
      },
      {
        length: '1.7m',
      },
      {
        weight: '44kg',
      },
      {
        found: 'Queensland',
      },
    ],
  },
  {
    name: 'bird-2',
    food: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat natus excepturi nulla ipsum magnam molestiae aliquam nam, id, deleniti voluptas possimus praesentium quos repudiandae dolorem autem omnis unde tenetur nemo nobis porro? Porro doloribus fugiat rerum minima beatae sit sed, sint odit dolor quam vitae. Blanditiis voluptates, deserunt culpa ipsa et soluta quasi non quaerat repellat, veritatis tempore voluptate nostrum enim minima dolorem amet reprehenderit necessitatibus ipsam ducimus nihil sequi alias, ex dignissimos. Laborum non praesentium eligendi fugiat quas quibusdam harum sed cum a doloremque nobis ea sit incidunt mollitia libero, itaque quae possimus tempora odit blanditiis laboriosam magni totam aliquam? Sint nisi repellat cupiditate qui. Tenetur deserunt, odit tempora natus voluptates, amet voluptas delectus consectetur quibusdam voluptatem eligendi.',
    imgURL: '../assets/images/birds/bird2.jpg',
  },
  {
    name: 'bird-3',
    food: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat natus excepturi nulla ipsum magnam molestiae aliquam nam, id, deleniti voluptas possimus praesentium quos repudiandae dolorem autem omnis unde tenetur nemo nobis porro? Porro doloribus fugiat rerum minima beatae sit sed, sint odit dolor quam vitae. Blanditiis voluptates, deserunt culpa ipsa et soluta quasi non quaerat repellat, veritatis tempore voluptate nostrum enim minima dolorem amet reprehenderit necessitatibus ipsam ducimus nihil sequi alias, ex dignissimos. Laborum non praesentium eligendi fugiat quas quibusdam harum sed cum a doloremque nobis ea sit incidunt mollitia libero, itaque quae possimus tempora odit blanditiis laboriosam magni totam aliquam? Sint nisi repellat cupiditate qui. Tenetur deserunt, odit tempora natus voluptates, amet voluptas delectus consectetur quibusdam voluptatem eligendi.',
    imgURL: '../assets/images/birds/bird3.jpg',
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
      btn.classList.remove('show');
    }
  });
}
