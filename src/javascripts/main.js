import '../styles/main.scss';
import displayMessage from './components/displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios/userRadios';
import listener from './components/newMessage/newMessage';
import largerText from './components/largerText/largerText';
import clearAll from './components/clearAllMessages/clearAllMessages';
import buttonDelete from './components/deleteMessage/deleteMessage';
import searchGiphy from './components/searchGiphy/searchGiphy';

const init = (e) => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
  largerText.largerTextListener();
  clearAll.buttonClear();
  buttonDelete.buttonDelete();
  searchGiphy.formListener();
  console.error(e.target);
};

init();
