import getMessages from '../../helpers/data/messageData';


const clearMessages = () => {
  getMessages.getMessages().splice(0, getMessages.getMessages());
};

$('body').on('click', '#clearMessages', clearMessages);

export default { clearMessages };
