const ProName = document.querySelector(".container h1");
const ProBase = document.querySelector(".container h2");
const ProCont = document.querySelector(".container h3");



class Product {
    constructor(name,price){
this.name=name,
this.price = price
    }
    basePrice(){
        let base = this.price * .5;
        return base
    
    }
    priceAsCont(){
       
     let contribute =( (this.price-this.basePrice())*1.2) /6
     return contribute
    }
}


const phone = new Product("galaxy", 5000);
console.log(phone);
console.log(phone.priceAsCont());

ProName.innerText=phone.name
ProCont.innerText=phone.priceAsCont()
ProBase.innerText=phone. basePrice()