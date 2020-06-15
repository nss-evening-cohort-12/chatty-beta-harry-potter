import messageData from '../../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';
import utils from '../../helpers/utils';
import './newMessage.scss';

const printMessageForm = () => {
  let domString = '';
  domString += `
    <div class="collapse" id="gif-selector">
      <div id="gifs" class="d-flex justify-content-center flex-wrap"></div>
      <div class="card card-body">
        <form class="form" id="search-giphy">
          <div class="form-group">
            <input type="text" class="form-control" id="gifPhrase" placeholder="Search for a Gif">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Search Gifs</button>
        </form>
      </div>
    </div>

    <form id="new-message-form">
      <div class="form-row">
        <textarea class="form-control col-md-6 m-3" id="new-message" name="message" placeholder="Enter your message here..."></textarea>
        <button type="submit" class="btn btn-primary form-control col-md-1 m-3">Submit</button>
        <button class="btn btn-primary form-control col-md-1 m-3" type="button" data-toggle="collapse" data-target="#gif-selector" aria-expanded="false" aria-controls="collapseExample">
          Giphy
        </button>
      </div>
      <div class="form-group m-3 text-light">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="largerText">
          <label class="form-check-label" for="largerText">Make Text Larger</label>
        </div>
      </div>
    </form>
  `;
  utils.printToDom('message-entry', domString);
};

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
  $('#messageCard').animate({ scrollTop: $('#messageCard')[0].scrollHeight }, 1000);
};

const addMessageListener = () => {
  document.querySelector('#new-message-form').addEventListener('submit', addMessageToArray);
};

export default { addMessageListener, printMessageForm };
