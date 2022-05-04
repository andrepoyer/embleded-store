//Starting variables for every category
var shoes = document.getElementsByClassName('shoes');
var jackets = document.getElementsByClassName('jackets');
var fragrances = document.getElementsByClassName('fragrances');
var shirts = document.getElementsByClassName('shirts')
var pants = document.getElementsByClassName('pants');
var accessories = document.getElementsByClassName('accessories');

//This function alters the display of some
//element to hide it on the screen
function changeDisplayToNone(elements){
    for (var i=0; i<elements.length; i++) {
        elements.item(i).classList.add('d-none');
    }
}

//This shows the element again
function changeDisplayToBlock(elements){
    for (var i=0; i<elements.length; i++) {
        elements.item(i).classList.remove('d-none');
        elements.item(i).classList.add('d-block');
    }
}

//Function to show all the categories
function showAll(){
    changeDisplayToBlock(shoes);
    changeDisplayToBlock(jackets);
    changeDisplayToBlock(fragrances);
    changeDisplayToBlock(shirts);
    changeDisplayToBlock(pants);
    changeDisplayToBlock(accessories);
}

//Function that hides the categories except
//for the one that was selected
function showOnly(category){
    switch(category){
        case 'shoes':
            changeDisplayToNone(fragrances);
            changeDisplayToNone(pants);
            changeDisplayToNone(shirts);
            changeDisplayToNone(jackets);
            changeDisplayToNone(accessories);
            changeDisplayToBlock(shoes);
            break;
        case 'jackets':
            changeDisplayToNone(shoes);
            changeDisplayToNone(pants);
            changeDisplayToNone(shirts);
            changeDisplayToNone(fragrances);
            changeDisplayToNone(accessories);
            changeDisplayToBlock(jackets);
            break;
        case 'fragrances':
            changeDisplayToNone(shoes);
            changeDisplayToNone(pants);
            changeDisplayToNone(shirts);
            changeDisplayToNone(jackets);
            changeDisplayToNone(accessories);
            changeDisplayToBlock(fragrances);
            break;
        case 'shirts':  
            changeDisplayToNone(shoes);
            changeDisplayToNone(fragrances);
            changeDisplayToNone(jackets);
            changeDisplayToNone(pants);
            changeDisplayToNone(accessories);
            changeDisplayToBlock(shirts);
            break;
        case 'pants':
            changeDisplayToNone(shoes);
            changeDisplayToNone(fragrances);
            changeDisplayToNone(shirts);
            changeDisplayToNone(jackets);
            changeDisplayToNone(accessories);
            changeDisplayToBlock(pants);
            break;
        case 'accessories':
            changeDisplayToNone(shoes);
            changeDisplayToNone(fragrances);
            changeDisplayToNone(shirts);
            changeDisplayToNone(jackets);
            changeDisplayToNone(pants);
            changeDisplayToBlock(accessories);
    }
}