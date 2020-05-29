export default (prefix:string) => [{
  commands: ['alert'],
  category: 'HONKAI IMPACT',
  description: 'Adding role member to any users',
  examples: ['alert', 'alert makerole'],
  notes: [
    'for first setup need user with manage roles permission to do this command instalation',
    `Choosing ur alert role will allow Mei to tag you for certain events in Honkai Impact`,
    `Some of the events are boss invasion, abyss ending, samsara reset and Mei's meal`
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Raiden Mei',
  examples: ['send #general message', 'send message', 'send @someone message'],
  notes: [
    `Mention someone will result bot to dm that mentioned user via dm`,
    `This command doesn't work on multiple mention so please only mention one user at one message`
  ]
}]