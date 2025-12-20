let productsSection = [
    {
        img: "images/product-ein.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        `,
    },

    {
        img: "images/product-zwei.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        `,
    },

    {
        img: "images/product-drei.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        `,
    },

    {
        img: "images/product-vier.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        `,
    },

    {
        img: "images/product-sex.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        `,
    },

    {
        img: "images/sthule-funf.png",
        titel: "Neue Sthule",
        preis: "$20",
        stars: `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
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