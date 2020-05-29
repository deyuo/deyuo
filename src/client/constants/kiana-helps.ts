export default (prefix:string) => [{
  commands: ['member'],
  category: 'ADMIN TOOL',
  description: 'Adding role member to any users',
  examples: ['member @someone'],
  notes: [
    `You can add member role to any user`,
    `Kiana will announce added member in #common-deck for everyone to welcome the new member`,
    `Kiana will add an entry in #valkyrie-dorm as event record`
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as Kiana Kaslana',
  examples: ['send #general message', 'send message', 'send @someone message'],
  notes: [
    `Mention someone will result bot to dm that mentioned user via dm`,
    `This command doesn't work on multiple mention so please only mention one user at one message`
  ]
}]