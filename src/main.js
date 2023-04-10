import './assets/scss/main.scss';
import Tip from './assets/js/tips';
import Dropdown from './assets/js/dropDown';
import InfoBtn from './assets/js/infoBtn';

const tipContainers = document.querySelectorAll('.tipContainer');
const dropDownContainers = document.querySelectorAll('.dropDownContainer');
const infoBtnMainContainers = document.querySelectorAll('.infoBtnMainContainer');

for (let tipContainer of tipContainers) {
  tipContainer = new Tip(tipContainer);
  tipContainer.init();
};

for (let dropDownContainer of dropDownContainers) {
  dropDownContainer = new Dropdown(dropDownContainer);
  dropDownContainer.initShowOnlyOne();
};

infoBtnMainContainers.forEach( infoBtnMainContainer => {
  infoBtnMainContainer = new InfoBtn(infoBtnMainContainer);
  infoBtnMainContainer.initBtn();
})





