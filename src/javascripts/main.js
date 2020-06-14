import '../styles/main.scss';
import displayMessage from './components/displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios/userRadios';
import listener from './components/newMessage/newMessage';
import largerText from './components/largerText/largerText';
import searchGiphy from './components/searchGiphy/searchGiphy';

const init = () => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
  largerText.largerTextListener();
  searchGiphy.formListener();
};

init();
