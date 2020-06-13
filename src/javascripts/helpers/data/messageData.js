const messages = [
  {
    userId: 'user5',
    timestamp: 1591756170948,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    messageId: 1,
  },
  {
    userId: 'user3',
    timestamp: 1591756204011,
    message: 'Sed felis eget velit aliquet sagittis id consectetur purus ut. ',
    messageId: 2,
  },
  {
    userId: 'user1',
    timestamp: 1591756223483,
    message: 'Auctor elit sed vulputate mi sit amet mauris. Neque sodales ut etiam sit amet nisl.',
    messageId: 3,
  },
  {
    userId: 'user2',
    timestamp: 1591756306415,
    message: 'Nunc id cursus metus aliquam eleifend. Magna eget est lorem ipsum dolor sit amet consectetur.',
    messageId: 4,
  },
  {
    userId: 'user4',
    timestamp: 1591756345576,
    message: 'Sit amet porttitor eget dolor. Diam in arcu cursus euismod quis viverra nibh.',
    messageId: 5,
  },
];

const getMessages = (limit) => {
  if (limit) {
    const msgLimit = messages.slice(0, limit);
    return msgLimit;
  }
  return messages;
};

const clearMessages = () => {
  messages.splice(0, messages.length);
};

const generateUniqueId = () => Math.max(...messages.map((element) => element.messageId)) + 1;

const setMessages = (userId, message) => {
  const newMsg = {
    userId,
    timestamp: Date.now(),
    message,
    messageId: generateUniqueId(),
  };
  messages.push(newMsg);
};

export default { getMessages, setMessages, clearMessages };
