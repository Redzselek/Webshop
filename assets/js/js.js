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
  }
  
];

let listCards  = [];
function initApp(){
  products.forEach((value, key) =>{
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
          <img src="assets/images/${value.image}">
          <div class="nev">${value.name}</div>
          <div class="ar">${value.price.toLocaleString()} ft</div>
          <button onclick="addToCard(${key})">Kosárba</button>`;
      list.appendChild(newDiv);
  })
}
initApp();

function addToCard(key){
  if(listCards[key] == null){
      // Termék másolása a listából a kártyákba
      listCards[key] = JSON.parse(JSON.stringify(products[key]));
      listCards[key].quantity = 1;
      //Igazából nem értem hogy működik ez...
  }
  reloadCard();
}

function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key)=>{
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <div><img src="assets/images/${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="db">${value.quantity+"db"}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>`;
              listCard.appendChild(newDiv);
      }
  })
  total.innerText = totalPrice.toLocaleString()+"ft fizetek";
  console.log(total);
  if(total.innerHTML == "0ft fizetek")
  {
    console.log(total);
    total.innerText = totalPrice.toLocaleString()+"ft";
  }


  quantity.innerText = count;
}
function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCards[key];
  }else{
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}