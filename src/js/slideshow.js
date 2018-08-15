export default function slideshow(imgsId, rootElement){

    var iteration = 0;
    //Entry image animation when page loads
    var firstImageEntryAnimation = '';
    //Animation class name
    var animationName = 'fade-left';
    //All images
    var imgs = Array.from(document.querySelectorAll("#"+imgsId));
    //Root element in which slideshow appears
    var root = document.querySelector('.'+rootElement);
    //Removing img tags from page for responsive aspects
    imgs.map(function(img){
        root.removeChild(img);
    });

    //Creating bottom image and setting its properties
    var bottomImage = document.createElement('div');
    bottomImage.setAttribute('id', "slideshow-bottom");
    bottomImage.style.backgroundImage = "url("+imgs[iteration].getAttribute('src')+")";
    firstImageEntryAnimation && bottomImage.classList.add(firstImageEntryAnimation);
    //Adding bottom image to root element
    root.appendChild(bottomImage);

    //Creating top image
    var topImage = document.createElement('div');
    topImage.setAttribute('id', "slideshow-top");
    //Setting animation which name has been set before
    topImage.classList.add(animationName);

    //Main slideshow function
    function slideshow(){  
        //Setting bottom image url
        bottomImage.style.backgroundImage = "url("+imgs[iteration].getAttribute('src')+")";          
        try{
            //Removing top image
            root.removeChild(document.querySelector('#slideshow-top'));
        }
        catch(err){
            //It just prevents from showing error on starting slide
        }
        //Checking if slideshow is in its end
        if(iteration == imgs.length-1){
            topImage.style.backgroundImage = "url("+imgs[0].getAttribute('src')+")";  
        }
        else{
            topImage.style.backgroundImage = "url("+imgs[iteration+1].getAttribute('src')+")"; 
        }
        //Slide happens
        root.appendChild(topImage);
        //Incrementing iteration and if max reset it
        iteration == (imgs.length-1) ? iteration=0 : iteration++;

        //Timeout
        setTimeout(slideshow, 7000);
    }
    //Timeout on first slide from load
    setTimeout(slideshow, 7000);
}