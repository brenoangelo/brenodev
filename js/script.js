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

            

        })
    /* */


})