$(()=>{

    /* MENU MOBILE */
        let btnHamb = $('.btn-hamb')
        let ulMenu = $('.menu-mobile-ul')
        btnHamb.click(()=>{
            
            
            ulMenu.slideToggle(()=>{
                ulMenu.css('display') == 'block' ? 
                $('.logo h1').css('color','white'):
                $('.logo h1').css('color', '#0abead')
            })

            $('ul > li > a').click(()=>{
                ulMenu.slideUp()
            })

        })
    /* */

    /* SCROLL SUAVE */
    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });


        
    /* */
})