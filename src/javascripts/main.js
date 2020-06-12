import '../styles/main.scss';
import displayMessage from './displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios';
import listener from './components/newMessage';

const init = () => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
};

init();
