import '../scss/popUp.scss'

export default class PopUp{
  constructor(container){
    this.container = container;
    this.popUpInput = container.querySelector('.popUpInput');
    this.popUpForm = container.querySelector('.popUpForm');
  }

  init(){
    this.popUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.createWindow();
    })
    document.addEventListener('click', e => {
      this.closeWindow(e);
    })
  }

  createWindow(){
    const popUpWindow = document.querySelector('.popUpWindow');
    if ( !popUpWindow && this.popUpInput.value ){
      const popUpWindow = document.createElement('div');
      popUpWindow.classList.add('popUpWindow');
      popUpWindow.textContent = this.popUpInput.value;
      this.container.appendChild(popUpWindow);
      this.popUpInput.value = '';
    }
  }

  closeWindow(e){
    const popUpWindow = document.querySelector('.popUpWindow');
    if ( popUpWindow && !e.target.classList.contains('popUpWindow') ){
      popUpWindow.remove();
    }
  }
}