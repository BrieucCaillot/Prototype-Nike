/* IMAGE SHOES CHANGE ON CLICK * */

function change_shoes1() {
               
                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX TAVAS SD';
                var money = document.getElementById('price').innerHTML='$ 160.00';

                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes1.png')";
                image.style.width = "40em";
                image.style.height = "19em";

                var nameshoes2 = document.getElementById('shopshoes2').innerHTML= 'AIR TAVAS SD';
                var money2 = document.getElementById('shopprice2').innerHTML='$ 160.00';

                var imageshop = document.getElementById('shopright');
                imageshop.style.backgroundImage = "url('images/thirdblock/shoesbox.png')";

                var thirdblockshoes = document.getElementById('thirdblock');
                thirdblockshoes.style.backgroundImage = "url('images/thirdblock/shoes.png')";

                var secondblockshoes = document.getElementById('secondblock');
                secondblockshoes.style.backgroundImage = "url('images/secondblock/background.png')";
            }


function change_shoes2() {

                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX RAINBOW';
                var money = document.getElementById('price').innerHTML='$ 165.00';
                
                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes2.png')";
                image.style.width = "40em";
                image.style.height = "19em";
                image.style.backgroundSize = "100% 100%";

                var nameshoes2 = document.getElementById('shopshoes2').innerHTML= 'AIR MAX RAINBOW';
                var money2 = document.getElementById('shopprice2').innerHTML='$ 165.00';

                var imageshop = document.getElementById('shopright');
                imageshop.style.backgroundImage = "url('images/thirdblock/shoesbox2.png')";

                var thirdblockshoes = document.getElementById('thirdblock');
                thirdblockshoes.style.backgroundImage = "url('images/thirdblock/shoes2.png')";

                var secondblockshoes = document.getElementById('secondblock');
                secondblockshoes.style.backgroundImage = "url('images/secondblock/background2.png')";
            }

function change_shoes3() {

                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX CLEAN GREEN';
                var money = document.getElementById('price').innerHTML='$ 180.00';

                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes3.png')";
                image.style.maxwidth = "40em";
                image.style.maxheight = "22em";
                image.style.backgroundSize = "100% 100%";

                var nameshoes2 = document.getElementById('shopshoes2').innerHTML= 'AIR MAX CLEAN GREEN';
                var money2 = document.getElementById('shopprice2').innerHTML='$ 180.00';

                var imageshop = document.getElementById('shopright');
                imageshop.style.backgroundImage = "url('images/thirdblock/shoesbox3.png')";

                var thirdblockshoes = document.getElementById('thirdblock');
                thirdblockshoes.style.backgroundImage = "url('images/thirdblock/shoes3.png')";

                var secondblockshoes = document.getElementById('secondblock');
                secondblockshoes.style.backgroundImage = "url('images/secondblock/background3.png')";
            }

/* ADD TO CART */

var nbproduct = document.getElementById('nbproduct').innerHTML = 0;

function addcart() {
            var span = document.getElementById('nbproduct').innerHTML= nbproduct ++;
            }

/* Shopright */

var body = document.getElementsByTagName("body");
var shop = document.getElementById("shopright");

window.onscroll = function(){
    if (document.body.scrollTop < 750){
        shop.style.position = "absolute";
        shop.style.top = "-560px";
    }   
    else if (document.body.scrollTop >= 750 && document.body.scrollTop <= 1400){
        shop.style.position = "fixed";
        shop.style.top = "118px";
    }
    else if (document.body.scrollTop > 1400){
        shop.style.position = "absolute";
        shop.style.top = "170px"; 
    }
};
