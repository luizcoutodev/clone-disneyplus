document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button){
            const targetTab = button.target.dataset.tabButton;
            // a funçao dataset ja pega o DATA da classe e transforma o atributo em CAMELCASE automaticamente, assim so precisamos resgatar o CAMELCASE GERADO pelo DATASET.
            // LOGO a constante targeTAB é IGUAL AO TAB BUTTON ex: em_breve
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            // essa constante só selecionou o TARGET do BOTÃO clicado.
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tab__button--is-active');
        })
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tab__button--is-active');
    }
    
    
}

function hideAllTabs () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
    // LOOP QUE REMOVE TODAS AS CLASSES do HTML e DEIXA AS AABAS "INATIVAS"
}