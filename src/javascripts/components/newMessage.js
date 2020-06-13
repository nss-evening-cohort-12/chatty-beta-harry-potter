import messageData from '../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';

const addMessageToArray = (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  const selectedUser = document.querySelector('input[name=selectedUser]:checked').value;
  messageData.setMessages(selectedUser, message);
  displayMessage.displayMessage();
};

const addMessageListener = () => {
  document.querySelector('#new-message-form').addEventListener('submit', addMessageToArray);
};

export default { addMessageListener };
