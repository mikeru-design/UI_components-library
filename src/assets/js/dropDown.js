import '../scss/dropDown.scss';

export default class Dropdown{
  constructor(container){
    this.container = container;
    this.dropDownTrigger = this.container.querySelector('.dropDownTrigger');
    this.dropDownArrow = this.container.querySelector('.dropDownArrow');
    this.dropDownText = this.container.querySelector('.dropDownText')
  };

  initShow(){
    this.dropDownTrigger.addEventListener('click', (e) => {
        this.dropDownText.classList.toggle('show');
        this.dropDownArrow.classList.toggle('rotate');
    });
  }
  
  initShowOnlyOne(){
    this.dropDownTrigger.addEventListener('click', (e) => {
      if( !this.dropDownText.classList.contains('show')){

        const dropDownTexts = document.querySelectorAll('.dropDownText');
        dropDownTexts.forEach( dropDownText => {
          dropDownText.classList.remove('show')
        })
        const dropDownArrows = document.querySelectorAll('.dropDownArrow');
        dropDownArrows.forEach( dropDownArrow => {
          dropDownArrow.classList.remove('rotate')
        })

        this.dropDownText.classList.add('show');
        this.dropDownArrow.classList.add('rotate');
      }
      else {
        this.dropDownText.classList.remove('show');
        this.dropDownArrow.classList.remove('rotate');
      }
    });
  }
};