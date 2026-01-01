// GreetingSection
let greeting = document.getElementById("greetingSection");

let now = new Date();
let today = now.toDateString();

let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit !== today) {
    greeting.style.display = "block";
    lastVisit = localStorage.setItem("lastVisit", today);

} else {
    greeting.style.display = "none";
};

setTimeout(function () {
    greeting.classList.add("fade-out");
}, 2000);

setTimeout(function () {
    greeting.style.display = "none"
}, 5000);

localStorage.clear()






// Products

let productsSection = [
    {
        img: "images/product-ein.png",
        titel: "Product Name",
        preis: "$50",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },

    {
        img: "images/product-zwei.png",
        titel: "Product Name",
        preis: "$25",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },

    {
        img: "images/product-drei.png",
        titel: "Product Name",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },

    {
        img: "images/product-vier.png",
        titel: "Product Name",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },

    {
        img: "images/product-sex.png",
        titel: "Product Name",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },

    {
        img: "images/sthule-funf.png",
        titel: "Product Name",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        <i class="fa-solid fa-star" style="color: rgb(255, 140, 0);"></i>
        `,
    },
];


let products = productsSection.slice(-6).reverse();
let container = document.getElementById("subourproduct");
container.innerHTML += "";

products.forEach(item => {
    container.innerHTML += `
     <div class="prodOne">
                    <img src="${item.img}">
                    <div class="productsInfo">
                    <div>
                        <strong>${item.titel}</strong>
                        <p class="priesproduct">${item.preis}</p>
                    </div>
                        <div>
                            <i>${item.stars}</i>
                        </div>
                    </div>
                </div>
                
    `;

});