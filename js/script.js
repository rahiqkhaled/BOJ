
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    //localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})
 


let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "BOJ Body Wash",
        price: "25$",
        imageUrl : "images/1.webp"
    },
    {
        id:2,
        title: "BOJ Moisturizing Cream",
        price: "30$",
        imageUrl : "images/2.webp"
    },
    {
        id:3,
        title: "BOJ Ginseng Oil",
        price: "15$",
        imageUrl : "images/3.webp"
    },
    {
        id:4,
        title: "BOJ Ginseng Toner",
        price: "20$",
        imageUrl : "images/4.webp"
    },
    {
        id:5,
        title: "BOJ Special Perfume",
        price: "50$",
        imageUrl : "images/5.webp"
    },
    {
        id:6,
        title: "BOJ Serums kit",
        price: "70$",
        imageUrl : "images/6.webp"
    },
    {
        id:7,
        title: "BOJ RedBean WaterGel",
        price: "13$",
        imageUrl : "images/7.webp"
    },
    {
        id:8,
        title: "BOJ Apricot Peeling Gel",
        price: "17$",
        imageUrl : "images/8.webp"
    },
    {
        id:9,
        title: "BOJ RedBean Pore Mask",
        price: "24$",
        imageUrl : "images/9.webp"
    },
    {
        id:10,
        title: "BOJ AHA-BHA Refreshing Toner ",
        price: "40$",
        imageUrl : "images/10.webp"
    }
]

// Products layout

function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>the new Beauty product from Beauty of Joseon Korean Brand</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}drawItems ()


// adding products to cart
let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")
 // incrementing badge

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }




/////view carts content preview

let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}
/////



