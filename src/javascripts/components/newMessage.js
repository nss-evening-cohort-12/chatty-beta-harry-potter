import messageData from '../helpers/data/messageData';

const addMessageToArray = (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  messageData.setMessages(1, message); //  should add selected user when component finished
  // should reprint message array when finished
};

const addMessageListener = () => {
  document.querySelector('#new-message-form').addEventListener('submit', addMessageToArray);
};

export default { addMessageListener };
