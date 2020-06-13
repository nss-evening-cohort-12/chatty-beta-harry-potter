import '../styles/main.scss';
import displayMessage from './displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios';
import listener from './components/newMessage';
import largerText from './components/largerText/largerText';
import clearAll from './components/clearAllMessages/clearAllMessages';

const init = () => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
  largerText.largerTextListener();
  clearAll.clearMessages();
};

init();
