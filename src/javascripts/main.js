import '../styles/main.scss';
import displayMessage from './components/displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios/userRadios';
import newMessage from './components/newMessage/newMessage';
import largerText from './components/largerText/largerText';
import searchGiphy from './components/searchGiphy/searchGiphy';

const init = () => {
  newMessage.printMessageForm();
  newMessage.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
  largerText.largerTextListener();
  searchGiphy.formListener();
};

init();
