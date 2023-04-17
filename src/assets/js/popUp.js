import '../scss/popUp.scss'

export default class PopUp{
  constructor(container){
    this.container = container;
    this.popUpInput = container.querySelector('.popUpInput');
    this.popUpForm = container.querySelector('.popUpForm');
  }

  initPopUp(){
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
    if ( !popUpWindow ){

      let popUpMsg = '';

      if ( this.popUpInput ){
        if ( this.popUpInput.value ){
          popUpMsg = this.popUpInput.value
          this.popUpInput.value = '';
        } else {
          popUpMsg = 'Please, write message in the input to show in popUpWindow'
        }
      } else {
        const popUpValue = this.popUpForm.getAttribute('data-popUpValue');
        popUpMsg = popUpValue;
      }

      if( popUpMsg ){
        const popUpWindow = document.createElement('div');
        popUpWindow.classList.add('popUpWindow');

        const popUpWindowClose = document.createElement('div');
        popUpWindowClose.classList.add('popUpWindowClose');

        popUpWindow.textContent = popUpMsg;
        popUpWindow.appendChild(popUpWindowClose);
        this.container.appendChild(popUpWindow);

        setTimeout( () => { popUpWindow.remove() }, 5000 );
      }


    }
  }

  closeWindow(e){
    const popUpWindow = document.querySelector('.popUpWindow');
    if ( popUpWindow && e.target.classList.contains('popUpWindowClose')){
      popUpWindow.remove();
    }
  }
}