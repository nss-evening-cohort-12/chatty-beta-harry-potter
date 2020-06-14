import moment from 'moment';
import utils from '../../helpers/utils';
import getMessages from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';

const getUsername = (id) => userData.users.find((user) => user.id === id).name;

const displayMessage = () => {
  let domString = '';
  getMessages.getMessages().forEach((messages) => {
    domString += `
        <div class="card">
            <div class="card-body" id="${messages.messageId}">
                <h5 class="name">${getUsername(messages.userId)}</h5>
                <p class="message">${messages.message}</p>
                ${messages.gifId ? `<img src="https://media1.giphy.com/media/${messages.gifId}/200w.gif"` : ''}
                <p class="time">${moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>`;
  });

  utils.printToDom('messageCard', domString);
};

export default { displayMessage };
