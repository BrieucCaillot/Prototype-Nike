/* IMAGE SHOES CHANGE ON CLICK * */

function change_shoes1() {
               
                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX TAVAS SD';
                var money = document.getElementById('price').innerHTML='$ 160.00';

                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes1.png')";
                image.style.width = "40em";
                image.style.height = "19em";
            }


function change_shoes2() {

                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX TAVAS SD RAINBOW';
                var money = document.getElementById('price').innerHTML='$ 165.00';

                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes2.png')";
                image.style.width = "40em";
                image.style.height = "19em";
                image.style.backgroundSize = "100% 100%";
            }

function change_shoes3() {

                var nameshoes = document.getElementById('shoes').innerHTML='AIR MAX MONTANTE';
                var money = document.getElementById('price').innerHTML='$ 180.00';

                var image = document.getElementById('viewshoes');
                image.style.backgroundImage = "url('images/firstblock/container/viewshoes3.png')";
                image.style.maxwidth = "40em";
                image.style.maxheight = "22em";
                image.style.backgroundSize = "100% 100%";
            }

var nbproduct = document.getElementById('nbproduct').innerHTML = 0;

function addcart() {
            
            var span = document.getElementById('nbproduct').innerHTML= nbproduct ++;
            
            }

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

/* formulaire */

function male() {
    var gender = document.getElementById('male');
    gender.style.border = "1px solid black";
    gender.style.padding = "1em 0em 0em 4.9em";
}

function female() {
    var gender = document.getElementById('female');
    gender.style.border = "1px solid black";
    gender.style.padding = "1em 0em 0em 4.9em";
}
