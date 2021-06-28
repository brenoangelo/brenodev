/*

*/

let options = document.querySelectorAll('.column-text li')
let optionSingle

let tabInfo = document.querySelector('.tab-info')
let tabText

options.forEach((value, index) => {

    options[index].addEventListener('click', ()=> {
        options.forEach((value, index)=>{
            if(options[index].className === 'tab-active'){
                options[index].classList.remove('tab-active')
            }
        })

        optionSingle = options[index]
        
        optionSingle.classList.add('tab-active')

        if(optionSingle.innerHTML === '<span class="circle"></span> Educação'){
            console.log(optionSingle)
        }

        
        switch(optionSingle.innerHTML){
            case '<span class="circle"></span> Educação':
                
                tabInfo.innerHTML = `<div class="info-single">
                                        <span class="circle-line"></span>
                                        <div class="info-text-title">
                                            <h4>Estácio de Sá</h4><span>2019-2023</span>
                                        </div><!--info-text-title-->
                                        <h5>Ciências da computação</h5>
                                        <p>Entrei no curso de ciência da computação em busca de
                                        conhecimento e network. Comecei meus estudos e foi em
                                        2020 que me encontrei na area de Desen. Web Front-end. 
                                        </p>
                                    </div><!--info-single-->`
                break
            
            case '<span class="circle"></span> Experiência':
                tabInfo.innerHTML = `<div class="info-single">
                                        <span class="circle-line"></span>
                                        <div class="info-text-title">
                                            <h4>Future Consulting</h4><span>2020-2021</span>
                                        </div><!--info-text-title-->
                                        <h5>Desenvolvedor</h5>
                                        <p>Fui sócio e desenvolvedor nessa empresa, aprendi a construir sites
                                        com WordPress e a criar ecommerces com o plugin Woocommerce.
                                        Aqui foi onde tudo começou! 
                                        </p>
                                    </div><!--info-single-->`
                break

            case '<span class="circle"></span> Certificados':
                tabInfo.innerHTML = `<div class="info-single">
                                        <span class="circle-line"></span>
                                        <div class="info-text-title">
                                            <h4>Danki code</h4><span>2020-2021</span>
                                        </div><!--info-text-title-->
                                        <h5>Curso Web Master Front-End Completo</h5>
                                        <p>Aprendi toda a base de HTML, CSS, JAVASCRIPT, Sass~Less e
                                        demais tecnologias nesse curso. 
                                        </p>
                                        <small>Carga Horária: 81h</small>
                                    </div><!--info-single-->`
                break

            case '<span class="circle"></span> Habilidades de Programação':
                tabInfo.innerHTML = `<div class="info-single">
                                        <span class="circle-line"></span>
                                        <div class="info-text-title">
                                            <h4>Hab. de Programação</h4>
                                        </div><!--info-text-title-->
                                        <h5>Ciências da computação</h5>
                                        <li><span style="width: 80%">JavaScript</span></li>
                                        <li><span style="width: 30%">ReactJS</span></li>
                                        <li><span style="width: 85%">CSS</span></li>
                                        <li><span style="width: 75%">WordPress</span></li>
                                    </div><!--info-single-->`
                break

            case '<span class="circle"></span> Habilidades de Design':
                tabInfo.innerHTML = `<div class="info-single">
                                        <span class="circle-line"></span>
                                        <div class="info-text-title">
                                            <h4>Hab. de Design</h4>
                                        </div><!--info-text-title-->
                                        <h5>Ciências da computação</h5>
                                        <li><span style="width: 50%">Adobe PhotoShop</span></li>
                                        <li><span style="width: 30%">Adobe XD</span></li>
                                    </div><!--info-single-->`
                break
  
        }
        

    })
})

/* VALIDAR FORMULÁRIO */
    
/* */