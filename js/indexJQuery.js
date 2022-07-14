// indexJQuery.js

$(document).ready(function(){
    console.log('Učitan indexJQuery.js file!!')
    /*kod samo za postavljanje i animiranje elemenata (bez ponavljanja, nije beskonačan slider) */
   /* var imgs=document.querySelectorAll('#overflow img');
    var i=imgs.length;
    var j=imgs.length;
    var imageWidth;
    $('#left').click(function(){
        i--;
        console.log(i);
        imageWidth=imgs[i].width+5;
        if(i<=0){
            i=imgs.length;
        }   
        $('#carouselContainer').animate(
            {left: `+=`+imageWidth},900
        )
        $('#carouselContainer1').animate(
            {left: `-=`+imageWidth},900
        )
    })

    $('#right').click(function(){
        imageWidth=imgs[i].width+5;
        $('#carouselContainer').animate(
            {left: `-=`+imageWidth},900
        )
        $('#carouselContainer1').animate(
            {left: `+=`+imageWidth},900
        )
       console.log(i);
        i++;  
    })*/






/*slider -kod sa razrađenom logikom ponavljanja*/
    var imgs=document.querySelectorAll('#overflow img');
    var i=imgs.length;
    var j=imgs.length;
    var imgTotalNumber=0;
    var imageWidth;/*širina slike koja je u fokusu, smještena u slideru u gornjem redu s desne strane */

    /*broj različitih slika */
    $('#carouselContainer img').each((image)=>{
        imgTotalNumber++;
    })
    /*strelica lijevo */
    $('#left').click(function(){
        
        i--;
        console.log(i);
        imageWidth=imgs[i].width+6;
        if(i<=0){
            i=imgs.length;
        }
            
        /*animacija-gornji red */
        $('#carouselContainer').animate(
            {left: `+=`+imageWidth},500
        )
        /*animacija-donji red */
        $('#carouselContainer1').animate(
            {left: `-=`+imageWidth},500
        )

        /*animiranje div elemenata sa slikama koji trenutno nisu vidljivi i služe da se slider može nastaviti */
        if(i==imgs.length){
            $('.carousel2').animate(
                {left: `+=`+imageWidth},500
            )
        }
        if(i<imgs.length*2 || i<=0){
            $('#carousel2').animate(
                {left: `+=`+imageWidth},500
            )
        }
        if(i==imgs.length){
            $('.carousel3').animate(
                {left: `-=`+imageWidth},500
            )
        }
        if(i<imgs.length*2 || i<=0){
            $('#carousel3').animate(
                {left: `-=`+imageWidth},500
            )}


        /*provjera koliko iznosi varijabla i, premještanje elemenata ovisno o varijabli i */
        if(i==imgs.length || i==0){$('#carouselContainer1 img').clone().appendTo('#carousel3');}
        if((i+1)%imgTotalNumber==0 || i%imgTotalNumber==0){
            $('#carouselContainer1 img').clone().appendTo('#carouselContainer1');
            $('#carouselContainer img').clone().appendTo('#carouselContainer');
        }
       if(i==imgTotalNumber-1){
       $('#carouselContainer1 img').appendTo('#carousel3');
        var br=0;
        $('#carouselContainer1 img').each((image)=>{
            br++;
            if(br<=imgTotalNumber){
                $('#carouselContainer1 img:last-child').remove();
            }
         })
        }
        if(i+1==imgTotalNumber*2){
            $('#carousel3 img').clone().appendTo('#carousel3');
        }
    })


    /*strelica desno */
    $('#right').click(function(){
        if(i==0){
            i=imgs.length-1;
        }
        if(i<0){
            i=Math.abs(i);
        }
        if(i+1>imgs.length){
            i=0;}

        imageWidth=imgs[i].width+6;
        
        
        $('#carouselContainer').animate(
            {left: `-=`+imageWidth},500
        )
        $('#carouselContainer1').animate(
            {left: `+=`+imageWidth},500
        )

       


       
       if(i=>imgs.length*2 ||i<=0){
            $('#carousel2').animate(
                {left: `-=`+imageWidth},500
            )
            $('#carousel3').animate(
                {left: `+=`+imageWidth},500
            )
        }
      
       console.log(i);
        i++;
        if(i==imgs.length+1 || i==1){$('#carouselContainer1 img').clone().appendTo('#carouselContainer1');}
        if((i-1)%imgTotalNumber==0){
            $('#carouselContainer1 img').clone().appendTo('#carouselContainer1');
            $('#carouselContainer img').clone().appendTo('#carouselContainer');
        }
       if(i==imgTotalNumber-1){
        $('#carouselContainer img').appendTo('#carousel2');
        var br=0;
        $('#carouselContainer img').each((image)=>{
            br++;
            if(br<=imgTotalNumber){
                $('#carouselContainer img:last-child').remove();
            }
        })
       }
       if(i==imgTotalNumber*2){
        $('#carousel2 img').clone().appendTo('#carousel2');
       }
    })
})