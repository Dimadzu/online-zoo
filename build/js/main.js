window.addEventListener("load", function() {
    // function show modal window
    const coverElem = document.querySelector('.cover');
    const formElem = document.querySelector('.form-feedback');
    let feedbackButton = document.querySelector('.leave_feedback');
    const nameField = document.querySelector('.form-feedback__form_name');
    const emailField = document.querySelector('.form-feedback__form_email');
    const textField = document.querySelector('.text-feedback');
    const sendButton = document.querySelector('.send_btn');
    const validate = () => {
        if (
            nameField.validity.valid && emailField.validity.valid && textField.validity.valid
        ) {
            sendButton.classList.remove('invalid');
        } else {
            sendButton.classList.add('invalid');
        }
    }
    feedbackButton.addEventListener('click', () => {
        console.log(nameField)
        document.body.classList.add('notScrollable');
        coverElem.classList.remove('hidden');
        formElem.classList.remove('hidden');
    });

    coverElem.addEventListener('click', () => {
        document.body.classList.remove('notScrollable');
        coverElem.classList.add('hidden');
        formElem.classList.add('hidden');
    });

    sendButton.addEventListener('click', () => {
        if (sendButton.classList.contains('invalid')) return;
        document.body.classList.remove('notScrollable');
        coverElem.classList.add('hidden');
        formElem.classList.add('hidden');
    });

    nameField.addEventListener('input', () => {
        validate();
    });

    emailField.addEventListener('input', () => {
        validate();
    });

    textField.addEventListener('input', () => {
        validate();
    });



    // add show cart animals o section zoogeography
    let cardImg = document.querySelector('.card_img'),
        titleCard = document.querySelector('.card h3'),
        textCard = document.querySelector('.card p'),
        linkCard = document.querySelector('.card .watch_now'),
        cardCont = document.querySelector('.card '),
        mapItem = this.document.querySelectorAll('.map_item');
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
    const clickZooMap = () => {
        document.querySelector(".zoogeography_wrapper_right_card").addEventListener('click', (e) => {
            let _this = e.target;
            let idZoo = _this.getAttribute("idZoo");
            let arrCard = animalsCard.filter(card => card.id == idZoo);
            cardCont.style.opacity = ".1";
            cardCont.style.display = "none";

            //add atribute to card
            cardImg.setAttribute("src", arrCard[0].src);
            titleCard.innerHTML = arrCard[0].title;
            textCard.innerHTML = arrCard[0].text;
            linkCard.setAttribute("href", arrCard[0].link);

            mapItem.forEach((elem) => {
                elem.getAttribute("idZoo") == idZoo ? elem.classList.add("map_item_active") : elem.classList.remove("map_item_active")
            })
            cardCont.style.display = "block";
            this.setTimeout(() => {
                cardCont.style.opacity = "1";

            }, 400)




        })

    };
    clickZooMap();





})
const gap = 40;

let carousel = document.querySelector('.fameous_wrapper_right_slider'),
  content = document.querySelector('.slider_wrapper'),
  nextFameous = document.querySelector('.fameousNext'),
  prevFameous = document.querySelector('.fameousPrev'),
  sliderItemArr=document.querySelectorAll('.slider_wrapper_item'),
  contentWidth= document.querySelector('.slider_wrapper').offsetWidth,
  carouselWidth=document.querySelector('.fameous_wrapper_right_slider').offsetWidth,
  posRightXcarousel=carousel.offsetLeft+carouselWidth,
  posCarousel=carousel.getBoundingClientRect(),
  posContent=content.getBoundingClientRect(),
  arrItem=[];
  arrItem.push(sliderItemArr);
//   document.addEventListener('mousemove',(e)=>{
//       let x=e.pageX;
//       console.log(x)
//   })

let imgWidth = document.querySelector('.slider_wrapper_item').offsetWidth;
window.addEventListener('resize', (e) => {
    carouselWidth = carousel.offsetWidth;
    imgWidth = document.querySelector('.slider_wrapper_item').offsetWidth;
});

nextFameous.addEventListener('click', e => {
    carousel.scrollTo((imgWidth + gap), 0);
 for(let i=0;i<sliderItemArr.length;i++){
    posItemSlider=sliderItemArr[sliderItemArr.length-1].getBoundingClientRect();

    }
    if (posItemSlider.right<=posCarousel.right){
        console.log("yed")
    };  
});

prevFameous.addEventListener('click', e => {
  carousel.scrollTo(-(imgWidth + gap), 0);
});

let autoSlideTimeout = null;

//Carusel fir section testimonials
function Ant(crslId) {

	let id = document.getElementById(crslId);
	if(id) {
		this.crslRoot = id
	}
	else {
		this.crslRoot = document.querySelector('.testimonials_right')
	};

	// Carousel objects
	this.crslList = this.crslRoot.querySelector('.slider_wripper');
	this.crslElements = this.crslList.querySelectorAll('.slider_wripper_item');
	this.crslElemFirst = this.crslList.querySelector('.slider_wripper_item');
	this.leftArrow = this.crslRoot.querySelector('.left');
	this.rightArrow = this.crslRoot.querySelector('.right');
	this.indicatorDots = this.crslRoot.querySelector('div.ant-carousel-dots');
  console.log(this.leftArrow);

	// Initialization
	this.options = Ant.defaults;
	Ant.initialize(this)
};

Ant.defaults = {

	// Default options for the carousel
	elemVisible: 2, // Кол-во отображаемых элементов в карусели
	loop: true,     // Бесконечное зацикливание карусели 
	auto: true,     // Автоматическая прокрутка
	interval: 5000, // Интервал между прокруткой элементов (мс)
	speed: 750,     // Скорость анимации (мс)
	touch: true,    // Прокрутка  прикосновением
	arrows: true,   // Прокрутка стрелками
	dots: true      // Индикаторные точки
};

