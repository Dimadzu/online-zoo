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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiem9vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxubGV0IHZpZEZyYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIiksXHJcbiAgICBvdGhlckNhbXNWaWRlbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfY2Ftc192aWRlb1wiKSxcclxuICAgIHdhdGNoTm93QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2F0Y2hfbm93X2J0blwiKTtcclxuXHJcbiAgICBjaG9pc2VWaWRlbz0oKT0+e1xyXG4gICAgd2F0Y2hOb3dCdXR0b24uZm9yRWFjaCgoZWxlbSkgPT57XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICBfdGhpcz1lLnRhcmdldDtcclxuICAgIGxldCB2aWRlb1NyY0NvbnQ9X3RoaXMuY2xvc2VzdChcIi5pdGVtXCIpLFxyXG4gICAgICAgIHZpZGVvT3RoZXJDYW1zRnJhbWU9dmlkZW9TcmNDb250LmNoaWxkTm9kZXNbNV0sXHJcbiAgICAgICAgdmlkZW9TcmNDaG9pc2U9dmlkZW9PdGhlckNhbXNGcmFtZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksXHJcbiAgICAgICAgdmlkRnJhbWVTcmM9dmlkRnJhbWUuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgaWYodmlkZW9TcmNDaG9pc2UgIT09IHZpZEZyYW1lU3JjKXt2aWRGcmFtZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmlkZW9TcmNDaG9pc2UpO1xyXG4gICAgdmlkZW9PdGhlckNhbXNGcmFtZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmlkRnJhbWVTcmMpXHJcbiB9XHJcblxyXG59KVxyXG4gICAgfSlcclxufVxyXG5jaG9pc2VWaWRlbygpO1xyXG59KSJdfQ==
