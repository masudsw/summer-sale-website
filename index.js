const cards=document.getElementsByClassName('card');
console.log(cards);
let total=0;
let index=1;
let totalPrice;
for(let card of cards){
    card.addEventListener('click',function(){
        let h3=card.querySelector('h3');
        let item=h3.innerText;
        let price=card.querySelector('span');
        price=price.innerText.slice(2);
        price=parseFloat(price);
        const titleContainer=document.getElementById('title-container');
        const p=document.createElement('p');
        p.innerText=index + '. ' + item;
        index++;
        console.log(index);
        titleContainer.appendChild(p);
        total=total+price;
        totalPrice= document.getElementById('totalPrice');
        totalPrice.innerText=total;
    })
}

const applyButton=document.getElementById('apply-btn');
applyButton.addEventListener('click',function(){
    let inputDiscount=document.getElementById('input-field').value;
    inputDiscount=inputDiscount.replaceAll(" ", "");

    if(inputDiscount.toUpperCase()==='SELL200' && (totalPrice.innerText>=200))
    {
        // 20% discount
        const disCount=totalPrice.innerText*0.2;
        document.getElementById('discountPrice').innerText=disCount;
        document.getElementById('total').innerText=totalPrice.innerText-disCount;
    }
    else
    {
        alert('You are not qualified for discount');
        document.getElementById('total').innerText=totalPrice.innerText;

    }
    inputDiscount.value='';

})