Ant.prototype.elemPrev = function(num) {
	num = num || 1;
	if(this.options.dots) this.dotOn(this.currentElement);
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.dotsVisible-1;
	if(this.options.dots) this.dotOff(this.currentElement);

	if(!this.options.loop) {  // сдвиг вправо без цикла
		this.currentOffset += this.elemWidth*num;
		this.crslList.style.marginLeft = this.currentOffset + 'px';
		if(this.currentElement == 0) {
			this.leftArrow.style.display = 'none'; this.touchPrev = false
		}
		this.rightArrow.style.display = 'block'; this.touchNext = true
	}
	else {                    // сдвиг вправо с циклом
		let elm, buf, this$ = this;
		for(let i=0; i<num; i++) {
			elm = this.crslList.lastElementChild;
			buf = elm.cloneNode(true);
			this.crslList.insertBefore(buf, this.crslList.firstElementChild);
			this.crslList.removeChild(elm)
		};
		this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
		let compStyle = window.getComputedStyle(this.crslList).marginLeft;
		this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
		this.crslList.style.marginLeft = '0px';
		setTimeout(function() {
			this$.crslList.style.cssText = 'transition:none;'
		}, this.options.speed)
	}
};

Ant.prototype.elemNext = function(num) {
	num = num || 1;

	if(this.options.dots) this.dotOn(this.currentElement);
	this.currentElement += num;
	if(this.currentElement >= this.dotsVisible) this.currentElement = 0;
	if(this.options.dots) this.dotOff(this.currentElement);

	if(!this.options.loop) {  // сдвиг влево без цикла
		this.currentOffset -= this.elemWidth*num;
		this.crslList.style.marginLeft = this.currentOffset + 'px';
		if(this.currentElement == this.dotsVisible-1) {
			this.rightArrow.style.display = 'none'; this.touchNext = false
		}
		this.leftArrow.style.display = 'block'; this.touchPrev = true
	}
	else {                    // сдвиг влево с циклом
		let elm, buf, this$ = this;
		this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
		this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
		setTimeout(function() {
			this$.crslList.style.cssText = 'transition:none;';
			for(let i=0; i<num; i++) {
				elm = this$.crslList.firstElementChild;
				buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
				this$.crslList.removeChild(elm)
			};
			this$.crslList.style.marginLeft = '0px'
		}, this.options.speed)
	}
};

Ant.prototype.dotOn = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Ant.prototype.dotOff = function(num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Ant.initialize = function(that) {

	// Constants
	that.elemCount = that.crslElements.length; // Количество элементов
	that.dotsVisible = that.elemCount;         // Число видимых точек
	let elemStyle = window.getComputedStyle(that.crslElemFirst);
	that.elemWidth = that.crslElemFirst.offsetWidth +  // Ширина элемента (без margin)
	  parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);

	// Variables
	that.currentElement = 0; that.currentOffset = 0;
	that.touchPrev = true; that.touchNext = true;
	let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemPrev()
			}
		}, that.options.interval)
	};

	// Start initialization
	if(that.elemCount <= that.options.elemVisible) {   // Отключить навигацию
		that.options.auto = false; that.options.touch = false;
		that.options.arrows = false; that.options.dots = false;
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};

	if(!that.options.loop) {       // если нет цикла - уточнить количество точек
		that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
		that.leftArrow.style.display = 'none';  // отключить левую стрелку
		that.touchPrev = false;    // отключить прокрутку прикосновением вправо
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		// Остановка прокрутки при наведении мыши на элемент
		that.crslList.addEventListener('mouseenter', function() {
    	clearInterval(that.autoScroll)
    }, false);
		that.crslList.addEventListener('mouseleave', setAutoScroll, false)
	};

	if(that.options.touch) {   // инициализация прокрутки прикосновением
		that.crslList.addEventListener('touchstart', function(e) {
			xTouch = parseInt(e.touches[0].clientX);
			yTouch = parseInt(e.touches[0].clientY);
			stTime = getTime()
		}, false);
		that.crslList.addEventListener('touchmove', function(e) {
			if(!xTouch || !yTouch) return;
			xDiff = xTouch - parseInt(e.touches[0].clientX);
			yDiff = yTouch - parseInt(e.touches[0].clientY);
			mvTime = getTime();
			if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
				stTime = 0;
				if(that.touchNext && xDiff > 0) {
					bgTime = mvTime; that.elemNext()
				}
				else if(that.touchPrev && xDiff < 0) {
					bgTime = mvTime; that.elemPrev()
				}
			}
		}, false)
	};

	if(that.options.arrows) {  // инициализация стрелок
		if(!that.options.loop) that.crslList.style.cssText =
      'transition:margin '+that.options.speed+'ms ease;';
		that.leftArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > that.options.speed) {
				bgTime = fnTime; that.elemPrev()
			}
		}, false);
		that.rightArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > that.options.speed) {
				bgTime = fnTime; that.elemNext()
			}
		}, false)
	}
	else {
		that.leftArrow.style.display = 'none';
    that.rightArrow.style.display = 'none'
	};

	if(that.options.dots) {  // инициализация индикаторных точек
		let sum = '', diffNum;
		for(let i=0; i<that.dotsVisible; i++) {
			sum += '<span class="ant-dot"></span>'
		};
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll = that.crslRoot.querySelectorAll('span.ant-dot');
		// Назначаем точкам обработчик события 'click'
		for(let n=0; n<that.dotsVisible; n++) {
			that.indicatorDotsAll[n].addEventListener('click', function() {
				diffNum = Math.abs(n - that.currentElement);
				if(n < that.currentElement) {
					bgTime = getTime(); that.elemPrev(diffNum)
				}
				else if(n > that.currentElement) {
					bgTime = getTime(); that.elemNext(diffNum)
				}
				// Если n == that.currentElement ничего не делаем
			}, false)
		};
		that.dotOff(0);  // точка[0] выключена, остальные включены
		for(let i=1; i<that.dotsVisible; i++) {
			that.dotOn(i)
		}
	}
};

