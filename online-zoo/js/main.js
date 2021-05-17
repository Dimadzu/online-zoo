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