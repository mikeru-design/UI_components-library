import '../scss/infoBtn.scss';

export default class InfoBtn{
  constructor(element){
    this.element = element;
    this.infoBtns = this.element.querySelectorAll('.infoBtn');
    this.infos = this.element.querySelectorAll('.info');
  };

  initBtn(){
    this.element.addEventListener('click', (e) => {
      if( e.target.classList.contains('infoBtn') ){
        if( !e.target.classList.contains('active')){
          this.infoBtns.forEach( infoBtn => {
            infoBtn.classList.remove('active');
          })
          e.target.classList.add('active');
          this.infos.forEach( info => {
            info.classList.remove('show')
          })
          this.showText(e.target.getAttribute('data-ref'));
        }
      }
    })
  }

  showText(btnRef){
    const info = this.element.querySelector(`#${btnRef}`);
    info.classList.add('show')
  }

}