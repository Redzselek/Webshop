let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
  body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
  body.classList.remove('active');
})

let products = [
  {
      id: 1,
      name: 'Kávés bögre sárga virággal + alátét',
      image: '1.png',
      price: 500
  },
  {
      id: 2,
      name: 'Teás bögre, fül deformációval',
      image: '2.png',
      price: 500
  },
  {
      id: 3,
      name: 'Kávés bögre az asszony álomkert jével+ alátétt',
      image: '3.png',
      price: 500
  },
  {
      id: 4,
      name: 'Nagy bögre pitypangal',
      image: '4.png',
      price: 500
  },
  {
      id: 5,
      name: 'Menő kisbögre',
      image: '5.png',
      price: 500
  },
  {
      id: 6,
      name: 'Menő nagybögre festett belsővel',
      image: '6.png',
      price: 500
  },
  {
      id: 7,
      name: 'Hibiszkuszok meg talán levendula + alátét',
      image: '7.png',
      price: 500
  },
  {
      id: 8,
      name: 'Pipacsos bögre emelt talpal',
      image: '8.png',
      price: 500
  },
  {
      id: 9,
      name: 'Pipacsos bögre emelt talpal delux',
      image: '8.png',
      price: 500
  }
  
];

