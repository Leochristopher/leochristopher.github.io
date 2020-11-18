// event when we click the link

$('.page-scroll').on('click',function(e){

        
        var tujuan = $(this).attr('href');
       
        var elemenTujuan = $(tujuan);

       
        
        e.preventDefault();
        $('html').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 600, 'swing');
       
     
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// console.log($('body').scrollTop());
// e.preventDefault();