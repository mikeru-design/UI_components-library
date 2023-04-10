import '../scss/tips.scss';

export default class Tip{
  constructor(tipContainer){
    this.tipContainer = tipContainer;
    this.tipText = this.tipContainer.getAttribute('data-tipContent');
  }
  init(){
    const tip = document.createElement('div');
    tip.classList.add('tip')
    tip.textContent = this.tipText;
    this.tipContainer.appendChild(tip);

    this.tipContainer.addEventListener('mouseenter', e => { const tip = e.target.querySelector('.tip'); tip.classList.add('active') })
    this.tipContainer.addEventListener('mouseleave', e => { const tip = e.target.querySelector('.tip'); tip.classList.remove('active') })
  }
}
