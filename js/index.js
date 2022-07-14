const leftArrow=document.getElementById('left');
const rightArrow=document.getElementById('right');
const carouselContainer=document.getElementById('carouselContainer');
var imgs=document.querySelectorAll('#overflow img');

var i=imgs.length-1;
leftArrow.addEventListener('click',()=>{
    imageWidth=Number(imgs[i].width+5)
    imgs.forEach((image)=>{
        image.classList.remove('animationImg');
        console.log(image)
    })
    document.getElementById('overflow').scrollLeft -= imageWidth;
 
    imgs.forEach((image)=>{
        image.classList.add('animationImg');
    })
    i--;
    if(i+1==imgs.length || i-1==0){
        i=imgs.length;
    }
})

rightArrow.addEventListener('click',()=>{
    imgs.forEach((image)=>{
        image.classList.remove('animationImgNext');
    })
    document.getElementById('overflow').scrollLeft += Number(imgs[i+1].width+5);
    imgs.forEach((image)=>{
        image.classList.add('animationImgNext');
    })
    
    i++;
    if(i+1==imgs.length){
        i=imgs.length;
    }
})