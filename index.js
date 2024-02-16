const cards=document.getElementsByClassName('card');
console.log(cards);
let total=0;
for(let card of cards){
    card.addEventListener('click',function(){
        let h3=card.querySelector('h3');
        let item=h3.innerText;
        let price=card.querySelector('span');
        price=price.innerText.slice(2);
        price=parseFloat(price);
        console.log(price);
        const titleContainer=document.getElementById('title-container');
        const p=document.createElement('p');
        p.innerText=item;
        titleContainer.appendChild(p);
        total=total+price;
        let totalPrice=document.getElementById('totalPrice');
        totalPrice.innerText=total;
    })
  
}


