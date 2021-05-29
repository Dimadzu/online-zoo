window.addEventListener("load", function() {
let vidFrame=document.querySelector(".video"),
    otherCamsVideo=document.querySelector(".grid_cams_video"),
    watchNowButton=document.querySelectorAll(".watch_now_btn");

    choiseVideo=()=>{
    watchNowButton.forEach((elem) =>{
        elem.addEventListener('click',(e)=>{
    _this=e.target;
    let videoSrcCont=_this.closest(".item"),
        videoOtherCamsFrame=videoSrcCont.childNodes[5],
        videoSrcChoise=videoOtherCamsFrame.getAttribute("src"),
        vidFrameSrc=vidFrame.getAttribute("src");
    if(videoSrcChoise !== vidFrameSrc){vidFrame.setAttribute("src", videoSrcChoise);
    videoOtherCamsFrame.setAttribute("src", vidFrameSrc)
 }

})
    })
}
choiseVideo();
const gap = 40;

let carousel = document.querySelector('.hidden_cont_othercams'),
  content = document.querySelector('.grid_cams'),
  nextCams = document.querySelector('.btn_right_cams '),
  prevCams = document.querySelector('.btn_left_cams'),
  sliderItemArr=document.querySelectorAll('.grid_cams .item'),
  contentWidth= content.offsetWidth,
  carouselWidth=carousel.offsetWidth,
  posRightXcarousel=carousel.offsetLeft+carouselWidth,
  posCarousel=carousel.getBoundingClientRect(),
  posContent=content.getBoundingClientRect(),
  arrItem=[];
  arrItem.push(sliderItemArr);
//   document.addEventListener('mousemove',(e)=>{
//       let x=e.pageX;
//       console.log(x)
//   })

let imgWidth = document.querySelector('.grid_cams .item').offsetWidth;
window.addEventListener('resize', (e) => {
    carouselWidth = carousel.offsetWidth;
    imgWidth = imgWidth.offsetWidth;
});

nextCams.addEventListener('click', e => {
    console.log(imgWidth)
    carousel.scrollTo((imgWidth + gap), 0);
 for(let i=0;i<sliderItemArr.length;i++){
    posItemSlider=sliderItemArr[sliderItemArr.length-1].getBoundingClientRect();

    }
    if (posItemSlider.right<=posCarousel.right){
        console.log("yed")
    };  
});

prevCams.addEventListener('click', e => {
  carousel.scrollTo(-(imgWidth + gap), 0);
});


});

