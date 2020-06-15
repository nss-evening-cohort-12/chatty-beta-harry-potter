import moment from 'moment';
import utils from '../../helpers/utils';
import getMessages from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';

const getUsername = (id) => userData.users.find((user) => user.id === id).name;

const displayMessage = () => {
  let domString = '';
  getMessages.getMessages().forEach((messages) => {
    domString += `
        <div class="card mx-auto mt-4 w-75">
            <div class="card-body" id="${messages.messageId}">
                <h5 class="name">${getUsername(messages.userId)}</h5>
                <p class="message">${messages.message}</p>
                ${messages.gifId ? `<video autoplay loop muted playsinline>
                                      <source src="${messages.gifId}" type="video/mp4" >
                                    </video>` : ''}
                <p class="time">${moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>`;
  });

  utils.printToDom('messageCard', domString);
};

export default { displayMessage };
