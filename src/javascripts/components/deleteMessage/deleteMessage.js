import deleteMessage from '../../helpers/data/messageData';
// import userData from '../../helpers/data/userData';
import displayMessages from '../../displayMessage/displayMessage';

const buttonDelete = () => {
  $('body').on('click', '#delete', () => {
    deleteMessage.deleteMessage();
    displayMessages.displayMessage();
  });
};

export default { buttonDelete };
