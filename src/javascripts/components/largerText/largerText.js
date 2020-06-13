import './largerText.scss';

const changeTextSize = (e) => {
  const textbox = document.querySelector('#new-message').classList;
  if (e.target.checked) {
    textbox.add('largerText');
    return;
  }
  textbox.remove('largerText');
};

const largerTextListener = () => {
  document.querySelector('#largerText').addEventListener('change', changeTextSize);
};

export default { largerTextListener };
