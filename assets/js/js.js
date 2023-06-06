let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

var mukodj = document.querySelector('.szallitasicim').offsetTop
console.log(mukodj);

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let utanvetelclass = document.querySelector('.utanvetelclass');
let nemutanvetelclass = document.querySelector('.nemutanvetelclass');

utanvetelclass.addEventListener('click', ()=>{
    body.classList.add('utanvetelkell');
})
nemutanvetelclass.addEventListener('click', ()=>{
    body.classList.remove('utanvetelkell');
})

/* var utanvetel = document.getElementById("utanvetel").checked = false;

function Utanvetel(x)
{
    if (utanvetel == true) 
    {
        x=x+490 
        osszesar.innerHTML = x+"ft lesz a fizetendő összeg"  
    }
    else{
        osszesar.innerHTML = x+"ft lesz a fizetendő összeg"   
    }
} */

/* var doboz = document.getElementById("c1-13")  
var dobozchecked = document.getElementById("c1-13").checked  
doboz.addEventListener('click', ()=>{
    Checkbox()
})
 */

function Checkbox() 
{
    console.log("Beleléptem a checkbox-ba");
    if (dobozchecked == true) 
    {
        document.getElementById("irsz").oninput = document.getElementById("szallirsz").oninput
    }
    /* console.log(document.getElementById("irsz").oninput);
    console.log(document.getElementById("szallirsz").oninput); */
}

let fizetes = document.querySelector('.tovabb');
fizetes.addEventListener('click', ()=>{
    Fizetes()
})


var osszesar = document.getElementById("osszesar")



let products = [
    {
        id: 1,
        name: 'Kávés bögre sárga virággal + alátét',
        image: '1.PNG',
        price: 500
    },
    {
        id: 2,
        name: 'Teás bögre, fül deformációval',
        image: '2.PNG',
        price: 500
    },
    {
        id: 3,
        name: 'Kávés bögre az asszony álomkertjével+ alátét',
        image: '3.PNG',
        price: 500
    },
    {
        id: 4,
        name: 'Nagy bögre pitypanggal',
        image: '4.PNG',
        price: 500
    },
    {
        id: 5,
        name: 'Menő kisbögre',
        image: '5.PNG',
        price: 500
    },
    {
        id: 6,
        name: 'Menő nagybögre festett belsővel',
        image: '6.PNG',
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
    }
    reloadCard();
    console.log(quantity);
}


function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    var totalPrice = 0;
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
                    <div class="db">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString()+"ft";
    if (total.innerText != "0ft") {
        total.innerText = totalPrice.toLocaleString()+"ft Fizetek";
    }
    quantity.innerText = count;
    Fizetes(totalPrice)
}

function Fizetes(totalPrice) 
    {
        console.log("Bekerültem a fizetesbe");
        console.log(totalPrice);
        document.getElementById("fizetes").style.display = "flex";
        if (body.classList.contains("utanvetelkell")) 
        {
            totalPrice=totalPrice+490 
            osszesar.innerHTML = totalPrice+"ft lesz a fizetendő összeg"  
        }
        else(!body.classList.contains("utanvetelkell"))
        {
            osszesar.innerHTML = totalPrice+"ft lesz a fizetendő összeg"   
        }     
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

setInterval(() => {Proli();}, 1);
function Proli() 
{
    if (quantity.innerHTML == "0") {
        quantity.style.visibility = "hidden"; 
    }    
    else
    {
        quantity.style.visibility = "visible";
    }
}

var myVar;

function myFunction() {
    document.getElementById("container").style.display = "none";
    myVar = setTimeout(showPage, 4);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";
    var t = document.getElementsByClassName("nev");
//Danke Tanár úr
    var maxheight=0;
    for (i=0;i<t.length;i++)
        if (t[i].offsetHeight>maxheight) maxheight = t[i].offsetHeight;
    for (i=0;i<t.length;i++)
        t[i].style.height=maxheight+"px";
    
}


let SzamlazasNyit = document.querySelector('.total');
let SzamlazasZar = document.querySelector('.SzamlazasZar');

SzamlazasNyit.addEventListener('click', ()=>{
    body.classList.add('active2');
})
SzamlazasZar.addEventListener('click', ()=>{
    body.classList.remove('active2');
})



/* if (total.innerText != "0ft") {
    total.innerText = totalPrice.toLocaleString()+"ft Fizetek";
} */





















//igen ez fullra a netről van másolva, de legalább kézzel írtam és nagyából értem mi mit csinál😕   