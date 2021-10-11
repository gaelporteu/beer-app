const image = document.querySelector("img");
const beerName = document.querySelector("h3");
const beerDesc = document.querySelector(".description");
const button = document.querySelector("button");
const pairings = document.querySelector(".pairings");
const noImg = document.querySelector(".noImage");

    
const pickABeer = async () => {
    // console.log(image)
    // const req = await fetch("https://foodish-api.herokuapp.com/api/");
    const res = await fetch("https://api.punkapi.com/v2/beers/random");
    const beer = await res.json();
    // console.log(beer[0]);
    // console.log(beer[0].name);
    // console.log(beer[0].image_url)
    
    const beerPairing = beer[0].food_pairing;
    
    pairings.innerHTML = "";
    
    
    beerPairing.forEach(function(item) {
        const h6 = document.createElement("h6");
        h6.innerText = item;
        pairings.append(h6);
        // console.log(pairs);
    })
        
    noImg.classList.add("hide");
    beerName.innerHTML = beer[0].name;
    beerDesc.innerHTML = beer[0].description;
    
    image.src = beer[0].image_url;  
    image.alt = "another beer image";
    if (beer[0].image_url === null) {
        image.src = "https://toppng.com/public/uploads/thumbnail/glass-with-beer-foam-11547066528zc0dzbtdni.png";
        
        noImg.classList.remove("hide");
    } 
}

button.addEventListener("click", pickABeer)
