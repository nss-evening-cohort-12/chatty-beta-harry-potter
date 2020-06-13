import getMessages from '../../helpers/data/messageData';

const clearMessages = () => {
  getMessages.getMessages.length = 0;
};

export default { clearMessages };
