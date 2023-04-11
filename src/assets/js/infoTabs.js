import '../scss/infoTabs.scss';

export default class InfoTabs{
  constructor(infoTabsContainer){
    this.infoTabsContainer = infoTabsContainer;
    this.infoBtns = this.infoTabsContainer.querySelectorAll('.infoBtn');
    this.infos = this.infoTabsContainer.querySelectorAll('.info');
    this.infoRef = '';
  };

  init(){
    this.infoTabsContainer.addEventListener('click', (e) => {
      if( e.target.classList.contains('infoBtn') ){
        this.initBtns(e);
        this.showText();
      }
    })
  }

  initBtns(e){
    if( !e.target.classList.contains('active') ){
      this.infoBtns.forEach( infoBtn => {
        infoBtn.classList.remove('active');
      })
      e.target.classList.add('active');
      this.infoRef = e.target.getAttribute('data-ref')
    }
  }

  showText(){
    this.infos.forEach( info => {
      info.classList.remove('show')
    })
    const info = this.infoTabsContainer.querySelector(`#${this.infoRef}`);
    info.classList.add('show')
  }
}