import './assets/scss/main.scss';
import Tip from './assets/js/tips';
import Dropdown from './assets/js/dropDown';
import InfoTabs from './assets/js/infoTabs';
import PopUp from './assets/js/popUp';

const tipContainers = document.querySelectorAll('.tipContainer');
const dropDownContainers = document.querySelectorAll('.dropDownContainer');
const infoTabsContainers = document.querySelectorAll('.infoTabsContainer');
const popUpContainers = document.querySelectorAll('.popUpContainer');

for (let tipContainer of tipContainers) {
  tipContainer = new Tip(tipContainer);
  tipContainer.init();
};

for (let dropDownContainer of dropDownContainers) {
  dropDownContainer = new Dropdown(dropDownContainer);
  dropDownContainer.initShowOnlyOne();
};

infoTabsContainers.forEach( infoTabsContainer => {
  infoTabsContainer = new InfoTabs(infoTabsContainer);
  infoTabsContainer.init();
})

popUpContainers.forEach( popUpContainer => {
  popUpContainer = new PopUp(popUpContainer);
  popUpContainer.init();
})







