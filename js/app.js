var shoppingList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];


var insertShoppingList = document.getElementById('shoppingList');

function appendAll(arr){
    for (i =0; i < arr.length;i++){

        var productAdd = document.createElement('h2')
        productAdd.className = 'product';
        productAdd.innerHTML = arr[i].product  
        insertShoppingList.appendChild(productAdd);

        var descripAdd = document.createElement('div');
        descripAdd.className = 'description';
        descripAdd.innerHTML = arr[i].description;
        productAdd.appendChild(descripAdd);

        var priceAdd = document.createElement('div');
        priceAdd.className = 'price';
        priceAdd.innerHTML = '$'+ arr[i].price;
        insertShoppingList.appendChild(priceAdd);
    }
}


var appendAllItems = appendAll(shoppingList)

var addProdEvent = document.getElementsByClassName('product');


for (i = 0 ;i < addProdEvent.length ; i++){
    addProdEvent[i].addEventListener('click', hideShow);
}


function hideShow(){

    var descripShow = this.querySelectorAll('.description')[0];
    if (descripShow.style.display === 'none'){
        descripShow.style.display = 'block';
    }else {
        descripShow.style.display = 'none';
    }
    
    
}







