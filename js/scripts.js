var cards = document.querySelector('.product-box');

[...cards].forEach((card)=>{
    card.addEventListener('mouseover', function(){
        card.classList.add('is-hover')
    });
    card.addEventListener('mouseleave', function(){
        card.classList.remove('is-hover');
    })
})