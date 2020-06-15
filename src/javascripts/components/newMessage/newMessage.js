import messageData from '../../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';
import utils from '../../helpers/utils';
import './newMessage.scss';

const printMessageForm = () => {
  let domString = '';
  domString += `
    <div id="gifs" class="d-flex justify-content-center flex-wrap"></div>
    <div class="collapse" id="gif-selector">
      <div class="card card-body">
        <form class="form-inline mx-auto" id="search-giphy">
          <div class="form-group mx-sm-3 mb-2">
            <input type="text" class="form-control" id="gifPhrase" placeholder="Search for a Gif">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Search Gifs</button>
        </form>
      </div>
    </div>
    <form class="form-inline mx-auto" id="new-message-form">
    <div class="form-row align-items-center">
      <div class="form-group">
        <textarea class="form-control m-3" id="new-message" name="message" placeholder="Enter your message here..."></textarea>
        <button type="submit" class="btn btn-primary m-2">Submit</button>
      </div>
      <button class="btn btn-primary m-2" type="button" data-toggle="collapse" data-target="#gif-selector" aria-expanded="false" aria-controls="collapseExample">
        Giphy
      </button>
    </div>
    </form>
    <div class="form-check m-3">
      <input type="checkbox" class="form-check-input" id="largerText">
      <label class="form-check-label" for="largerText">Make Text Larger</label>
    </div>
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
};

const addMessageListener = () => {
  document.querySelector('#new-message-form').addEventListener('submit', addMessageToArray);
};

export default { addMessageListener, printMessageForm };
