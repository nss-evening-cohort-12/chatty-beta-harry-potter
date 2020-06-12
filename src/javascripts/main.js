import '../styles/main.scss';
import displayMessage from './displayMessage/displayMessage';
import 'bootstrap';
import userRadios from './components/userRadios';

const init = () => {
  userRadios.printRadioButtons();
  displayMessage.displayMessage();
};

init();
