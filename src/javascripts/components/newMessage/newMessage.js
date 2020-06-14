import messageData from '../../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';

const addMessageToArray = (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  const selectedUser = document.querySelector('input[name=userSelection]:checked').value;
  const selectedGif = () => {
    if (document.querySelector('input[name=selectedGif]:checked')) {
      return document.querySelector('input[name=selectedGif]:checked').value;
    }
    return null;
  };
  messageData.setMessages(selectedUser, message, selectedGif());
  displayMessage.displayMessage();
  $('#gif-selector').collapse('hide');
  document.querySelector('#gifs').innerHTML = '';
};

const addMessageListener = () => {
  document.querySelector('#new-message-form').addEventListener('submit', addMessageToArray);
};

export default { addMessageListener };
