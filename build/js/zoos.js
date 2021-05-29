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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Inpvb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbmxldCB2aWRGcmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvXCIpLFxyXG4gICAgb3RoZXJDYW1zVmlkZW89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX2NhbXNfdmlkZW9cIiksXHJcbiAgICB3YXRjaE5vd0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndhdGNoX25vd19idG5cIik7XHJcblxyXG4gICAgY2hvaXNlVmlkZW89KCk9PntcclxuICAgIHdhdGNoTm93QnV0dG9uLmZvckVhY2goKGVsZW0pID0+e1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgX3RoaXM9ZS50YXJnZXQ7XHJcbiAgICBsZXQgdmlkZW9TcmNDb250PV90aGlzLmNsb3Nlc3QoXCIuaXRlbVwiKSxcclxuICAgICAgICB2aWRlb090aGVyQ2Ftc0ZyYW1lPXZpZGVvU3JjQ29udC5jaGlsZE5vZGVzWzVdLFxyXG4gICAgICAgIHZpZGVvU3JjQ2hvaXNlPXZpZGVvT3RoZXJDYW1zRnJhbWUuZ2V0QXR0cmlidXRlKFwic3JjXCIpLFxyXG4gICAgICAgIHZpZEZyYW1lU3JjPXZpZEZyYW1lLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgIGlmKHZpZGVvU3JjQ2hvaXNlICE9PSB2aWRGcmFtZVNyYyl7dmlkRnJhbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZpZGVvU3JjQ2hvaXNlKTtcclxuICAgIHZpZGVvT3RoZXJDYW1zRnJhbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZpZEZyYW1lU3JjKVxyXG4gfVxyXG5cclxufSlcclxuICAgIH0pXHJcbn1cclxuY2hvaXNlVmlkZW8oKTtcclxuY29uc3QgZ2FwID0gNDA7XHJcblxyXG5sZXQgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuX2NvbnRfb3RoZXJjYW1zJyksXHJcbiAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkX2NhbXMnKSxcclxuICBuZXh0Q2FtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fcmlnaHRfY2FtcyAnKSxcclxuICBwcmV2Q2FtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fbGVmdF9jYW1zJyksXHJcbiAgc2xpZGVySXRlbUFycj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZF9jYW1zIC5pdGVtJyksXHJcbiAgY29udGVudFdpZHRoPSBjb250ZW50Lm9mZnNldFdpZHRoLFxyXG4gIGNhcm91c2VsV2lkdGg9Y2Fyb3VzZWwub2Zmc2V0V2lkdGgsXHJcbiAgcG9zUmlnaHRYY2Fyb3VzZWw9Y2Fyb3VzZWwub2Zmc2V0TGVmdCtjYXJvdXNlbFdpZHRoLFxyXG4gIHBvc0Nhcm91c2VsPWNhcm91c2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gIHBvc0NvbnRlbnQ9Y29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICBhcnJJdGVtPVtdO1xyXG4gIGFyckl0ZW0ucHVzaChzbGlkZXJJdGVtQXJyKTtcclxuLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKT0+e1xyXG4vLyAgICAgICBsZXQgeD1lLnBhZ2VYO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyh4KVxyXG4vLyAgIH0pXHJcblxyXG5sZXQgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZF9jYW1zIC5pdGVtJykub2Zmc2V0V2lkdGg7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZSkgPT4ge1xyXG4gICAgY2Fyb3VzZWxXaWR0aCA9IGNhcm91c2VsLm9mZnNldFdpZHRoO1xyXG4gICAgaW1nV2lkdGggPSBpbWdXaWR0aC5vZmZzZXRXaWR0aDtcclxufSk7XHJcblxyXG5uZXh0Q2Ftcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1nV2lkdGgpXHJcbiAgICBjYXJvdXNlbC5zY3JvbGxUbygoaW1nV2lkdGggKyBnYXApLCAwKTtcclxuIGZvcihsZXQgaT0wO2k8c2xpZGVySXRlbUFyci5sZW5ndGg7aSsrKXtcclxuICAgIHBvc0l0ZW1TbGlkZXI9c2xpZGVySXRlbUFycltzbGlkZXJJdGVtQXJyLmxlbmd0aC0xXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZiAocG9zSXRlbVNsaWRlci5yaWdodDw9cG9zQ2Fyb3VzZWwucmlnaHQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieWVkXCIpXHJcbiAgICB9OyAgXHJcbn0pO1xyXG5cclxucHJldkNhbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBjYXJvdXNlbC5zY3JvbGxUbygtKGltZ1dpZHRoICsgZ2FwKSwgMCk7XHJcbn0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuIl19
