import '../styles/main.scss';
import listener from './components/newMessage';

const init = () => {
  listener.addMessageListener();
};

init();
