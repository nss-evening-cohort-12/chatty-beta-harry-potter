import deleteMessage from '../../helpers/data/messageData';
// import getMessages from '../../helpers/data/messageData';
import displayMessages from '../displayMessage/displayMessage';

const buttonDelete = () => {
  $('body').on('click', '#undefined.fas.fa-times-circle.undefined', () => {
    deleteMessage.deleteMessage();
    displayMessages.displayMessage();
  });
};

export default { buttonDelete };
