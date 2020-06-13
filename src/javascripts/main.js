import '../styles/main.scss';
import displayMessage from './displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios';
import listener from './components/newMessage';
import largerText from './components/largerText/largerText';

const init = () => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
  largerText.largerTextListener();
};

init();
