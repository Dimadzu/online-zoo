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
})