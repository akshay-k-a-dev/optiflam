document.addEventListener("DOMContentLoaded", function() {
    responsiveChangesLang();
    window.addEventListener('resize', responsiveChangesLang);
    var curLangLabels = document.querySelectorAll('[data-theme-lang-label]');
    if(curLangLabels){
        for(var i=0; i<curLangLabels.length; i++){
            curLangLabels[i].addEventListener('click', toggleLangDropdown);
            curLangLabels[i].addEventListener('keydown',function(e){
              if(e.which === 13){
                  this.click();
              }
            });
        };
    }
});
function hideLang(){
    var activeLangDropdown = document.querySelector('.theme-lang-dropdown-open');
    activeLangDropdown && activeLangDropdown.classList.remove('theme-lang-dropdown-open');
    var lagnLabel = document.querySelector('[data-theme-lang-label]');
    lagnLabel && lagnLabel.setAttribute('aria-expanded','false');
}
function toggleLangDropdown(e){
    e.target.parentNode.classList.toggle('theme-lang-dropdown-open');
    if(e.target.parentNode.classList.contains('theme-lang-dropdown-open')){
      e.target.setAttribute('aria-expanded','true');
      e.target.setAttribute('aria-haspopup','false');
      var firstLang = e.target.parentElement.querySelector('[data-theme-lang-list]');
      firstLang && firstLang.focus();
    }else{
      e.target.setAttribute('aria-expanded','false');
      e.target.setAttribute('aria-haspopup','true');
    }
}
function responsiveChangesLang(){
    var langContainer = $D.get('[data-theme-lang-container]');
    var langNonResContainer = $D.get('[data-theme-lang-container-non-res]');
    var langResContainer = $D.get('[data-theme-lang-container-res]');
    if(window.innerWidth < 992 ){
        if(langNonResContainer && langResContainer && langContainer){
            langResContainer.appendChild(langContainer);
        }
    }else{
        if(langNonResContainer && langResContainer && langContainer){
            langNonResContainer.appendChild(langContainer);
        }
    }
}

var langContainer = document.querySelector('[data-theme-lang-container]');
var languageListLi = document.querySelectorAll('[data-theme-lang-list]');
var languageListLabel = document.querySelector('[data-theme-lang-label]');
if(langContainer){
  for(var i=0;i<languageListLi.length;i++){
    hideOnBlur(languageListLi[i],langContainer,hideLang,languageListLabel)
    languageListLi[i].addEventListener('keydown',function(e){
      if(e.which === 13){
          this.click();
      }
      if(e.which === 27){
        hideLang();
        languageListLabel.focus();
        languageListLabel.setAttribute('aria-expanded','false')
        languageListLabel.setAttribute('aria-haspopup','true')
      }
    });
  }

  languageListLabel.addEventListener('keydown',function(e){
    if(e.which === 9){
      hideOnBlur(this,langContainer,hideLang);
    }
  });
}
