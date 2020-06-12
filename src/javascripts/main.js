import '../styles/main.scss';
import 'bootstrap';
import userRadios from './components/userRadios';
import listener from './components/newMessage';

const init = () => {
  listener.addMessageListener();
  userRadios.printRadioButtons();
};

init();
