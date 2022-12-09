let sidebarMenu = document.querySelector('.sidebar-menu');
let image = document.querySelector('.image');
let name = document.querySelector('.animal-name');
let desc = document.querySelector('.animal-desc');

image.src = '../assets/images/mammals/animals.jpg';
name.textContent = 'Animal name';
desc.textContent = 'Description will be shown here';

let animalArray = [
  {
    name: 'Koala',
    food: 'vegetables',
    desc: 'The koala or, inaccurately, koala bear (Phascolarctos cinereus), is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats. The koala is found in coastal areas of the mainlands astern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia. It is easily recognisable by its stout, tailless body and arge head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60-85 cm (24-33 in) and weighs 4-15 kg (9-33 lb). Fur colour ranges from silver grey to chocolate brown. Koalas from the northern populations are typically smaller and lighter in colour than their counterparts further south. These populations possibly are separate subspecies, but this is disputed. Koalas typically inhabit open Eucalyptus woodland, as the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to twenty hours a day. They are asocial animals, and bonding exists only between mothers and dependent offspring. Adult males communicate with loud bellows that intimidate rivals and attract mates. Males mark their presence with secretions from scent glands located on their chests. Being marsupials, koalas give birth to underdeveloped young that crawl into their mothers pouches, where they stay for the first six to seven months of their lives. Koalas have few natural predators and parasites, but are threatened by various pathogens, such as Chlamydiaceae bacteria and the koala retrovirus Because of its distinctive appearance, the koala along with the kangaroos are recognised worldwide as symbols of Australia. They were hunted by Indigenous Australians and depicted in myths and cave art for millennia. The first recorded encounter between a European and a koala was in 1798, and an image of the animal was published in 1810 by naturalist George Perry. Botanist Robert Brown wrote the first detailed scientific description of the koala in 1814, although his work remained unpublished for 180 years.',
    imgURL: '../assets/images/mammals/koala.jpg',
  },
  {
    name: 'Humpback-Whale',
    food: 'Krill & Fish',
    desc: 'The adult humpback whale is generally 14 - 15 m (46 - 49 ft), though longer lengths of 16-17 m (52-56 ft) have been recorded. Females are usually 1-1.5 m (3 ft 3 in - 4 ft 11 in) longer than males. The species can reach body masses of 40 metric tons (44 short tons). Calves are born at around 4.3 m (14 ft) long with a weight of 680 kg (1,500 lb) The body is bulky with a thin rostrum and proportionally long flippers, each around one-third of its body length. It has a short dorsal fin that varies from nearly non-existent to somewhat long and curved. As a rorqual, the humpback has grooves between the tip of the lower jaw and the navel.[12] They are relatively few in number in this species, ranging from 14-35. The mouth is lined with baleen plates, which number 270-400 for both sides. Unique among large whales, humpbacks have bumps or tubercles on the head and front edge of the flippers; the tail fluke has a jagged trailing edge. The tubercles on the head are 5-10 cm (2.0-3.9 in) thick at the base and poke up to 6.5 cm (2.6 in). They are mostly hollow in the center, often containing at least one fragile hair that erupts 1-3 cm (0.39-1.18 in) from the skin and is 0.1 mm (0.0039 in) thick. The tubercles develop early in the womb and may have a sensory function as they are rich in nerves. The dorsal or upper-side of the animal is generally black; the ventral or underside has various levels of black and white coloration. Whales in the southern hemisphere tend to have more white pigmentation. The flippers can vary from all-white to white only on the undersurface. The varying color patterns and scars on the tail flukes distinguish individual animals. The end of the genital slit of the female is marked by a round lobe. This lobe visually distinguishes males and females',
    imgURL: '../assets/images/mammals/humpbackwhale.jpg',
  },
  {
    name: 'Kangaroo',
    food: 'Vegetables',
    desc: 'The word kangaroo derives from the Guugu Yimithirr word gangurru, referring to eastern grey kangaroos. The name was first recorded as "kanguru" on 12 July 1770 in an entry in the diary of Sir Joseph Banks; this occurred at the site of modern Cooktown, on the banks of the Endeavour River, where HMS Endeavour under the command of Lieutenant James Cook was beached for almost seven weeks to repair damage sustained on the Great Barrier Reef. Cook first referred to kangaroos in his diary entry of 4 August. Guugu Yimithirr is the language of the people of the area. A common myth about the kangaroos English name is that it was a Guugu Yimithirr phrase for "I dont know" or "I dont understand". According to this legend, Cook and Banks were exploring the area when they happened upon the animal. They asked a nearby local what the creatures were called. The local responded "kangaroo", said to mean "I dont know/understand", which Cook then took to be the name of the creature. Anthropologist Walter Roth was trying to correct this legend as far back as in 1898, but few took note until 1972 when linguist John B. Haviland in his research with the Guugu Yimithirr people was able to confirm that gangurru referred to a rare large dark-coloured species of kangaroo.However, when Phillip Parker King visited the Endeavour River region in 1819 and 1820, he maintained that the local word was not kangaroo but menuah perhaps referring to a different species of macropod. There are similar, more credible stories of naming confusion, such as with the Yucatán Peninsula. Kangaroos are often colloquially referred to as roos. Male kangaroos are called bucks, boomers, jacks, or old men; females are does, flyers, or jills; and the young ones are joeys. The collective noun for a group of kangaroos is a mob, court, or troupe.',
    imgURL: '../assets/images/mammals/roo.jpg',
    info: [
      {
        food: 'food',
      },
      {
        lifespan: '- years',
      },
      {
        group: 'mammals',
      },
      {
        length: '-m',
      },
      {
        weight: '-kg',
      },
      {
        found: 'Everywhere',
      },
    ],
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
