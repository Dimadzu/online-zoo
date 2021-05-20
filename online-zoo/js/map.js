window.addEventListener("load", function() {
    let animalsCard = [{
        id: "#eagle",
        src: "./assets/images/eagle.png",
        link: "/zoos/eagle.html",
        title: "Eagle",
        text: "The broadcast is from an island near Los Angeles. Watch their real life."
    },
    {
        id: "#crocodile",
        title: "Crocodile",
        link: "/zoos/aligator.html",
        src: "./assets/images/carousel_item_8.png",
        text: "The broadcast is from an island near Los Angeles. Watch their real life."

    },
    {
        id: "#muncky",
        title: "Gorilla",
        link: "/zoos/gorila.html",
        src: "./assets/images/carousel_item_6.png",
        text: "The broadcast is from an island near Los Angeles. Watch their real life."

    },
    {
        id: "#panda",
        title: "Panda",
        link: "/zoos/panda.html",
        src: "./assets/images/carousel_item_4.png",
        text: "The broadcast is from an island near Los Angeles. Watch their real life."

    },
];
    // show card animals on page map
    let header=document.querySelector(".header"),
        aside=document.querySelector(".zoomaps_aside"),
        clickItem=document.querySelectorAll(".zoos_pos_wrap .map_item"),
        cardAnimalsMap=document.querySelector(".zoos_pos_wrap .card"),
        cardAnimalsMapImg=document.querySelector(".zoos_pos_wrap .card .card_img"),
        cardAnimalsMapTitle=document.querySelector(".zoos_pos_wrap .card h3"),
        cardAnimalsMapLink=document.querySelector(".zoos_pos_wrap .card .watch_now"),
        mapWrap=document.querySelector(".zoos_pos_wrap");


        let wrapper=()=>{
            let wrapperLeft=aside.offsetLeft+aside.clientWidth,
                headerBottom=header.offsetTop+header.clientHeight,
                windowHeight=window.innerHeight,
                windowWidth=window.innerWidth;
                return {left: wrapperLeft,
                        top: headerBottom,
                        bottom: windowHeight,
                        right:  windowWidth
                        }
            
        }
        window.addEventListener('resize',(e)=>{
            let metric=wrapper();
            console.log(metric.left)
        });
        showZooCard=(atributeIdZoo)=>{
            let arrCard = animalsCard.filter(card => card.id == atributeIdZoo);
            cardAnimalsMap.style.opacity = "0";
            cardAnimalsMap.style.display = "none";

            //add atribute to card
            cardAnimalsMapImg.setAttribute("src", arrCard[0].src);
            cardAnimalsMapTitle.innerHTML = arrCard[0].title;
            cardAnimalsMapLink.setAttribute("href", arrCard[0].link);

            clickItem.forEach((elem) => {
                elem.getAttribute("idZoo") == atributeIdZoo ? elem.classList.add("map_item_active") : elem.classList.remove("map_item_active")
            })
            cardAnimalsMap.style.display = "block";
            this.setTimeout(() => {
                cardAnimalsMap.style.opacity = "1";

            }, 400)
        }


        mapWrap.addEventListener('click',(e)=>{
            let metricLoad=wrapper();
            _this=e.target;
            if(_this.getAttribute("idZoo")){
                _this=_this.closest(".map_item");
                let atributeIdZoo=_this.getAttribute("idZoo");
               let _thisLeft=_this.offsetLeft,
                    _thissTop=_this.offsetTop;
                    _thisRight=_thisLeft+_this.clientWidth;
                    if(_thisLeft<=metricLoad.right/3 &&  _thissTop<metricLoad.bottom/2 ){
                        showZooCard(atributeIdZoo);
                        cardAnimalsMap.style.left=_thisRight;
                        cardAnimalsMap.style.top=metricLoad.top+30;

                    }else if(_thisLeft>(metricLoad.right-metricLoad.right/3) && _thissTop<metricLoad.bottom/2){
                        showZooCard(atributeIdZoo);
                        cardAnimalsMap.style.left=_thisLeft-cardAnimalsMap.clientWidth;
                        cardAnimalsMap.style.top=metricLoad.top+30;

                    }else{
                        showZooCard(atributeIdZoo);
                        cardAnimalsMap.style.left=_thisLeft-cardAnimalsMap.clientWidth;
                        cardAnimalsMap.style.top=metricLoad.top*2;
                    }

            } else {
                cardAnimalsMap.style.display="none"
            }
            

        })




})