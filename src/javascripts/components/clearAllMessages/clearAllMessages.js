import getMessages from '../../helpers/data/messageData';
import utils from '../../helpers/utils';

const clearAll = () => {
  const domString = `
  <button type="button" id="clearMessages" class="btn btn-warning">Clear All</button>`;
  utils.printToDom('#clearAll', domString);
};

const clearMessages = () => {
  getMessages.getMessages.length = 0;
  clearAll();
};

$('body').on('click', '#clearMessages', clearMessages);

export default { clearAll };
