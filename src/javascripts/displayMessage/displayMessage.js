import utils from '../helpers/utils';
import getMessages from '../helpers/data/messageData';

const displayMessage = () => {
  let domString = '';
  getMessages.getMessages().forEach((messages) => {
    domString += `
        <div class="card">
            <div class="card-body" id="${messages.messageId}">
                <h5 class="name">${messages.userId}</h5>
                <p class="message">${messages.message}</p>
            </div>
        </div>`;
  });

  utils.printToDom('#messageCard', domString);
};

export default { displayMessage };
