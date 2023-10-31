function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    if (tabMenu.length && tabContent.length){

        tabContent[0].classList.add("ativo");

        function activeTab (index){
            tabContent.forEach((e) => {
                e.classList.remove('ativo')
                
            });

            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click',() =>{
                activeTab(index);
            });

        });
    }
}

initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll(".js-accordion dt")
    const activeClass = 'ativo'

    if (accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
            
        }

        accordionList.forEach((itemm) =>{
            itemm.addEventListener('click',activeAccordion);

        });
    }
}

initAccordion();

function initiScrollSuave(){
    const linkInternos = document.querySelectorAll('.js-menu a[href^="#"');

    function scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block:'start',
        });
        
        /* FORMA ALTERNATIVA
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        })
        */
       linkInternos.forEach((link) =>{
           link.addEventListener('click', scrollToSection);
       
       });
    };

}
initiScrollSuave();