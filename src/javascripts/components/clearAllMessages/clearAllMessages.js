import clearMessages from '../../helpers/data/messageData';
import displayMessages from '../../displayMessage/displayMessage';

const buttonClear = () => {
  $('nav').on('click', '#clearMessages', () => {
    clearMessages.clearMessages();
    displayMessages.displayMessage();
  });
};


export default { buttonClear };
