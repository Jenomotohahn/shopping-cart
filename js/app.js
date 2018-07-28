var shoppingList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, imgSrc:"https://shopcdn.textalk.se/shop/7500/art0/h3483/5353483-origpic-7a0da1.jpg?max-width=720&max-height=480&quality=92"}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, imgSrc:"https://img.discogs.com/H3HWHjtaj7k4ehjdM0dE6osyan8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2382962-1360331108-2121.jpeg.jpg"}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, imgSrc: "https://cdn.trendhunterstatic.com/phpthumbnails/253/253437/253437_1_230c.jpeg"}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, imgSrc: "https://www.dhresource.com/webp/m/0x0s/f2-albu-g4-M00-30-45-rBVaEVnz7S-AfIqJAAGvzlpgS2I676.jpg/woof-washer-360-dog-selling-pet-washer-pet.jpg"}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, imgSrc:"https://img.dietspotlight.com/wp-content/uploads/sauna-pants-product-image-300x300.jpg"}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, imgSrc:"https://cdn.shopify.com/s/files/1/1696/8457/products/Boyfriend-Snuggle-Throw-Pillow-2_grande.jpg?v=1487594252"}];


var insertShoppingList = document.getElementById('shoppingList');

function appendAll(arr){
    for (var i =0; i < arr.length;i++){
        
        var productBox = document.createElement('div');
        productBox.className = 'box';
        insertShoppingList.appendChild(productBox);

        var imgAddPhoto = document.createElement('img');
        imgAddPhoto.className = 'productImg';
        imgAddPhoto.src = arr[i].imgSrc;
        productBox.appendChild(imgAddPhoto);

        var productAdd = document.createElement('h2')
        productAdd.className = 'product';
        productAdd.innerHTML = arr[i].product  
        productBox.appendChild(productAdd);

        var descripAdd = document.createElement('div');
        descripAdd.className = 'description';
        descripAdd.innerHTML = arr[i].description;
        productAdd.appendChild(descripAdd);

        var priceAdd = document.createElement('div');
        priceAdd.className = 'price';
        priceAdd.innerHTML = '$'+ arr[i].price;
        productBox.appendChild(priceAdd);
    }
}





/* create a helper function to replace all the typing work

example: function makeBox (elem, label, data){

}
*/


var appendAllItems = appendAll(shoppingList)

var addProdEvent = document.getElementsByClassName('product');


for (var i = 0 ;i < addProdEvent.length ; i++){
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

var subTotalAmt = 0

for (var i = 0; i < shoppingList.length; i++){
   subTotalAmt+= shoppingList[i].price;
} 

var subTotalAppend = document.getElementById('subtotal');
subTotalAppend.innerHTML = '$' + subTotalAmt;



