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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGFuaW1hbHNDYXJkID0gW3tcclxuICAgICAgICBpZDogXCIjZWFnbGVcIixcclxuICAgICAgICBzcmM6IFwiLi9hc3NldHMvaW1hZ2VzL2VhZ2xlLnBuZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiL3pvb3MvZWFnbGUuaHRtbFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVhZ2xlXCIsXHJcbiAgICAgICAgdGV4dDogXCJUaGUgYnJvYWRjYXN0IGlzIGZyb20gYW4gaXNsYW5kIG5lYXIgTG9zIEFuZ2VsZXMuIFdhdGNoIHRoZWlyIHJlYWwgbGlmZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIjY3JvY29kaWxlXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3JvY29kaWxlXCIsXHJcbiAgICAgICAgbGluazogXCIvem9vcy9hbGlnYXRvci5odG1sXCIsXHJcbiAgICAgICAgc3JjOiBcIi4vYXNzZXRzL2ltYWdlcy9jYXJvdXNlbF9pdGVtXzgucG5nXCIsXHJcbiAgICAgICAgdGV4dDogXCJUaGUgYnJvYWRjYXN0IGlzIGZyb20gYW4gaXNsYW5kIG5lYXIgTG9zIEFuZ2VsZXMuIFdhdGNoIHRoZWlyIHJlYWwgbGlmZS5cIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiI211bmNreVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdvcmlsbGFcIixcclxuICAgICAgICBsaW5rOiBcIi96b29zL2dvcmlsYS5odG1sXCIsXHJcbiAgICAgICAgc3JjOiBcIi4vYXNzZXRzL2ltYWdlcy9jYXJvdXNlbF9pdGVtXzYucG5nXCIsXHJcbiAgICAgICAgdGV4dDogXCJUaGUgYnJvYWRjYXN0IGlzIGZyb20gYW4gaXNsYW5kIG5lYXIgTG9zIEFuZ2VsZXMuIFdhdGNoIHRoZWlyIHJlYWwgbGlmZS5cIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiI3BhbmRhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiUGFuZGFcIixcclxuICAgICAgICBsaW5rOiBcIi96b29zL3BhbmRhLmh0bWxcIixcclxuICAgICAgICBzcmM6IFwiLi9hc3NldHMvaW1hZ2VzL2Nhcm91c2VsX2l0ZW1fNC5wbmdcIixcclxuICAgICAgICB0ZXh0OiBcIlRoZSBicm9hZGNhc3QgaXMgZnJvbSBhbiBpc2xhbmQgbmVhciBMb3MgQW5nZWxlcy4gV2F0Y2ggdGhlaXIgcmVhbCBsaWZlLlwiXHJcblxyXG4gICAgfSxcclxuXTtcclxuICAgIC8vIHNob3cgY2FyZCBhbmltYWxzIG9uIHBhZ2UgbWFwXHJcbiAgICBsZXQgaGVhZGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpLFxyXG4gICAgICAgIGFzaWRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuem9vbWFwc19hc2lkZVwiKSxcclxuICAgICAgICBjbGlja0l0ZW09ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi56b29zX3Bvc193cmFwIC5tYXBfaXRlbVwiKSxcclxuICAgICAgICBjYXJkQW5pbWFsc01hcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnpvb3NfcG9zX3dyYXAgLmNhcmRcIiksXHJcbiAgICAgICAgY2FyZEFuaW1hbHNNYXBJbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi56b29zX3Bvc193cmFwIC5jYXJkIC5jYXJkX2ltZ1wiKSxcclxuICAgICAgICBjYXJkQW5pbWFsc01hcFRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuem9vc19wb3Nfd3JhcCAuY2FyZCBoM1wiKSxcclxuICAgICAgICBjYXJkQW5pbWFsc01hcExpbms9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi56b29zX3Bvc193cmFwIC5jYXJkIC53YXRjaF9ub3dcIiksXHJcbiAgICAgICAgbWFwV3JhcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnpvb3NfcG9zX3dyYXBcIik7XHJcblxyXG5cclxuICAgICAgICBsZXQgd3JhcHBlcj0oKT0+e1xyXG4gICAgICAgICAgICBsZXQgd3JhcHBlckxlZnQ9YXNpZGUub2Zmc2V0TGVmdCthc2lkZS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlYWRlckJvdHRvbT1oZWFkZXIub2Zmc2V0VG9wK2hlYWRlci5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGg9d2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2xlZnQ6IHdyYXBwZXJMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhlYWRlckJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB3aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAgd2luZG93V2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKGUpPT57XHJcbiAgICAgICAgICAgIGxldCBtZXRyaWM9d3JhcHBlcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXRyaWMubGVmdClcclxuICAgICAgICB9KTtcclxuICAgICAgICBzaG93Wm9vQ2FyZD0oYXRyaWJ1dGVJZFpvbyk9PntcclxuICAgICAgICAgICAgbGV0IGFyckNhcmQgPSBhbmltYWxzQ2FyZC5maWx0ZXIoY2FyZCA9PiBjYXJkLmlkID09IGF0cmlidXRlSWRab28pO1xyXG4gICAgICAgICAgICBjYXJkQW5pbWFsc01hcC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGNhcmRBbmltYWxzTWFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIC8vYWRkIGF0cmlidXRlIHRvIGNhcmRcclxuICAgICAgICAgICAgY2FyZEFuaW1hbHNNYXBJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFyckNhcmRbMF0uc3JjKTtcclxuICAgICAgICAgICAgY2FyZEFuaW1hbHNNYXBUaXRsZS5pbm5lckhUTUwgPSBhcnJDYXJkWzBdLnRpdGxlO1xyXG4gICAgICAgICAgICBjYXJkQW5pbWFsc01hcExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBhcnJDYXJkWzBdLmxpbmspO1xyXG5cclxuICAgICAgICAgICAgY2xpY2tJdGVtLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKFwiaWRab29cIikgPT0gYXRyaWJ1dGVJZFpvbyA/IGVsZW0uY2xhc3NMaXN0LmFkZChcIm1hcF9pdGVtX2FjdGl2ZVwiKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm1hcF9pdGVtX2FjdGl2ZVwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYXJkQW5pbWFsc01hcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZEFuaW1hbHNNYXAuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuICAgICAgICAgICAgfSwgNDAwKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIG1hcFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgICAgICAgICBsZXQgbWV0cmljTG9hZD13cmFwcGVyKCk7XHJcbiAgICAgICAgICAgIF90aGlzPWUudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZihfdGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFpvb1wiKSl7XHJcbiAgICAgICAgICAgICAgICBfdGhpcz1fdGhpcy5jbG9zZXN0KFwiLm1hcF9pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0cmlidXRlSWRab289X3RoaXMuZ2V0QXR0cmlidXRlKFwiaWRab29cIik7XHJcbiAgICAgICAgICAgICAgIGxldCBfdGhpc0xlZnQ9X3RoaXMub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBfdGhpc3NUb3A9X3RoaXMub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzUmlnaHQ9X3RoaXNMZWZ0K190aGlzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF90aGlzTGVmdDw9bWV0cmljTG9hZC5yaWdodC8zICYmICBfdGhpc3NUb3A8bWV0cmljTG9hZC5ib3R0b20vMiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Wm9vQ2FyZChhdHJpYnV0ZUlkWm9vKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEFuaW1hbHNNYXAuc3R5bGUubGVmdD1fdGhpc1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQW5pbWFsc01hcC5zdHlsZS50b3A9bWV0cmljTG9hZC50b3ArMzA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKF90aGlzTGVmdD4obWV0cmljTG9hZC5yaWdodC1tZXRyaWNMb2FkLnJpZ2h0LzMpICYmIF90aGlzc1RvcDxtZXRyaWNMb2FkLmJvdHRvbS8yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1pvb0NhcmQoYXRyaWJ1dGVJZFpvbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBbmltYWxzTWFwLnN0eWxlLmxlZnQ9X3RoaXNMZWZ0LWNhcmRBbmltYWxzTWFwLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQW5pbWFsc01hcC5zdHlsZS50b3A9bWV0cmljTG9hZC50b3ArMzA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Wm9vQ2FyZChhdHJpYnV0ZUlkWm9vKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEFuaW1hbHNNYXAuc3R5bGUubGVmdD1fdGhpc0xlZnQtY2FyZEFuaW1hbHNNYXAuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBbmltYWxzTWFwLnN0eWxlLnRvcD1tZXRyaWNMb2FkLnRvcCoyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQW5pbWFsc01hcC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59KSJdfQ==
