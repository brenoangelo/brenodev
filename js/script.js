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

    /* FORMULARIO */
    $("#staticform").submit(function(event) {
        event.preventDefault();
        $.ajax({
          url: 'https://api.staticforms.xyz/submit', // url where to submit the request
          type: "POST", // type of action POST || GET
          dataType: 'json', // data type
          data: $("#staticform").serialize(), // post data || get data
          success: function(result) {
            // you can see the result from the console
            // tab of the developer tools
            alert(JSON.parse(result));
          },
          error: function(xhr, resp, text) {
            alert(xhr, resp, text);
          }
        })
      });
    /* */
})