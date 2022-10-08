document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__btn-step').forEach(function(btnStep) {
        btnStep.addEventListener('click',function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.section-work__btn-step').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__active-step')
            })
            this.classList.add('section-work__active-step')

            document.querySelectorAll('.section-work__btn-step').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__active-step')
            })
            this.classList.add('section-work__active-step')
           
            document.querySelectorAll('.section-work__tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__tab-active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__tab-active')
        })
    })

    document.querySelectorAll('.section-questions__faq').forEach(function(btnFAQ){
        btnFAQ.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.section-questions__faq').forEach(function(svgFAQ){
                svgFAQ.classList.remove('faq-active')
            })
            this.classList.add('faq-active')
        })
    })

    document.querySelector('#header__content-burger').addEventListener('click', function() {
        this.classList.toggle('active-burger')
        document.querySelector('#header__burger-nav').classList.toggle('header__active-nav')
    })
   
})