new Ant();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBmdW5jdGlvbiBzaG93IG1vZGFsIHdpbmRvd1xyXG4gICAgY29uc3QgY292ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XHJcbiAgICBjb25zdCBmb3JtRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWZlZWRiYWNrJyk7XHJcbiAgICBsZXQgZmVlZGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhdmVfZmVlZGJhY2snKTtcclxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWZlZWRiYWNrX19mb3JtX25hbWUnKTtcclxuICAgIGNvbnN0IGVtYWlsRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1mZWVkYmFja19fZm9ybV9lbWFpbCcpO1xyXG4gICAgY29uc3QgdGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtZmVlZGJhY2snKTtcclxuICAgIGNvbnN0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VuZF9idG4nKTtcclxuICAgIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnZhbGlkaXR5LnZhbGlkICYmIGVtYWlsRmllbGQudmFsaWRpdHkudmFsaWQgJiYgdGV4dEZpZWxkLnZhbGlkaXR5LnZhbGlkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZlZWRiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWVGaWVsZClcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vdFNjcm9sbGFibGUnKTtcclxuICAgICAgICBjb3ZlckVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgZm9ybUVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb3ZlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3RTY3JvbGxhYmxlJyk7XHJcbiAgICAgICAgY292ZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIGZvcm1FbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoc2VuZEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSkgcmV0dXJuO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm90U2Nyb2xsYWJsZScpO1xyXG4gICAgICAgIGNvdmVyRWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBmb3JtRWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWVGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB2YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZW1haWxGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB2YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGV4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHZhbGlkYXRlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIGFkZCBzaG93IGNhcnQgYW5pbWFscyBvIHNlY3Rpb24gem9vZ2VvZ3JhcGh5XHJcbiAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2ltZycpLFxyXG4gICAgICAgIHRpdGxlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkIGgzJyksXHJcbiAgICAgICAgdGV4dENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCBwJyksXHJcbiAgICAgICAgbGlua0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCAud2F0Y2hfbm93JyksXHJcbiAgICAgICAgY2FyZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCAnKSxcclxuICAgICAgICBtYXBJdGVtID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX2l0ZW0nKTtcclxuICAgIGxldCBhbmltYWxzQ2FyZCA9IFt7XHJcbiAgICAgICAgICAgIGlkOiBcIiNlYWdsZVwiLFxyXG4gICAgICAgICAgICBzcmM6IFwiLi9hc3NldHMvaW1hZ2VzL2VhZ2xlLnBuZ1wiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi96b29zL2VhZ2xlLmh0bWxcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWFnbGVcIixcclxuICAgICAgICAgICAgdGV4dDogXCJUaGUgYnJvYWRjYXN0IGlzIGZyb20gYW4gaXNsYW5kIG5lYXIgTG9zIEFuZ2VsZXMuIFdhdGNoIHRoZWlyIHJlYWwgbGlmZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIjY3JvY29kaWxlXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNyb2NvZGlsZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi96b29zL2FsaWdhdG9yLmh0bWxcIixcclxuICAgICAgICAgICAgc3JjOiBcIi4vYXNzZXRzL2ltYWdlcy9jYXJvdXNlbF9pdGVtXzgucG5nXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVGhlIGJyb2FkY2FzdCBpcyBmcm9tIGFuIGlzbGFuZCBuZWFyIExvcyBBbmdlbGVzLiBXYXRjaCB0aGVpciByZWFsIGxpZmUuXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIiNtdW5ja3lcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiR29yaWxsYVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi96b29zL2dvcmlsYS5odG1sXCIsXHJcbiAgICAgICAgICAgIHNyYzogXCIuL2Fzc2V0cy9pbWFnZXMvY2Fyb3VzZWxfaXRlbV82LnBuZ1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRoZSBicm9hZGNhc3QgaXMgZnJvbSBhbiBpc2xhbmQgbmVhciBMb3MgQW5nZWxlcy4gV2F0Y2ggdGhlaXIgcmVhbCBsaWZlLlwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIjcGFuZGFcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiUGFuZGFcIixcclxuICAgICAgICAgICAgbGluazogXCIvem9vcy9wYW5kYS5odG1sXCIsXHJcbiAgICAgICAgICAgIHNyYzogXCIuL2Fzc2V0cy9pbWFnZXMvY2Fyb3VzZWxfaXRlbV80LnBuZ1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRoZSBicm9hZGNhc3QgaXMgZnJvbSBhbiBpc2xhbmQgbmVhciBMb3MgQW5nZWxlcy4gV2F0Y2ggdGhlaXIgcmVhbCBsaWZlLlwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY2xpY2tab29NYXAgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi56b29nZW9ncmFwaHlfd3JhcHBlcl9yaWdodF9jYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBpZFpvbyA9IF90aGlzLmdldEF0dHJpYnV0ZShcImlkWm9vXCIpO1xyXG4gICAgICAgICAgICBsZXQgYXJyQ2FyZCA9IGFuaW1hbHNDYXJkLmZpbHRlcihjYXJkID0+IGNhcmQuaWQgPT0gaWRab28pO1xyXG4gICAgICAgICAgICBjYXJkQ29udC5zdHlsZS5vcGFjaXR5ID0gXCIuMVwiO1xyXG4gICAgICAgICAgICBjYXJkQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAvL2FkZCBhdHJpYnV0ZSB0byBjYXJkXHJcbiAgICAgICAgICAgIGNhcmRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFyckNhcmRbMF0uc3JjKTtcclxuICAgICAgICAgICAgdGl0bGVDYXJkLmlubmVySFRNTCA9IGFyckNhcmRbMF0udGl0bGU7XHJcbiAgICAgICAgICAgIHRleHRDYXJkLmlubmVySFRNTCA9IGFyckNhcmRbMF0udGV4dDtcclxuICAgICAgICAgICAgbGlua0NhcmQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBhcnJDYXJkWzBdLmxpbmspO1xyXG5cclxuICAgICAgICAgICAgbWFwSXRlbS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZShcImlkWm9vXCIpID09IGlkWm9vID8gZWxlbS5jbGFzc0xpc3QuYWRkKFwibWFwX2l0ZW1fYWN0aXZlXCIpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwibWFwX2l0ZW1fYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNhcmRDb250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQ29udC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcblxyXG4gICAgICAgICAgICB9LCA0MDApXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfTtcclxuICAgIGNsaWNrWm9vTWFwKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSkiLCJjb25zdCBnYXAgPSA0MDtcclxuXHJcbmxldCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYW1lb3VzX3dyYXBwZXJfcmlnaHRfc2xpZGVyJyksXHJcbiAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfd3JhcHBlcicpLFxyXG4gIG5leHRGYW1lb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhbWVvdXNOZXh0JyksXHJcbiAgcHJldkZhbWVvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFtZW91c1ByZXYnKSxcclxuICBzbGlkZXJJdGVtQXJyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfd3JhcHBlcl9pdGVtJyksXHJcbiAgY29udGVudFdpZHRoPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX3dyYXBwZXInKS5vZmZzZXRXaWR0aCxcclxuICBjYXJvdXNlbFdpZHRoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYW1lb3VzX3dyYXBwZXJfcmlnaHRfc2xpZGVyJykub2Zmc2V0V2lkdGgsXHJcbiAgcG9zUmlnaHRYY2Fyb3VzZWw9Y2Fyb3VzZWwub2Zmc2V0TGVmdCtjYXJvdXNlbFdpZHRoLFxyXG4gIHBvc0Nhcm91c2VsPWNhcm91c2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gIHBvc0NvbnRlbnQ9Y29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICBhcnJJdGVtPVtdO1xyXG4gIGFyckl0ZW0ucHVzaChzbGlkZXJJdGVtQXJyKTtcclxuLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKT0+e1xyXG4vLyAgICAgICBsZXQgeD1lLnBhZ2VYO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyh4KVxyXG4vLyAgIH0pXHJcblxyXG5sZXQgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX3dyYXBwZXJfaXRlbScpLm9mZnNldFdpZHRoO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgIGNhcm91c2VsV2lkdGggPSBjYXJvdXNlbC5vZmZzZXRXaWR0aDtcclxuICAgIGltZ1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl93cmFwcGVyX2l0ZW0nKS5vZmZzZXRXaWR0aDtcclxufSk7XHJcblxyXG5uZXh0RmFtZW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgY2Fyb3VzZWwuc2Nyb2xsVG8oKGltZ1dpZHRoICsgZ2FwKSwgMCk7XHJcbiBmb3IobGV0IGk9MDtpPHNsaWRlckl0ZW1BcnIubGVuZ3RoO2krKyl7XHJcbiAgICBwb3NJdGVtU2xpZGVyPXNsaWRlckl0ZW1BcnJbc2xpZGVySXRlbUFyci5sZW5ndGgtMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHBvc0l0ZW1TbGlkZXIucmlnaHQ8PXBvc0Nhcm91c2VsLnJpZ2h0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInllZFwiKVxyXG4gICAgfTsgIFxyXG59KTtcclxuXHJcbnByZXZGYW1lb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgY2Fyb3VzZWwuc2Nyb2xsVG8oLShpbWdXaWR0aCArIGdhcCksIDApO1xyXG59KTtcclxuXHJcbmxldCBhdXRvU2xpZGVUaW1lb3V0ID0gbnVsbDtcclxuXHJcbi8vQ2FydXNlbCBmaXIgc2VjdGlvbiB0ZXN0aW1vbmlhbHNcclxuZnVuY3Rpb24gQW50KGNyc2xJZCkge1xyXG5cclxuXHRsZXQgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjcnNsSWQpO1xyXG5cdGlmKGlkKSB7XHJcblx0XHR0aGlzLmNyc2xSb290ID0gaWRcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmNyc2xSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsc19yaWdodCcpXHJcblx0fTtcclxuXHJcblx0Ly8gQ2Fyb3VzZWwgb2JqZWN0c1xyXG5cdHRoaXMuY3JzbExpc3QgPSB0aGlzLmNyc2xSb290LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfd3JpcHBlcicpO1xyXG5cdHRoaXMuY3JzbEVsZW1lbnRzID0gdGhpcy5jcnNsTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX3dyaXBwZXJfaXRlbScpO1xyXG5cdHRoaXMuY3JzbEVsZW1GaXJzdCA9IHRoaXMuY3JzbExpc3QucXVlcnlTZWxlY3RvcignLnNsaWRlcl93cmlwcGVyX2l0ZW0nKTtcclxuXHR0aGlzLmxlZnRBcnJvdyA9IHRoaXMuY3JzbFJvb3QucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcclxuXHR0aGlzLnJpZ2h0QXJyb3cgPSB0aGlzLmNyc2xSb290LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xyXG5cdHRoaXMuaW5kaWNhdG9yRG90cyA9IHRoaXMuY3JzbFJvb3QucXVlcnlTZWxlY3RvcignZGl2LmFudC1jYXJvdXNlbC1kb3RzJyk7XHJcbiAgY29uc29sZS5sb2codGhpcy5sZWZ0QXJyb3cpO1xyXG5cclxuXHQvLyBJbml0aWFsaXphdGlvblxyXG5cdHRoaXMub3B0aW9ucyA9IEFudC5kZWZhdWx0cztcclxuXHRBbnQuaW5pdGlhbGl6ZSh0aGlzKVxyXG59O1xyXG5cclxuQW50LmRlZmF1bHRzID0ge1xyXG5cclxuXHQvLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbFxyXG5cdGVsZW1WaXNpYmxlOiAyLCAvLyDQmtC+0Lst0LLQviDQvtGC0L7QsdGA0LDQttCw0LXQvNGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyINCyINC60LDRgNGD0YHQtdC70LhcclxuXHRsb29wOiB0cnVlLCAgICAgLy8g0JHQtdGB0LrQvtC90LXRh9C90L7QtSDQt9Cw0YbQuNC60LvQuNCy0LDQvdC40LUg0LrQsNGA0YPRgdC10LvQuCBcclxuXHRhdXRvOiB0cnVlLCAgICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQv9GA0L7QutGA0YPRgtC60LBcclxuXHRpbnRlcnZhbDogNTAwMCwgLy8g0JjQvdGC0LXRgNCy0LDQuyDQvNC10LbQtNGDINC/0YDQvtC60YDRg9GC0LrQvtC5INGN0LvQtdC80LXQvdGC0L7QsiAo0LzRgSlcclxuXHRzcGVlZDogNzUwLCAgICAgLy8g0KHQutC+0YDQvtGB0YLRjCDQsNC90LjQvNCw0YbQuNC4ICjQvNGBKVxyXG5cdHRvdWNoOiB0cnVlLCAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAgINC/0YDQuNC60L7RgdC90L7QstC10L3QuNC10LxcclxuXHRhcnJvd3M6IHRydWUsICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINGB0YLRgNC10LvQutCw0LzQuFxyXG5cdGRvdHM6IHRydWUgICAgICAvLyDQmNC90LTQuNC60LDRgtC+0YDQvdGL0LUg0YLQvtGH0LrQuFxyXG59O1xyXG5cclxuQW50LnByb3RvdHlwZS5lbGVtUHJldiA9IGZ1bmN0aW9uKG51bSkge1xyXG5cdG51bSA9IG51bSB8fCAxO1xyXG5cdGlmKHRoaXMub3B0aW9ucy5kb3RzKSB0aGlzLmRvdE9uKHRoaXMuY3VycmVudEVsZW1lbnQpO1xyXG5cdHRoaXMuY3VycmVudEVsZW1lbnQgLT0gbnVtO1xyXG5cdGlmKHRoaXMuY3VycmVudEVsZW1lbnQgPCAwKSB0aGlzLmN1cnJlbnRFbGVtZW50ID0gdGhpcy5kb3RzVmlzaWJsZS0xO1xyXG5cdGlmKHRoaXMub3B0aW9ucy5kb3RzKSB0aGlzLmRvdE9mZih0aGlzLmN1cnJlbnRFbGVtZW50KTtcclxuXHJcblx0aWYoIXRoaXMub3B0aW9ucy5sb29wKSB7ICAvLyDRgdC00LLQuNCzINCy0L/RgNCw0LLQviDQsdC10Lcg0YbQuNC60LvQsFxyXG5cdFx0dGhpcy5jdXJyZW50T2Zmc2V0ICs9IHRoaXMuZWxlbVdpZHRoKm51bTtcclxuXHRcdHRoaXMuY3JzbExpc3Quc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuY3VycmVudE9mZnNldCArICdweCc7XHJcblx0XHRpZih0aGlzLmN1cnJlbnRFbGVtZW50ID09IDApIHtcclxuXHRcdFx0dGhpcy5sZWZ0QXJyb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgdGhpcy50b3VjaFByZXYgPSBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5yaWdodEFycm93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyB0aGlzLnRvdWNoTmV4dCA9IHRydWVcclxuXHR9XHJcblx0ZWxzZSB7ICAgICAgICAgICAgICAgICAgICAvLyDRgdC00LLQuNCzINCy0L/RgNCw0LLQviDRgSDRhtC40LrQu9C+0LxcclxuXHRcdGxldCBlbG0sIGJ1ZiwgdGhpcyQgPSB0aGlzO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8bnVtOyBpKyspIHtcclxuXHRcdFx0ZWxtID0gdGhpcy5jcnNsTGlzdC5sYXN0RWxlbWVudENoaWxkO1xyXG5cdFx0XHRidWYgPSBlbG0uY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHR0aGlzLmNyc2xMaXN0Lmluc2VydEJlZm9yZShidWYsIHRoaXMuY3JzbExpc3QuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG5cdFx0XHR0aGlzLmNyc2xMaXN0LnJlbW92ZUNoaWxkKGVsbSlcclxuXHRcdH07XHJcblx0XHR0aGlzLmNyc2xMaXN0LnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLmVsZW1XaWR0aCpudW0gKyAncHgnO1xyXG5cdFx0bGV0IGNvbXBTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY3JzbExpc3QpLm1hcmdpbkxlZnQ7XHJcblx0XHR0aGlzLmNyc2xMaXN0LnN0eWxlLmNzc1RleHQgPSAndHJhbnNpdGlvbjptYXJnaW4gJyt0aGlzLm9wdGlvbnMuc3BlZWQrJ21zIGVhc2U7JztcclxuXHRcdHRoaXMuY3JzbExpc3Quc3R5bGUubWFyZ2luTGVmdCA9ICcwcHgnO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcyQuY3JzbExpc3Quc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2l0aW9uOm5vbmU7J1xyXG5cdFx0fSwgdGhpcy5vcHRpb25zLnNwZWVkKVxyXG5cdH1cclxufTtcclxuXHJcbkFudC5wcm90b3R5cGUuZWxlbU5leHQgPSBmdW5jdGlvbihudW0pIHtcclxuXHRudW0gPSBudW0gfHwgMTtcclxuXHJcblx0aWYodGhpcy5vcHRpb25zLmRvdHMpIHRoaXMuZG90T24odGhpcy5jdXJyZW50RWxlbWVudCk7XHJcblx0dGhpcy5jdXJyZW50RWxlbWVudCArPSBudW07XHJcblx0aWYodGhpcy5jdXJyZW50RWxlbWVudCA+PSB0aGlzLmRvdHNWaXNpYmxlKSB0aGlzLmN1cnJlbnRFbGVtZW50ID0gMDtcclxuXHRpZih0aGlzLm9wdGlvbnMuZG90cykgdGhpcy5kb3RPZmYodGhpcy5jdXJyZW50RWxlbWVudCk7XHJcblxyXG5cdGlmKCF0aGlzLm9wdGlvbnMubG9vcCkgeyAgLy8g0YHQtNCy0LjQsyDQstC70LXQstC+INCx0LXQtyDRhtC40LrQu9CwXHJcblx0XHR0aGlzLmN1cnJlbnRPZmZzZXQgLT0gdGhpcy5lbGVtV2lkdGgqbnVtO1xyXG5cdFx0dGhpcy5jcnNsTGlzdC5zdHlsZS5tYXJnaW5MZWZ0ID0gdGhpcy5jdXJyZW50T2Zmc2V0ICsgJ3B4JztcclxuXHRcdGlmKHRoaXMuY3VycmVudEVsZW1lbnQgPT0gdGhpcy5kb3RzVmlzaWJsZS0xKSB7XHJcblx0XHRcdHRoaXMucmlnaHRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB0aGlzLnRvdWNoTmV4dCA9IGZhbHNlXHJcblx0XHR9XHJcblx0XHR0aGlzLmxlZnRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgdGhpcy50b3VjaFByZXYgPSB0cnVlXHJcblx0fVxyXG5cdGVsc2UgeyAgICAgICAgICAgICAgICAgICAgLy8g0YHQtNCy0LjQsyDQstC70LXQstC+INGBINGG0LjQutC70L7QvFxyXG5cdFx0bGV0IGVsbSwgYnVmLCB0aGlzJCA9IHRoaXM7XHJcblx0XHR0aGlzLmNyc2xMaXN0LnN0eWxlLmNzc1RleHQgPSAndHJhbnNpdGlvbjptYXJnaW4gJyt0aGlzLm9wdGlvbnMuc3BlZWQrJ21zIGVhc2U7JztcclxuXHRcdHRoaXMuY3JzbExpc3Quc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHRoaXMuZWxlbVdpZHRoKm51bSArICdweCc7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzJC5jcnNsTGlzdC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zaXRpb246bm9uZTsnO1xyXG5cdFx0XHRmb3IobGV0IGk9MDsgaTxudW07IGkrKykge1xyXG5cdFx0XHRcdGVsbSA9IHRoaXMkLmNyc2xMaXN0LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0XHRcdGJ1ZiA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7IHRoaXMkLmNyc2xMaXN0LmFwcGVuZENoaWxkKGJ1Zik7XHJcblx0XHRcdFx0dGhpcyQuY3JzbExpc3QucmVtb3ZlQ2hpbGQoZWxtKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzJC5jcnNsTGlzdC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCdcclxuXHRcdH0sIHRoaXMub3B0aW9ucy5zcGVlZClcclxuXHR9XHJcbn07XHJcblxyXG5BbnQucHJvdG90eXBlLmRvdE9uID0gZnVuY3Rpb24obnVtKSB7XHJcblx0dGhpcy5pbmRpY2F0b3JEb3RzQWxsW251bV0uc3R5bGUuY3NzVGV4dCA9ICdiYWNrZ3JvdW5kLWNvbG9yOiNCQkI7IGN1cnNvcjpwb2ludGVyOydcclxufTtcclxuXHJcbkFudC5wcm90b3R5cGUuZG90T2ZmID0gZnVuY3Rpb24obnVtKSB7XHJcblx0dGhpcy5pbmRpY2F0b3JEb3RzQWxsW251bV0uc3R5bGUuY3NzVGV4dCA9ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NTY7IGN1cnNvcjpkZWZhdWx0OydcclxufTtcclxuXHJcbkFudC5pbml0aWFsaXplID0gZnVuY3Rpb24odGhhdCkge1xyXG5cclxuXHQvLyBDb25zdGFudHNcclxuXHR0aGF0LmVsZW1Db3VudCA9IHRoYXQuY3JzbEVsZW1lbnRzLmxlbmd0aDsgLy8g0JrQvtC70LjRh9C10YHRgtCy0L4g0Y3Qu9C10LzQtdC90YLQvtCyXHJcblx0dGhhdC5kb3RzVmlzaWJsZSA9IHRoYXQuZWxlbUNvdW50OyAgICAgICAgIC8vINCn0LjRgdC70L4g0LLQuNC00LjQvNGL0YUg0YLQvtGH0LXQulxyXG5cdGxldCBlbGVtU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGF0LmNyc2xFbGVtRmlyc3QpO1xyXG5cdHRoYXQuZWxlbVdpZHRoID0gdGhhdC5jcnNsRWxlbUZpcnN0Lm9mZnNldFdpZHRoICsgIC8vINCo0LjRgNC40L3QsCDRjdC70LXQvNC10L3RgtCwICjQsdC10LcgbWFyZ2luKVxyXG5cdCAgcGFyc2VJbnQoZWxlbVN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoZWxlbVN0eWxlLm1hcmdpblJpZ2h0KTtcclxuXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0dGhhdC5jdXJyZW50RWxlbWVudCA9IDA7IHRoYXQuY3VycmVudE9mZnNldCA9IDA7XHJcblx0dGhhdC50b3VjaFByZXYgPSB0cnVlOyB0aGF0LnRvdWNoTmV4dCA9IHRydWU7XHJcblx0bGV0IHhUb3VjaCwgeVRvdWNoLCB4RGlmZiwgeURpZmYsIHN0VGltZSwgbXZUaW1lO1xyXG5cdGxldCBiZ1RpbWUgPSBnZXRUaW1lKCk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uc1xyXG5cdGZ1bmN0aW9uIGdldFRpbWUoKSB7XHJcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0fTtcclxuXHRmdW5jdGlvbiBzZXRBdXRvU2Nyb2xsKCkge1xyXG5cdFx0dGhhdC5hdXRvU2Nyb2xsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBmblRpbWUgPSBnZXRUaW1lKCk7XHJcblx0XHRcdGlmKGZuVGltZSAtIGJnVGltZSArIDEwID4gdGhhdC5vcHRpb25zLmludGVydmFsKSB7XHJcblx0XHRcdFx0YmdUaW1lID0gZm5UaW1lOyB0aGF0LmVsZW1QcmV2KClcclxuXHRcdFx0fVxyXG5cdFx0fSwgdGhhdC5vcHRpb25zLmludGVydmFsKVxyXG5cdH07XHJcblxyXG5cdC8vIFN0YXJ0IGluaXRpYWxpemF0aW9uXHJcblx0aWYodGhhdC5lbGVtQ291bnQgPD0gdGhhdC5vcHRpb25zLmVsZW1WaXNpYmxlKSB7ICAgLy8g0J7RgtC60LvRjtGH0LjRgtGMINC90LDQstC40LPQsNGG0LjRjlxyXG5cdFx0dGhhdC5vcHRpb25zLmF1dG8gPSBmYWxzZTsgdGhhdC5vcHRpb25zLnRvdWNoID0gZmFsc2U7XHJcblx0XHR0aGF0Lm9wdGlvbnMuYXJyb3dzID0gZmFsc2U7IHRoYXQub3B0aW9ucy5kb3RzID0gZmFsc2U7XHJcblx0XHR0aGF0LmxlZnRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB0aGF0LnJpZ2h0QXJyb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdH07XHJcblxyXG5cdGlmKCF0aGF0Lm9wdGlvbnMubG9vcCkgeyAgICAgICAvLyDQtdGB0LvQuCDQvdC10YIg0YbQuNC60LvQsCAtINGD0YLQvtGH0L3QuNGC0Ywg0LrQvtC70LjRh9C10YHRgtCy0L4g0YLQvtGH0LXQulxyXG5cdFx0dGhhdC5kb3RzVmlzaWJsZSA9IHRoYXQuZWxlbUNvdW50IC0gdGhhdC5vcHRpb25zLmVsZW1WaXNpYmxlICsgMTtcclxuXHRcdHRoYXQubGVmdEFycm93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAvLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0LvQtdCy0YPRjiDRgdGC0YDQtdC70LrRg1xyXG5cdFx0dGhhdC50b3VjaFByZXYgPSBmYWxzZTsgICAgLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRgyDQv9GA0LjQutC+0YHQvdC+0LLQtdC90LjQtdC8INCy0L/RgNCw0LLQvlxyXG5cdFx0dGhhdC5vcHRpb25zLmF1dG8gPSBmYWxzZTsgLy8g0L7RgtC60LvRjtGH0LjRgtGMINCw0LLRgtC+0L/RgNC60YDRg9GC0LrRg1xyXG5cdH1cclxuXHRlbHNlIGlmKHRoYXQub3B0aW9ucy5hdXRvKSB7ICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LDQstGC0L7Qv9GA0L7QutGA0YPQutC4XHJcblx0XHRzZXRBdXRvU2Nyb2xsKCk7XHJcblx0XHQvLyDQntGB0YLQsNC90L7QstC60LAg0L/RgNC+0LrRgNGD0YLQutC4INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0LzRi9GI0Lgg0L3QsCDRjdC70LXQvNC10L3RglxyXG5cdFx0dGhhdC5jcnNsTGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBcdGNsZWFySW50ZXJ2YWwodGhhdC5hdXRvU2Nyb2xsKVxyXG4gICAgfSwgZmFsc2UpO1xyXG5cdFx0dGhhdC5jcnNsTGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc2V0QXV0b1Njcm9sbCwgZmFsc2UpXHJcblx0fTtcclxuXHJcblx0aWYodGhhdC5vcHRpb25zLnRvdWNoKSB7ICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC+0LrRgNGD0YLQutC4INC/0YDQuNC60L7RgdC90L7QstC10L3QuNC10LxcclxuXHRcdHRoYXQuY3JzbExpc3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0eFRvdWNoID0gcGFyc2VJbnQoZS50b3VjaGVzWzBdLmNsaWVudFgpO1xyXG5cdFx0XHR5VG91Y2ggPSBwYXJzZUludChlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcblx0XHRcdHN0VGltZSA9IGdldFRpbWUoKVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdFx0dGhhdC5jcnNsTGlzdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmKCF4VG91Y2ggfHwgIXlUb3VjaCkgcmV0dXJuO1xyXG5cdFx0XHR4RGlmZiA9IHhUb3VjaCAtIHBhcnNlSW50KGUudG91Y2hlc1swXS5jbGllbnRYKTtcclxuXHRcdFx0eURpZmYgPSB5VG91Y2ggLSBwYXJzZUludChlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcblx0XHRcdG12VGltZSA9IGdldFRpbWUoKTtcclxuXHRcdFx0aWYoTWF0aC5hYnMoeERpZmYpID4gMTUgJiYgTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpICYmIG12VGltZSAtIHN0VGltZSA8IDc1KSB7XHJcblx0XHRcdFx0c3RUaW1lID0gMDtcclxuXHRcdFx0XHRpZih0aGF0LnRvdWNoTmV4dCAmJiB4RGlmZiA+IDApIHtcclxuXHRcdFx0XHRcdGJnVGltZSA9IG12VGltZTsgdGhhdC5lbGVtTmV4dCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYodGhhdC50b3VjaFByZXYgJiYgeERpZmYgPCAwKSB7XHJcblx0XHRcdFx0XHRiZ1RpbWUgPSBtdlRpbWU7IHRoYXQuZWxlbVByZXYoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpXHJcblx0fTtcclxuXHJcblx0aWYodGhhdC5vcHRpb25zLmFycm93cykgeyAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHRgtGA0LXQu9C+0LpcclxuXHRcdGlmKCF0aGF0Lm9wdGlvbnMubG9vcCkgdGhhdC5jcnNsTGlzdC5zdHlsZS5jc3NUZXh0ID1cclxuICAgICAgJ3RyYW5zaXRpb246bWFyZ2luICcrdGhhdC5vcHRpb25zLnNwZWVkKydtcyBlYXNlOyc7XHJcblx0XHR0aGF0LmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgZm5UaW1lID0gZ2V0VGltZSgpO1xyXG5cdFx0XHRpZihmblRpbWUgLSBiZ1RpbWUgPiB0aGF0Lm9wdGlvbnMuc3BlZWQpIHtcclxuXHRcdFx0XHRiZ1RpbWUgPSBmblRpbWU7IHRoYXQuZWxlbVByZXYoKVxyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0XHR0aGF0LnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IGZuVGltZSA9IGdldFRpbWUoKTtcclxuXHRcdFx0aWYoZm5UaW1lIC0gYmdUaW1lID4gdGhhdC5vcHRpb25zLnNwZWVkKSB7XHJcblx0XHRcdFx0YmdUaW1lID0gZm5UaW1lOyB0aGF0LmVsZW1OZXh0KClcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpXHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhhdC5sZWZ0QXJyb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoYXQucmlnaHRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0fTtcclxuXHJcblx0aWYodGhhdC5vcHRpb25zLmRvdHMpIHsgIC8vINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3QtNC40LrQsNGC0L7RgNC90YvRhSDRgtC+0YfQtdC6XHJcblx0XHRsZXQgc3VtID0gJycsIGRpZmZOdW07XHJcblx0XHRmb3IobGV0IGk9MDsgaTx0aGF0LmRvdHNWaXNpYmxlOyBpKyspIHtcclxuXHRcdFx0c3VtICs9ICc8c3BhbiBjbGFzcz1cImFudC1kb3RcIj48L3NwYW4+J1xyXG5cdFx0fTtcclxuXHRcdHRoYXQuaW5kaWNhdG9yRG90cy5pbm5lckhUTUwgPSBzdW07XHJcblx0XHR0aGF0LmluZGljYXRvckRvdHNBbGwgPSB0aGF0LmNyc2xSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uYW50LWRvdCcpO1xyXG5cdFx0Ly8g0J3QsNC30L3QsNGH0LDQtdC8INGC0L7Rh9C60LDQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyAnY2xpY2snXHJcblx0XHRmb3IobGV0IG49MDsgbjx0aGF0LmRvdHNWaXNpYmxlOyBuKyspIHtcclxuXHRcdFx0dGhhdC5pbmRpY2F0b3JEb3RzQWxsW25dLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZGlmZk51bSA9IE1hdGguYWJzKG4gLSB0aGF0LmN1cnJlbnRFbGVtZW50KTtcclxuXHRcdFx0XHRpZihuIDwgdGhhdC5jdXJyZW50RWxlbWVudCkge1xyXG5cdFx0XHRcdFx0YmdUaW1lID0gZ2V0VGltZSgpOyB0aGF0LmVsZW1QcmV2KGRpZmZOdW0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYobiA+IHRoYXQuY3VycmVudEVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdGJnVGltZSA9IGdldFRpbWUoKTsgdGhhdC5lbGVtTmV4dChkaWZmTnVtKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDQldGB0LvQuCBuID09IHRoYXQuY3VycmVudEVsZW1lbnQg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8XHJcblx0XHRcdH0sIGZhbHNlKVxyXG5cdFx0fTtcclxuXHRcdHRoYXQuZG90T2ZmKDApOyAgLy8g0YLQvtGH0LrQsFswXSDQstGL0LrQu9GO0YfQtdC90LAsINC+0YHRgtCw0LvRjNC90YvQtSDQstC60LvRjtGH0LXQvdGLXHJcblx0XHRmb3IobGV0IGk9MTsgaTx0aGF0LmRvdHNWaXNpYmxlOyBpKyspIHtcclxuXHRcdFx0dGhhdC5kb3RPbihpKVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbm5ldyBBbnQoKTtcclxuIl19
