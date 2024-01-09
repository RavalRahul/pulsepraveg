var app_ele = document.querySelectorAll('.app');

function mobileAppAnimation(){
    app_ele[0].style.scale = "1.5";
    app_ele[0].style.transform = "translate(-200%, -150% )";

    app_ele[2].style.scale = "1.5";
    app_ele[2].style.transform = "translate(80%, -250% )";

    app_ele[3].style.scale = "1.2";
    app_ele[3].style.transform = "translate(350%, 0 )";

    app_ele[5].style.scale = "3";
    app_ele[5].style.transform = "translate(-200%, 100% )";

    app_ele[12].style.scale = "1.5";
    app_ele[12].style.transform = "translate(-200%, 300% )";

    app_ele[14].style.scale = "1.8";
    app_ele[14].style.transform = "translate(160%, 50% )";

    app_ele[15].style.scale = "4";
    app_ele[15].style.transform = "translate(160%, 90% )";

    app_ele[17].style.scale = "1.5";
    app_ele[17].style.transform = "translate(80%, 500% )";
}

function textChangeAnimation(){
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }
    
    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
    setTimeout(function() {
            cw[i].className = 'letter out';
    }, i*80);
    }

    function animateLetterIn(nw, i) {
    setTimeout(function() {
            nw[i].className = 'letter in';
    }, 340+(i*80));
    }

    function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }
    
    wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);


} 


function feature1ParallaxAnimation(){
    document.addEventListener("mousemove", parallax);
    function parallax(event){
        const paraShape = document.querySelectorAll("#feature-slide-1 .triangle");
        var position = paraShape[0].dataset.pos;
        var position = paraShape[1].dataset.pos;
        var position = paraShape[2].dataset.pos;
        var shapePos1 = (window.innerWidth - event.pageX * position) / 1500;
        var shapePos2 = (window.innerWidth - event.pageX * position) / 1000;
        var shapePos3 = (window.innerWidth - event.pageX * position) / 350;
        paraShape[0].style.transform = `translateX(${shapePos1}px)`;
        paraShape[1].style.transform = `translateX(${shapePos2}px)`;
        paraShape[2].style.transform = `translateX(${shapePos3}px)`;
    
        const paraText = document.querySelectorAll("#feature-slide-1 h2");
        var position = paraText[0].dataset.pos;
        var position = paraText[1].dataset.pos;
        var textPos1 = (window.innerWidth - event.pageX) / -50;
        var textPos2 = (window.innerWidth - event.pageX) / -15;
        // paraText[0].style.transform = `translateX(${x}px)`;
        paraText[0].style.left = `${textPos1}px`;
        paraText[1].style.left = `${textPos2}px`;
    }
}

function feature2ParallaxAnimation(){
    document.addEventListener("mousemove", parallax);
    function parallax(event){
        const paraShape = document.querySelectorAll("#feature-slide-2 .triangle");
        var position = paraShape[0].dataset.pos;
        var position = paraShape[1].dataset.pos;
        var position = paraShape[2].dataset.pos;
        var shapePos1 = (window.innerWidth - event.pageX * position) / 1500;
        var shapePos2 = (window.innerWidth - event.pageX * position) / 1000;
        var shapePos3 = (window.innerWidth - event.pageX * position) / 350;
        paraShape[0].style.transform = `translateX(${shapePos1}px)`;
        paraShape[1].style.transform = `translateX(${shapePos2}px)`;
        paraShape[2].style.transform = `translateX(${shapePos3}px)`;
    
        const paraText = document.querySelectorAll("#feature-slide-2 h2");
        var position = paraText[0].dataset.pos;
        var position = paraText[1].dataset.pos;
        var textPos1 = (window.innerWidth - event.pageX) / -50;
        var textPos2 = (window.innerWidth - event.pageX) / -15;
        // paraText[0].style.transform = `translateX(${x}px)`;
        paraText[0].style.left = `${textPos1}px`;
        paraText[1].style.left = `${textPos2}px`;
    }
}

function feature3ParallaxAnimation(){
    document.addEventListener("mousemove", parallax);
    function parallax(event){
        const paraShape = document.querySelectorAll("#feature-slide-3 .triangle");
        var position = paraShape[0].dataset.pos;
        var position = paraShape[1].dataset.pos;
        var position = paraShape[2].dataset.pos;
        var shapePos1 = (window.innerWidth - event.pageX * position) / 1500;
        var shapePos2 = (window.innerWidth - event.pageX * position) / 1000;
        var shapePos3 = (window.innerWidth - event.pageX * position) / 350;
        paraShape[0].style.transform = `translateX(${shapePos1}px)`;
        paraShape[1].style.transform = `translateX(${shapePos2}px)`;
        paraShape[2].style.transform = `translateX(${shapePos3}px)`;
    
        const paraText = document.querySelectorAll("#feature-slide-3 h2");
        var position = paraText[0].dataset.pos;
        var position = paraText[1].dataset.pos;
        var textPos1 = (window.innerWidth - event.pageX) / -50;
        var textPos2 = (window.innerWidth - event.pageX) / -15;
        // paraText[0].style.transform = `translateX(${x}px)`;
        paraText[0].style.left = `${textPos1}px`;
        paraText[1].style.left = `${textPos2}px`;
    }
}

function featureSliderChange(){
    var slider = document.querySelectorAll(".feature-background");
    function slideChange(direction){
        for(var i=0; i<slider.length; i++){
            if(window.getComputedStyle(slider[i]).getPropertyValue("display") == "block"){
                if(direction == "right"){
                    slider[i].style.display = "none";
                    if(i == 2){
                        slider[0].style.display = "block";
                    }   
                    else{
                        slider[i+1].style.display = "block";
                    }
                    break;
                }
                else if(direction == "left"){
                    slider[i].style.display = "none";
                    if(i==0){
                        slider[2].style.display = "block";   
                    }
                    else{
                        slider[i-1].style.display = "block";   
                    }
                    break;
                }
            }
        }
    }
    var slideButtons = document.querySelectorAll(".feature-slider-button");
    slideButtons[0].addEventListener("click", ()=> {
        slideChange("left");
    });
    slideButtons[1].addEventListener("click", ()=> {
        slideChange("right");
    });
}

window.onload = () => {
    mobileAppAnimation();
    textChangeAnimation();
    feature1ParallaxAnimation();
    feature2ParallaxAnimation();
    feature3ParallaxAnimation();
    featureSliderChange();

}

window.onscroll = ()=>{
    // for(var i=0; i<19; i++){
    //     app_ele[i].style.scale = "1";
    //     app_ele[i].style.transform = "translate(0, 0 )";
    // }

    if (document.documentElement.scrollTop == 0) {
        mobileAppAnimation();
    } 
    else{
        for(var i=0; i<19; i++){
            app_ele[i].style.scale = "1";
            app_ele[i].style.transform = "translate(0, 0 )";
        }   
    }

}


