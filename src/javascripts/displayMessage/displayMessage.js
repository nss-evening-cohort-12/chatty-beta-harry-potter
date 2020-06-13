import utils from '../helpers/utils';
import getMessages from '../helpers/data/messageData';
import userData from '../helpers/data/userData';

const getUsername = (id) => userData.getUsers().find((user) => user.id === id).name;

const displayMessage = () => {
  let domString = '';
  getMessages.getMessages().forEach((messages) => {
    domString += `
        <div class="card">
            <div class="card-body" id="${messages.messageId}">
                <h5 class="name">${getUsername(messages.userId)}</h5>
                <p class="message">${messages.message}</p>
            </div>
        </div>`;
  });

  utils.printToDom('messageCard', domString);
};

export default { displayMessage };
