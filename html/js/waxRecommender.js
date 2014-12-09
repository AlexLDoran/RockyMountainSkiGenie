var highTemp = [
{
"company": "Dominator",
"product": "Zoom",
"url": "http://www.dominatorwax.com/products/zoom",
"image": "http://www.dominatorwax.com/sites/default/files/styles/waxcover/public/zoom_0.jpg",
"width": "51",
"height": "69"
},
{
"company": "Oneball",
"product": "4WD Warm",
"url": "http://www.one-ball.com/snow/snowboard-wax/4wd-wax/warm-wax/",
"image": "http://www.one-ball.com/snow/snowboard-wax/images/4wd_warm_thumb.jpg",
"width": "87",
"height": "67"
},
{
"company": "SWIX",
"product": "BP99 Base Prep Warm",
"url": "http://www.swixsport.com/Products/Wax-Tuning/Glider/Base-Prep-Universal/BP99-Base-Prep-Warm-180g",
"image": "http://www.swixsport.com/var/swix/storage/products/24683/24683_thumb.jpg",
"width":"31",
"height":"75"
},
{
"company": "Toko",
"product": "NF Hot Wax Yellow",
"url": "http://www.toko.ch/en/products/wax/hot-wax/nf-hot-wax-yellow-120g",
"image": "http://www.toko.ch/sites/default/files/styles/product_thumb/public/product_image/5502001_nf_hot_wax_yellow_120g.jpg?itok=GUYhZsLK",
"width":"65",
"height":"90"
}
];

var midtohighTemp = [
{
"company": "Dominator",
"product": "Zoom",
"url": "http://www.dominatorwax.com/products/zoom",
"image": "http://www.dominatorwax.com/sites/default/files/styles/waxcover/public/zoom_0.jpg",
"width": "51",
"height": "69"

},
{
"company": "Oneball",
"product": "4WD Cool",
"url": "http://www.one-ball.com/snow/snowboard-wax/4wd-wax/cool-wax/",
"image": "http://www.one-ball.com/snow/snowboard-wax/images/4wd_cool_thumb.jpg",
"width": "87",
"height": "67"
},
{
"company": "SWIX",
"product": "BP88 Base Prep",
"url": "http://www.swixsport.com/Products/Wax-Tuning/Glider/Base-Prep-Universal/BP88-Base-Prep-180g",
"image": "http://www.swixsport.com/var/swix/storage/products/24681/24681_thumb.jpg",
"width":"31",
"height":"75"
},
{
"company": "SWIX",
"product": "Moly Fluor Wax",
"url": "http://www.swixsport.com/Products/Wax-Tuning/Glider/Base-Prep-Universal/Moly-Fluor-Wax-180g",
"image":"http://www.swixsport.com/var/swix/storage/products/24697/24697_thumb.jpg",
"width":"31",
"height":"75"
},
{
"company": "Toko",
"product": "NF Hot Wax Red",
"url": "http://www.toko.ch/en/products/wax/hot-wax/nf-hot-wax-red-120g",
"image": "http://www.toko.ch/sites/default/files/styles/product_thumb/public/product_image/5502002_nf_hot_wax_red_120g.jpg?itok=-fhbu8h1",
"width":"65",
"height":"90"
}
];

var midtolowTemp = [
{
"company": "Dominator",
"product": "Bullet",
"url": "http://www.dominatorwax.com/products/bullet",
"image": "http://www.dominatorwax.com/sites/default/files/styles/waxcover/public/bullet.jpg",
"width": "51",
"height": "69"
},
{
"company": "Oneball",
"product": "4WD Cold",
"url": "http://www.one-ball.com/snow/snowboard-wax/4wd-wax/cold-wax/",
"image":"http://www.one-ball.com/snow/snowboard-wax/images/4wd_cold_thumb.jpg",
"width": "87",
"height": "67"
},
{
"company": "SWIX",
"product": "BP77 Base Prep Cold",
"url": "http://www.swixsport.com/Products/Wax-Tuning/Glider/Base-Prep-Universal/BP77-Base-Prep-Cold-180-g",
"image":"http://www.swixsport.com/var/swix/storage/products/24677/24677_thumb.jpg",
"width":"31",
"height":"75"
},
{
"company": "Toko",
"product": "NF Hot Wax Blue",
"url": "http://www.toko.ch/en/products/wax/hot-wax/nf-hot-wax-blue-120g",
"image":"http://www.toko.ch/sites/default/files/styles/product_thumb/public/product_image/5502003_nf_hot_wax_blue_120g.jpg?itok=kgwGTslS",
"width":"65",
"height":"90"
}
];

var lowTemp = [
{
"company": "Oneball",
"product": "4WD Ice",
"url": "http://www.one-ball.com/snow/snowboard-wax/4wd-wax/ice-wax/",
"image": "http://www.one-ball.com/snow/snowboard-wax/images/4wd_ice_thumb.jpg",
"width": "87",
"height": "67"
},
{
"company": "SWIX",
"product": "BP77 Base Prep Cold",
"url": "http://www.swixsport.com/Products/Wax-Tuning/Glider/Base-Prep-Universal/BP77-Base-Prep-Cold-180-g",
"image":"http://www.swixsport.com/var/swix/storage/products/24677/24677_thumb.jpg",
"width":"31",
"height":"75"
},
{
"company": "Toko",
"product": "NF Hot Wax Blue",
"url": "http://www.toko.ch/en/products/wax/hot-wax/nf-hot-wax-blue-120g",
"image":"http://www.toko.ch/sites/default/files/styles/product_thumb/public/product_image/5502003_nf_hot_wax_blue_120g.jpg?itok=kgwGTslS",
"width":"65",
"height":"90"
}
];


function displayWax(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<p><b>Comany Name:</b> ' + arr[i].company + '<br><b>Product Name:</b> ' + arr[i].product +
        '</p>'; 

        out += '<img src="' + arr[i].image + '" width="' + arr[i].width + 
        '" height="' + arr[i].height + '"><br><a href="'+ arr[i].url + '">More Information</a><br><br>';

    }
    document.getElementById("wax").innerHTML = out;
};
