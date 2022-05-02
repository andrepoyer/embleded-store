var shoes = document.getElementsByClassName('shoes');
var jackets = document.getElementsByClassName('jackets');
var fragrances = document.getElementsByClassName('fragrances');
var shirts = document.getElementsByClassName('shirts')
var pants = document.getElementsByClassName('pants');

function changeDisplay(elements){
    for (var i=0; i<elements.length; i++) {
        elements.item(i).classList.toggle('d-none');
      }
}

function showOnly(category){
    switch(category){
        case 'shoes':
            break;
        case 'jackets':
            break;
        case 'fragrances':
            break;
        case 'shirts':  
            break;
        case 'pants':
            changeDisplay(shoes);
            break;
    }
}