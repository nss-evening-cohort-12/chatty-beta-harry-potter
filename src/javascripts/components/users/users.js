import userData from '../../helpers/data/userData';

const selectName = () => {
  const selectedUserId = $('#inputGroupSelect :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  return users[selectedIndex].name;
};

const selectId = () => {
  const selectedUserId = $('#inputGroupSelect :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  if (selectedUserId) {
    return users[selectedIndex].id;
  }
  return undefined;
};

export default { selectName, selectId };
